from django.db import models
from project.api.volunteer.models import Volunteer


class CallOption(models.Model):

    call = models.ForeignKey(
        to=Call,
        verbose_name='call',
        on_delete=models.CASCADE,
        related_name='call_option'
    )

    title = models.CharField(
        verbose_name='title',
        max_length=100
    )
    option_nr = models.IntegerField(
        verbose_name='option number'
    )

    volunteers = models.ManyToManyField(
        Volunteer,
        verbose_name='volunteer participating',
        related_name='call_option'
    )
