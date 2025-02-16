from django.db.models.signals import post_save
from django.dispatch import receiver
from django_q.tasks import schedule
from django.utils.timezone import now, timedelta
from .models import Reservation

@receiver(post_save, sender=Reservation)
def schedule_payment_check(sender, instance, created, **kwargs):
    if created and instance.status == 'pending_payment' and not instance.paid:  # فقط برای رزرو جدید اجرا شود
        schedule(
            'reserve.tasks.payment_reminder',
            instance.reserve_id,
            schedule_type='O',  # اجرا فقط یک‌بار انجام شود
            next_run=now() + timedelta(hours=1, minutes=50)  # اجرا بعد از ۱ ساعت و ۵۰ دقیقه
        )