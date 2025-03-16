import uuid
from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models
from django.conf import settings
from django.utils.text import slugify


class Coupon(models.Model):
    name = models.CharField(max_length=10)
    uuid = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    code = models.CharField(max_length=6)
    users = models.ManyToManyField(settings.AUTH_USER_MODEL) # allowed user to use discount
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, related_name="creator_discount")
    valid_from = models.DateField()
    valid_to = models.DateField()
    discount = models.DecimalField(max_digits=3, decimal_places=0,
                                   validators=[MinValueValidator(1), MaxValueValidator(100)])
    is_active = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.name} from {self.valid_from} to {self.valid_to}"

    def get_discount(self, price):
        return price * (self.discount / 100)

    def get_total_pay_with_discount(self, price):
        return price - self.get_discount(price)
