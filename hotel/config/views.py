from django.shortcuts import render

def home(request):
    return render(request, 'main/home.html')

def terms(request):
    return render(request, 'pages/terms.html')

def contact_us(request):
    return render(request, 'main/contact.html')

def success_page_register(request):
    return render(request, 'pages/success_page_register.html')


def custom_404_view(request, exception):
    return render(request, 'main/404.html', status=404)

