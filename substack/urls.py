from django.urls import path, include
from .api import StoryAPIView

urlpatterns = [
 
    path("stories/", StoryAPIView.as_view(), name="stories"),

]