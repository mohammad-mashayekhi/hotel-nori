from django import forms
from .models import Coupon
from django_select2.forms import Select2MultipleWidget


class CouponForm(forms.ModelForm):
    class Meta:
        model = Coupon
        fields = ['name', 'code', 'users', 'valid_from', 'valid_to', 'discount', 'is_active']
        widgets = {
            'name': forms.TextInput(attrs={'class': 'form-control'}),
            'code': forms.TextInput(attrs={'class': 'form-control'}),
            'users': Select2MultipleWidget(attrs={'class': 'form-control'}),
            'valid_from': forms.DateInput(attrs={'type': 'text', 'class': 'form-control',  'id': 'valid_from'}),
            'valid_to': forms.DateInput(attrs={'type': 'text', 'class': 'form-control', 'id': 'valid_to'}),
            'discount': forms.NumberInput(attrs={'class': 'form-control'}),
            'is_active': forms.CheckboxInput(attrs={'class': 'form-check-input'}),
        }