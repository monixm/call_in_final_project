from django.urls import path
from .views import GetVolunteers, VolunteerCreateView, VolunteerGetUpdateDeleteView, GetCallVolunteers

app_name = 'volunteers'

urlpatterns = [
    path('', GetVolunteers.as_view()),
    path('new/', VolunteerCreateView.as_view()),
    path('<int:id>/', VolunteerGetUpdateDeleteView.as_view()),
    path('call/<int:call_id>/', GetCallVolunteers.as_view()),
    # path('call/request/<int:call_id>/', ConfirmCallVolunteer.as_view()),
]
