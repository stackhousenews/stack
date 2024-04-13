import os
# Configure settings for project
# Need to run this before calling models from application!
os.environ.setdefault('DJANGO_SETTINGS_MODULE','skiviers_backend.settings')
import django
# Import settings
django.setup()

from substack import models as smds
import requests
#from bs4 import BeautifulSoup
from datetime import datetime

def scrape():
    thisrun = smds.SubstackRun.objects.get_or_create(started_at = datetime.now())[0]
    qry = smds.Source.objects.filter(active=True).order_by('name')

    for substack in qry:
        session=requests.session()
        headers={"User-Agent":"Mozilla/5.0 (X11; Linux x86_64; rv:60.0) Gecko/20100101 Firefox/60.0","Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"}
        req=session.get(substack.url + '/archive/',headers=headers)
        soup=BeautifulSoup(req.text)

        res = soup.find_all('div',{ 'class':['pencraft', 'pc-display-flex', 'pc-flexDirection-column', 'pc-padding-8', 'pc-reset', 'pc-borderRadius-sm'] })

        for headline in res:
            print(headline)
            _title = headline.find('a',{ 'class':['pencraft', 'pc-reset', '_line-height-24_17vpp_98', '_font-pub-headings_17vpp_140', '_size-17_17vpp_60', '_clamp_17vpp_256', '_clamp-3_17vpp_268', '_reset_17vpp_1'] })
            if _title:
                title = _title.text.strip()
            else:
                next
            _author = headline.find('a',{ 'class':'frontend-main-home-PostPreview-PostPreviewAuthors-module__link--XzaS3' }).text.strip()
            _author_name = _author.split()[0]
            _author_surname = _author.split()[1]
            author = smds.Author.objects.get_or_create(name=_author_name,surname=_author_surname)[0]
            subtitle = headline.find('a',{ 'class':'frontend-pencraft-Text-module__color-pub-secondary-text--OzRTa' }).text.strip()
            link = headline.find('a')['href']
            if headline.find('img'):
                image_link = headline.find('img')['src']
            published = headline.find('time')['datetime']
            story = smds.Story.objects.get_or_create(source=substack,title=title,subtitle=subtitle,author=author,link=link,image_link=image_link,published=published)[0]
            print(story)
            
    thisrun.finished_at = datetime.now()
    thisrun.status = "Finished"
    thisrun.save()

def active():
    author = smds.Author.objects.get(name="Cauf")
    print("Running...")
    qry = smds.Story.objects.exclude(author=author)
    for art in qry:
        art.source.active = False
        art.source.save()
        print(art)
        art.save()

active()
            
