import datetime
from django.shortcuts import render, redirect
from django.urls import reverse
from django.contrib import messages
from django.views.decorators.http import require_POST
from .models import Coupon


@require_POST
def apply(request):
    coupon = request.POST.get('coupon')
    print(coupon)
    reservation_id = request.POST.get('reservation_id')
    print(Coupon.objects.get(code=coupon,users__in=[request.user]))
    try:
        coupon = Coupon.objects.get(
            code=coupon,
            users__id=request.user.id,
            valid_from__lte=datetime.datetime.now(),
            valid_to__gte=datetime.datetime.now(),
            is_active=True)
        request.session['coupon'] = coupon.id
    except Coupon.DoesNotExist:
        request.session['coupon'] = None
        messages.add_message(request, messages.ERROR, 'این کد تخفیف معتبر نمی باشد')
    return redirect(reverse("reserve:billdetail", args=[reservation_id]))

