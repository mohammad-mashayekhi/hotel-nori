from datetime import datetime
from kavenegar import *
import os

def get_reservation_color(status):
    colors = {
        "confirmed": "#4A827C",
        "pending_payment": "#D1A975",
        "cleaning": "#DD5746",
    }
    return colors.get(status, "#000000")


def datetime_combine(date, time_str):
    time = datetime.strptime(time_str, "%H:%M").time()
    datetime_combined = datetime.combine(date, time)
    return datetime_combined


# def send_message_accept_reserve(phone_number, room_id, enter_date, exit_date, message):
#     API = "464F396F576F69626E74345432725037463339437954734C36743954524B57736A4877484C4D316A5A31413D"
#     TEMPLATE = message
#     RECEPTOR = convert_to_western_numerals(phone_number)  # Convert Persian numerals
#     TOKEN = room_id
#     TOKEN2 = enter_date
#     TOKEN3 = exit_date
#     TYPE = "sms"
#     try:
#         api = KavenegarAPI(API)
#         params = {
#             "receptor": RECEPTOR,
#             "template": TEMPLATE,
#             "token": TOKEN,
#             "token2": TOKEN2,
#             "token3": TOKEN3,
#             "type": TYPE,
#         }
#         response = api.verify_lookup(params)
#         print(response)
#     except APIException as e:
#         print(e)
#     except HTTPException as e:
#         print(e)


def send_reminder_reserve(phone_number, reserve_id):
    API = os.getenv('API')
    TEMPLATE = "ReminderPayment"
    RECEPTOR = phone_number 
    TOKEN = reserve_id
    TYPE = "sms"
    try:
        api = KavenegarAPI(API)
        params = {
            "receptor": RECEPTOR,
            "template": TEMPLATE,
            "token": TOKEN,
            "type": TYPE
        }
        response = api.verify_lookup(params)
        print(response)
    except APIException as e:
        print(e)
    except HTTPException as e:
        print(e)


def send_online_payment_reserve(phone_number, reserve_id):
    API = os.getenv('API')
    TEMPLATE = "OnlinePayment"
    RECEPTOR = phone_number 
    TOKEN = reserve_id
    TYPE = "sms"
    try:
        api = KavenegarAPI(API)
        params = {
            "receptor": RECEPTOR,
            "template": TEMPLATE,
            "token": TOKEN,
            "type": TYPE
        }
        response = api.verify_lookup(params)
        print(response)
    except APIException as e:
        print(e)
    except HTTPException as e:
        print(e)


def send_completed_reserve_reserve(phone_number, start_date, end_date):
    API = os.getenv('API')
    TEMPLATE = "CompletedReserve"
    RECEPTOR = phone_number 
    TOKEN = start_date
    TOKEN2 = end_date
    TYPE = "sms"
    try:
        api = KavenegarAPI(API)
        params = {
            "receptor": RECEPTOR,
            "template": TEMPLATE,
            "token": TOKEN,
            'token2': TOKEN2,
            "type": TYPE
        }
        response = api.verify_lookup(params)
        print(response)
    except APIException as e:
        print(e)
    except HTTPException as e:
        print(e)


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
