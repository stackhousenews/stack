import os
# Configure settings for project
# Need to run this before calling models from application!
os.environ.setdefault('DJANGO_SETTINGS_MODULE','skiviers_backend.settings')
import django
# Import settings
django.setup()

from substack import models as smds
import requests
from bs4 import BeautifulSoup
from datetime import datetime

def scrape():
    thisrun = smds.SubstackRun.objects.get_or_create(started_at = datetime.now())[0]
    qry = smds.Source.objects.filter(active=True).order_by('name')

    for substack in qry:
        session=requests.session()
        headers={"User-Agent":"Mozilla/5.0 (X11; Linux x86_64; rv:60.0) Gecko/20100101 Firefox/60.0","Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"}
        req=session.get(substack.url + '/archive/',headers=headers)
        soup=BeautifulSoup(req.text)

        res = soup.find_all('div',{ 'class':'frontend-main-home-PostPreview-index-module__container--gXuU1' })

        for headline in res:
            title = headline.find('a',{ 'class':'frontend-pencraft-Text-module__font-pub-headings--lbOZ2' }).text.strip()
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

scrape()