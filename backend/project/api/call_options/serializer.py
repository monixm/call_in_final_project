from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework import serializers
from .models import CallOptions
from project.api.calls.models import Call


class CallOptionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = CallOptions
        field = '__all__'
