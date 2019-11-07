from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('backend/admin/', admin.site.urls),
    path('backend/api/auth/', include('project.api.auth.urls', namespace='authentication')),
    path('backend/api/volunteers/', include('project.api.volunteer.urls', namespace='volunteers')),
    path('backend/api/event/', include('project.api.event.urls', namespace='event')),
]
