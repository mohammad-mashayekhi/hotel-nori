from datetime import timedelta
from django import forms
from django.core.validators import RegexValidator
from django_select2 import forms as s2forms
from django.db.models import Q
from .models import Reservation, Resource,Peaktime
from django.forms import modelformset_factory


RESERVATION_STATUS_CHOICES = [
        ('pending_payment', 'در انتظار پرداخت'),  # در انتظار پرداخت
        ('confirmed', 'تایید شده'),              # تایید شده
        ('onlocalpay', 'پرداخت حضوری'),              # تایید شده و پرداخت حضوری
        ('canceled', 'کنسل شده'),                # لغو شده
        ('closetime', 'زمان تعطیلی'),                # زمان تعطیلی
        ("cleaning", 'زمان نظافت')
    ]


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
        self.fields["title"].required = False


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
            print(self.cleaned_data["status"])
            if self.cleaned_data["mobile_number"]:
                return self.cleaned_data["mobile_number"]
            elif self.cleaned_data["status"] == "closetime":
                return self.user.mobile_number
            else:
                raise forms.ValidationError("این فیلد لازم است")


    def clean_status(self):
        if self.user.user_status == "verified":
            return "pending_payment"
        else:
            if self.cleaned_data["status"]:
                if self.cleaned_data["status"] == "closetime":
                    self.cleaned_data["title"] = " زمان تعطیل"
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
        more_capacity = self.cleaned_data.get("more_capacity", 0)  # تعداد نفرات بیشتر از ظرفیت مجاز

        # محاسبه تعداد روزها
        total_days = (end - start).days + 1

        # تنظیم مقدار اولیه برای قیمت کل
        total_pay = 0

        # تکرار در روزهای بین تاریخ شروع و پایان
        current_date = start
        while current_date <= end:
            # بررسی اینکه آیا این روز در زمان پیک است یا نه
            if Peaktime.objects.filter(start__lte=current_date, end__gte=current_date).exists():
                daily_rate = resource.peak_price
            else:
                daily_rate = resource.price

            # محاسبه قیمت برای این روز
            total_pay += daily_rate

            # محاسبه هزینه اضافی برای ظرفیت بیشتر
            if more_capacity > 0:
                '''
                mohammadour chnages extra_person_price to price_per_person because
                this field does not exist and resource model does not have extra_person_price
                '''
                # extra_person_charge = resource.extra_person_price
                extra_person_charge = resource.price_per_person 
                total_pay += more_capacity * extra_person_charge

            # روز بعد
            current_date += timedelta(days=1)

        return total_pay

    def clean(self):
        data = super().clean()

        # Check for overlapping reservations
        if overlap_checker(data, instance=self.instance):
            raise forms.ValidationError("در این زمان از قبل رزور صورت گرفته است.")
        return data

class ResourceForm(forms.ModelForm):
    class Meta:
        model = Resource
        fields = ['name', 'price', 'peak_price', 'status']
        labels = {
            'name': 'نام',
            'price': 'قیمت',
            'peak_price': 'قیمت در زمان پیک',
            'status': 'وضعیت',
        }
        widgets = {
            'name': forms.TextInput(attrs={'class': 'form-control'}),
            'price': forms.NumberInput(attrs={'class': 'form-control number-input'}),
            'peak_price': forms.NumberInput(attrs={'class': 'form-control number-input'}),
            'status': forms.CheckboxInput(attrs={'class': 'form-check-input'}),
        }

    def clean(self):
        cleaned_data = super().clean()
        for field in ['name','price', 'peak_price']:
            value = cleaned_data.get(field)
            if value in [None, '']:  # Check if value is None or empty string
                cleaned_data[field] = 0
        return cleaned_data
    
ResourceFormSet = modelformset_factory(Resource, form=ResourceForm, extra=0)

class PeaktimeForm(forms.ModelForm):
    
    class Meta:
        model = Peaktime
        fields = [
            "start",
            "end",
        ]
        widgets = {
            "start": forms.DateInput(attrs={"class": "datepicker"}),
            "end": forms.DateInput(attrs={"class": "datepicker"}),
        }

        labels = {
            "start": "تاریخ شروع",
            "end": "تاریخ پایان",
        }

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
    
    # def clean(self):
    #     data = super().clean()

        # # Check for overlapping reservations
        # if overlap_checker(data, instance=self.instance):
        #     raise forms.ValidationError("در این زمان از قبل رزور صورت گرفته است.")
        # return data


class AdminReservationChangeForm(forms.ModelForm):
    status = forms.ChoiceField(
        label="وضعیت رزرو",
        choices=RESERVATION_STATUS_CHOICES,
        widget=forms.Select(attrs={'class': 'form-control mt-2'}),
    )
    paid = forms.BooleanField(
        label="وضعیت پرداخت",
        widget=forms.CheckboxInput(attrs={'class': ''}),
        required=False,
    )
    class Meta:
        model = Reservation
        fields = ["status","paid"]