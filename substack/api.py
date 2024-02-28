from rest_framework import generics, pagination
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response

from . import serializers as szrs
from . import models as smds
from core.diogenes import check_status
import json

class Pagination(pagination.PageNumberPagination):
    page_size = 50
    page_size_query_param = 'page_size'

class StoryAPIView(generics.ListAPIView):
    """Provides the feed."""
    serializer_class = szrs.StorySerializer
    queryset = smds.Story.objects.all()
    pagination_class = Pagination
    permission_classes = [AllowAny]

class DiogenesCheckStatusAPIView(generics.GenericAPIView):
    """Create a Tweet."""
    permission_classes=[IsAuthenticated]

    def get(self,request):
        #hashtags will have a letter a at the beginning
        return Response(check_status().json())
