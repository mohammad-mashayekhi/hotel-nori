# Generated by Django 5.0.3 on 2024-07-15 14:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("coupon", "0003_alter_coupon_discount"),
    ]

    operations = [
        migrations.AlterField(
            model_name="coupon",
            name="is_active",
            field=models.BooleanField(default=False),
        ),
    ]
