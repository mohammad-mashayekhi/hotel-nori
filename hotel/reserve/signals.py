# from django.db.models.signals import post_save
# from django.dispatch import receiver
# from django_q.tasks import schedule
# from django.utils.timezone import now, timedelta
# from .models import Reservation
# from django_q.models import Schedule

# # @receiver(post_save, sender=Reservation)
# # def schedule_payment_check(sender, instance, created, **kwargs):
# #     if created and instance.status == 'pending_payment' and not instance.paid:  # فقط برای رزرو جدید اجرا شود
# #         if not Schedule.objects.filter(name=f'payment_reminder_{instance.reserve_id}').exists():
# #             schedule(
# #                 'reserve.tasks.payment_reminder',
# #                 instance.reserve_id,
# #                 name=f'payment_reminder_{instance.reserve_id}',  # مقدار یکتا
# #                 schedule_type='O',  # اجرا فقط یک‌بار انجام شود
# #                 # next_run=now() + timedelta(hours=1, minutes=50)  # اجرا بعد از ۱ ساعت و ۵۰ دقیقه
# #                 next_run=now() + timedelta(minutes=5)  # اجرا بعد از ۱ ساعت و ۵۰ دقیقه
# #             )