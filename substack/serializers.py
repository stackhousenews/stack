from rest_framework import serializers
from user_account.serializers import UserSerializer
from . import models as smds

class StorySerializer(serializers.ModelSerializer):
    source = serializers.SerializerMethodField()
    source_logo = serializers.SerializerMethodField()
    published = serializers.SerializerMethodField()
    user_has_bookmarked = serializers.SerializerMethodField()

    class Meta:
        model = smds.Story
        exclude = ['content']

    def get_source(self, instance):
        if instance.source:
            return instance.source.name
        else:
            return None

    def get_source_logo(self, instance):
        if instance.source:
            return instance.source.logo
        else:
            return None

    def get_published(self, instance):
        if instance.published:
            return instance.timelapsed
        else:
            return None

    def get_user_has_bookmarked(self, instance):
        if instance.bookmark:
            request = self.context.get("request")
            return instance.bookmark.filter(pk=request.user.pk).exists()
        return None