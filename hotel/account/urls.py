from django.contrib import admin
from django.urls import path, include
from . import views

app_name = 'account'

urlpatterns = [
    path('', views.dashboaard, name='dashboard'),

    path('bill/', views.bill, name='bill'),
    path('users/', views.users, name='users'),
    path('calendar/', views.calendar, name='calendar'),
    path('rooms/', views.rooms, name='rooms'),
    path('user_bill/', views.user_bill, name='user_bill'),

    path('get_reservation_info/', views.get_reservation_info, name='get_reservation_info'),
    path('add_reservation/', views.add_reservation, name='add_reservation'),
    path('remove_reservation/', views.cancel_reservation, name='remove_reservation'),

]