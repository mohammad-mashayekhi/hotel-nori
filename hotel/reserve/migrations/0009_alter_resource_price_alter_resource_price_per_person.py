# Generated by Django 5.0.3 on 2024-05-09 07:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reserve', '0008_resource_price'),
    ]

    operations = [
        migrations.AlterField(
            model_name='resource',
            name='price',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='resource',
            name='price_per_person',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
