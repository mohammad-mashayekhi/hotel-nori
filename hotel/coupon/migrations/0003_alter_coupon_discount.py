# Generated by Django 5.0.3 on 2024-07-15 14:18

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("coupon", "0002_coupon_uuid"),
    ]

    operations = [
        migrations.AlterField(
            model_name="coupon",
            name="discount",
            field=models.DecimalField(
                decimal_places=0,
                max_digits=3,
                validators=[
                    django.core.validators.MinValueValidator(1),
                    django.core.validators.MaxValueValidator(100),
                ],
            ),
        ),
    ]
