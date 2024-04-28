from django.contrib import admin
from django.urls import path, include
from . import views

app_name = 'account'

urlpatterns = [
    path('', views.account, name='dashboard'),

    path('bill/', views.bill, name='bill'),
    path('users/', views.users, name='users'),
    path('edituser/<int:user_id>/', views.edit_user, name='edit_user'),

    path('calendar/', views.calendar, name='calendar'),
    path('rooms/', views.rooms, name='rooms'),
    path('user_bill/', views.user_bill, name='user_bill'),

    path('login/', views.login, name='login'),
    path('register/', views.register, name='register'),
    path('logout/', views.logoutUser, name="logout"),

    path('get_reservation_info/', views.get_reservation_info, name='get_reservation_info'),
    path('add_reservation/', views.add_reservation, name='add_reservation'),
    path('remove_reservation/', views.cancel_reservation, name='remove_reservation'),
    path('addـreminderـsms/', views.add_reminder_sms, name='addـreminderـsms'),

]