from .models import Reservation
from .utils import send_reminder_reserve


def payment_reminder(reservation_id):
    try:
        reservation = Reservation.objects.get(reserve_id=reservation_id)
        if not reservation.paid and reservation.status == "pending_payment":  
            send_reminder_reserve(reservation.user.mobile_number, reservation_id)
    except Reservation.DoesNotExist:
        pass