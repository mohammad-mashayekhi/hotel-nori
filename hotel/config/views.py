from django.shortcuts import render

def home(request):
    return render(request, 'main/home.html')

def terms(request):
    return render(request, 'pages/terms.html')