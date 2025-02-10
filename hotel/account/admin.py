from django.contrib import admin

from .models import *


class UserprofileAdmin(admin.ModelAdmin):    
    list_display = ['mobile_number', 'gender', 'user_status']
    search_fields = ("mobile_number",)

admin.site.register(Userprofile, UserprofileAdmin)
