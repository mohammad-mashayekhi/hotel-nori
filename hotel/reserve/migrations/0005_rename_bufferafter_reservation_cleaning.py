# Generated by Django 5.0.3 on 2024-04-28 16:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('reserve', '0004_alter_reservation_end_alter_reservation_start'),
    ]

    operations = [
        migrations.RenameField(
            model_name='reservation',
            old_name='bufferAfter',
            new_name='cleaning',
        ),
    ]
