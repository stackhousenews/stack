# Generated by Django 5.0.3 on 2024-04-01 20:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('post', '0002_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='headline',
            field=models.TextField(blank=True, null=True),
        ),
    ]
