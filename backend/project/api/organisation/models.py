from django.conf import settings
from django.contrib.auth.models import User
from django.db import models


class Organisation(models.Model):
    name = models.CharField(verbose_name='name', max_length=200)
    user = models.ForeignKey(
        verbose_name='user',
        to=settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True
    )
    # user = models.ForeignKey(to=User, related_name='organisation', on_delete=models.CASCADE)
    NGO = 'Non-profit organisation'
    PROJECT = 'Project'
    type = models.CharField(
        verbose_name='type',
        max_length=100,
        choices=(
            (NGO, NGO),
            (PROJECT, PROJECT),
        ),
        default=NGO
    )
    PUBLIC = 'public'
    PRIVATE = 'private'
    CONTROLLED = 'controlled'
    SECRET = 'secret'
    privacy_setting = models.CharField(
        verbose_name='Privacy setting',
        max_length=100,
        choices=(
            (PUBLIC, PUBLIC),
            (PRIVATE, PRIVATE),
            (CONTROLLED, CONTROLLED),
            (SECRET, SECRET),
        ),
        default=PRIVATE
    )

    profile_pic = models.ImageField(
        upload_to='media-files/organisation/images',
        verbose_name='image',
        blank=True,
    )
    document = models.FileField(
        upload_to='media-files/organisation/file',
        verbose_name='document',
        null=True,
        blank=True
    )
    created = models.DateTimeField(
        verbose_name='created',
        auto_now_add=True,
        null=True
    )
    location = models.CharField(max_length=200)
    description = models.TextField(verbose_name='description')
    website = models.CharField(max_length=200, blank=True)
    phone = models.CharField(max_length=200)
    BOOL_CHOICES = ((True, 'Yes'), (False, 'No'))
    terms_of_services = models.BooleanField(choices=BOOL_CHOICES, default=True)

# focus
# calls
# events

    def __str__(self):
        return self.name + ' ' + ' - ' + self.type
