from unicodedata import category
from django.db import models
from django.contrib.auth.models import User
from django.db.models.enums import Choices




class NewPost(models.Model):
    title = models.CharField(max_length=50)
    content = models.TextField(max_length=500)
    image = models.CharField(max_length=350, blank=True)
    date = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    post_view = models.PositiveIntegerField(default=0)
    post_like = models.PositiveIntegerField(default=0)
    comment_number = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.title

class Comments(models.Model):
    comment = models.TextField(max_length=100)
    create = models.DateTimeField(auto_now=True)
    post = models.ForeignKey(NewPost, on_delete=models.CASCADE,null=True, blank=True, related_name="comments")


class Like(models.Model):
    post = models.ForeignKey(NewPost, on_delete=models.CASCADE, related_name="likes")    
    user = models.ForeignKey(User, on_delete=models.CASCADE) 
    like_on = models.DateTimeField(auto_now_add=True) 
