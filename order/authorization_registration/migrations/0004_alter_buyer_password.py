# Generated by Django 4.2.5 on 2023-10-15 17:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authorization_registration', '0003_buyer_email_buyer_last_login_buyer_password'),
    ]

    operations = [
        migrations.AlterField(
            model_name='buyer',
            name='password',
            field=models.CharField(default='12345678', max_length=100, unique=True),
        ),
    ]
