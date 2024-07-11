import json
import secrets
from datetime import date, datetime, timedelta
import jdatetime
from django.contrib.auth import authenticate, get_user_model
from django.contrib.auth import logout, login as auth_login
from django.contrib.auth.decorators import (PermissionDenied, login_required,
                                            user_passes_test)
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.contrib.auth.views import PasswordResetConfirmView
from django.db.models import Count, Q, Sum
from django.shortcuts import get_object_or_404, redirect, render,reverse
from django.urls import reverse_lazy
from django.utils.encoding import force_bytes
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
from kavenegar import *
from account.models import Userprofile
from .decorators import (is_admin, is_admin_level_one, is_admin_level_two,
                         is_verified_user)
from .forms import (CustomUserCreationForm, OTPValidationForm, PhoneNumberForm,
                    Userprofile, UserProfileEditForm, UserProfileEditFormUser)
from .utils import ( otp_generator, send_otp_sms, validate_otp)
from reserve.models import Resource,Reservation
from django.http import JsonResponse

User = get_user_model()


@login_required
def update_profile(request):
    user = request.user
    initial_data = {}

    if request.method == "POST":
        form = UserProfileEditFormUser(request.POST, instance=user)
        if form.is_valid():
            form.save()
            return redirect("account:dashboard")
        else:
            return render(request, "account/dashboard.html", {"form": form})
    else:
        # convert birth_date from gregorian to jalali  date when is it not None
        if user.birth_date:
            initial_data["birth_date"] = jdatetime.date.fromgregorian(date=user.birth_date).strftime("%Y/%m/%d")
        form = UserProfileEditFormUser(instance=user)

    return render(request, "account/dashboard.html", {"form": form})


@user_passes_test(is_admin)
def edit_user_profile(request, user_id):
    user = Userprofile.objects.get(id=user_id)
    initial_data = {}
    if request.method == "POST":
        form = UserProfileEditForm(request.POST, instance=user)
        if form.is_valid():
            form.save()
            return render(request, "account/edit-user.html", {"form": form})
        else:
            return render(request, "account/edit-user.html", {"form": form})
    else:
        # convert birth_date from gregorian to jalali  date when is it not None
        if user.birth_date:
            initial_data["birth_date"] = jdatetime.date.fromgregorian(date=user.birth_date).strftime("%Y/%m/%d")
        form = UserProfileEditForm(instance=user, initial=initial_data)

    return render(request, "account/edit-user.html", {"form": form})


@login_required
@user_passes_test(is_admin)
def users(request):
    if request.user.user_status == "admin_level_b":
        all_users = User.objects.filter(user_status="verified")
    elif request.user.user_status == "admin_level_a":
        all_users = User.objects.all()

    context = {
        "users": all_users,
    }

    return render(request, "account/user-list.html", context=context)


@login_required
def rooms(request):
    resources = Resource.objects.filter(status=True)
    return render(request, "account/room-list.html", {"resources": resources})


@login_required
def user_bill(request):
    reservations = Reservation.objects.filter(user=request.user)
    return render(
        request, "account/bill/app-invoice-list.html", context={"reserve": reservations}
    )


@login_required
def calendar(request):
    reservations = Reservation.objects.filter(
        Q(status="confirmed") | Q(status="pending_payment") | Q(status="cleaning")
    )

    if not is_admin(request.user):
        print(request.user)
        reservations = reservations.filter(user=request.user)
        print(reservations)
    closetime = Reservation.objects.filter(status="closetime")
    resources = Resource.objects.all()
    reservation_data = []
    closetime_data = []
    resource_data = []

    for reservation in reservations:
        # Create start datetime with time set to 12:00
        start_datetime = datetime.combine(
            reservation.start, datetime.strptime("14:00", "%H:%M").time()
        )
        # Create end datetime with time set to 14:00
        end_datetime = datetime.combine(
            reservation.end, datetime.strptime("12:00", "%H:%M").time()
        )

        # start_datetime = start_datetime - timedelta(days=3)
        # end_datetime = end_datetime - timedelta(days=3)

        if reservation.status == "confirmed":
            color = "#4A827C"  # رنگ سبز برای رزروهای تایید شده
        elif reservation.status == "pending_payment":
            color = "#D1A975"  # رنگ زرد برای رزروهای در انتظار پرداخت
        elif reservation.status == "cleaning":
            color = "#DD5746"  # رنگ زرد برای رزروهای نظافت
        else:
            color = "#000000"  # رنگ پیش‌فرض برای حالت‌های دیگر

        # if reservation.cleaning :
        #     bufferAfter = 1440
        # else :
        #     bufferAfter = 0

        reservation_data.append(
            {
                "reserve_id": reservation.reserve_id,
                "start": start_datetime.strftime("%Y-%m-%dT%H:%M"),
                # فرمت تاریخ به شکل استاندارد برای استفاده در ویو‌های جاوااسکریپت
                "end": end_datetime.strftime("%Y-%m-%dT%H:%M"),
                "title": reservation.title,
                "resource": reservation.resource_id,
                "color": color,
                "cleaning": reservation.cleaning,
                "user": reservation.user.username,  # نام کاربر
                # 'bufferAfter': bufferAfter,
            }
        )

    for closetime in closetime:
        start_datetime = datetime.combine(
            closetime.start, datetime.strptime("14:00", "%H:%M").time()
        )
        # Create end datetime with time set to 14:00
        end_datetime = datetime.combine(
            closetime.end, datetime.strptime("12:00", "%H:%M").time()
        )
        closetime_data.append(
            {
                "reserve_id": closetime.reserve_id,
                "start": start_datetime.strftime("%Y-%m-%dT%H:%M"),
                # فرمت تاریخ به شکل استاندارد برای استفاده در ویو‌های جاوااسکریپت
                "end": end_datetime.strftime("%Y-%m-%dT%H:%M"),
                "title": closetime.title,
                "resource": closetime.resource_id,
                "cssClass": "md-lunch-break-class mbsc-flex",
            }
        )

    for resource in resources:
        resource_data.append(
            {
                "id": resource.id,
                "name": resource.name,
                "cssClass": resource.css,
                "capacity": resource.capacity,
                "price": resource.price,
                "price_per_person": resource.price_per_person,
                "max_capacity": resource.max_capacity,
            }
        )

    if request.method == "POST":
        form = ReservationForm(request.POST)
        if form.is_valid():
            reservation = form.save(commit=False)
            reservation.author = request.user  # تنظیم نویسنده رزرو
            reservation.start = datetime.now().date()
            reservation.end = datetime.now().date()
            reservation.save()
            form = ReservationForm()
            context = {
                "reservation_data": json.dumps(reservation_data),
                "resource_data": json.dumps(resource_data),
                "form": form,
                "resources:": resources,
            }

            return render(
                request, "account/calendar.html", context
            )  # بازگرداندن کاربر به صفحه کلندر
        else:
            print(form.errors)  # چاپ کردن خطا در ترمینال
    else:
        form = ReservationForm()
        context = {
            "reservation_data": json.dumps(reservation_data),
            "resource_data": json.dumps(resource_data),
            "closetime_data": json.dumps(closetime_data),
            "form": form,
            "resources": resources,
            "reservations": reservations,
        }

        return render(request, "account/calendar.html", context)


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


def add_reservation(request):
    if request.method == "POST":
        title = request.POST.get("title")
        start = request.POST.get("start")
        end = request.POST.get("end")
        resource_id = request.POST.get("resourceId")
        author = request.user
        status = request.POST.get("status")

        cleaning = request.POST.get("cleaning")
        more_capacity = request.POST.get("more_capacity")
        start = parse(start, fuzzy=True)
        end = parse(end, fuzzy=True)
        price =  request.POST.get('price')
        start = datetime.combine(start, datetime.strptime('13:00', '%H:%M').time())
        # Create end datetime with time set to 14:00
        end = datetime.combine(end, datetime.strptime('12:00', '%H:%M').time())
        if request.user.user_status == "normal":
            user_username = request.user.username
        else:
            user_username = request.POST.get("user")

        if not is_admin(request.user) and author != request.user:
            raise PermissionDenied

        print(user_username)

        try:
            resource = Resource.objects.get(id=resource_id)
        except Resource.DoesNotExist:
            return JsonResponse({"success": False, "error": "Invalid resource ID"})

        if cleaning == 'true':
            cleaning = True
            end += timedelta(days=1)  # Add one day to end time if cleaning is true
        else:
            cleaning = False

        overlapping_reservations = Reservation.objects.filter(
            resource=resource,
            status__in=["pending_payment", "confirmed"],
        ).exclude(Q(end__lte=start) | Q(start__gte=end))

        # Check for overlapping reservations
        if overlapping_reservations.exists():
            return JsonResponse({'success': False, 'error': 'Overlapping reservation'})

        if status == 'closetime':
            new_reservation = Reservation.objects.create(title='غیرقابل رزرو', start=start, end=end , resource=resource, author=author, user=author, status='closetime', cleaning=False)
            return JsonResponse({'success': True})

        User = get_user_model()
        user = User.objects.get(username=user_username)
        print("hey it is", user)
        try:
            user = User.objects.get(username=user_username)
        except User.DoesNotExist:
            user = User.objects.create_user(
                username=user_username, password=user_username
            )

        if cleaning:
            end -= timedelta(days=1)
            new_reservation = Reservation.objects.create(
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

        # Create reservation if there are no overlaps
        new_reservation = Reservation.objects.create(title=title, start=start, end=end, resource=resource, author=author, user=user, status=status, cleaning=cleaning, more_capacity = more_capacity , total_pay = price )
        try:
            # Convert Gregorian date to Jalali date
            jalali_start = jdatetime.datetime.fromgregorian(datetime=start)
            jalali_end = jdatetime.datetime.fromgregorian(datetime=end)
            # Format the Jalali dates as needed
            formatted_start = jalali_start.strftime('%Y/%m/%d')
            formatted_end = jalali_end.strftime('%Y/%m/%d')
            if status == 'onlocalpay':
                send_message_accept_reserve(user_username,'/account/bill/'+new_reservation.reserve_id,resource,formatted_start,formatted_end,message='reserve-room-test')
            else : 
                send_message_accept_reserve(user_username,'/account/bill/'+new_reservation.reserve_id,resource,formatted_start,formatted_end,message='reserve-room-not-paid')

            return JsonResponse({'success': True})
        except Reservation.DoesNotExist:
            # در صورت عدم یافتن رزرو، پاسخ خطای مناسب را برگردانید
            return JsonResponse(
                {"success": False, "error": "Reservation not found"}, status=404
            )
        except Exception as e:
            print(e)
            # در صورت بروز هر خطای دیگری، پاسخ خطای مناسب را برگردانید
            return JsonResponse({"success": False, "error": str(e)}, status=500)
    return JsonResponse({"success": False})


# @require_POST
@login_required
def cancel_reservation(request):
    # دریافت شناسه رزرو از درخواست POST
    reservation_id = request.POST.get("reservation_id")
    try:
        # یافتن رزرو مربوطه از پایگاه داده
        reservation = Reservation.objects.get(reserve_id=reservation_id)
        if not is_admin(user) and reservation.user != request.user:
            raise PermissionDenied

        # تغییر حالت رزرو به کنسل شده
        reservation.status = "canceled"
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


def login(request):
    if request.method == "POST":
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            username = form.cleaned_data["username"]
            password = form.cleaned_data["password"]

            user = authenticate(request, username=username, password=password)
            if user is not None:
                auth_login(request, user)
                return redirect("account:dashboard")
            else:
                # Add a non-specific error message for security reasons (avoid revealing which credential is incorrect)
                form.add_error(None, "Invalid login credentials.")

    else:  # GET request
        if request.user.is_authenticated:
            # User is already logged in, redirect to dashboard
            return redirect("account:dashboard")

        form = AuthenticationForm(request=request)

    return render(request, "account/login.html", {"form": form})


def register(request):
    if request.method == "POST":
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.username = form.cleaned_data["mobile_number"]
            user.user_status = "normal"  # تنظیم وضعیت به عادی
            user.save()
            # اعتبارسنجی تایید شرایط و قوانین
            if form.cleaned_data["terms"]:
                # کاربر را وارد سیستم می‌کنیم
                auth_login(request, user)
                return redirect(
                    "success_page_register"
                )  # Change 'success_page' to your desired success page
    else:
        form = CustomUserCreationForm()
    return render(request, "account/register.html", {"form": form})


@login_required(login_url="account:login")
def logout_user(request):
    logout(request)
    return redirect("home")


def password_reset_request(request):
    if request.method == "POST":
        form = PhoneNumberForm(request.POST)
        if form.is_valid():
            try:
                user = Userprofile.objects.get(
                    mobile_number=form.cleaned_data["phone_number"]
                )
                otp = otp_generator()
                print(otp)
                user.otp = otp
                user.otp_expiry = datetime.now() + timedelta(
                    minutes=10
                )  # Set OTP expiry time
                user.save()
                uid = urlsafe_base64_encode(force_bytes(user.pk))
                send_otp_sms(user.mobile_number, otp)
                return redirect(
                    reverse("account:otp_validation", kwargs={"uidb64": uid})
                )
            except Userprofile.DoesNotExist:
                form.add_error("phone_number", "شماره نا معتبر هست")
    else:
        form = PhoneNumberForm()
    return render(request, "account/password_reset_request.html", {"form": form})


def otp_validation(request, uidb64=None):
    try:
        uid = urlsafe_base64_decode(uidb64).decode()
        user = Userprofile.objects.get(pk=uid)
    except (Userprofile.DoesNotExist, ValueError):
        return render(
            request, "account/otp_validation.html", context={"invalid_uidb64": True}
        )

    if request.method == "POST":
        form = OTPValidationForm(
            user_otp=user.otp, otp_expiry=user.otp_expiry, data=request.POST
        )
        if form.is_valid():
            token = PasswordResetTokenGenerator().make_token(user)
            return redirect(
                reverse(
                    "account:password_reset_set",
                    kwargs={"uidb64": uidb64, "token": token},
                )
            )
    else:
        form = OTPValidationForm()
    return render(
        request,
        "account/otp_validation.html",
        {"form": form, "phone_number": user.mobile_number},
    )


class PasswordResetSetView(PasswordResetConfirmView):
    template_name = "account/password_reset_set.html"
    success_url = reverse_lazy("home")


def send_message_accept_reserve(phone_number,reserve_id, room_id, enter_date, exit_date, message):
    API = '464F396F576F69626E74345432725037463339437954734C36743954524B57736A4877484C4D316A5A31413D'
    TEMPLATE = message
    RECEPTOR = convert_to_western_numerals(phone_number)  # Convert Persian numerals
    TOKEN = room_id
    TOKEN2 = enter_date
    TOKEN3 = exit_date
    TOKEN10 = reserve_id
    TYPE = 'sms'
    if message == 'reserve-room-not-paid':
        try:
            api = KavenegarAPI(API)
            params = {
                'receptor': RECEPTOR,
                'template': TEMPLATE,
                'token': TOKEN,
                'token2': TOKEN2,
                'token3': TOKEN3,
                'token10': TOKEN10,
                'type': TYPE,
            }
            response = api.verify_lookup(params)
            print(response)
        except APIException as e:
            print(e)
        except HTTPException as e:
            print(e)
    else: 
        try:
            api = KavenegarAPI(API)
            params = {
                'receptor': RECEPTOR,
                'template': TEMPLATE,
                'token': TOKEN,
                'token2': TOKEN2,
                'token3': TOKEN3,
                'type': TYPE,
            }
            response = api.verify_lookup(params)
            print(response)
        except APIException as e:
            print(e)
        except HTTPException as e:
            print(e) 


def convert_to_western_numerals(persian_number):
    persian_to_western = {
        "۰": "0",
        "۱": "1",
        "۲": "2",
        "۳": "3",
        "۴": "4",
        "۵": "5",
        "۶": "6",
        "۷": "7",
        "۸": "8",
        "۹": "9",
    }
    return "".join(persian_to_western.get(char, char) for char in persian_number)
