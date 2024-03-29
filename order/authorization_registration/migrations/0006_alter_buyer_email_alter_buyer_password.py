# Generated by Django 4.2.5 on 2023-10-20 16:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authorization_registration', '0005_buyer_groups_buyer_is_superuser_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='buyer',
            name='email',
            field=models.EmailField(max_length=254),
        ),
        migrations.AlterField(
            model_name='buyer',
            name='password',
            field=models.CharField(max_length=100, unique=True),
        ),
    ]
