# def add_reminder_sms(request):
#     reservation_id = request.POST.get('reservation_id')

#     print(reservation_id)
#     try:
#         # یافتن رزرو مربوطه از پایگاه داده
#         reservation = Reservation.objects.get(reserve_id=reservation_id)

#         # Convert Gregorian date to Jalali date
#         jalali_start = jdatetime.datetime.fromgregorian(datetime=reservation.start)
#         jalali_end = jdatetime.datetime.fromgregorian(datetime=reservation.end)

#         # Format the Jalali dates as needed
#         formatted_start = jalali_start.strftime('%Y/%m/%d')
#         formatted_end = jalali_end.strftime('%Y/%m/%d')

#         send_message_accept_reserve('09106961316',reservation.resource,formatted_start,formatted_end,message='')
#         return JsonResponse({'success': True})
#     except Reservation.DoesNotExist:
#         # در صورت عدم یافتن رزرو، پاسخ خطای مناسب را برگردانید
#         return JsonResponse({'success': False, 'error': 'Reservation not found'}, status=404)
#     except Exception as e:
#         print(e)
#         # در صورت بروز هر خطای دیگری، پاسخ خطای مناسب را برگردانید
#         return JsonResponse({'success': False, 'error': str(e)}, status=500)

import secrets
from kavenegar import *

def send_message_accept_reserve(phone_number, room_id, enter_date, exit_date, message):
    API = "464F396F576F69626E74345432725037463339437954734C36743954524B57736A4877484C4D316A5A31413D"
    TEMPLATE = message
    RECEPTOR = convert_to_western_numerals(phone_number)  # Convert Persian numerals
    TOKEN = room_id
    TOKEN2 = enter_date
    TOKEN3 = exit_date
    TYPE = "sms"
    try:
        api = KavenegarAPI(API)
        params = {
            "receptor": RECEPTOR,
            "template": TEMPLATE,
            "token": TOKEN,
            "token2": TOKEN2,
            "token3": TOKEN3,
            "type": TYPE,
        }
        response = api.verify_lookup(params)
        print(response)
    except APIException as e:
        print(e)
    except HTTPException as e:
        print(e)

def send_otp_sms(phone_number, otp_code):
    API = '464F396F576F69626E74345432725037463339437954734C36743954524B57736A4877484C4D316A5A31413D'
    TEMPLATE = 'otpzemz'
    RECEPTOR = phone_number
    TOKEN = otp_code
    TYPE = 'sms'
    try:
        api = KavenegarAPI(API)
        params = {
        'receptor': RECEPTOR,
        'template': TEMPLATE,
        'token': TOKEN,
        'type': TYPE,
        'debugmode': "enabled"
    }
        response = api.verify_lookup(params)
    except APIException as e:
        print(e)
    except HTTPException as e:
        print(e)

def validate_otp(user, otp):
    """Validates the entered OTP code against the one sent to the user."""
    if user.otp == otp and user.otp_expiry > datetime.now():
        return True
    return False

def convert_to_western_numerals(persian_number):
    persian_to_western = {
        "۰": "0",
        "۱": "1",
        "۲": "2",
        "۳": "3",
        "۴": "4",
        "۵": "5",
        "۶": "6",
        "۷": "7",
        "۸": "8",
        "۹": "9",
    }
    return "".join(persian_to_western.get(char, char) for char in persian_number)


def otp_generator():
    otp_num = secrets.randbelow(99999)
    formatted_number = f"{otp_num:06}"  # if number is 123 it will be like 00123
    return formatted_number
