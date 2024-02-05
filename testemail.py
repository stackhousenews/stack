from django.conf import settings
from django.core.mail import send_mail

settings.configure()

subject = 'Some subject'
from_email = 'contact@stackhouse.news'
message = 'This is my test message'
recipient_list = ['caufskiviers@gmail.com']


send_mail(subject, message, from_email, recipient_list, fail_silently=False)