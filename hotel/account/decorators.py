from functools import wraps
from django.contrib.auth.decorators import user_passes_test
from django.http import HttpResponseForbidden
from django.shortcuts import render

def is_verified_user(user):
    return user.is_authenticated and user.user_status == 'verified'

def is_admin_level_one(user):
    return user.is_authenticated and user.user_status == 'admin_level_1'

def is_admin_level_two(user):
    return user.is_authenticated and user.user_status == 'admin_level_2'

def verified_user_required(view_func):
    @wraps(view_func)
    def wrapper(request, *args, **kwargs):
        if not is_verified_user(request.user):
            return HttpResponseForbidden("شما به این صفحه دسترسی ندارید.")
        return view_func(request, *args, **kwargs)
    return wrapper

def admin_level_one_required(view_func):
    @wraps(view_func)
    def wrapper(request, *args, **kwargs):
        if not is_admin_level_one(request.user):
            return HttpResponseForbidden("شما به این صفحه دسترسی ندارید.")
        return view_func(request, *args, **kwargs)
    return wrapper

def admin_level_two_required(view_func):
    @wraps(view_func)
    def wrapper(request, *args, **kwargs):
        if not is_admin_level_two(request.user):
            return HttpResponseForbidden("شما به این صفحه دسترسی ندارید.")
        return view_func(request, *args, **kwargs)
    return wrapper

from functools import wraps
from django.shortcuts import redirect
from django.contrib import messages

def user_authenticated_and_verified_required(view_func):
    @wraps(view_func)
    def wrapper(request, *args, **kwargs):
        if request.user.is_authenticated:
            if request.user.user_status == 'verified' or request.user.user_status == 'admin_level_1' or request.user.user_status == 'admin_level_2':
                return view_func(request, *args, **kwargs)
            else:
                messages.error(request, "برای دسترسی به این صفحه باید حساب کاربری خود را تایید کنید.")
                return render(request,'account/dashboard.html')
        else:
            messages.error(request, "برای دسترسی به این صفحه باید وارد حساب کاربری خود شوید.")
            return render(request,'account/dashboard.html')
    return wrapper
