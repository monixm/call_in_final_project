from django.urls import path, include

from .views import GetVolunteers, VolunteerCreateView, VolunteerGetUpdateDeleteView

app_name = 'volunteers'

urlpatterns = [
    path('', GetVolunteers.as_view()),
    path('new/', VolunteerCreateView.as_view()),
    path('<int:id>/', VolunteerGetUpdateDeleteView.as_view()),
    # path('follow/<int:user_id>/', VolunteerCreateView.as_view()),
]