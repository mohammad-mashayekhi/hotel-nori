# Generated by Django 5.0.3 on 2024-07-23 13:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reserve', '0023_alter_resource_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='resource',
            name='status',
            field=models.BooleanField(blank=True, default=True, null=True),
        ),
    ]
