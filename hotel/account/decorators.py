from functools import wraps

from django.contrib import messages
from django.contrib.auth import REDIRECT_FIELD_NAME
from django.contrib.auth.decorators import user_passes_test
from django.http import HttpResponseForbidden
from django.shortcuts import redirect, render


def is_admin(user):
    return user.user_status == "admin_level_a" or user.user_status == "admin_level_b"


def is_verified_user(user):
    return user.is_authenticated and user.user_status == "verified"


def is_admin_level_one(user):
    return user.is_authenticated and user.user_status == "admin_level_1"


def is_admin_level_two(user):
    return user.is_authenticated and user.user_status == "admin_level_2"


#
# def verified_user_required(view_func):
#     @wraps(view_func)
#     def wrapper(request, *args, **kwargs):
#         if not is_verified_user(request.user):
#             return HttpResponseForbidden("شما به این صفحه دسترسی ندارید.")
#         return view_func(request, *args, **kwargs)
#     return wrapper
#
#
# def admin_level_one_required(view_func):
#     @wraps(view_func)
#     def wrapper(request, *args, **kwargs):
#         if not is_admin_level_one(request.user):
#             return HttpResponseForbidden("شما به این صفحه دسترسی ندارید.")
#         return view_func(request, *args, **kwargs)
#     return wrapper
#
#
# def admin_level_two_required(view_func):
#     @wraps(view_func)
#     def wrapper(request, *args, **kwargs):
#         if not is_admin_level_two(request.user):
#             return HttpResponseForbidden("شما به این صفحه دسترسی ندارید.")
#         return view_func(request, *args, **kwargs)
#     return wrapper
#
#

def user_authenticated_and_verified_required(view_func):
    @wraps(view_func)
    def wrapper(request, *args, **kwargs):
        if request.user.is_authenticated:
            if request.user.user_status == 'verified' or request.user.user_status == 'admin_level_a' or request.user.user_status == 'admin_level_b':
                return view_func(request, *args, **kwargs)
            else:
                messages.error(request, "برای دسترسی به این صفحه باید حساب کاربری خود را تایید کنید.")
                return render(request,'account/dashboard.html')
        else:
            messages.error(request, "برای دسترسی به این صفحه باید وارد حساب کاربری خود شوید.")
            return render(request,'account/dashboard.html')
    return wrapper


def login_required(
    function=None, redirect_field_name=REDIRECT_FIELD_NAME, login_url=None
):
    """
    Decorator for views that checks that the user is logged in, redirecting
    to the log-in page if necessary.
    """
    actual_decorator = user_passes_test(
        lambda u: u.is_authenticated,
        login_url=login_url,
        redirect_field_name=redirect_field_name,
    )
    if function:
        return actual_decorator(function)
    return actual_decorator
