from django.urls import path
from project.api.calls.views import GetAllCalls, CreateCall, GetUpdateDeleteCall

app_name = 'calls'

urlpatterns = [
    path('', GetAllCalls.as_view()),
    path('new/', CreateCall.as_view()),
    path('<int:id>/', GetUpdateDeleteCall.as_view())
]
