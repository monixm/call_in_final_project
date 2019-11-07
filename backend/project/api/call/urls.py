from django.urls import path
from project.api.call.views import GetAllCalls, CreateCall, GetUpdateDeleteCall

app_name = 'call'

urlpatterns = [
    path('', GetAllCalls.as_view()),
    path('new/', CreateCall.as_view()),
    path('<int:id>/', GetUpdateDeleteCall.as_view())
]
