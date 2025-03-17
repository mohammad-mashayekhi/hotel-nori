from django.db import models
from django.conf import settings 
from shortuuid.django_fields import ShortUUIDField
from django.utils import timezone
from jalali_date import datetime2jalali, date2jalali
from coupon.models import Coupon
import jdatetime
import os

def get_images_upload_path_resourse(instance, filename): 
    return os.path.join("image_slider", filename)

class Reservation(models.Model):
    RESERVATION_STATUS_CHOICES = [
        ('pending_payment', 'در انتظار پرداخت'),  # در انتظار پرداخت
        ('confirmed', 'تایید شده'),              # تایید شده
        ('onlocalpay', 'پرداخت حضوری'),              # تایید شده و پرداخت حضوری
        ('canceled', 'کنسل شده'),                # لغو شده
        ('closetime', 'زمان تعطیلی'),                # زمان تعطیلی
        ("cleaning", 'زمان نظافت')
    ]
    reserve_id = ShortUUIDField(unique=True, length=5, max_length=9, alphabet="abcdefgh12345")
    start = models.DateTimeField(null=True)
    end = models.DateTimeField(null=True)
    title = models.CharField(max_length=100)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='created_reservations')
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='booked_reservations')
    paid = models.BooleanField(default=False)  # وضعیت پرداخت
    resource = models.ForeignKey('Resource', on_delete=models.CASCADE)
    status = models.CharField(max_length=20, choices=RESERVATION_STATUS_CHOICES, default='pending_payment')  # اضافه کردن فیلد حالت رزرو
    cleaning = models.BooleanField(default=False)  # True for active, False for inactive
    more_capacity = models.IntegerField(blank=True, null=True) # this field is for all people who reserve room
    total_pay = models.IntegerField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)  # Save creation time
    coupon = models.ForeignKey(Coupon, on_delete=models.SET_NULL, null=True, blank=True)

    def get_created_at_shamsi(self):
        return date2jalali(self.created_at).strftime('%y/%m/%d')
    
    def get_start_shamsi(self):
        return date2jalali(self.start).strftime('%y/%m/%d')

    def get_end_shamsi(self):
        return date2jalali(self.end).strftime('%y/%m/%d')

    def get_cleaning_text(self):
        if self.cleaning:
            return "میخواهد"
        else:
            return "نمیخواهد"

    def get_more_capacity(self):
        if self.more_capacity:
            return self.cleaning
        else:
            return 0   
        
    def get_paid(self):
        if self.paid:
            return "پرداخت شده"
        else:
            return "پرداخت نشده"

    def get_total_pay(self):
        if self.total_pay:
            return self.total_pay
        else:
            return 0
            

    def __str__(self):
        return self.title
    
    def get_payment(self):
        if self.paid:
            from zarinpal.models import Payment
            payments = Payment.objects.filter(reservation=self)
            count = payments.count()

            if count == 1:
                return f'{payments.first().refrence_id}'
            elif count > 1:
                return 'خطای سیستم'
            return '-'
    
        return 'پرداخت نشده'
    
    
    def start_shamsi_month(self):
        shamsi_date = jdatetime.datetime.fromgregorian(datetime=self.start)  
        return shamsi_date.month  
    
    def end_shamsi_month(self):
        shamsi_date = jdatetime.datetime.fromgregorian(datetime=self.end)  
        return shamsi_date.month 
    
    def length_of_stay(self):
        if self.start and self.end:
            start_shamsi = jdatetime.datetime.fromgregorian(datetime=self.start)
            end_shamsi = jdatetime.datetime.fromgregorian(datetime=self.end)


            if start_shamsi.year != end_shamsi.year:
                stay_list = []
                next_month = 1
                next_year = start_shamsi.year + 1

                end_of_start_month = jdatetime.datetime(next_year, next_month, 1) - jdatetime.timedelta(days=1)
                days_in_first_month = (end_of_start_month - start_shamsi).days + 1.5
                stay_list.append({start_shamsi.month: days_in_first_month, 'year': start_shamsi.year})
                # the number of the second month
                days_in_second_month = (end_shamsi - end_shamsi.replace(day=1)).days + 0.5
                stay_list.append({end_shamsi.month: days_in_second_month, 'year': next_year})
                return stay_list
            else:
                if start_shamsi.month == end_shamsi.month:
                    # if start and end be in the same month
                    duration = self.end - self.start
                    return duration.days + 1
                else:
                    # return stay_list  
                    stay_list = []

                    # محاسبه تعداد روزهای ماه اول
                    next_month = start_shamsi.month + 1  # فقط ماه بعدی، بدون تغییر سال

                    end_of_start_month = jdatetime.datetime(start_shamsi.year, next_month, 1) - jdatetime.timedelta(days=1)
                    days_in_first_month = (end_of_start_month - start_shamsi).days + 1.5
                    stay_list.append({start_shamsi.month: days_in_first_month, 'year': start_shamsi.year})

                    # محاسبه تعداد روزهای ماه دوم
                    days_in_second_month = (end_shamsi - end_shamsi.replace(day=1)).days + 0.5
                    stay_list.append({end_shamsi.month: days_in_second_month, 'year': start_shamsi.year})
                    return stay_list

        return None  
                

class Resource(models.Model):
    name = models.CharField(max_length=100,blank=True, null=True)
    cssClass = models.CharField(max_length=7)
    capacity = models.IntegerField(blank=True, null=True)
    max_capacity = models.IntegerField(blank=True, null=True) # this field for extra capacity
    price = models.IntegerField( blank=True, null=True) # Regular price
    peak_price = models.IntegerField(blank=True, null=True)  # Peak time price
    price_per_person = models.IntegerField( blank=True, null=True)
    number_area = models.IntegerField(blank=True, null=True)
    number_bed = models.IntegerField(blank=True, null=True)
    number_pad = models.IntegerField(blank=True, null=True)
    status = models.BooleanField(default=True,blank=True, null=True)  # True for active, False for inactive

    img = models.ImageField(upload_to='image_room/' , null=True, blank=True)

    def __str__(self):
        return self.name
    

    def get_img_url(self):
        if self.img:
            return self.img.url
        return "static/img/backgrounds/17_17_491_uX5mm5g.jpg"
    
    def has_slider(self):
        return True if ResourceImage.objects.filter(resource=self).exists() else False
    


class ResourceImage(models.Model):
    resource_image_id = ShortUUIDField(unique=True , length=5 , max_length=9 , alphabet="abcdefgh12345") 
    images = models.ImageField(upload_to=get_images_upload_path_resourse)
    resource = models.ForeignKey(Resource, on_delete = models.CASCADE, null=True, related_name="resourse_images")
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = "Resource Images"
    
    


class Peaktime(models.Model):
    peaktime_id = ShortUUIDField(unique=True, length=5, max_length=9, alphabet="abcdefgh12345")
    start = models.DateTimeField(null=True)
    end = models.DateTimeField(null=True)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='created_peaktime')
    created_at = models.DateTimeField(auto_now_add=True)  # Save creation time

    def get_created_at_shamsi(self):
        return date2jalali(self.created_at).strftime('%y/%m/%d')
    
    def get_start_shamsi(self):
        return date2jalali(self.start).strftime('%y/%m/%d')

    def get_end_shamsi(self):
        return date2jalali(self.end).strftime('%y/%m/%d')
