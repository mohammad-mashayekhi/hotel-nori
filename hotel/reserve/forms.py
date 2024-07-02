from django import forms
from django.core.validators import RegexValidator
from django_select2 import forms as s2forms
from django.db.models import Q
from .models import Reservation, Resource


class ReservationForm(forms.ModelForm):
    mobile_number = forms.CharField(label="شماره تلفن", validators=[RegexValidator(r'^09\d{9}$', message="شماره وارد شده معتبر نمی باشد")])
    resource = forms.ModelChoiceField(
        queryset=Resource.objects.all(),
        label=("اتاق"),
        widget=s2forms.Select2Widget(
            attrs={'class': 'form-select', 'style': 'width: 100%;'}),
        empty_label='انتخاب اتاق'
    )

    class Meta:
        model = Reservation
        fields = ['title', 'start', 'end', 'resource', 'status', 'cleaning', 'more_capacity', 'paid', 'total_pay']
        widgets = {
            'start': forms.DateInput(attrs={'class': 'datepicker'}),
            'end': forms.DateInput(attrs={'class': 'datepicker'}),
        }

        labels = {
            'title': 'عنوان',
            'start': 'تاریخ شروع',
            'end': 'تاریخ پایان',
            'status': 'وضعیت',
            'cleaning': 'نظافت',
            'more_capacity': 'ظرفیت بیشتر',
            'paid': 'پرداخت شده',
            'total_pay': 'مبلغ کل'
        }

    def clean(self):
        data = super().clean()
        data["start"] = data["start"].replace(hour=12, minute=0, second=0,tzinfo=None)
        data["end"] = data["end"].replace(hour=14, minute=0, second=0, tzinfo=None)

        # Check for overlapping reservations
        if self.instance:
            overlapping_reservations = Reservation.objects.filter(
                resource_id=data["resource"],
                status__in=["pending_payment", "confirmed"],
            ).exclude(Q(end__lte=data['start']) | Q(start__gte=data['end']) | Q(reserve_id=self.instance.reserve_id))
        else:
            overlapping_reservations = Reservation.objects.filter(
                resource_id=data["resource"],
                status__in=["pending_payment", "confirmed"],
            ).exclude(Q(end__lte=data['start']) | Q(start__gte=data['end']))

        if overlapping_reservations.exists():
            raise forms.ValidationError("در این زمان از قبل رزور صورت گرفته است.")
        return data

