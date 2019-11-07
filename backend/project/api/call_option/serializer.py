from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework import serializers
from .models import CallOption
from project.api.call.models import Call


class CallOptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = CallOption
        field = '__all__'
