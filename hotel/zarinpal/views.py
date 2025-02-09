import json
import requests
from django.http import HttpResponse
from django.shortcuts import render, get_object_or_404, redirect
from django.conf import settings
from django.urls import reverse
from django.shortcuts import redirect
from reserve.models import Reservation
from coupon.models import Coupon
from .utils import get_payment_status_description
from .models import Payment
import os
if settings.SANDBOX:
    sandbox = 'sandbox'
else:
    sandbox = 'www'

ZP_API_REQUEST = f"https://{sandbox}.zarinpal.com/pg/rest/WebGate/PaymentRequest.json"
ZP_API_VERIFY = f"https://{sandbox}.zarinpal.com/pg/rest/WebGate/PaymentVerification.json"
ZP_API_STARTPAY = f"https://{sandbox}.zarinpal.com/pg/StartPay/"


# Important: need to edit for realy server.

if os.getenv('SERVER') == "True":
    print(os.getenv('SERVER'))
    CallbackURL = 'https://mahdiyanreserve.ir/zarinpal/verify/'
else:
    print(os.getenv('SERVER'))
    CallbackURL = 'http://127.0.0.1:8000/zarinpal/verify/'


def send_request(request):
    reservation = get_object_or_404(Reservation, reserve_id=request.POST.get('order_id'))
    if request.session.get("coupon"):
        coupon = Coupon.objects.get(id=request.session.get("coupon"))
        amount = coupon.get_total_pay_with_discount(reservation.total_pay)
    else:
        amount = reservation.total_pay
    data = {
        "MerchantID": settings.MERCHANT,
        "Amount": float(amount),
        "Description": f"صورت حساب رزرو حسینیه به شماره فاکتور {reservation.reserve_id}",
        "Phone": request.user.mobile_number,
        "order_id": request.POST["order_id"],
        "CallbackURL": CallbackURL,
    }
    data = json.dumps(data)
    # set content length by data
    headers = {'content-type': 'application/json', 'content-length': str(len(data))}
    try:
        response = requests.post(ZP_API_REQUEST, data=data, headers=headers, timeout=10)

        if response.status_code == 200:
            response = response.json()
            if response['Status'] == 100:
                data = {'status': True, 'url': ZP_API_STARTPAY + str(response['Authority'] + "/?order_id=" +request.POST["order_id"]),
                        'authority': response['Authority']}
                request.session["order_id"] = request.POST["order_id"]
                return redirect(data["url"])
            else:
                data = {'status': False, 'code': str(response['Status'])}
            return HttpResponse(json.dumps(data), content_type='application/json')

        return HttpResponse(json.dumps({'status': False, 'code': response.status_code}), content_type='application/json')

    except requests.exceptions.Timeout:
        return {'status': False, 'code': 'timeout'}
    except requests.exceptions.ConnectionError:
        return {'status': False, 'code': 'connection error'}


def verify(request):
    order_id = request.session["order_id"]
    reservation = get_object_or_404(Reservation, reserve_id=order_id)
    if request.session.get("coupon"):
        coupon = Coupon.objects.get(id=request.session.get("coupon"))
        amount = coupon.get_total_pay_with_discount(reservation.total_pay)
    else:
        amount = reservation.total_pay
    data = {
        "MerchantID": settings.MERCHANT,
        "Amount": float(amount),
        "Authority": request.GET["Authority"],
    }
    data = json.dumps(data)
    # set content length by data
    headers = {'content-type': 'application/json', 'content-length': str(len(data))}
    if request.GET.get("Status") == "OK":
        response = requests.post(ZP_API_VERIFY, data=data, headers=headers)
        response = response.json()
        print(response)
        if response['Status'] == 100 or response['Status'] == 101:
            payment = Payment(card_number=response.get('CardPan', "502229******5995"),
                              refrence_id=response['RefID'],
                              cost_paid=amount,
                              reservation=reservation,
                              user=request.user,
                              )

            reservation.paid = True
            reservation.status = "confirmed"

            if request.session.get("coupon"):
                discount = coupon.get_discount(reservation.total_pay)
                payment.discount = discount
                coupon.users.remove(reservation.user)
                coupon.save()
                request.session.pop('coupon')
            reservation.save()
            payment.save()
            data = {'status': True, 'RefID': response['RefID'], 'amount': reservation.total_pay,}
            return render(request, "zarinpal/purchase_status.html", context=data)
        else:
            code_desciption = get_payment_status_description(response["Status"])
            data = {'status': False, 'code': str(response['Status']), "description": code_desciption}
            return render(request, "zarinpal/purchase_status.html", context=data)
    else:
        return render(request, "zarinpal/purchase_status.html", context={"NOK": False})