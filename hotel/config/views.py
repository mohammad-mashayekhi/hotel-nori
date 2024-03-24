from django.shortcuts import render

def room_calendar_view(request):
    return render(request, 'home.html')
