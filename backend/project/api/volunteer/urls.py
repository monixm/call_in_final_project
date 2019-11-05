from django.contrib import admin
from django.urls import path, include

from .views import GetVolunteers

app_name = 'volunteers'

urlpatterns = [
    path('', GetVolunteers.as_view())
]