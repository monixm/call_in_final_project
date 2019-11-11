from django.urls import path

from project.api.feed.views import CombineListViewFeed

app_name = 'feed'

urlpatterns = [
    path('', CombineListViewFeed.as_view())
]