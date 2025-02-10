from django.contrib import admin
from .models import *


class PaymentAdmin(admin.ModelAdmin):    
    list_display = ['refrence_id', 'user','reservation', 'payment_date', 'cost_paid', 'discount', 'paid_by_stuff']
    autocomplete_fields = ['reservation', 'user']

admin.site.register(Payment, PaymentAdmin)
