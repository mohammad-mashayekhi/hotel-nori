
from django.db import models
from django.conf import settings
from reserve.models import Reservation
# Create your models here.


class Payment(models.Model):
    card_number = models.CharField(max_length=16, null=True, blank=True)
    refrence_id = models.CharField(max_length=100, null=True, blank=True)
    reservation = models.OneToOneField(Reservation, on_delete=models.CASCADE)
    payment_date = models.DateField(auto_now_add=True)
    cost_paid = models.DecimalField(max_digits=30, decimal_places=3)
    discount = models.DecimalField(max_digits=30, decimal_places=3, default=0)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True)

    @property
    def paid_by_stuff(self):
        if self.user.user_status != "verified":
            return True
        else:
            return False

