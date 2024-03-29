# Generated by Django 5.0.2 on 2024-02-21 16:08

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Source',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('name', models.CharField(default='', max_length=280, verbose_name='Name')),
                ('url', models.CharField(blank=True, max_length=1000, null=True)),
                ('logo', models.CharField(blank=True, default='', max_length=5000, null=True, verbose_name='Logo')),
                ('slug', models.SlugField(allow_unicode=True, editable=False, max_length=280, unique=True)),
                ('created_by', models.ForeignKey(blank=True, editable=False, null=True, on_delete=django.db.models.deletion.PROTECT, related_name='source_created_by', to=settings.AUTH_USER_MODEL)),
                ('owned_by', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, related_name='source_owned_by', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'ordering': ['name'],
            },
        ),
    ]
