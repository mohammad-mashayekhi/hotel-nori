import os
import sys
import django
from datetime import timedelta
from django.utils import timezone

# 🔹 مسیر پروژه رو پیدا و اضافه کن
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "config.settings")

# 🔹 تنظیمات Django رو مقداردهی اولیه کن
django.setup()

from reserve.models import Reservation
from reserve.utils import send_reminder_reserve  # فرض می‌کنیم این تابع برای ارسال پیامک وجود دارد

# زمان کنونی
now = timezone.now()

# محاسبه زمان‌های موردنیاز
about_two_hours_ago = now - timedelta(hours=2, minutes=25)
three_hours_ago = now - timedelta(hours=3)

# پیدا کردن رزروهایی که بین ۱.۵ تا ۲ ساعت و ۵۰ دقیقه از ایجادشان گذشته و باید پیامک بگیرند
reservations_for_sms = Reservation.objects.filter(
    created_at__lte=about_two_hours_ago, 
    status="pending_payment", 
    paid=False
)

for reservation in reservations_for_sms:
    send_reminder_reserve(reservation.user.mobile_number, reservation.reserve_id)
    print(f"SMS sent to reservation {reservation.reserve_id}.")

# پیدا کردن رزروهایی که ۳ ساعت از ایجادشان گذشته و باید کنسل شوند
expired_reservations = Reservation.objects.filter(created_at__lt=three_hours_ago, status="pending_payment", paid=False)

for reservation in expired_reservations:
    reservation.status = "canceled"
    reservation.save()
    if reservation.cleaning:
        cleaning = Reservation.objects.get(user=reservation.user, author=reservation.author, start=reservation.end + timedelta(hours=2), end=reservation.end + timedelta(days=1), status="cleaning")
        cleaning.delete()
    print(f"Reservation {reservation.reserve_id} canceled.")

print("Cron job executed successfully.")
