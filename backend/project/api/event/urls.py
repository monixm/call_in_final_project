from django.urls import path
from .views import GetEvents, EventCreateView, EventGetUpdateDeleteView, GetEventsByOrg

app_name = 'auth'

urlpatterns = [
    path('new/', EventCreateView.as_view(), name='create_event'),
    path('', GetEvents.as_view(), name='list_events'),
    path('<int:id>/', EventGetUpdateDeleteView.as_view()),
    path('<int:org_id>/', GetEventsByOrg.as_view()),
]
