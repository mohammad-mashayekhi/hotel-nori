# Generated by Django 5.0.3 on 2024-07-14 13:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("reserve", "0017_alter_reservation_status"),
    ]

    operations = [
        migrations.AddField(
            model_name="resource",
            name="css",
            field=models.CharField(default="room1", max_length=7),
            preserve_default=False,
        ),
    ]
