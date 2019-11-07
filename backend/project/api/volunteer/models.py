from django.conf import settings
from django.contrib.auth.models import User
from django.db import models


class Volunteer(models.Model):

    PRIVACY_SETTINGS = (
        ('public', 'Public'),
        ('private', 'Private'),
        ('controlled', 'Controlled'),
        ('secret', 'Secret')
    )

    first_name = models.CharField(
        verbose_name='first name',
        max_length=50
    )

    last_name = models.CharField(
        verbose_name='last name',
        max_length=50
    )

    location = models.TextField(
        verbose_name='location',
        max_length=50
    )

    social_media = models.CharField(
        verbose_name='social media',
        max_length=100,
        blank=True
    )

    profile_picture = models.ImageField(
        verbose_name='profile picture',
        upload_to='volunteers/profile_pictures',
        null=True,
        blank=True
    )

    PUBLIC = 'public'
    PRIVATE = 'private'
    CONTROLLED = 'controlled'
    SECRET = 'secret'
    privacy_setting = models.CharField(
        verbose_name='privacy setting',
        max_length=1,
        choices=(
            (PUBLIC, PUBLIC),
            (PRIVATE, PRIVATE),
            (CONTROLLED, CONTROLLED),
            (SECRET, SECRET),
        ),
        default=PRIVATE
    )

    user = models.ForeignKey(
        verbose_name='user',
        to=User,
        related_name='volunteer',
        on_delete=models.CASCADE
    )

    # interests=focus
    # call_option
    # events

    def __str__(self):
        return self.first_name + ' ' + self.last_name
