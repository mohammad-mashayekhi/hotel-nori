from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractUser
from django.core.validators import RegexValidator, MaxValueValidator, MinValueValidator
from django.db import models
from django_jalali.db import models as jmodels


class CustomUserManager(BaseUserManager):
    use_in_migrations = True

    def _create_user(self, mobile_number, password, **extra_fields):
        if not mobile_number:
            raise ValueError('You have to provide a mobile number')
        user = self.model(mobile_number=mobile_number,**extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, mobile_number, password, **extra_fields):
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)
        return self._create_user(mobile_number, password, **extra_fields)

    def create_superuser(self, mobile_number, password, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        if not extra_fields.get('is_staff'):
            raise ValueError('is_staff must be True for superusers')
        if not extra_fields.get('is_superuser'):
            raise ValueError('is_superuser must be True for superusers')
        return self._create_user(mobile_number, password, **extra_fields)

# لیست گزینه‌ها
USER_STATUS_CHOICES = [
    ("normal", "کاربر عادی"),
    ("verified", "کاربر تایید شده"),
    ("admin_level_a", "کاربر ادمین سطح a"),
    ("admin_level_b", "کاربر ادمین سطح b"),
]

GENDER_CHOICES = [
    ("male", "مرد"),
    ("female", "زن"),
]


class Userprofile(AbstractUser):
    username = None
    mobile_number = models.CharField(verbose_name="شماره  تلفن همراه",max_length=11,validators=[RegexValidator(r'^09\d{9}$', message="شماره وارد شده معتبر نمی باشد")], unique=True)
    card_number = models.CharField(max_length=20, blank=True, null=True)
    national_code = models.CharField(max_length=20, blank=True, null=True)
    otp = models.IntegerField(blank=True, null=True, validators=[MinValueValidator(0), MaxValueValidator(99999)])
    otp_expiry = models.DateTimeField(blank=True, null=True)
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES)
    birth_date = models.DateField(blank=True, null=True)
    user_status = models.CharField(
        max_length=20,
        choices=USER_STATUS_CHOICES,
        default="normal",
    )
    referrer = models.CharField(max_length=100, blank=True, null=True)

    USERNAME_FIELD = "mobile_number"
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

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
    
    def get_name(self):
        if self.first_name and self.last_name:
            return f"{self.first_name} {self.last_name}"
        return self.mobile_number
