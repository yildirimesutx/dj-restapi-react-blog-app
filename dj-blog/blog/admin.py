from django.contrib import admin
from .models import NewPost, Comments, Like
# Register your models here.


admin.site.register(NewPost)
admin.site.register(Comments)
admin.site.register(Like)
