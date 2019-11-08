from django.urls import path
from .views import GetVolunteers, VolunteerCreateView, VolunteerGetUpdateDeleteView

app_name = 'volunteer'

urlpatterns = [
    path('', GetVolunteers.as_view()),
    path('new/', VolunteerCreateView.as_view()),
    path('<int:id>/', VolunteerGetUpdateDeleteView.as_view()),
]
