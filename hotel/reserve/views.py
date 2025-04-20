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
from .models import Reservation, Resource,Peaktime
from .forms import ReservationForm, ResourceForm, PeaktimeForm, AdminReservationChangeForm
from .utils import send_online_payment_reserve, send_completed_reserve_reserve
from .models import Resource, Reservation, ResourceImage
from .decorators import is_admin, verified_required, admin_required, admin_a_required
from coupon.models import Coupon
from zarinpal.models import Payment
from .models import Reservation
from django_q.tasks import schedule
from django.utils.timezone import now
def date_formatter(date):
    return date.strftime("%Y-%m-%dT%H:%M")


@login_required
def reserve_schedule(request):
    reservations = Reservation.objects.filter(
        Q(status="confirmed") | Q(status="pending_payment") | Q(status="cleaning") | Q(status="onlocalpay")
    )

    closed_time_data = list(
        Reservation.objects.filter(status="closetime").values(
            "reserve_id", "status", "start", "end", "title", "resource"
        )
    )

    if not is_admin(request.user):
        reservation_data = list()
        for reservation in reservations:
            if reservation.user == request.user and reservation.status != "cleaning" :
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
                closed_time_data.append({"start":reservation.start,"end":reservation.end,"resource":reservation.resource.id})
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

    if not is_admin(request.user):
        resources = Resource.objects.filter(status=True) 
    else:  
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


@login_required
@verified_required
def add_reservation(request):
    new_reservation_data = ReservationForm(data=request.POST, user=request.user)
    if new_reservation_data.is_valid():
        reservation = new_reservation_data.save(commit=False)

        # if user is not normal user it can reserve for another user but if it is not it can reserve for itself
        if request.user.user_status != "verified":
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
        else:
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
            phone = reservation.user.mobile_number
            start = f"{formatted_start}-14:00"
            end = f"{formatted_end}-12:00"
            # # Send message
            if reservation.status == "pending_payment":
                send_online_payment_reserve(phone, reservation.reserve_id)
            elif reservation.status == "onlocalpay" or reservation.status == "confirmed":
                send_completed_reserve_reserve(phone,start,end)
            messages.add_message(request, messages.SUCCESS,
                                 message="لطفا در سریع ترین زمان نسبت به پرداخت خود اقدام کنید در غیر این صورت بعد از سه ساعت رزرو شما لغو می شود.")
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


@login_required
@verified_required
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


@login_required
@verified_required
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
                                                   end=reservation.end + timedelta(days=1), status="cleaning", resource=reservation.resource)
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


@login_required
@verified_required
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

        reservations = Reservation.objects.all().order_by("-created_at")
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
        reservations = Reservation.objects.filter(user=request.user).exclude( Q(status="cleaning") | Q (status='closetime')).order_by("-created_at")
        context = {"reservations": reservations}
    return render(request, "reserve/bill/app-invoice-list.html", context=context)

@verified_required
def bill_print(request, reserve_id):
    reservation = get_object_or_404(Reservation, reserve_id=reserve_id)
    context = {"reservation": reservation}
    if reservation.status == "confirmed" and Payment.objects.filter(reservation=reservation).count() == 1:
        payment = Payment.objects.filter(reservation=reservation).first()
        context.update({'payment':payment})
    if reservation.coupon:
        coupon = Coupon.objects.get(id=reservation.coupon.id)
        discount = coupon.get_discount(reservation.total_pay)  
        total_pay_with_discount = coupon.get_total_pay_with_discount(reservation.total_pay)
        context.update({"coupon": coupon, "discount": discount, "total_pay_with_discount": total_pay_with_discount})
    return render(request, "reserve/bill/billprint.html", context)


@login_required
@verified_required
def bill_detail(request, reserve_id):
    reservation = get_object_or_404(Reservation, reserve_id=reserve_id)
    payment = None

    if not is_admin(request.user) and reservation.user != request.user:
        raise PermissionDenied

    if reservation.status == "pending_payment" and datetime.now() - reservation.created_at >= timedelta(hours=3):
        reservation.status = "cancelled"
        reservation.save()

    if reservation.status == "confirmed" and Payment.objects.filter(reservation=reservation).count() == 1:
        payment = Payment.objects.filter(reservation=reservation).first()

    context = {"reservation": reservation, 'payment':payment}
    if reservation.coupon:
        coupon = Coupon.objects.get(id=reservation.coupon.id)
        discount = coupon.get_discount(reservation.total_pay)  # get the discount in money ammount -> 100$
        total_pay_with_discount = coupon.get_total_pay_with_discount(reservation.total_pay)
        context.update({"coupon": coupon, "discount": discount, "total_pay_with_discount": total_pay_with_discount})

    if request.user.user_status == 'admin_level_a' or request.user.user_status == 'admin_level_b':
        form_admin = AdminReservationChangeForm(instance=reservation)
        context.update({"form_admin": form_admin})

    if is_admin(request.user) and request.method == 'POST':
        reservation_form = AdminReservationChangeForm(instance=reservation, data=request.POST)
        if reservation_form.is_valid():
            reservation_form.save()
            if (reservation.status == "onlocalpay" or reservation.status == "confirmed") and reservation.paid:
                jalali_start = jdatetime.datetime.fromgregorian(datetime=reservation.start)
                jalali_end = jdatetime.datetime.fromgregorian(datetime=reservation.end)
                formatted_start = jalali_start.strftime("%Y/%m/%d")
                formatted_end = jalali_end.strftime("%Y/%m/%d")
                start = f"{formatted_start}-14:00"
                end = f"{formatted_end}-12:00"
                send_completed_reserve_reserve(reservation.user.mobile_number,start,end)
            messages.success(request, 'رزرو با موفقیت تغییر یافت.')
            return redirect(reverse('reserve:billdetail', args=[reserve_id]))
        else:
            messages.error(request, "لطفاً خطاهای فرم را بررسی کنید.")  
            return redirect(reverse('reserve:billdetail', args=[reserve_id]))
    return render(request, "reserve/bill/billdetail.html", context=context)


@login_required
def rooms(request):
    resources = Resource.objects.filter(status=True)
    img_resourse = ResourceImage.objects.all()
    return render(request, "reserve/room-list.html", {"resources": resources,'img_r':img_resourse})

from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .models import Resource
from .forms import ResourceFormSet

@login_required
@verified_required
@admin_required
def roomsprice(request):
    if request.method == 'POST':
        formset = ResourceFormSet(request.POST)
        if formset.is_valid():
            formset.save()
            return redirect('reserve:roomsprice')
        else:
            # Print formset errors to debug if formset is not valid
            print(formset.errors)
    else:
        formset = ResourceFormSet(queryset=Resource.objects.all())

    return render(request, "reserve/roomsprice.html", {"formset": formset})



@login_required
@verified_required
@admin_required
def peaktime(request):
    reservations = Peaktime.objects.all()
    reservation_data = list(
            reservations.values(
                "start",
                "end",
            )
        )

    # change format of the date from datetime objects to string so they can be used in javascript scripts
    for reservation in reservation_data:
        reservation["start"] = date_formatter(reservation["start"])
        reservation["end"] = date_formatter(reservation["end"])


    context = {
        "reservation_data": json.dumps(reservation_data),
        "reservations": reservations,
    }
    return render(request, "reserve/peaktime.html", context)

@login_required
@verified_required
def add_peaktime(request):
    new_reservation_data = PeaktimeForm(data=request.POST)
    if new_reservation_data.is_valid():
        reservation = new_reservation_data.save(commit=False)
        reservation.author = request.user
        print(reservation.start)
        reservation.save()
        try:
            messages.add_message(request, messages.SUCCESS,
                                 message="زمان پیک با موفقیت افزوده شد")
            return JsonResponse({"success": True, "reservation_id": reservation.peaktime_id}, status=201)
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
    
@admin_a_required
def financial_report(request, current_year_shamsi):
    persian_months = [
        (1, "فروردین"),
        (2, "اردیبهشت"),
        (3, "خرداد"),
        (4, "تیر"),
        (5, "مرداد"),
        (6, "شهریور"),
        (7, "مهر"),
        (8, "آبان"),
        (9, "آذر"),
        (10, "دی"),
        (11, "بهمن"),
        (12, "اسفند"),
    ]
    context = {
        'resourses':Resource.objects.all(),
        'months': persian_months,
        'list_of_a_year':occupancy_rate_per_year(current_year_shamsi),
        'avg_in_months':average_occupancy_rate_for_all_months(current_year_shamsi),
        'selected_year':current_year_shamsi,
        'years':get_year_choices(current_year_shamsi), #list: A list of years spanning from (current_year - 25) to (current_year + 25).
        'online_pay_list':json.dumps(total_pay_list(current_year_shamsi)['online_pay_list']),
        'onlocalpay_list':json.dumps(total_pay_list(current_year_shamsi)['onlocal_pay_list']),
    }
    return render(request, "reserve/financial-report.html", context)




def full_day_of_month_for_room(month, year, reservations):
    """
    Calculates the total number of occupied days for a specific room in a given Persian (Hijri shamsi) month and year.

    Args:
        month (int): The target month (1-12) in the Persian calendar.
        year (int): The target year in the Persian calendar.
        reservations (QuerySet or list): A list of reservations for the specific room.

    Returns:
        int: The total number of days the room was occupied during the specified month.

    Notes:
        - Iterates through the provided reservations to count the number of occupied days.
        - Uses the `length_of_stay()` method from the reservation object to determine the duration.
        - If the stay duration is an integer, it checks if the reservation started in the given month.
        - If the stay duration is a list (split across multiple months), it extracts the days for the given month and year.
        - **The reservations are already filtered for a specific room before passing them to this function.**
    """
    days = 0
    for reservation in reservations:
        stay_data = reservation.length_of_stay()

        if isinstance(stay_data, int):
            if jdatetime.datetime.fromgregorian(datetime=reservation.start).month == month:
                days += stay_data

        elif isinstance(stay_data, list):
            for stay in stay_data:
                if stay.get(month) and stay.get("year") == year:
                    days += stay[month]

    return days


def number_of_reserve(month, year, room_id):
    """
    Retrieves the number of confirmed reservations for a specific room in a given Persian (Hijri shamsi) month and year.

    Args:
        month (int): The target month (1-12) in the Persian calendar.
        year (int): The target year in the Persian calendar.
        room_id (int): The unique identifier of the room.

    Returns:
        QuerySet: A filtered set of Reservation objects matching the criteria.

    Notes:
        - Converts the given Persian month and year to Gregorian dates for database queries.
        - Filters reservations with 'confirmed' or 'onlocalpay' status.
        - Includes reservations where the stay overlaps with the specified month.
        - Ensures that only fully paid reservations are considered.
    """
    start_date = jdatetime.datetime(year, month, 1).togregorian()
    end_date = (jdatetime.datetime(year, month, 1) + jdatetime.timedelta(days=num_total_days_in_month(month, year))).togregorian()
    
    return Reservation.objects.filter(
        Q(status__in=['confirmed', 'onlocalpay']),
        Q(start__lt=end_date, end__gte=start_date),
        resource_id=room_id,  
        paid=True
    )



def occupancy_rate_for_room(month, year, reservations):
    """
    Calculates the occupancy rate for a specific room in a given month and year.

    Args:
        month (int): The target month (1-12). (in Hijri shamsi)
        year (int): The target year. (in Hijri shamsi)
        reservations (list): A list of reservations for the room.

    Returns:
        float: The occupancy rate as a percentage (0 to 100).
    
    Notes:
        - The function calculates the total number of days in the given month.
        - It determines how many of those days the room is occupied.
        - The result is the percentage of occupied days in the month.
        - If the month has zero total days (invalid input), it returns 0.
    """
    total_days = num_total_days_in_month(month, year)
    occupied_days = full_day_of_month_for_room(month, year, reservations)
    return (occupied_days / total_days) * 100 if total_days else 0



def occupancy_rate_per_year(year):
    """
    Calculates the monthly and yearly occupancy rate for all rooms in a given Persian (Hijri shamsi) year.

    Args:
        year (int): The target year in the Persian calendar.

    Returns:
        dict: A dictionary containing occupancy data for each room with the following structure:
            {
                "Room Name": {
                    "monthly": {
                        1: occupancy_rate,  # Farvardin
                        2: occupancy_rate,  # Ordibehesht
                        ...
                        12: occupancy_rate  # Esfand
                    },
                    "yearly": average_occupancy_rate  # The yearly average occupancy rate
                },
                ...
            }

    Notes:
        - Iterates through all available rooms (`Resource.objects.all()`).
        - Computes the occupancy rate for each room for every month using `occupancy_rate_for_room()`.
        - Uses `number_of_reserve()` to get the reservations for each room per month.
        - Calculates the yearly occupancy rate as the average of the 12 monthly rates.
        - Returns a dictionary where:
            - `"monthly"` contains the occupancy rate for each month.
            - `"yearly"` contains the overall occupancy percentage for the year.
    """
    rooms = Resource.objects.all()
    occupancy_data = {}
    for room in rooms:
        monthly_occupancy = {
            month: occupancy_rate_for_room(month, year, number_of_reserve(month, year, room.id))
            for month in range(1, 13)
        }
        
        yearly_occupancy = sum(monthly_occupancy.values()) / len(monthly_occupancy)
        
        occupancy_data[room.name] = {
            "monthly": monthly_occupancy,
            "yearly": yearly_occupancy
        }

    return occupancy_data



def num_total_days_in_month(month, year):
    """
    Calculates the total number of days in a given month of the Persian (Hijri shamsi) calendar.

    Args:
        month (int): The target month (1-12).
        year (int): The target year.

    Returns:
        int: The number of days in the specified month.
    
    Notes:
        - Uses the `jdatetime` library to determine the last day of the month.
        - It calculates this by finding the first day of the next month and subtracting one day.
    """
    next_month = 1 if month == 12 else month + 1
    next_year = year + 1 if month == 12 else year
    return (jdatetime.datetime(next_year, next_month, 1) - jdatetime.timedelta(days=1)).day


def average_occupancy_rate_for_month(year, month):
    """
    Calculates the average occupancy rate for all rooms in a given Persian (Hijri shamsi) month and year.

    Args:
        year (int): The target year in the Persian calendar.
        month (int): The target month (1-12) in the Persian calendar.

    Returns:
        float: The average occupancy rate of all rooms for the given month (percentage between 0 and 100).

    Notes:
        - Iterates through all available rooms (`Resource.objects.all()`).
        - Calculates the occupancy rate for each room using `occupancy_rate_for_room()`.
        - Uses `number_of_reserve()` to retrieve reservations for each room.
        - Computes the average occupancy rate by summing individual room occupancies and dividing by the total number of rooms.
        - Returns `0` if no rooms are available.
    """
    rooms = Resource.objects.all()
    total_occupancy = 0
    for room in rooms:
        occupancy = occupancy_rate_for_room(month, year, number_of_reserve(month, year, room.id))
        total_occupancy += occupancy
    
    average_occupancy = total_occupancy / len(rooms) if rooms else 0
    return average_occupancy


def average_occupancy_rate_for_all_months(year):
    """
    Calculates the average occupancy rate for all rooms in each month of a given Persian (Hijri shamsi) year.

    Args:
        year (int): The target year in the Persian calendar.

    Returns:
        dict: A dictionary containing the average occupancy rate for each month, structured as:
            {
                1: average_occupancy_rate,  # Farvardin
                2: average_occupancy_rate,  # Ordibehesht
                ...
                12: average_occupancy_rate  # Esfand
            }

    Notes:
        - Iterates through all 12 months of the given year.
        - Calls `average_occupancy_rate_for_month()` to compute the monthly occupancy rate.
        - Stores the results in a dictionary with months as keys.
    """
    monthly_averages = {}
    
    for month in range(1, 13): 
        average_occupancy = average_occupancy_rate_for_month(year, month)
        monthly_averages[month] = average_occupancy
    
    return monthly_averages


def get_year_choices(current_year):
    """
    Generates a list of years ranging from 25 years before to 25 years after the given Persian (Hijri shamsi) year.

    Args:
        current_year (int): The current year in the Persian (Hijri shamsi) calendar.

    Returns:
        list: A list of years spanning from (current_year - 25) to (current_year + 25).
    """
    years = list(range(current_year - 25, current_year + 26))
    return [year for year in years]



def number_of_reserve_for_pay(month, year):
    """
    Filters and categorizes reservations with successful payments for a given Persian (Hijri shamsi) month and year.

    Args:
        month (int): The target month (1-12) in the Persian calendar.
        year (int): The target year in the Persian calendar.

    Returns:
        dict: A dictionary containing reservations categorized by payment type:
            {
                'online_pay': QuerySet of reservations with online payment (status='confirmed'),
                'onlocal_pay': QuerySet of reservations with on-site payment (status='onlocalpay')
            }

    Notes:
        - Converts the given Persian month and year to the corresponding date range.
        - Filters reservations that:
            - Have a status of either 'confirmed' (online payment) or 'onlocalpay' (on-site payment).
            - Were created within the specified month.
            - Have been successfully paid (`paid=True`).
        - Separates online payments (`status='confirmed'`) from on-site payments (`status='onlocalpay'`).
    """
    start_date = jdatetime.datetime(year, month, 1).togregorian()
    end_date = (jdatetime.datetime(year, month, 1) + jdatetime.timedelta(days=num_total_days_in_month(month, year) - 1)).togregorian()
    all_reservation = Reservation.objects.filter(
        status__in=['confirmed', 'onlocalpay'],
        created_at__gte=start_date,
        created_at__lte=end_date,
        paid=True
    )
    return {
        'online_pay':all_reservation.filter(status='confirmed'),
        'onlocal_pay':all_reservation.filter(status='onlocalpay'),
    }


def total_pay_pre_month(month, year):
    """
    Calculates the total revenue from both online and on-site payments for a given Persian (Hijri shamsi) month and year.

    Args:
        month (int): The target month (1-12) in the Persian calendar.
        year (int): The target year in the Persian calendar.

    Returns:
        dict: A dictionary containing the total revenue from each payment method:
            {
                'total_pay_onlocal_pay': Total revenue from on-site payments,
                'total_pay_online_pay': Total revenue from online payments (after applying discounts, if any)
            }

    Notes:
        - Calls `number_of_reserve_for_pay()` to retrieve reservations with successful payments.
        - Sums up `total_pay` for on-site payments (`status='onlocalpay'`).
        - For online payments (`status='confirmed'`), applies coupon discounts if available before summing up the total.
    """
    reserves = number_of_reserve_for_pay(month, year)
    online_pay_reserve = reserves['online_pay']
    onlocal_pay_reserve = reserves['onlocal_pay']

    total_pay_onlocal_pay = sum(reserve.total_pay for reserve in onlocal_pay_reserve if reserve.total_pay)
    total_pay_online_pay = sum(
        reserve.coupon.get_total_pay_with_discount(reserve.total_pay) if reserve.coupon else reserve.total_pay
        for reserve in online_pay_reserve if reserve.total_pay
    )

    return {
        'total_pay_onlocal_pay': total_pay_onlocal_pay,
        'total_pay_online_pay': total_pay_online_pay
    }



def total_pay_list(year):
    """
    Computes the total revenue from both online and on-site payments for each month in a given Persian (Hijri shamsi) year.

    Args:
        year (int): The target year in the Persian calendar.

    Returns:
        dict: A dictionary containing lists of total revenue per month for each payment method:
            {
                'online_pay_list': [total for Farvardin, total for Ordibehesht, ..., total for Esfand],
                'onlocal_pay_list': [total for Farvardin, total for Ordibehesht, ..., total for Esfand]
            }

    Notes:
        - Calls `total_pay_pre_month()` for each month (1-12) to compute the monthly revenue.
        - Extracts and stores `total_pay_online_pay` and `total_pay_onlocal_pay` in separate lists.
        - Converts revenue values to integers for consistency.
    """
    monthly_totals = [total_pay_pre_month(month, year) for month in range(1, 13)]
    
    return {
        'online_pay_list': [int(month_data['total_pay_online_pay']) for month_data in monthly_totals],
        'onlocal_pay_list': [int(month_data['total_pay_onlocal_pay']) for month_data in monthly_totals],
    }

@login_required
@verified_required
@admin_required
def today_checkins_checkouts(request):
    today = datetime.today().date() 
    checkouts = Reservation.objects.filter(Q(status='confirmed') | Q(status='onlocalpay') ,end__date = today)
    checkins = Reservation.objects.filter(Q(status='confirmed') | Q(status='onlocalpay') ,start__date = today)
    return render(request, "reserve/today_checkins_checkouts.html",{'checkouts':checkouts,'checkins':checkins, 'today':today})