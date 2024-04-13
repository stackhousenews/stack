import os
# Configure settings for project
# Need to run this before calling models from application!
os.environ.setdefault('DJANGO_SETTINGS_MODULE','skiviers_backend.settings')
import django
# Import settings
django.setup()

from datetime import datetime
import feedparser
import re
from dateutil import parser
from substack import models as mds

def compile():
    qry = mds.Story.objects.all()

    for st in qry:
        story = "Title: " + st.title + "; Subtitle: " + st.subtitle + "; Source: " + st.source.name + "; Link: " + st.link + "; Published: " + st.published.strftime('%A, %d. %B %Y %I:%M%p') + "; Content: " + st.content
        try:
            with open('stories.txt', 'a') as f:
                f.write(story)
                f.close()
        except FileNotFoundError:
            print("The 'docs' directory does not exist")

compile()