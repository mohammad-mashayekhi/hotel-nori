from django.contrib.auth.models import AbstractUser
from django.db import models
from django_jalali.db import models as jmodels

# لیست گزینه‌ها
USER_STATUS_CHOICES = [
    ("normal", "کاربر عادی"),
    ("verified", "کاربر تایید شده"),
    ("admin_level_a", "کاربر ادمین سطح b"),
    ("admin_level_b", "کاربر ادمین سطح a"),
]


class Userprofile(AbstractUser):
    mobile_number = models.CharField(max_length=20)
    card_number = models.CharField(max_length=20, blank=True, null=True)
    national_code = models.CharField(max_length=20, blank=True, null=True)
    otp = models.IntegerField(max_length=20, blank=True, null=True)
    otp_expiry = models.DateTimeField(blank=True, null=True)
    gender = models.CharField(max_length=10, blank=True, null=True)
    birth_date = models.DateField(blank=True, null=True)
    user_status = models.CharField(
        max_length=20,
        choices=USER_STATUS_CHOICES,
        default="normal",
    )

    def get_display_value_or_none(self, field_value):
        return field_value if field_value else "تکمیل نشده"

    def get_user_status_display_persian(self):
        status_mapping = {
            "normal": "کاربر عادی",
            "verified": "کاربر تایید شده",
            "admin_level_a": "کاربر ادمین سطح a",
            "admin_level_b": "کاربر ادمین سطح b",
        }
        return status_mapping.get(self.user_status, "وضعیت نامعلوم")
