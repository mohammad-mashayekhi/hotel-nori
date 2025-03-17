from django.contrib import admin
from .models import *
import admin_thumbnails

@admin_thumbnails.thumbnail('images')
class ResourceImageInline(admin.TabularInline):
    model = ResourceImage
    readonly_fields = ('id',)
    extra = 1

class ReservationAdmin(admin.ModelAdmin):    
    list_display = ['reserve_id', 'title', 'author', 'user', 'paid', 'resource', 'total_pay', 'created_at']
    autocomplete_fields = ['author', 'user', 'resource']
    search_fields = ("reserve_id","title")

class ResourceAdmin(admin.ModelAdmin):    
    list_display = ['name', 'capacity', 'max_capacity', 'price', 'peak_price', 'price_per_person', 'status']
    inlines = [ResourceImageInline]
    search_fields = ("name",)

class PeaktimeAdmin(admin.ModelAdmin):    
    list_display = ['peaktime_id', 'start', 'end', 'author']

admin.site.register(Reservation, ReservationAdmin)
admin.site.register(Resource, ResourceAdmin)
admin.site.register(Peaktime, PeaktimeAdmin)

