# Generated by Django 4.2.5 on 2023-10-15 17:03

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('authorization_registration', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='buyer',
            name='email',
        ),
    ]
