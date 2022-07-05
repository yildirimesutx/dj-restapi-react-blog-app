from rest_framework import routers
from .views import NewPostView

router = routers.DefaultRouter()
router.register('', NewPostView)

urlpatterns = [
    # path('', include(router.urls))
]

urlpatterns += router.urls