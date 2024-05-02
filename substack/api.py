from rest_framework import generics, pagination
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from django.http import JsonResponse

from . import serializers as szrs
from . import models as smds
from core.diogenes_asst import check_status
from core.diogenes import create_headlines
import json

class Pagination(pagination.PageNumberPagination):
    page_size = 50
    page_size_query_param = 'page_size'

class StoryAPIView(generics.ListAPIView):
    """Provides the feed."""
    serializer_class = szrs.StorySerializer
    queryset = smds.Story.objects.exclude(source__active=False)
    pagination_class = Pagination
    permission_classes = [AllowAny]

class OneStoryAPIView(APIView):
    """Provides the onse story."""
    permission_classes = [AllowAny]

    def get(self, request, slug):
        story = smds.Story.objects.get(slug=slug)

        return JsonResponse({
            'post': szrs.StorySerializer(story).data
        })


class DiogenesCheckStatusAPIView(generics.GenericAPIView):
    """Create a Tweet."""
    permission_classes=[IsAuthenticated]

    def get(self,request):
        #hashtags will have a letter a at the beginning
        return Response(check_status().json())

class AskDiogenesAPIView(APIView):
    permission_classes=[AllowAny]

    def post(self,request):
        question = request.data['question']
        print(question)
        return Response(check_status(question))

class DiogenesHeadlinesAPIView(APIView):
    permission_classes=[AllowAny]

    def get(self,request):
        #hashtags will have a letter a at the beginning
        return Response(create_headlines().json())
