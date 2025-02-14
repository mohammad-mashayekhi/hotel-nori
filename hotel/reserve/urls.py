from django.contrib import admin
from django.urls import path, include
from . import views

app_name = 'reserve'

urlpatterns = [
    path("reserve_schedule/", views.reserve_schedule, name="reserve_schedule"),
    path("peaktime/", views.peaktime, name="peaktime"),
    path("get_reservation_info/", views.get_reservation_info, name="get_reservation_info"),
    path("add_reservation/", views.add_reservation, name="add_reservation"),
    path("add_peaktime/", views.add_peaktime, name="add_peaktime"),
    #path("update_reservation/<reserve_id>/", views.update_reservation, name="update_reservation"),
    path("remove_reservation/<reservation_id>", views.cancel_reservation, name="remove_reservation"),
    path("bill/", views.list_of_bills, name="bill"),
    path("bill/<str:reserve_id>/", views.bill_detail, name="billdetail"),
    path("bill/print/<str:reserve_id>/", views.bill_print, name="billprint"),
    path("rooms/", views.rooms, name="rooms"),
    path("roomsprice/", views.roomsprice, name="roomsprice"),
    path("financial-report/<int:current_year_shamsi>/", views.financial_report, name="financial-report"),

]