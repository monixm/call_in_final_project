from django.urls import path

from project.api.feed.views import CombineListViewFeed, ReadMe

app_name = 'feed'

urlpatterns = [
    path('', CombineListViewFeed.as_view()),
    path('me/', ReadMe.as_view())
]
