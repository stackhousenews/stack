# Generated by Django 5.0.3 on 2024-05-03 11:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('post', '0006_tag_post_tags'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='image_url',
            field=models.TextField(blank=True, null=True),
        ),
    ]
