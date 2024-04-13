import os
# Configure settings for project
# Need to run this before calling models from application!
os.environ.setdefault('DJANGO_SETTINGS_MODULE','skiviers_backend.settings')
import django
# Import settings
django.setup()

import requests
import json
from decouple import config

from post import models as pmds
from datetime import datetime
import feedparser
import re

def check_status(question):

    openai_api_key = config('DIOGENES_API_KEY')

    if openai_api_key is None:
        raise ValueError("OpenAI API key is not set in environment variables.")

    url = "https://api.openai.com/v1/chat/completions"

    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {openai_api_key}"
    }

    data = {
        "model": "gpt-4-turbo-preview",
        "messages": [
            {
                "role": "system",
                "content": "You are a helpful assistant."
            },
            {
                "role": "user",
                "content": question
            }
        ]
    }

    response = requests.post(url, headers=headers, json=data)

    print(response)

    # Check if the request was successful
    if response.status_code == 200:
        pass
        #print("Response from OpenAI:", response.json())
        #print('\n')
        #print(response.json()['choices'][0]['message']['content'])
    else:
        print("Error:", response.status_code, response.text)

    return response

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

def create_headlines():

    openai_api_key = config('DIOGENES_API_KEY')

    if openai_api_key is None:
        raise ValueError("OpenAI API key is not set in environment variables.")

    url = "https://api.openai.com/v1/chat/completions"

    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {openai_api_key}"
    }

    feed = feedparser.parse('https://www.newsmax.com/rss/Newsfront/16/')
    for entry in feed.entries[0:9]:
        print(entry)
        content = remove_tags(entry.title)[-99997:] + " - " + remove_tags(entry.summary)[-99997:]

        data = {
            "model": "gpt-4-turbo-preview",
            "messages": [
                {
                    "role": "system",
                    "content": "You are a helpful assistant."
                },
                {
                    "role": "user",
                    "content": "I want you to write a brand new article, up to Associated Press standards, based on the following:" + content
                }
            ]
        }

        response = requests.post(url, headers=headers, json=data)

        pmds.Post.objects.create(body=response.json()['choices'][0]['message']['content'])

        # Check if the request was successful
        if response.status_code == 200:
            pass
            #print("Response from OpenAI:", response.json())
            #print('\n')
            #print(response.json()['choices'][0]['message']['content'])
        else:
            print("Error:", response.status_code, response.text)
