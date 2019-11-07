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
        upload_to='profile_pictures',
        null=True,
        blank=True
    )

    privacy_setting = models.CharField(
        verbose_name='privacy settings',
        max_length=1,
        choices=PRIVACY_SETTINGS
    )

    user = models.ForeignKey(
        verbose_name='user',
        to=User,
        related_name='volunteer',
        on_delete=models.CASCADE
    )
