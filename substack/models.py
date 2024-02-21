from django.db import models
from django.conf import settings
from datetime import datetime, timezone
from dateutil import relativedelta

# Create your models here.
class Source(models.Model):
    created_by = models.ForeignKey(settings.AUTH_USER_MODEL, related_name="source_created_by",on_delete=models.PROTECT,editable=False,blank=True,null=True)
    owned_by = models.ForeignKey(settings.AUTH_USER_MODEL, related_name="source_owned_by",on_delete=models.PROTECT,editable=True,blank=True,null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    name = models.CharField(verbose_name='Name',max_length=280, default='')
    description = models.TextField(verbose_name='Description',max_length=1000, default='', blank=True, null=True)
    url = models.CharField(max_length=1000,blank=True,null=True)
    logo = models.CharField(verbose_name='Logo',max_length=5000, default='',blank=True,null=True)
    slug = models.SlugField(allow_unicode=True, unique=True,max_length=280,editable=False)
    active = models.BooleanField(default=True)
 
    def __str__(self):
        return self.name

    class Meta:
        ordering = ["name"]

class SubstackRun(models.Model):
    started_at = models.DateTimeField(blank=True,null=True)
    status = models.CharField(max_length=1000,blank=True,null=True,default="Started")
    finished_at = models.DateTimeField(blank=True,null=True)

    def __str__(self):
        return self.started_at.strftime("%m/%d/%Y, %H:%M:%S") + " - " + self.status

class Author(models.Model):
    name = models.CharField(verbose_name='Name',max_length=280, default='')
    surname = models.CharField(verbose_name='Surame',max_length=280, default='')
    account = models.ForeignKey(settings.AUTH_USER_MODEL, related_name="author_account",on_delete=models.PROTECT,editable=True,blank=True,null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    slug = models.SlugField(allow_unicode=True, unique=True,max_length=280,editable=False)
 
    def __str__(self):
        return self.name + " " + self.surname

    class Meta:
        ordering = ["name","surname"]

class StoryTag(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    slug = models.SlugField(allow_unicode=True, unique=True,max_length=280,editable=False)
    tag = models.CharField(max_length=1000,blank=True,null=True)

    def __str__(self):
        return self.tag
    
    class Meta:
        ordering = ["tag"]

STORY_TYPE_CHOICES = (('1','Article'),('2','Video'),('3','Podcast'))
class Story(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    title = models.CharField(max_length=1000,blank=True,null=True)
    author = models.ForeignKey(Author, related_name="story_author",on_delete=models.PROTECT,editable=True,blank=True,null=True)
    source = models.ForeignKey(Source, related_name="story_source",on_delete=models.PROTECT,editable=True,blank=True,null=True)
    subtitle = models.CharField(max_length=1000,blank=True,null=True)
    link = models.CharField(max_length=1000,unique=True)
    image_link = models.CharField(max_length=1000,blank=True,null=True)
    published = models.DateTimeField(blank=True, null=True)
    story_type = models.CharField(max_length=200,choices=STORY_TYPE_CHOICES,null=True,blank=True,default='1')
    likes = models.ManyToManyField(settings.AUTH_USER_MODEL,
                                    related_name="story_likes",blank=True)
    dislikes = models.ManyToManyField(settings.AUTH_USER_MODEL,
                                    related_name="story_dislikes",blank=True)
    slug = models.SlugField(max_length=280,allow_unicode=True, unique=True)
    tags = models.ManyToManyField(StoryTag,related_name="news_tags",blank=True)                

    def __str__(self):
        return self.title

    @property
    def timelapsed(self):
        nowtime = datetime.now(timezone.utc)
        #This will find the difference between the two dates
        difference = relativedelta.relativedelta(nowtime, self.published)
        days = difference.days
        hours = difference.hours
        minutes = difference.minutes
        months = difference.months
        years = difference.years

        timelapsed = "{}m".format(minutes) if minutes > 0 else "Just now"
        if hours > 0: timelapsed = "{}h".format(hours)
        if days > 0: timelapsed = "{}d".format(days)
        if months > 0: timelapsed = "{}M".format(months)
        if years > 0: timelapsed = "{}Y".format(years)

        return timelapsed

    class Meta:
        ordering = ["-published"]