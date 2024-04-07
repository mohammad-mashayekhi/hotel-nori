from django.shortcuts import render
from reserve.models import Reservation, Resource
import json
from django.http import JsonResponse
from jdatetime import datetime as jdatetime
from datetime import datetime, timedelta
from reserve.forms import ReservationForm  # ایمپورت کردن فرم
from django.shortcuts import redirect

def dashboaard(request):
    return render(request, 'account/dashboard.html')

def bill(request):
    return render(request, 'account/bill/app-invoice-list.html')

def users(request):
    return render(request, 'account/app-user-list.html')

def rooms(request):
    return render(request, 'account/rooms.html')

def user_bill(request):
    return render(request, 'account/bill/app-invoice-list.html')


def calendar(request):
    reservations = Reservation.objects.all()
    resources = Resource.objects.all()
    
    reservation_data = []
    for reservation in reservations:
        reservation_data.append({
            'start': str(reservation.start),
            'end': str(reservation.end),
            'title': reservation.title,
            'resource': reservation.resource_id,
        })
    resource_data = []
    for resource in resources:
        resource_data.append({
            'id': resource.id,
            'name': resource.name,
            'color': resource.color,
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
            reservation = Reservation.objects.get(id=reservation_id)
            start_jdatetime = jdatetime.fromgregorian(datetime=reservation.start).strftime("%Y-%m-%d %H:%M:%S")
            end_jdatetime = jdatetime.fromgregorian(datetime=reservation.end).strftime("%Y-%m-%d %H:%M:%S")
            reservation_data = {
                'title': reservation.title,
                'start':start_jdatetime,  # تبدیل به فرمت مناسب برای تقویم
                'end': end_jdatetime,      # تبدیل به فرمت مناسب برای تقویم
                # اطلاعات دیگر رزرو را می‌توانید اینجا اضافه کنید
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
        resource_id = request.POST.get('resource_id')  # شناسه منبع موردنظر را از فرم دریافت کنید
        print(resource_id)
        try:
            resource = Resource.objects.get(id=resource_id)
        except Resource.DoesNotExist:
            return JsonResponse({'success': False, 'error': 'Invalid resource ID'})

        new_reservation = Reservation.objects.create(title=title, start=start, end=end, resource=resource)
        return JsonResponse({'success': True})
    return JsonResponse({'success': False})