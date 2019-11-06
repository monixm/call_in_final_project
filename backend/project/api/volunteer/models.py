from django.conf import settings
from django.contrib.auth.models import User
from django.db import models


class Volunteer(models.Model):
    user = models.ForeignKey(
        verbose_name='user',
        to=User,
        on_delete=models.SET_NULL,
        null=True
    )
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    location = models.CharField(max_length=200)
    user = models.ForeignKey(to=User, related_name='volunteer', on_delete=models.CASCADE)
    profile_pic = models.ImageField(
        upload_to='media-files/volunteer/images',
        verbose_name='image',
    )
    PUBLIC = 'public'
    PRIVATE = 'private'
    CONTROLLED = 'controlled'
    SECRET = 'secret'
    privacy_setting = models.CharField(
        verbose_name='privacy_setting',
        max_length=100,
        choices=(
            (PUBLIC, PUBLIC),
            (PRIVATE, PRIVATE),
            (CONTROLLED, CONTROLLED),
            (SECRET, SECRET),
        ),
        default=PRIVATE
    )
    # interests=focus
    # call_option
    # events
    # social media

    def __str__(self):
        return self.first_name + ' ' + self.last_name
