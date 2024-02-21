from django.db.models.signals import pre_save
from django.dispatch import receiver
from django.utils.text import slugify

from core.utils import generate_random_string
from . import models

@receiver(pre_save, sender=models.Source)
def add_slug_to_source(sender, instance, *args, **kwargs):
    if instance and not instance.slug:
        slug = slugify(instance.name)
        random_string = generate_random_string()
        instance.slug = slug + "-" + random_string

@receiver(pre_save, sender=models.Author)
def add_slug_to_author(sender, instance, *args, **kwargs):
    if instance and not instance.slug:
        slug = slugify(instance.name + instance.surname)
        random_string = generate_random_string()
        instance.slug = slug + "-" + random_string

@receiver(pre_save, sender=models.StoryTag)
def add_slug_to_story_tag(sender, instance, *args, **kwargs):
    if instance and not instance.slug:
        slug = slugify(instance.tag)
        random_string = generate_random_string()
        instance.slug = slug + "-" + random_string

@receiver(pre_save, sender=models.Story)
def add_slug_to_story(sender, instance, *args, **kwargs):
    if instance and not instance.slug:
        slug = slugify(instance.title)
        random_string = generate_random_string()
        instance.slug = slug + "-" + random_string