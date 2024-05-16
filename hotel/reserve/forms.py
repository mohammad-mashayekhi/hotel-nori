from django import forms
from .models import Reservation, Resource
from django_select2 import forms as s2forms


class ReservationForm(forms.ModelForm):
    class Meta:
        model = Reservation
        fields = ['start', 'end', 'title', 'author', 'user', 'paid', 'payment_id', 'resource']
        widgets = {
            'start': forms.DateInput(attrs={'class': 'datepicker'}),
            'end': forms.DateInput(attrs={'class': 'datepicker'}),
        }

    resource = forms.ModelChoiceField(
        queryset=Resource.objects.all(),
        label=("اتاق"),
        widget=s2forms.Select2Widget(
            attrs={'class': 'form-select', 'style': 'width: 100%;'}),
        empty_label='انتخاب اتاق'
    )    
