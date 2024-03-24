# views.py
from django.shortcuts import render
from .models import Reservation, Resource
import json


def calendar_view(request):
    reservations = Reservation.objects.all()
    resources = Resource.objects.all()
    
    reservation_data = []
    for reservation in reservations:
        reservation_data.append({
            'start': reservation.start.strftime('%Y-%m-%dT%H:%M'),
            'end': reservation.end.strftime('%Y-%m-%dT%H:%M'),
            'title': reservation.title,
            'resource': reservation.resource_id,
        })
    
    resource_data = []
    for resource in resources:
        resource_data.append({
            'id': resource.id,
            'name': resource.name,
            'color': resource.color,
        })

    context = {
        'reservation_data': json.dumps(reservation_data),
        'resource_data': json.dumps(resource_data),
    }
    return render(request, 'calendar.html', context)