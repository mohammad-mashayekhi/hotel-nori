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
from django.contrib import messages
from django.core.exceptions import PermissionDenied
from django.forms.models import model_to_dict
from datetime import timedelta
from .models import Reservation, Resource
from .forms import ReservationForm
from .utils import get_reservation_color, datetime_combine, send_message_accept_reserve
from .models import Resource, Reservation
from .decorators import is_admin, user_authenticated_and_verified_required
from coupon.models import Coupon


def date_formatter(date):
    return date.strftime("%Y-%m-%dT%H:%M")


@user_authenticated_and_verified_required
def reserve_schedule(request):
    if request.user.user_status == "normal":
        raise PermissionDenied("You are not allowed to")

    reservations = Reservation.objects.filter(
        Q(status="confirmed") | Q(status="pending_payment") | Q(status="cleaning")
    )

    if not is_admin(request.user):
        reservation_data = list()
        for reservation in reservations:
            if reservation.user == request.user:
                reservation_data.append(
                    model_to_dict(reservation, fields=[
                        "reserve_id",
                        "start",
                        "end",
                        "title",
                        "status",
                        "resource",
                        "cleaning",
                        "user",
                    ])
                )
            else:
                reservation_dict = model_to_dict(reservation, fields={
                    "start",
                    "end",
                    "status",
                    "resource",
                })
                reservation_dict["title"] = "رزور شده"
                reservation_data.append(reservation_dict)
    else:
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
            "id", "name", "cssClass", "capacity", "price", "price_per_person", "max_capacity"
        )
    )

    # change format of the date from datetime objects to string so they can be used in javascript scripts
    for reservation in reservation_data:
        reservation["start"] = date_formatter(reservation["start"])
        reservation["end"] = date_formatter(reservation["end"])
        if reservation["status"] == 'confirmed':
            reservation["color"] = '#4A827C'  # رنگ سبز برای رزروهای تایید شده
        elif reservation["status"] == 'pending_payment':
            reservation["color"] = '#D1A975'  # رنگ زرد برای رزروهای در انتظار پرداخت
        elif reservation["status"] == 'cleaning':
            reservation["color"] = '#DD5746'  # رنگ زرد برای رزروهای نظافت

    for reservation in closed_time_data:
        reservation["start"] = date_formatter(reservation["start"])
        reservation["end"] = date_formatter(reservation["end"])
        reservation["cssClass"] = 'md-lunch-break-class mbsc-flex'

    context = {
        "reservation_data": json.dumps(reservation_data),
        "resource_data": json.dumps(resource_data),
        "closed_time_data": json.dumps(closed_time_data),
        "resources": resources,
        "reservations": reservations,
    }
    return render(request, "reserve/reserve_schedule.html", context)


@user_authenticated_and_verified_required
def add_reservation(request):

    if request.user.user_status == "normal":
        raise PermissionDenied("You are not allowed")

    new_reservation_data = ReservationForm(data=request.POST, user=request.user)
    if new_reservation_data.is_valid():
        reservation = new_reservation_data.save(commit=False)

        # if user is not normal user it can reserve for another user but if it is not it can reserve for itself
        if request.user.user_status != "veified":
            reservation.author = request.user
            User = get_user_model()
            user_mobile_number = new_reservation_data.cleaned_data["mobile_number"]
            user, created = User.objects.get_or_create(
                mobile_number=user_mobile_number
            )
            if created:
                user.set_password(user_mobile_number)
                user.user_status = "verified"
            user.save()
            reservation.user = user
        elif is_admin(request.user):
            reservation.user = request.user
            reservation.author = request.user

        if reservation.cleaning and reservation.status != "closetime":
            cleaning = Reservation(
                title=f"{reservation.title} نظافت رزور",
                status="cleaning",
                start=reservation.end + timedelta(hours=2),
                end=reservation.end + timedelta(days=1),
                resource=reservation.resource,
                author=reservation.author,
                user=reservation.user,
            )
            cleaning.save()

        reservation.save()
        try:
            # Convert and format dates
            jalali_start = jdatetime.datetime.fromgregorian(datetime=reservation.start)
            jalali_end = jdatetime.datetime.fromgregorian(datetime=reservation.end)
            formatted_start = jalali_start.strftime("%Y/%m/%d")
            formatted_end = jalali_end.strftime("%Y/%m/%d")

            # Send message
            message_key = "reserve-room-test" if reservation.paid else "reserve-room-not-paid"
            send_message_accept_reserve(
                reservation.user.mobile_number, reservation.resource, formatted_start, formatted_end, message=message_key
            )
            messages.add_message(request, messages.SUCCESS,
                                 message="روز شما با موفقیت پرداخت لطفاٌ در سریع ترین زمان نسبت به پرداخت خود اقدام کنید در غیر این صورت بعد از سه ساعت رزرو شما لغو می شوذ ")
            return JsonResponse({"success": True, "reservation_id": reservation.reserve_id}, status=201)
        except Exception as e:
            print(e)
            return JsonResponse({"success": False, "error": str(e)}, status=500)
    else:
        for field in new_reservation_data:
            if field.errors:
                print(field.errors, field.label)
                messages.add_message(request, level=messages.ERROR, message=field.errors, extra_tags=field.label)
        if new_reservation_data.non_field_errors():
            messages.add_message(request, level=messages.ERROR, message=new_reservation_data.non_field_errors())
        return JsonResponse({"success": False}, status=400)


# @require_POST
# def update_reservation(request, reserve_id):
#     reservation = Reservation.objects.get(reserve_id=reserve_id)
#     print(request.POST)
#     update_reservation_data = ReservationForm(data=request.POST, instance=reservation)
#     if update_reservation_data.is_valid():
#         reservation = update_reservation_data.save(commit=False)
#         if update_reservation_data.has_changed():
#             print("Changed fields:", update_reservation_data.changed_data)
#             initial_mobile_number = reservation.user.mobile_number
#             cleaned_mobile_number = update_reservation_data.cleaned_data.get("mobile_number")
#             print("Initial mobile number:", repr(initial_mobile_number))
#             print("Cleaned mobile number:", repr(cleaned_mobile_number))
#
#             if "mobile_number" in update_reservation_data.changed_data :
#                 # if user is not normal user it can reserve for another user but if it is not it can reserve for itself
#
#                 if request.user.user_status != "verified":
#                     reservation.author = request.user
#                     User = get_user_model()
#                     user_mobile_number = update_reservation_data.cleaned_data.get("mobile_number")
#                     user, created = User.objects.get_or_create(
#                         mobile_number=user_mobile_number, defaults={"password": user_mobile_number}
#                     )
#                     reservation.user = user
#                 else:
#                     reservation.user = request.user
#                     reservation.author = request.user
#             '''
#             it checks if the reservation and end changed at the same time or not
#             if it is if cleaning is enabled it add one day to end_date for cleanign
#             else it checks if cleaning is enabled or disabled and change the end_Date based on it
#             '''
#             if "cleaning" in update_reservation_data.changed_data:
#                 if "end" in update_reservation_data.changed_data:
#                     if reservation.cleaning:
#                         reservation.end += timedelta(days=1)
#                 else:
#                     if reservation.cleaning:
#                         reservation.end += timedelta(days=1)
#                     else:
#                         reservation.end -= timedelta(days=1)
#
#         reservation.save()
#
#         return JsonResponse(data={"status": "created"},status=201)
#     else:
#         for field in update_reservation_data:
#             if field.errors:
#                 messages.add_message(request, level= messages.ERROR, message=field.errors,extra_tags=field.label)
#         if update_reservation_data.non_field_errors():
#             messages.add_message(request, level=messages.ERROR, message=update_reservation_data.non_field_errors())
#         return JsonResponse({"success": False}, status=400)


@user_authenticated_and_verified_required
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
                "start": reservation.start.isoformat(),
                "end": reservation.end.isoformat(),
                "status": reservation.status,
                "cleaning": reservation.cleaning,
                "resources": reservation.resource.id,
                "mobile_number": reservation.user.mobile_number,  # نام کاربر
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


@user_authenticated_and_verified_required
def cancel_reservation(request, reservation_id):
    try:
        # یافتن رزرو مربوطه از پایگاه داده
        reservation = Reservation.objects.get(reserve_id=reservation_id)
        if not is_admin(request.user) and reservation.user != request.user:
            raise PermissionDenied

        if reservation.status != "confirmed" or request.user.user_status != "verified":
            # تغییر حالت رزرو به کنسل شده
            reservation.status = "cancelled"
            reservation.save()
            if reservation.cleaning:
                cleaning = Reservation.objects.get(user=reservation.user, author=reservation.author,
                                                   start=reservation.end + timedelta(hours=2),
                                                   end=reservation.end + timedelta(days=1), status="cleaning")
                cleaning.delete()
        else:
            return JsonResponse({"success": False, "error": "Reservation is paid"}, status=403)
            # messages.add_message(request, messages.ERROR, "امکان لغو رزور هنگامی که پول را پرداخته کرده اید نمی باشد")

        return JsonResponse({"success": True})
    except Reservation.DoesNotExist:
        # در صورت عدم یافتن رزرو، پاسخ خطای مناسب را برگردانید
        return JsonResponse(
            {"success": False, "error": "Reservation not found"}, status=404
        )
    except Exception as e:
        # در صورت بروز هر خطای دیگری، پاسخ خطای مناسب را برگردانید
        return JsonResponse({"success": False, "error": str(e)}, status=500)



@user_authenticated_and_verified_required
def list_of_bills(request):
    if is_admin(request.user):
        all_users = get_user_model().objects.all()

        total_customers = all_users.count()

        total_income = Reservation.objects.filter(paid=True).aggregate(total_income=Sum("total_pay"))[
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
            "reservations": reservations,
        }
    else:
        reservations = Reservation.objects.filter(user=request.user)
        context = {"reservations": reservations}
    return render(request, "reserve/bill/app-invoice-list.html", context=context)



@user_authenticated_and_verified_required
def bill_print(request, reserve_id):
    reservation = get_object_or_404(Reservation, reserve_id=reserve_id)

    return render(request, "reserve/bill/billprint.html", {"reservation": reservation})


@user_authenticated_and_verified_required
def bill_detail(request, reserve_id):
    reservation = get_object_or_404(Reservation, reserve_id=reserve_id)

    if not is_admin(request.user) and reservation.user != request.user:
        raise PermissionDenied

    if reservation.status == "pending_payment" and datetime.now() - reservation.created_at >= timedelta(hours=3):
        reservation.status = "cancelled"
        reservation.save()

    context = {"reservation": reservation}

    if request.session.get("coupon"):
        coupon = Coupon.objects.get(id=request.session.get("coupon"))
        discount = coupon.get_discount(reservation.total_pay)  # get the discount in money ammount -> 100$
        total_pay_with_discount = coupon.get_total_pay_with_discount(reservation.total_pay)
        context.update({"coupon": coupon, "discount": discount, "total_pay_with_discount": total_pay_with_discount})
    return render(request, "reserve/bill/billdetail.html", context=context)


@login_required
def rooms(request):
    resources = Resource.objects.filter(status=True)
    return render(request, "reserve/room-list.html", {"resources": resources})
