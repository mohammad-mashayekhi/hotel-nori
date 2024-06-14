from django.contrib import admin
from django.urls import path, include
from .views import home , terms , success_page_register
from django.conf.urls.static import static
from django.conf import settings 

app_name = 'config'
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home, name='home'),
    path('reserve/', include('reserve.urls')),
    path('account/', include('account.urls')),
    path("coupon/", include("coupon.urls")),
    path('pages/terms', terms , name='terms'),
    path('pages/success_page_register', success_page_register , name='success_page_register'),
    path("zarinpal/", include("zarinpal.urls")),
]

urlpatterns += static(settings.MEDIA_URL,
                      document_root=settings.MEDIA_ROOT)  # media
urlpatterns += static(settings.STATIC_URL,
                      document_root=settings.STATIC_ROOT)  # static
