from django.contrib import admin
from django.urls import path, include
from .views import room_calendar_view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', room_calendar_view, name='room_calendar_view'),
    path('reserve/', include('reserve.urls')),
    path('account/', include('account.urls')),
]
