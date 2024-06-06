from django.contrib import admin
from django.urls import include, path

from . import views

app_name = "account"

urlpatterns = [
    path("", views.account, name="dashboard"),
    path("bill/", views.bill, name="bill"),
    path("bill/<str:reserve_id>/", views.bill_detail, name="billdetail"),
    path("bill/print/<str:reserve_id>/", views.bill_print, name="billprint"),
    path("users/", views.users, name="users"),
    path("edituser/<int:user_id>/", views.edit_user, name="edit_user"),
    path("rooms/", views.rooms, name="rooms"),
    path("user_bill/", views.user_bill, name="user_bill"),
    path("login/", views.login, name="login"),
    path("register/", views.register, name="register"),
    path("logout/", views.logout_user, name="logout"),
    path("password_reset_request/", views.password_reset_request, name="password_reset_request"),
    path("otp_validation/<uidb64>/", views.otp_validation, name="otp_validation"),
    path("password_reset_set/<uidb64>/<token>/", views.PasswordResetSetView.as_view(), name="password_reset_set")
]
