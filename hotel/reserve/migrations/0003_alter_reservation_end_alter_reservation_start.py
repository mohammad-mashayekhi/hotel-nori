# Generated by Django 5.0.3 on 2024-04-22 04:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reserve', '0002_remove_resource_capacity_resource_number_area_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reservation',
            name='end',
            field=models.DateTimeField(),
        ),
        migrations.AlterField(
            model_name='reservation',
            name='start',
            field=models.DateTimeField(),
        ),
    ]
