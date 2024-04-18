from django import forms
from .models import Userprofile
from django.forms.widgets import Select, DateInput
from django.contrib.auth.forms import AuthenticationForm

class UserProfileEditForm(forms.ModelForm):
    class Meta:
        model = Userprofile
        fields = ['first_name', 'last_name', 'email', 'mobile_number', 'card_number', 'national_code', 'gender', 'birth_date', 'user_status']
        widgets = {
            'gender': Select(choices=[('male', 'مرد'), ('female', 'زن')]),
            'birth_date': DateInput(attrs={'class': 'form-control', 'type': 'date', 'data-mddatetimepicker': 'true', 'data-placement': 'auto'}),
        }

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        for field_name, field in self.fields.items():
            field.widget.attrs.update({'class': 'form-control'})
            field.widget.attrs.pop('autofocus', None)


class UserProfileEditFormUser(forms.ModelForm):
    class Meta:
        model = Userprofile
        fields = ['first_name', 'last_name', 'email' , 'card_number', 'national_code', 'gender', 'birth_date']
        widgets = {
            'gender': Select(choices=[('male', 'مرد'), ('female', 'زن')]),
            'birth_date': DateInput(attrs={'class': 'form-control', 'type': 'date', 'data-mddatetimepicker': 'true', 'data-placement': 'auto'}),
        }

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        for field_name, field in self.fields.items():
            field.widget.attrs.update({'class': 'form-control'})
            field.widget.attrs.pop('autofocus', None)


from django.contrib.auth.forms import UserCreationForm

class CustomUserCreationForm(UserCreationForm):
    terms = forms.BooleanField()

    class Meta(UserCreationForm.Meta):
        model = Userprofile
        fields = UserCreationForm.Meta.fields + ('terms',)
