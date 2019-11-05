from django.contrib.auth.models import User
from django.db import models

# Create your models here.

class Volunteer(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    location = models.TextField()
    user = models.ForeignKey(to=User, related_name='volunteer', on_delete=models.CASCADE)
