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
from django.shortcuts import get_object_or_404, redirect, render, reverse
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


@login_required
def account(request):
    if request.method == "POST":
        form = UserProfileEditFormUser(request.POST, instance=request.user)
        if form.is_valid():
            form.save()
            return redirect("account:dashboard")
        # اضافه کردن کد برای نمایش ارورها در صورتی که فرم نامعتبر باشد
        else:
            errors = form.errors.values()
            # انجام هر عملیات مربوط به نمایش ارورها، مانند چاپ آنها در کنسول یا ارسال به تمپلیت برای نمایش به کاربر
            return render(request, "account/dashboard.html", {"errors": errors})
    else:
        form = UserProfileEditFormUser(instance=request.user)

    return render(request, "account/dashboard.html", {"form": form})


@user_passes_test(is_admin)
def edit_user(request, user_id):
    user = Userprofile.objects.get(id=user_id)
    if request.method == "POST":
        form = UserProfileEditForm(request.POST, instance=user)
        if form.is_valid():
            form.save()
            all_users = get_user_model().objects.all()
            return render(request, "account/user-list.html", {"users": all_users})
        else:
            return render(request, "account/edit-user.html", {"form": form})
    else:
        form = UserProfileEditForm(instance=user)

    return render(request, "account/edit-user.html", {"form": form})


@login_required
@user_passes_test(is_admin)
def users(request):
    user = get_user_model()
    all_users = user.objects.all()
    context = {
        "users": all_users,
    }

    return render(request, "account/user-list.html", context=context)


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
            user.username = form.cleaned_data["username"]
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
