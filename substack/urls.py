from django.urls import path, include
from .api import StoryAPIView, DiogenesCheckStatusAPIView

urlpatterns = [
 
    path("stories/", StoryAPIView.as_view(), name="stories"),
    path("diogenes/check_status/", DiogenesCheckStatusAPIView.as_view(), name="diogenes-check-status"),

]