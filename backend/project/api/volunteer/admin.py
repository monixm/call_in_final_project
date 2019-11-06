from django.contrib import admin

# Register your models here.
from .models import Volunteer, VolunteerRequest

app_name = 'project.api.volunteer'

admin.site.register(Volunteer)
admin.site.register(VolunteerRequest)