import secrets
from kavenegar import *
import os
import datetime


def send_otp_sms(phone_number, otp_code):
    API = os.getenv('API')
    TEMPLATE = 'ForgetPassword'
    RECEPTOR = phone_number
    TOKEN = otp_code
    TYPE = 'sms'
    try:
        api = KavenegarAPI(API)
        params = {
            'receptor': RECEPTOR,
            'template': TEMPLATE,
            'token': TOKEN,
            'type': TYPE
        }
        response = api.verify_lookup(params)
    except APIException as e:
        print(e)
    except HTTPException as e:
        print(e)

def send_signup_sms(phone_number):
    API = os.getenv('API')
    TEMPLATE = 'SignupMahdiyanReserve'
    RECEPTOR = phone_number
    TOKEN = phone_number
    TYPE = 'sms'
    try:
        api = KavenegarAPI(API)
        params = {
            'receptor': RECEPTOR,
            'template': TEMPLATE,
            'token': TOKEN,
            'type': TYPE
        }
        response = api.verify_lookup(params)
    except APIException as e:
        print(e)
    except HTTPException as e:
        print(e)

def send_verified_user_sms(phone_number):
    API = os.getenv('API')
    TEMPLATE = 'VerifyMahdiyanReserve'
    RECEPTOR = phone_number
    TOKEN = phone_number
    TYPE = 'sms'
    try:
        api = KavenegarAPI(API)
        params = {
            'receptor': RECEPTOR,
            'template': TEMPLATE,
            'token': TOKEN,
            'type': TYPE
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
    formatted_number = f"{otp_num:05}"  # if number is 123 it will be like 00123
    return formatted_number
