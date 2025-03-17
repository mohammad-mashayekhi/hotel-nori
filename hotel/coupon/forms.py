from django import forms
from .models import Coupon
from django_select2.forms import ModelSelect2MultipleWidget
import jdatetime


class UserSelector(ModelSelect2MultipleWidget):
    search_fields = ["mobile_number__icontains"]


class CouponForm(forms.ModelForm):
    valid_from = forms.CharField(widget=forms.TextInput(
        attrs={
            'type': 'text',
            'class': 'form-control',
            'placeholder': 'لظفا تاریخ شروع را انتخاب کنید',
            'id': "valid_from",
        }
    )
    )
    valid_to = forms.CharField(widget=forms.TextInput(
        attrs={
            'type': 'text',
            'class': 'form-control',
            'placeholder': 'لطفا تاریخ پایان را انتخاب کنید',
            'id': "valid_to"
        }
    )
    )

    class Meta:
        model = Coupon
        fields = ["name", "code", "users", "allowed_users", "valid_from", "valid_to", "discount", "is_active"]
        widgets = {
            'name': forms.TextInput(attrs={'class': 'form-control'}),
            'code': forms.TextInput(attrs={'class': 'form-control'}),
            'users': UserSelector(attrs={'class': 'form-control'}),
            'allowed_users': UserSelector(attrs={'class': 'form-control'}),
            'discount': forms.NumberInput(attrs={'class': 'form-control'}),
            'is_active': forms.CheckboxInput(attrs={'class': 'form-check-input'}),
        }

    def clean_valid_from(self):
        valid_from = self.cleaned_data['valid_from']
        try:
            valid_from = jdatetime.datetime.strptime(valid_from, "%Y/%m/%d").togregorian()
        except ValueError:
            raise forms.ValidationError("تاریخ معتبر نمی باشد")
        return valid_from

    def clean_valid_to(self):
        valid_to = self.cleaned_data['valid_to']
        try:
            valid_to = jdatetime.datetime.strptime(valid_to, "%Y/%m/%d").togregorian()
        except ValueError:
            raise forms.ValidationError("تاریخ معتبر نمی باشد")

        valid_from = self.cleaned_data['valid_from']

        if valid_from > valid_to:
            raise forms.ValidationError('تاریخ شروع نمی تواند بعد از تاریخ پایان باشد')

        return valid_to
