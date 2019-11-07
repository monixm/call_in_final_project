from django.contrib.auth.models import User
from django.db import models


class Volunteer(models.Model):

    # Attributes:
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    location = models.CharField(max_length=200)
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

    # Relations:
    user = models.ForeignKey(verbose_name='user', to=User, on_delete=models.CASCADE, null=True)

    # interests=focus
    # call_option
    # events
    # social media

    def __str__(self):
        return self.first_name + ' ' + self.last_name

#
# class VolunteerConfirmation(models.Model):
#     user = models.ForeignKey(
#         verbose_name='volunteer',
#         to=User,
#         on_delete=models.CASCADE,
#         related_name='volunteer',
#     )
#     call = models.ForeignKey(
#         to=Call,
#         on_delete=models.CASCADE,
#         related_name='call',
#     )
#     timestamp = models.DateTimeField(default=datetime.now)
#
#     class Meta:
#         unique_together = [('user', 'call')]
#
#     def __str__(self):
#         return f'User {self.user} confirmed volunteering in {self.call}'