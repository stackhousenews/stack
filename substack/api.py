from rest_framework import generics, pagination
from rest_framework.permissions import AllowAny

from . import serializers as szrs
from . import models as smds

class Pagination(pagination.PageNumberPagination):
    page_size = 30
    page_size_query_param = 'page_size'

class StoryAPIView(generics.ListAPIView):
    """Provides the feed."""
    serializer_class = szrs.StorySerializer
    queryset = smds.Story.objects.all()
    pagination_class = Pagination
    permission_classes = [AllowAny]