from rest_framework import serializers

from user_account.serializers import UserSerializer

from .models import Post, PostAttachment, Comment, Trend, Tag


class PostAttachmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostAttachment
        fields = ('id', 'get_image',)

class TagSerializer(serializers.ModelSerializer):
    tag = serializers.SerializerMethodField()
    
    class Meta:
        model = Tag
        exclude = ()

    def get_tag(self, instance):
        if instance.tag:
            return instance.tag
        else:
            return None


class PostSerializer(serializers.ModelSerializer):
    published = serializers.SerializerMethodField()
    tags = TagSerializer(read_only=True, many=True)
    
    class Meta:
        model = Post
        exclude = ()

    def get_published(self, instance):
        if instance.created_at:
            return instance.created_at.strftime("%A, %d %B %Y %H:%M")
        else:
            return None

class CommentSerializer(serializers.ModelSerializer):
    created_by = UserSerializer(read_only=True)

    class Meta:
        model = Comment
        fields = ('id', 'body', 'created_by', 'created_at_formatted',)


class PostDetailSerializer(serializers.ModelSerializer):
    created_by = UserSerializer(read_only=True)
    comments = CommentSerializer(read_only=True, many=True)
    attachments = PostAttachmentSerializer(read_only=True, many=True)

    class Meta:
        model = Post
        fields = ('id', 'body', 'likes_count', 'comments_count', 'created_by', 'created_at_formatted', 'comments', 'attachments',)


class TrendSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trend
        fields = ('id', 'hashtag', 'occurences',)