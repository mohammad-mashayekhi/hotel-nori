from django.urls import path
from . import views

app_name = 'coupon'

urlpatterns = [
    path("apply/", views.apply, name="apply"),
    path("create/", views.create_coupon, name="create"),
    path('delete-coupon/', views.delete_coupon, name='delete'),
    path('update-coupon/<uuid:uuid>', views.update_coupon, name='update'),
    path("list/", views.coupon_list, name="list"),
]
