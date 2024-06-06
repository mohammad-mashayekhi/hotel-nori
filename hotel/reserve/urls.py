from django.contrib import admin
from django.urls import path, include
from . import views

app_name = 'reserve'

urlpatterns = [
    path("reserve_schedule/", views.reserve_schedule, name="reserve_schedule"),
    path("get_reservation_info/", views.get_reservation_info, name="get_reservation_info"),
    path("add_reservation/", views.add_reservation, name="add_reservation"),
    path("remove_reservation/<reservation_id>", views.cancel_reservation, name="remove_reservation"),
]