from django.contrib import admin

from .models import CallOptions


app_name = 'project.api.call_option'

admin.site.register(CallOptions)
