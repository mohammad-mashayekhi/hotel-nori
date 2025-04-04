# Generated by Django 5.0.3 on 2024-06-09 14:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("reserve", "0014_alter_reservation_end_alter_reservation_start"),
    ]

    operations = [
        migrations.AlterField(
            model_name="reservation",
            name="created_at",
            field=models.DateTimeField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name="reservation",
            name="status",
            field=models.CharField(
                choices=[
                    ("pending_payment", "در انتظار پرداخت"),
                    ("confirmed", "تایید شده"),
                    ("cancelled", "کنسل شده"),
                    ("closetime", "زمان تعطیلی"),
                ],
                default="pending_payment",
                max_length=20,
            ),
        ),
    ]
