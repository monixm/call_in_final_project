from django.urls import path

from .views import GetVolunteers

app_name = 'volunteers'

urlpatterns = [
    path('', GetVolunteers.as_view())
]
