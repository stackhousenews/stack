from django.urls import path, include
from .api import StoryAPIView, DiogenesCheckStatusAPIView, AskDiogenesAPIView, DiogenesHeadlinesAPIView, OneStoryAPIView

urlpatterns = [
 
    path("stories/", StoryAPIView.as_view(), name="stories"),
    path("story/<slug:slug>/", OneStoryAPIView.as_view(), name='story_detail'),
    path("diogenes/check_status/", DiogenesCheckStatusAPIView.as_view(), name="diogenes-check-status"),
    path("diogenes/ask/", AskDiogenesAPIView.as_view(), name="ask-diogenes"),
    path("diogenes/headlines/", DiogenesHeadlinesAPIView.as_view(), name="headlines-diogenes"),

]