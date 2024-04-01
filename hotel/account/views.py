from django.shortcuts import render


def dashboaard(request):
    return render(request, 'account/dashboard.html')

def calendar(request):
    return render(request, 'account/calendar.html')