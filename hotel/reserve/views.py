from datetime import datetime, timedelta
import json
import jdatetime
from django.contrib.auth.decorators import login_required
from django.views.decorators.http import require_POST
from django.contrib.auth import get_user_model
from django.db.models import Q, Sum
from django.shortcuts import render, redirect, reverse
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from django.core.exceptions import PermissionDenied
from dateutil.parser import parse
from datetime import timedelta
from .models import Reservation, Resource
from .forms import ReservationForm
from .utils import get_reservation_color, datetime_combine, send_message_accept_reserve
from .models import Resource, Reservation
from .decorators import is_admin


def date_formatter(date):
    return date.strftime("%Y-%m-%dT%H:%M")


@login_required
def reserve_schedule(request):
    reservations = Reservation.objects.filter(
        Q(status="confirmed") | Q(status="pending_payment") | Q(status="cleaning")
    )

    if not is_admin(request.user):
        reservations = reservations.filter(user=request.user)
    reservation_data = list(
        reservations.values(
            "reserve_id",
            "start",
            "end",
            "title",
            "status",
            "resource",
            "cleaning",
            "user",
        )
    )
    closed_time_data = list(
        Reservation.objects.filter(status="closetime").values(
            "reserve_id", "status", "start", "end", "title", "resource"
        )
    )
    resources = Resource.objects.all()
    resource_data = list(
        resources.values(
            "id", "name", "capacity", "price", "price_per_person", "max_capacity"
        )
    )

    for reservation in reservation_data:
        reservation["start"] = date_formatter(reservation["start"])
        reservation["end"] = date_formatter(reservation["end"])

    for reservation in closed_time_data:
        reservation["start"] = date_formatter(reservation["start"])
        reservation["end"] = date_formatter(reservation["end"])

    context = {

        "reservation_data": json.dumps(reservation_data),
        "resource_data": json.dumps(resource_data),
        "closed_time_data": json.dumps(closed_time_data),
        "resources": resources,
        "reservations": reservations,
    }
    return render(request, "reserve/reserve_schedule.html", context)


@login_required
def add_reservation(request):
    if request.method != "POST":
        return JsonResponse({"success": False})

    # Extract POST data
    data = request.POST
    title = data.get("title")
    start = parse(data.get("start"), fuzzy=True)

    start = datetime_combine(start, "12:00")
    end = parse(data.get("end"), fuzzy=True)
    end = datetime_combine(end, "14:00")
    resource_id = data.get("resourceId")
    author = request.user
    status = data.get("status")
    cleaning = data.get("cleaning") == "true"
    more_capacity = data.get("more_capacity")
    paid = data.get("paid") == "true"
    price = data.get("price")
    user_username = (
        data.get("user")
        if request.user.user_status != "verified"
        else request.user.username
    )

    # Check if user is authorized
    if not is_admin(request.user) and author != request.user:
        raise PermissionDenied

    # Fetch resource
    try:
        resource = Resource.objects.get(id=resource_id)
    except Resource.DoesNotExist:
        return JsonResponse({"success": False, "error": "Invalid resource ID"})

    # Adjust end time if cleaning
    if cleaning:
        end += timedelta(days=1)

    # Check for overlapping reservations
    overlapping_reservations = Reservation.objects.filter(
        resource=resource,
        status__in=["pending_payment", "confirmed"],
    ).exclude(Q(end__lte=start) | Q(start__gte=end))

    if overlapping_reservations.exists():
        return JsonResponse({"success": False, "error": "Overlapping reservation"})

    # Handle special case of "closetime"
    if status == "closetime":
        Reservation.objects.create(
            title="زمان تعطیلی",
            start=start,
            end=end,
            resource=resource,
            author=author,
            user=author,
            status="closetime",
            cleaning=False,
        )
        return JsonResponse({"success": True})

    # Get or create user
    User = get_user_model()
    user, created = User.objects.get_or_create(
        username=user_username, defaults={"password": user_username}
    )

    # Handle cleaning reservation
    if cleaning:
        end -= timedelta(days=1)
        Reservation.objects.create(
            title="نظافت",
            start=end,
            end=end + timedelta(days=1),
            resource=resource,
            author=author,
            user=user,
            status="cleaning",
            cleaning=cleaning,
            more_capacity=more_capacity,
            paid=paid,
            total_pay=price,
        )

    # Create reservation

    new_reservation = Reservation.objects.create(
        title=title,
        start=start,
        end=end,
        resource=resource,
        author=author,
        user=user,
        status=status,
        cleaning=cleaning,
        more_capacity=more_capacity,
        paid=paid,
        total_pay=price,
    )

    try:
        # Convert and format dates
        jalali_start = jdatetime.datetime.fromgregorian(datetime=start)
        jalali_end = jdatetime.datetime.fromgregorian(datetime=end)
        formatted_start = jalali_start.strftime("%Y/%m/%d")
        formatted_end = jalali_end.strftime("%Y/%m/%d")

        # # Send message
        # message_key = "reserve-room-test" if paid else "reserve-room-not-paid"
        # send_message_accept_reserve(
        #     user_username, resource, formatted_start, formatted_end, message=message_key
        # )

        return JsonResponse({"success": True, "reservation_id": new_reservation.reserve_id})
    except Exception as e:
        print(e)
        return JsonResponse({"success": False, "error": str(e)}, status=500)


@login_required
def get_reservation_info(request):
    if request.method == "GET" and "reservation_id" in request.GET:
        reservation_id = request.GET.get("reservation_id")
        try:
            reservation = Reservation.objects.get(reserve_id=reservation_id)

            if not is_admin(request.user) and reservation.user != request.user:
                raise PermissionDenied
            # start_jdatetime = jdatetime.fromgregorian(datetime=start_datetime)
            # end_jdatetime = jdatetime.fromgregorian(datetime=end_datetime)

            reservation_data = {
                "title": reservation.title,
                "start": reservation.start.strftime("%Y-%m-%d %H:%M:%S"),
                "end": reservation.end.strftime("%Y-%m-%d %H:%M:%S"),
                "status": reservation.status,
                "cleaning": reservation.cleaning,
                "resources": reservation.resource.id,
                "user": reservation.user.username,  # نام کاربر
                "capacity": reservation.resource.capacity,
                "morecapacity": reservation.more_capacity,
                "paid": reservation.paid,
                "price": reservation.resource.price,
                "price_per_person": reservation.resource.price_per_person,
                "totalCost": reservation.total_pay,
            }
            return JsonResponse(reservation_data)
        except Reservation.DoesNotExist:
            return JsonResponse({"error": "Reservation not found"}, status=404)
    else:
        return JsonResponse({"error": "Invalid request"}, status=400)



@login_required
def cancel_reservation(request, reservation_id):
    try:
        # یافتن رزرو مربوطه از پایگاه داده
        reservation = Reservation.objects.get(reserve_id=reservation_id)
        if not is_admin(request.user) and reservation.user != request.user:
            raise PermissionDenied

        # تغییر حالت رزرو به کنسل شده
        reservation.status = "cancelled"
        reservation.save()

        return JsonResponse({"success": True})
    except Reservation.DoesNotExist:
        # در صورت عدم یافتن رزرو، پاسخ خطای مناسب را برگردانید
        return JsonResponse(
            {"success": False, "error": "Reservation not found"}, status=404
        )
    except Exception as e:
        # در صورت بروز هر خطای دیگری، پاسخ خطای مناسب را برگردانید
        return JsonResponse({"success": False, "error": str(e)}, status=500)

@login_required
def list_of_bills(request):
    if is_admin(request.user):
        all_users = get_user_model().objects.all()

        total_customers = all_users.count()

        total_income = Reservation.objects.aggregate(total_income=Sum("total_pay"))[
            "total_income"
        ]

        total_reservations = Reservation.objects.count()

        total_cancellation = Reservation.objects.filter(status="canceled").count()

        total_purchase = Reservation.objects.filter(paid=True).count()

        reservations = Reservation.objects.all().order_by("-id")

        context = {
            "users": all_users,
            "total_cancellation": total_cancellation,
            "total_purchase": total_purchase,
            "total_customers": total_customers,
            "total_income": total_income,
            "total_reservations": total_reservations,
            "reserve": reservations,
        }
    else:
        reservations = Reservation.objects.filter(user=request.user)
        context = {"reservations": reservations}
    return render(request, "reserve/bill/app-invoice-list.html", context=context)


def bill_print(request, reserve_id):
    reservation = get_object_or_404(Reservation, reserve_id=reserve_id)

    return render(request, "reserve/bill/billprint.html", {"reserve": reservation})


@login_required
def bill_detail(request, reserve_id):
    reservation = get_object_or_404(Reservation, reserve_id=reserve_id)
    if reservation.status == "pending_payment" and datetime.now() - reservation.created_at >= timedelta(hours=3):
        reservation.status = "cancelled"
        reservation.save()

    if not is_admin(request.user) and reservation.user != request.user:
        raise PermissionDenied

    return render(request, "reserve/bill/billdetail.html", {"reservation": reservation})


@login_required
def rooms(request):
    resources = Resource.objects.filter(status=True)
    return render(request, "reserve/room-list.html", {"resources": resources})

