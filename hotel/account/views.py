from django.shortcuts import render
from reserve.models import Reservation, Resource
import json
from django.http import JsonResponse
import jdatetime
from datetime import datetime, timedelta
from reserve.forms import ReservationForm  # ایمپورت کردن فرم
from django.views.decorators.http import require_POST
from django.contrib.auth import get_user_model, logout, authenticate
from django.shortcuts import render, redirect
from .decorators import login_required, verified_user_required, admin_level_one_required, admin_level_two_required,user_authenticated_and_verified_required
from .forms import UserProfileEditFormUser, Userprofile, UserProfileEditForm, CustomUserCreationForm
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import login as auth_login
from django.db.models import Q
from kavenegar import *
import random


def account(request):
    if request.method == 'POST':
        form = UserProfileEditFormUser(request.POST, instance=request.user)
        if form.is_valid():
            form.save()
            return redirect('account:dashboard')
        # اضافه کردن کد برای نمایش ارورها در صورتی که فرم نامعتبر باشد
        else:
            errors = form.errors.values()
            # انجام هر عملیات مربوط به نمایش ارورها، مانند چاپ آنها در کنسول یا ارسال به تمپلیت برای نمایش به کاربر
            for error_list in errors:
                for error in error_list:
                    print('jashdajsdhahsdhiuashdoi')
                    print(error)
    else:
        form = UserProfileEditFormUser(instance=request.user)
    print('rbgshkfgkdfhlisdkf')
    return render(request, 'account/dashboard.html', {'form': form})

def edit_user(request, user_id):
    user = Userprofile.objects.get(id=user_id)
    if request.method == 'POST':
        form = UserProfileEditForm(request.POST, instance=user)
        if form.is_valid():
            form.save()
            all_users = get_user_model().objects.all()
            return render(request, 'account/user-list.html', {'users': all_users})
        else:
            return render(request, 'account/edit-user.html', {'form': form})
    else:
        form = UserProfileEditForm(instance=user)
    
    return render(request, 'account/edit-user.html', {'form': form})

def bill(request):
    reservations = Reservation.objects.all().order_by('-id')
    return render(request, 'account/bill/app-invoice-list.html',{'reserve': reservations})


def users(request):
    all_users = get_user_model().objects.all()
    return render(request, 'account/user-list.html', {'users': all_users})


def rooms(request):
    resources = Resource.objects.filter(status = True)
    return render(request, 'account/room-list.html',{'resources': resources})

def user_bill(request):
    return render(request, 'account/bill/app-invoice-list.html')

from datetime import datetime, timedelta

from datetime import datetime, timedelta


def calendar(request):
    reservations = Reservation.objects.filter(Q(status='confirmed') | Q(status='pending_payment') | Q(status='cleaning'))
    resources = Resource.objects.all()
    reservation_data = []
    for reservation in reservations:
        # Create start datetime with time set to 12:00
        start_datetime = datetime.combine(reservation.start, datetime.strptime('14:00', '%H:%M').time())
        # Create end datetime with time set to 14:00
        end_datetime = datetime.combine(reservation.end, datetime.strptime('12:00', '%H:%M').time())

        # start_datetime = start_datetime - timedelta(days=3)
        # end_datetime = end_datetime - timedelta(days=3)

        if reservation.status == 'confirmed':
            color = '#4A827C'  # رنگ سبز برای رزروهای تایید شده
        elif reservation.status == 'pending_payment':
            color = '#D1A975'  # رنگ زرد برای رزروهای در انتظار پرداخت
        elif reservation.status == 'cleaning':
            color = '#DD5746'  # رنگ زرد برای رزروهای نظافت
        else:
            color = '#000000'  # رنگ پیش‌فرض برای حالت‌های دیگر

        # if reservation.cleaning : 
        #     bufferAfter = 1440
        # else :
        #     bufferAfter = 0 

        reservation_data.append({
            'reserve_id': reservation.reserve_id,
            'start': start_datetime.strftime('%Y-%m-%dT%H:%M'),  # فرمت تاریخ به شکل استاندارد برای استفاده در ویو‌های جاوااسکریپت
            'end': end_datetime.strftime('%Y-%m-%dT%H:%M'),
            'title': reservation.title,
            'resource': reservation.resource_id,
            'color': color,
            'cleaning': reservation.cleaning , 
            'user': reservation.user.username,  # نام کاربر
            # 'bufferAfter': bufferAfter,
        })
    resource_data = []
    for resource in resources:
        resource_data.append({
            'id': resource.id,
            'name': resource.name,
            'cssClass': resource.css,
            'capacity': resource.capacity,
            'price': resource.price,
            'price_per_person': resource.price_per_person
        })

    if request.method == 'POST':
        form = ReservationForm(request.POST)
        if form.is_valid():
            reservation = form.save(commit=False)
            reservation.author = request.user  # تنظیم نویسنده رزرو
            reservation.start = datetime.now().date()
            reservation.end = datetime.now().date()
            reservation.save()
            form = ReservationForm()
            context = {
                'reservation_data': json.dumps(reservation_data),
                'resource_data': json.dumps(resource_data),
                'form': form,
                'resources:': resources,
            }

            return render(request, 'account/calendar.html', context)  # بازگرداندن کاربر به صفحه کلندر
        else:
            print(form.errors)  # چاپ کردن خطا در ترمینال
    else:
        form = ReservationForm()
        context = {
            'reservation_data': json.dumps(reservation_data),
            'resource_data': json.dumps(resource_data),
            'form': form,
            'resources': resources,
            "reservations": reservations
        }

        return render(request, 'account/calendar.html', context)


def get_reservation_info(request):
    if request.method == 'GET' and 'reservation_id' in request.GET:
        reservation_id = request.GET.get('reservation_id')
        try:
            reservation = Reservation.objects.get(reserve_id=reservation_id)
           
            
            # start_jdatetime = jdatetime.fromgregorian(datetime=start_datetime)
            # end_jdatetime = jdatetime.fromgregorian(datetime=end_datetime)

            reservation_data = {
                'title': reservation.title,
                'start': reservation.start.strftime("%Y-%m-%d %H:%M:%S"),  
                'end': reservation.end.strftime("%Y-%m-%d %H:%M:%S"),
                'status':reservation.status,
                'cleaning': reservation.cleaning,
                'resources':reservation.resource.id,
                'user': reservation.user.username,  # نام کاربر
                'capacity':reservation.resource.capacity,
                'morecapacity':reservation.more_capacity,
                'paid':reservation.paid,
                'price':reservation.resource.price,
                'price_per_person':reservation.resource.price_per_person,
            }
            return JsonResponse(reservation_data)
        except Reservation.DoesNotExist:
            return JsonResponse({'error': 'Reservation not found'}, status=404)
    else:
        return JsonResponse({'error': 'Invalid request'}, status=400)

from django.contrib.auth import get_user_model
from account.models import Userprofile
from dateutil.parser import parse

def add_reservation(request):
    if request.method == 'POST':
        title = request.POST.get('title')
        start = request.POST.get('start')
        end = request.POST.get('end')
        resource_id = request.POST.get('resourceId')
        author = request.user
        status = request.POST.get('status')
        user_username = request.POST.get('user')
        cleaning = request.POST.get('cleaning')
        more_capacity = request.POST.get('more_capacity')
        start = parse(start, fuzzy=True)
        end = parse(end, fuzzy=True)
        paid = request.POST.get('paid')

        if paid == 'true':
            paid = True
        else:
            paid = False

        if cleaning == 'true':
            cleaning = True
            end += timedelta(days=1)  # Add one day to end time if cleaning is true
        else:
            cleaning = False

        try:
            resource = Resource.objects.get(id=resource_id)
        except Resource.DoesNotExist:
            return JsonResponse({'success': False, 'error': 'Invalid resource ID'})

        User = get_user_model()
        try:
            user = User.objects.get(username=user_username)
        except User.DoesNotExist:
            user = User.objects.create_user(username=user_username, password=user_username)

        overlapping_reservations = Reservation.objects.filter(
            resource=resource,
            status__in=['pending_payment', 'confirmed'],
        ).exclude(
            Q(end__lte=start) | Q(start__gte=end)
        )

        # Check for overlapping reservations
        if overlapping_reservations.exists():
            return JsonResponse({'success': False, 'error': 'Overlapping reservation'})

        if cleaning == True:
            end -= timedelta(days=1) 
            new_reservation = Reservation.objects.create(title='نظافت', start=end, end=end + timedelta(days=1) , resource=resource, author=author, user=user, status='cleaning', cleaning=cleaning, more_capacity = more_capacity,paid = paid)

        # Create reservation if there are no overlaps
        new_reservation = Reservation.objects.create(title=title, start=start, end=end, resource=resource, author=author, user=user, status=status, cleaning=cleaning, more_capacity = more_capacity,paid = paid)
        try:
            # Convert Gregorian date to Jalali date
            jalali_start = jdatetime.datetime.fromgregorian(datetime=start)
            jalali_end = jdatetime.datetime.fromgregorian(datetime=end)
            # Format the Jalali dates as needed
            formatted_start = jalali_start.strftime('%Y/%m/%d')
            formatted_end = jalali_end.strftime('%Y/%m/%d')
            if paid:
                send_message_accept_reserve(user_username,resource,formatted_start,formatted_end,message='reserve-room-not-paid')
            else : 
                send_message_accept_reserve(user_username,resource,formatted_start,formatted_end,message='reserve-room-test')
            return JsonResponse({'success': True})
        except Reservation.DoesNotExist:
            # در صورت عدم یافتن رزرو، پاسخ خطای مناسب را برگردانید
            return JsonResponse({'success': False, 'error': 'Reservation not found'}, status=404)
        except Exception as e:
            print(e)
            # در صورت بروز هر خطای دیگری، پاسخ خطای مناسب را برگردانید
            return JsonResponse({'success': False, 'error': str(e)}, status=500)

    return JsonResponse({'success': False})


@require_POST
def cancel_reservation(request):
    # دریافت شناسه رزرو از درخواست POST
    reservation_id = request.POST.get('reservation_id')
    print(reservation_id)
    try:
        # یافتن رزرو مربوطه از پایگاه داده
        reservation = Reservation.objects.get(reserve_id=reservation_id)

        # تغییر حالت رزرو به کنسل شده
        reservation.status = 'canceled'
        reservation.save()

        return JsonResponse({'success': True})
    except Reservation.DoesNotExist:
        # در صورت عدم یافتن رزرو، پاسخ خطای مناسب را برگردانید
        return JsonResponse({'success': False, 'error': 'Reservation not found'}, status=404)
    except Exception as e:
        # در صورت بروز هر خطای دیگری، پاسخ خطای مناسب را برگردانید
        return JsonResponse({'success': False, 'error': str(e)}, status=500)


def login(request):
    if request.method == 'POST':
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            user = authenticate(request, username=username, password=password)
            if user is not None:
                auth_login(request, user)
               # Redirect to a success page.
                return redirect('account:dashboard')  # Change 'success_page' to your desired success page
            else:
                # Return an 'invalid login' error message.
                form.add_error(None, 'نام کاربری یا رمز عبور اشتباه است')
    else:
        form = AuthenticationForm(request)
    return render(request, 'account/login.html', {'form': form})


def register(request):
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.username = form.cleaned_data['username']
            user.user_status = 'normal'  # تنظیم وضعیت به عادی
            user.save()  
            # اعتبارسنجی تایید شرایط و قوانین
            if form.cleaned_data['terms']:
                # کاربر را وارد سیستم می‌کنیم
                auth_login(request, user)
                return redirect('success_page_register')  # Change 'success_page' to your desired success page
    else:
        form = CustomUserCreationForm()
    return render(request, 'account/register.html', {'form': form})


@login_required(login_url='account:login')
def logoutUser(request):
    logout(request)
    return redirect('home')


# def add_reminder_sms(request):
#     reservation_id = request.POST.get('reservation_id')

#     print(reservation_id)
#     try:
#         # یافتن رزرو مربوطه از پایگاه داده
#         reservation = Reservation.objects.get(reserve_id=reservation_id)

#         # Convert Gregorian date to Jalali date
#         jalali_start = jdatetime.datetime.fromgregorian(datetime=reservation.start)
#         jalali_end = jdatetime.datetime.fromgregorian(datetime=reservation.end)
        
#         # Format the Jalali dates as needed
#         formatted_start = jalali_start.strftime('%Y/%m/%d')
#         formatted_end = jalali_end.strftime('%Y/%m/%d')
        
#         send_message_accept_reserve('09106961316',reservation.resource,formatted_start,formatted_end,message='')
#         return JsonResponse({'success': True})
#     except Reservation.DoesNotExist:
#         # در صورت عدم یافتن رزرو، پاسخ خطای مناسب را برگردانید
#         return JsonResponse({'success': False, 'error': 'Reservation not found'}, status=404)
#     except Exception as e:
#         print(e)
#         # در صورت بروز هر خطای دیگری، پاسخ خطای مناسب را برگردانید
#         return JsonResponse({'success': False, 'error': str(e)}, status=500)


def generate_otp_code():
    return str(random.randint(100000, 999999))

def send_message_accept_reserve(phone_number,room_id,enter_date,exit_date,message):
    API = '464F396F576F69626E74345432725037463339437954734C36743954524B57736A4877484C4D316A5A31413D'
    TEMPLATE = message
    RECEPTOR = phone_number
    TOKEN = room_id
    TOKEN2 = enter_date
    TOKEN3 = exit_date
    TYPE = 'sms'
    try:
        api = KavenegarAPI(API)
        params = {
        'receptor': RECEPTOR,
        'template': TEMPLATE,
        'token': TOKEN,
        'token2': TOKEN2,
        'token3': TOKEN3,
        'type': TYPE ,
    }
        response = api.verify_lookup(params)
        print(response)
    except APIException as e:
        print(e)
    except HTTPException as e:
        print(e)


