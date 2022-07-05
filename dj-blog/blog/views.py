from django.shortcuts import render
from .models import NewPost, Comments, Like
from .serializers import CommentsSerializer, LikeSerializer, NewPostSerializer
from rest_framework import  viewsets


class NewPostView(viewsets.ModelViewSet):
    queryset = NewPost.objects.all()
    serializer_class = NewPostSerializer
