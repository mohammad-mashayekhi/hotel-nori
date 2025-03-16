import datetime
import jdatetime
from django.shortcuts import render, redirect
from django.urls import reverse
from django.contrib import messages
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from django.views.decorators.http import require_POST
from .models import Coupon
from .forms import CouponForm
from reserve.models import Reservation
from reserve.decorators import verified_required, admin_required


@verified_required
@admin_required
def create_coupon(request):
    if request.method == "POST":
        form = CouponForm(request.POST)
        if form.is_valid():
            coupon = form.save(commit=False)
            coupon.author = request.user
            coupon.save()
            return redirect("coupon:list")
    else:
        form = CouponForm()
    return render(request, "coupon/coupon_add_update.html", {"form": form})


def update_coupon(request, uuid):
    coupon = Coupon.objects.get(uuid=uuid)
    if request.method == "POST":
        form = CouponForm(request.POST, instance=coupon)
        if form.is_valid():
            form.save()
            return redirect("coupon:list")
        else:
            return render(request, "coupon/coupon_add_update.html", {"form": form})
    else:
        # Convert Gregorian dates to Jalali before passing to the form
        jalali_start_date = jdatetime.date.fromgregorian(date=coupon.valid_from).strftime("%Y/%m/%d")
        jalali_end_date = jdatetime.date.fromgregorian(date=coupon.valid_to).strftime("%Y/%m/%d")

        initial_data = {
            'valid_from': jalali_start_date,
            'valid_to': jalali_end_date,
        }
        form = CouponForm(instance=coupon, initial=initial_data)
        return render(request, "coupon/coupon_add_update.html", {"form": form})

@verified_required
@admin_required
def coupon_list(request):
    coupons = Coupon.objects.all().order_by("-id")
    valid_coupons = coupons.filter(is_active=True).count()
    return render(
        request,
        "coupon/coupon_list.html",
        {"coupons": coupons, "valid_coupons": valid_coupons},
    )


@require_POST
def apply(request):
    coupon = request.POST.get("coupon")
    reservation_id = request.POST.get("reservation_id")
    reservation = Reservation.objects.get(reserve_id=reservation_id)
    try:
        coupon = Coupon.objects.get(
            code=coupon,
            users__id=reservation.user.id,
            valid_from__lte=datetime.datetime.now(),
            valid_to__gte=datetime.datetime.now(),
            is_active=True,
        )
        reservation.coupon = coupon
        reservation.save()
    except Coupon.DoesNotExist:
        messages.add_message(request, messages.ERROR, "این کد تخفیف معتبر نمی باشد")
    return redirect(reverse("reserve:billdetail", args=[reservation_id]))


@require_POST
def delete_coupon(request):
    uuid = request.POST.get("uuid")
    coupon = get_object_or_404(Coupon, uuid=uuid)
    coupon.delete()
    return JsonResponse({"success": True})
