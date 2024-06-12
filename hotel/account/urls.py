from django.contrib import admin
from django.urls import include, path

from . import views

app_name = "account"

urlpatterns = [
    path("", views.update_profile, name="dashboard"),
    path("users/", views.users, name="users"),
    path("edituser/<int:user_id>/", views.edit_user_profile, name="edit_user"),
    path("login/", views.login, name="login"),
    path("register/", views.register, name="register"),
    path("logout/", views.logout_user, name="logout"),
    path("password_reset_request/", views.password_reset_request, name="password_reset_request"),
    path("otp_validation/<uidb64>/", views.otp_validation, name="otp_validation"),
    path("password_reset_set/<uidb64>/<token>/", views.PasswordResetSetView.as_view(), name="password_reset_set")
]
