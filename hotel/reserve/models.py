from django.db import models
from django.conf import settings 
from shortuuid.django_fields import ShortUUIDField
from django.utils import timezone
from jalali_date import datetime2jalali, date2jalali


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
    more_capacity = models.IntegerField(blank=True, null=True)
    total_pay = models.IntegerField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)  # Save creation time

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


class Resource(models.Model):
    name = models.CharField(max_length=100,blank=True, null=True)
    cssClass = models.CharField(max_length=7)
    capacity = models.IntegerField(blank=True, null=True)
    max_capacity = models.IntegerField(blank=True, null=True)
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
