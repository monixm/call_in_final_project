from django.db import models
from project.api.volunteer.models import Volunteer
from project.api.organisation.models import Organisation


class Focus(models.Model):
    organization = models.ForeignKey(
        verbose_name='organization',
        to=Organisation,
        related_name='focus',
        on_delete=models.CASCADE,
        null=True
    )

    volunteer = models.ForeignKey(
        verbose_name='volunteer',
        to=Volunteer,
        related_name='interests',
        on_delete=models.CASCADE
    )

    social = models.CharField(
        verbose_name='social',
        max_length=150,
        blank=True
    )

    languages = models.CharField(
        verbose_name='languages',
        max_length=150,
        blank=True
    )

    sports = models.CharField(
        verbose_name='sports',
        max_length=150,
        blank=True
    )

    arts_culture = models.CharField(
        verbose_name='arts & culture',
        max_length=150,
        null=True,
        blank=True
    )
    coaching = models.CharField(
        verbose_name='coaching',
        max_length=150,
        null=True,
        blank=True
    )

    food = models.CharField(
        verbose_name='food',
        max_length=150,
        blank=True
    )

    politics = models.CharField(
        verbose_name='politics',
        max_length=150,
        blank=True
    )

    items = models.CharField(
        verbose_name='items',
        max_length=150,
        blank=True
    )
