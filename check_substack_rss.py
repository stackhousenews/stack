import os
# Configure settings for project
# Need to run this before calling models from application!
os.environ.setdefault('DJANGO_SETTINGS_MODULE','skiviers_backend.settings')
import django
# Import settings
django.setup()

from substack import models as smds
from datetime import datetime
import feedparser
import re
from dateutil import parser

TAG_RE = re.compile(r'<[^>]+>')

char_rep = [
    ["&#8211;"," - "],
    ["<p>",""],
    ["</p>",""],
    ["&#8217;","'"],
    ["[&hellip;]","..."],
    ["[&#8230;]","..."],
    ["&amp;","&"],
    ["&#8220;",'"'],
    ["&#8221;",'"'],
    ["&lt;em",""],
    ["&gt;",""],
    ["&lt;/em",""],
    ["&gt;",""],
    ['&#x201c;','"'],
    ['&#x2019;',"'"],
    ['&#x201d;','"'],
    ['&#13;',''],
    ['&#x2018;',"'"],

]

def remtags(html_bit):
    if html_bit.find("<img"):
        start = html_bit.find("<img")
        end = html_bit[start:].find(">")
        html_bit = html_bit[:start] + html_bit[start+end+1:]
    if html_bit.find("<a"):
        _start = html_bit.find("<a")
        _end = html_bit[_start:].find(">")
        html_bit = html_bit[:_start] + html_bit[_start+_end+1:]

    for c in char_rep:
        html_bit = html_bit.replace(c[0],c[1])        
    return html_bit

def remove_tags(text):
    text = remtags(text)
    return TAG_RE.sub('', text)

def rss():
    thisrun = smds.SubstackRun.objects.get_or_create(started_at = datetime.now())[0]
    qry = smds.Source.objects.filter(active=True).order_by('name')

    for substack in qry:
            feed = feedparser.parse(substack.url + '/feed')
            for entry in feed.entries:
                title = remove_tags(entry.title)
                _author = remove_tags(entry.author)
                _author_name = _author.split()[0]
                _author_surname = _author.split()[1]
                author = smds.Author.objects.get_or_create(name=_author_name,surname=_author_surname)[0]
                subtitle = remove_tags(entry.description)
                link = entry.link
                published = parser.parse(entry.published)
                if entry.links[1]['href']:
                    image_link = entry.links[1]['href']
                else:
                    image_link = None
                content = remove_tags(entry.content[0]['value'])[-99997:]
                story = smds.Story.objects.get_or_create(source=substack,title=title,subtitle=subtitle,author=author,link=link,published=published)[0]
                if not story.image_link:
                    story.image_link = image_link
                    story.save() 
                if not story.content:
                    story.content = content
                    story.save()                    
                print(story)

    thisrun.finished_at = datetime.now()
    thisrun.status = "Finished"
    thisrun.save() 

rss()