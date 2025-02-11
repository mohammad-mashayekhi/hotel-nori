import jdatetime
from django import forms
from django.contrib.auth.forms import AuthenticationForm, UsernameField
from django.forms.widgets import DateInput, Select, TextInput
from django.contrib.auth.forms import UserCreationForm
from django.core.validators import RegexValidator
from django.utils import timezone
from .models import Userprofile
from .utils import validate_otp
from django.core.validators import MaxLengthValidator

class UserProfileEditForm(forms.ModelForm):

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        for field_name, field in self.fields.items():
            field.widget.attrs.update({"class": "form-control"})
            field.widget.attrs.pop("autofocus", None)

    birth_date = forms.CharField(widget=DateInput(attrs={'id': 'id_birth_date'}))

    class Meta:
        model = Userprofile
        fields = [
            "first_name",
            "last_name",
            "email",
            "mobile_number",
            "card_number",
            "national_code",
            "gender",
            "birth_date",
            "user_status",
        ]

    def clean_birth_date(self):
        birth_date = self.cleaned_data['birth_date']
        try:
            birth_date = jdatetime.datetime.strptime(birth_date, "%Y/%m/%d").togregorian()
        except ValueError:
            raise forms.ValidationError("تاریخ معتبر نمی باشد")
        return birth_date


class UserProfileEditFormUser(forms.ModelForm):

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        for field_name, field in self.fields.items():
            field.widget.attrs.update({"class": "form-control"})
            field.widget.attrs.pop("autofocus", None)

    birth_date = forms.CharField(widget=DateInput(attrs={'id': 'id_birth_date'}))

    class Meta:
        model = Userprofile
        fields = [
            "first_name",
            "last_name",
            "email",
            "card_number",
            "national_code",
            "gender",
            "birth_date",
        ]
        widgets = {
            "gender": Select(choices=[("male", "مرد"), ("female", "زن")])
        }


class CustomUserCreationForm(UserCreationForm):
    username = None
    mobile_number = UsernameField(help_text="شماره تلفن همراه به صورت 09993334444 وارد شود")
    terms = forms.BooleanField(label="تیک قوانین")
    first_name = forms.CharField(
        label="نام",
        max_length=150,
        validators=[
            MaxLengthValidator(150, message='نام نمی‌تواند بیشتر از ۱۵۰ حرف باشد.')
        ],
        error_messages={
            'required': "پر کردن این فیلد الزامی است.",
        },
        required=True)
    last_name = forms.CharField(
        label="نام خانوادگی",
        max_length=150,
        validators=[
            MaxLengthValidator(150, message='نام خانوادگی نمی‌تواند بیشتر از ۱۵۰ حرف باشد.')
        ],
        error_messages={
            'required': "پر کردن این فیلد الزامی است.",
        },
        required=True)
    referrer = forms.CharField(
        label="نام معرف",
        max_length=100,
        validators=[
            MaxLengthValidator(100, message='نام معرف نمی‌تواند بیشتر از ۱۰۰ حرف باشد.')
        ],
        error_messages={
            'required': "پر کردن این فیلد الزامی است.",
        },
        required=True)

    class Meta(UserCreationForm.Meta):
        model = Userprofile
        fields = ("mobile_number", "password1", "password2", "first_name", "last_name", "referrer")


class PhoneNumberForm(forms.Form):
    phone_number = forms.CharField(validators=[RegexValidator(r'^09\d{9}$', message="شماره وارد شده معتبر نمی باشد")])


class OTPValidationForm(forms.Form):
    otp = forms.CharField(max_length=6)

    def __init__(self, user_otp=None,otp_expiry=None, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.user_otp = user_otp
        self.otp_expiry = otp_expiry

    def clean_otp(self):
        form_otp = self.cleaned_data['otp']
        user_otp = self.user_otp
        otp_expiry = self.otp_expiry
        if user_otp != int(form_otp) or timezone.now() > otp_expiry:
            raise forms.ValidationError("کد otp نا معتبر هست. دوباره سعی کنید یا یکی دیگر درخواست دهید.")
        return form_otp
