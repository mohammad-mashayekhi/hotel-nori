from django.contrib import admin
from django.urls import path, include
from . import views

app_name = 'reserve'

urlpatterns = [
    path('calendar/', views.calendar_view, name='calendar'),

    # path('create/', views.create_reservation, name='create_reservation'),  # مسیر ایجاد رزرو
    # path('<int:reservation_id>/', views.view_reservation, name='view_reservation'),  # مسیر نمایش جزئیات رزرو با استفاده از شناسه
    # مسایل دیگر...
]