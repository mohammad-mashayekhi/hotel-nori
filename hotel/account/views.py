from django.shortcuts import render
from reserve.models import Reservation, Resource
import json
from django.http import JsonResponse
from jdatetime import datetime as jdatetime
from datetime import datetime, timedelta
from reserve.forms import ReservationForm  # ایمپورت کردن فرم
from django.views.decorators.http import require_POST
from django.contrib.auth import get_user_model ,logout ,authenticate
from django.shortcuts import render ,redirect
from .decorators import login_required,verified_user_required, admin_level_one_required, admin_level_two_required,user_authenticated_and_verified_required
from account.forms import *
from account.models import Userprofile
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import login as auth_login
from django.db.models import Q

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
    return render(request, 'account/bill/app-invoice-list.html')


def users(request):
    all_users = get_user_model().objects.all()
    return render(request, 'account/user-list.html', {'users': all_users})


def rooms(request):
    resources = Resource.objects.filter(status = True)
    return render(request, 'account/room-list.html',{'resources': resources})

def user_bill(request):
    return render(request, 'account/bill/app-invoice-list.html')


def calendar(request):
    reservations = Reservation.objects.filter(Q(status='confirmed') | Q(status='pending_payment'))
    resources = Resource.objects.all()
    reservation_data = []
    for reservation in reservations:
        start_datetime = datetime.combine(reservation.start, datetime.strptime('14:00', '%H:%M').time())
        end_datetime = datetime.combine(reservation.end, datetime.strptime('12:00', '%H:%M').time()) + timedelta(days=1)  # اضافه کردن یک روز به زمان پایان
        if reservation.status == 'confirmed':
            color = '#4A827C'  # رنگ سبز برای رزروهای تایید شده
        elif reservation.status == 'pending_payment':
            color = '#D1A975'  # رنگ زرد برای رزروهای در انتظار پرداخت
        else:
            color = '#000000'  # رنگ پیش‌فرض برای حالت‌های دیگر
        if reservation.bufferAfter:
            buffer = "میخواهد"
            end_datetime += timedelta(days=1)  # اضافه کردن یک روز به زمان پایان
                
        reservation_data.append({
            'reserve_id' : reservation.reserve_id,
            'start': start_datetime.strftime('%Y-%m-%dT%H:%M:%S'),  # فرمت تاریخ به شکل استاندارد برای استفاده در ویو‌های جاوااسکریپت
            'end': end_datetime.strftime('%Y-%m-%dT%H:%M:%S'),
            'title': reservation.title,
            'resource': reservation.resource_id,
            'color':color,
            'bufferAfter': buffer if reservation.bufferAfter else '',  # استفاده از مقدار buffer فقط اگر bufferAfter برابر با True باشد
            'user': reservation.user.username,  # نام کاربر
        })
    resource_data = []
    for resource in resources:
        resource_data.append({
            'id': resource.id,
            'name': resource.name,
            'cssClass': resource.css,
        })


    if request.method == 'POST':
        form = ReservationForm(request.POST)
        if form.is_valid():
            reservation = form.save(commit=False)
            reservation.author = request.user  # تنظیم نویسنده رزرو
            reservation.save()
            form = ReservationForm()
            context = {
                'reservation_data': json.dumps(reservation_data),
                'resource_data': json.dumps(resource_data),
                'form': form,
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
        }
   
    return render(request, 'account/calendar.html', context)

def get_reservation_info(request):
    if request.method == 'GET' and 'reservation_id' in request.GET:
        reservation_id = request.GET.get('reservation_id')
        try:
            reservation = Reservation.objects.get(reserve_id=reservation_id)
            
            start_datetime = datetime.combine(reservation.start, datetime.strptime('14:00', '%H:%M').time())
            end_datetime = datetime.combine(reservation.end, datetime.strptime('12:00', '%H:%M').time()) + timedelta(days=1)  # اضافه کردن یک روز به زمان پایان
            if reservation.bufferAfter:
                buffer = "میخواهد"
                end_datetime += timedelta(days=1)  # اضافه کردن یک روز به زمان پایان
            
            start_jdatetime = jdatetime.fromgregorian(datetime=start_datetime)
            end_jdatetime = jdatetime.fromgregorian(datetime=end_datetime)

            reservation_data = {
                'title': reservation.title,
               'start': start_jdatetime.strftime("%Y-%m-%d %H:%M:%S"),  
                'end': end_jdatetime.strftime("%Y-%m-%d %H:%M:%S"),
                'status':reservation.get_status_display(),
                'bufferAfter': buffer if reservation.bufferAfter else '',  # استفاده از مقدار buffer فقط اگر bufferAfter برابر با True باشد
                'user': reservation.user.username,  # نام کاربر
            }
            return JsonResponse(reservation_data)
        except Reservation.DoesNotExist:
            return JsonResponse({'error': 'Reservation not found'}, status=404)
    else:
        return JsonResponse({'error': 'Invalid request'}, status=400)


def add_reservation(request):
    if request.method == 'POST':
        title = request.POST.get('title')
        # start = request.POST.get('start')
        # end = request.POST.get('end')
        start = datetime.now()  # یا هر مقدار دلخواه دیگری که بخواهید
        end = start + timedelta(hours=1)  # یا هر مقدار دلخواه دیگری که بخواهید
        resource_id = request.POST.get('resourceId')  # شناسه منبع موردنظر را از فرم دریافت کنید

      
        # استخراج Userprofile مربوط به کاربر فعلی
        user = request.user
        print(user.id)
        # اگر اطلاعات منبع موردنظر درخواست‌دهنده موجود نباشد، یک پاسخ خطایی ارسال کنید
        try:
            resource = Resource.objects.get(id=resource_id)
        except Resource.DoesNotExist:
            return JsonResponse({'success': False, 'error': 'Invalid resource ID'})

        # ایجاد رزرو با اطلاعات جدید و Userprofile مربوط به کاربر فعلی
        new_reservation = Reservation.objects.create(title=title, start=start, end=end, resource=resource, author=user , user=user)

        # ارسال پاسخ موفقیت‌آمیز
        return JsonResponse({'success': True})
    # ارسال پاسخ خطایی اگر درخواست POST نباشد
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
