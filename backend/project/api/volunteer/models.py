from django.conf import settings
from django.contrib.auth.models import User
from django.db import models

# Create your models here.


class Volunteer(models.Model):
    user = models.ForeignKey(
        verbose_name='user',
        to=settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True
    )
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    location = models.TextField()
    user = models.ForeignKey(to=User, related_name='volunteer', on_delete=models.CASCADE)
    profile_pic = models.ImageField(
        upload_to='media-files/volunteer/images',
        verbose_name='image',
        default='default.jpg' #======= HOW TO AVOID THE DEFAULT?
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

class VolunteerRequest(models.Model):
    sender=models.ForeignKey(
        to=settings.AUTH_USER_MODEL,
        related_name='sender',
        on_delete=models.CASCADE
    )
    receiver=models.ForeignKey(
        to=settings.AUTH_USER_MODEL,
        related_name='receiver',
        on_delete=models.CASCADE
    )
    PENDING = 'pending'
    ACCEPTED = 'accepted'
    REJECTED = 'rejected'
    status = models.CharField(
        verbose_name='status',
        max_length=100,
        choices=(
            (PENDING, PENDING),
            (ACCEPTED, ACCEPTED),
            (REJECTED, REJECTED),
        ),
        default=PENDING
    )
    created = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return f'{self.sender} would like to follow {self.receiver}. Status: {self.status}'
