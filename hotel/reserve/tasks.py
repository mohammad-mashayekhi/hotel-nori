from .models import Reservation
from .utils import send_reminder_reserve
from django_q.models import Schedule
        

def payment_reminder(reservation_id):
    try:
        reservation = Reservation.objects.get(reserve_id=reservation_id, status="pending_payment",paid=True)
        send_reminder_reserve(reservation.user.mobile_number, reservation_id)
    except Reservation.DoesNotExist:
        pass