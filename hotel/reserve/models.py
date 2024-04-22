from django.db import models
from django.conf import settings 
from shortuuid.django_fields import ShortUUIDField

class Reservation(models.Model):
    RESERVATION_STATUS_CHOICES = [
        ('pending_payment', 'در انتظار پرداخت'),  # در انتظار پرداخت
        ('confirmed', 'تایید شده'),              # تایید شده
        ('canceled', 'کنسل شده'),                # لغو شده
        ('expired', 'منقضی شده'),                  # منقضی شده
    ]
    reserve_id = ShortUUIDField(unique=True , length=5 , max_length=9 , alphabet="abcdefgh12345")
    start = models.DateTimeField()
    end = models.DateTimeField()
    title = models.CharField(max_length=100)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='created_reservations')
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='booked_reservations')
    paid = models.BooleanField(default=False)  # وضعیت پرداخت
    payment_id = models.CharField(max_length=100, blank=True, null=True)  # شناسه پرداخت
    resource = models.ForeignKey('Resource', on_delete=models.CASCADE)
    status = models.CharField(max_length=20, choices=RESERVATION_STATUS_CHOICES, default='pending_payment')  # اضافه کردن فیلد حالت رزرو
    bufferAfter = models.BooleanField(default=False)  # True for active, False for inactive

    def __str__(self):
        return self.title

class Resource(models.Model):
    name = models.CharField(max_length=100)
    css = models.CharField(max_length=7)  
    price_per_person = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    number_area = models.IntegerField(blank=True, null=True)
    number_bed = models.IntegerField(blank=True, null=True)
    number_pad = models.IntegerField(blank=True, null=True)
    status = models.BooleanField(default=True)  # True for active, False for inactive

    img = models.ImageField(upload_to='image_room/' , null=True, blank=True)
    def __str__(self):
        return self.name