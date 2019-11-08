from django.db import models
from project.api.organisation.models import Organisation
from project.api.volunteer.models import Volunteer


class Event(models.Model):
    title = models.CharField(max_length=100, blank=True, default='')
    picture = models.ImageField(upload_to='media-files/event/images', null=True, blank=True)
    organisation = models.ForeignKey(to=Organisation, related_name='event', on_delete=models.CASCADE, default="")
    created = models.DateTimeField(auto_now_add=True)
    start_datetime = models.DateTimeField()
    end_datetime = models.DateTimeField()
    location = models.CharField(max_length=200, blank=True, default='')
    description = models.TextField(max_length=500, blank=True, default='')
    participants = models.ManyToManyField(to=Volunteer, related_name='event')
    must_be_approved = models.BooleanField(default=False)

    class Meta:
        ordering = ['created']
