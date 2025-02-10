from django.contrib import admin
from .models import Coupon


class CouponAdmin(admin.ModelAdmin):    
    list_display = ['name', 'code', 'valid_from', 'valid_to', 'discount', 'is_active']
    filter_horizontal = ('users',) 

admin.site.register(Coupon, CouponAdmin)
