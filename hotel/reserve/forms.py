from datetime import timedelta
from django import forms
from django.core.validators import RegexValidator
from django_select2 import forms as s2forms
from django.db.models import Q
from .models import Reservation, Resource


def overlap_checker(data, instance=None):
    if instance:
        overlapping_reservations = Reservation.objects.filter(
            resource_id=data["resource"],
            status__in=["pending_payment", "confirmed"],
        ).exclude(
            Q(end__lte=data["start"])
            | Q(start__gte=data["end"])
            | Q(reserve_id=instance.reserve_id)
        )
    else:
        overlapping_reservations = Reservation.objects.filter(
            resource_id=data["resource"],
            status__in=["pending_payment", "confirmed"],
        ).exclude(Q(end__lte=data["start"]) | Q(start__gte=data["end"]))

    if overlapping_reservations.exists():
        return True
    return False


class ReservationForm(forms.ModelForm):
    def __init__(self, user=None, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.user = user
        self.fields["status"].required = False

    mobile_number = forms.CharField(
        label="شماره تلفن",
        validators=[
            RegexValidator(r"^09\d{9}$", message="شماره وارد شده معتبر نمی باشد")
        ],
        required=False,
    )
    resource = forms.ModelChoiceField(
        queryset=Resource.objects.all(),
        label=("اتاق"),
        widget=s2forms.Select2Widget(
            attrs={"class": "form-select", "style": "width: 100%;"}
        ),
        empty_label="انتخاب اتاق",
    )

    class Meta:
        model = Reservation
        fields = [
            "title",
            "start",
            "end",
            "resource",
            "status",
            "cleaning",
            "more_capacity",
            "paid",
            "total_pay",
        ]
        widgets = {
            "start": forms.DateInput(attrs={"class": "datepicker"}),
            "end": forms.DateInput(attrs={"class": "datepicker"}),
        }

        labels = {
            "title": "عنوان",
            "start": "تاریخ شروع",
            "end": "تاریخ پایان",
            "status": "وضعیت",
            "cleaning": "نظافت",
            "more_capacity": "ظرفیت بیشتر",
            "paid": "پرداخت شده",
            "total_pay": "مبلغ کل",
        }

    def clean_mobile_number(self):
        if self.user.user_status == "verified":
            return self.user.mobile_number
        else:
            if self.cleaned_data["mobile_number"]:
                return self.cleaned_data["mobile_number"]
            else:
                raise forms.ValidationError("این فیلد لازم است")

    def clean_status(self):
        if self.user.user_status == "verified":
            return "pending_payment"
        else:
            if self.cleaned_data["status"]:
                return self.cleaned_data["status"]
            else:
                raise forms.ValidationError("این فیلد لازم است")

    def clean_start(self):
        start_date = self.cleaned_data["start"].replace(
            hour=14, minute=0, second=0, tzinfo=None
        )
        return start_date

    def clean_end(self):
        end_date = self.cleaned_data["end"].replace(
            hour=12, minute=0, second=0, tzinfo=None
        )
        return end_date

    def clean_cleaning(self):
        if self.cleaned_data["cleaning"]:
            # cleaning start at the 14:00 of the reservation end date to the next day at 12:00
            cleaning_start = self.cleaned_data["start"] + timedelta(hours=2)
            cleaning_end = self.cleaned_data["end"] + timedelta(days=1)
            if overlap_checker(
                data={
                    "resource": self.cleaned_data["resource"],
                    "start": cleaning_start,
                    "end": cleaning_end,
                }
            ):
                return forms.ValidationError("در این زمان از قبل رزور صورت گرفته است.")

        return self.cleaned_data["cleaning"]

    def clean_total_pay(self):
        start = self.cleaned_data["start"]
        end = self.cleaned_data["end"]
        resource = self.cleaned_data["resource"]
        total_days = end - start
        # The addition of 2 is to ensure that both the start and end dates are counted
        total_pay = (total_days.days + 2) * resource.price
        return total_pay

    def clean(self):
        data = super().clean()

        # Check for overlapping reservations
        if overlap_checker(data, instance=self.instance):
            raise forms.ValidationError("در این زمان از قبل رزور صورت گرفته است.")
        return data
