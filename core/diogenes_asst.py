import os
# Configure settings for project
# Need to run this before calling models from application!
os.environ.setdefault('DJANGO_SETTINGS_MODULE','skiviers_backend.settings')
import django
# Import settings
django.setup()
import re

import requests
import json
from decouple import config
from openai import OpenAI
import time

def check_status(question):

    client = OpenAI(
        # This is the default and can be omitted
        api_key=config('DIOGENES_API_KEY'),
    )

    #assistant = client.beta.assistants.retrieve('asst_8XPNMtxSmoAbfR7kFuF5gA9G')

    thread = client.beta.threads.create(
    messages=[
        {
        "role": "user",
        "content": question,
        }
    ]
    )

    run = client.beta.threads.runs.create(
        thread_id=thread.id,
        assistant_id='asst_8XPNMtxSmoAbfR7kFuF5gA9G',
        model="gpt-4-turbo-preview",
        )

    while run.status == "queued" or run.status == "in_progress":
        run = client.beta.threads.runs.retrieve(
            thread_id=thread.id,
            run_id=run.id,
        )
        time.sleep(1)
        
    messages = client.beta.threads.messages.list(
    thread_id=thread.id
    )

    response = messages.data[0].content[0].text.value
    clean_response = re.sub("[\【].*?[\】]", '', response)
    

    return clean_response

    
    
