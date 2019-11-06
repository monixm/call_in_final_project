from django.contrib import admin
from django.urls import path, include
from rest_framework.documentation import include_docs_urls

urlpatterns = [
    path('backend/admin/', admin.site.urls),
    path('backend/docs/', include_docs_urls(title='motion_project_6', public=False)),
    path('backend/api/volunteers/', include('project.api.volunteer.urls')),
    path('backend/api/auth/', include('project.api.auth.urls', namespace='authentication')),
    path('backend/api/volunteers/', include('project.api.volunteer.urls', namespace='volunteers')),
]
