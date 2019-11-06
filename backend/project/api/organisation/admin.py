from django.contrib import admin

# Register your models here.
from .models import Organisation

app_name = 'project.api.organisation'

admin.site.register(Organisation)