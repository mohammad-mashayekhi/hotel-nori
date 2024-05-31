from django import forms
from django.contrib.auth.forms import AuthenticationForm
from django.forms.widgets import DateInput, Select
from django.contrib.auth.forms import UserCreationForm
from django.core.validators import RegexValidator
from .models import Userprofile
from .utils import validate_otp

class UserProfileEditForm(forms.ModelForm):
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
        widgets = {
            "gender": Select(choices=[("male", "مرد"), ("female", "زن")]),
            "birth_date": DateInput(
                attrs={
                    "class": "form-control",
                    "type": "date",
                    "data-mddatetimepicker": "true",
                    "data-placement": "auto",
                }
            ),
        }

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        for field_name, field in self.fields.items():
            field.widget.attrs.update({"class": "form-control"})
            field.widget.attrs.pop("autofocus", None)


class UserProfileEditFormUser(forms.ModelForm):
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
            "gender": Select(choices=[("male", "مرد"), ("female", "زن")]),
            "birth_date": DateInput(
                attrs={
                    "class": "form-control",
                    "type": "date",
                    "data-mddatetimepicker": "true",
                    "data-placement": "auto",
                }
            ),
        }

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        for field_name, field in self.fields.items():
            field.widget.attrs.update({"class": "form-control"})
            field.widget.attrs.pop("autofocus", None)





class CustomUserCreationForm(UserCreationForm):
    terms = forms.BooleanField()

    class Meta(UserCreationForm.Meta):
        model = Userprofile
        fields = UserCreationForm.Meta.fields + ("terms",)


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
        if user_otp == form_otp and otp_expiry > datetime.now():
            raise forms.ValidationError("Invalid OTP. Please enter a valid OTP or request a new one.")
        return form_otp
