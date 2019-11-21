from django.urls import path

from project.api.bookmark.views import ListBookmarkView, GetAllBookmarkByIdView, PostDeleteCallByIdView, \
     PostDeleteEventByIdView

app_name = 'bookmarks'

urlpatterns = [
     path('', ListBookmarkView.as_view()),
     path('<int:id>/', GetAllBookmarkByIdView.as_view()),
     path('calls/<int:call_id>/', PostDeleteCallByIdView.as_view()),
     path('events/<int:event_id>/', PostDeleteEventByIdView.as_view()),
]