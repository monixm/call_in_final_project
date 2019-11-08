from rest_framework import serializers
from .models import CallOption


class CallOptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = CallOption
        field = '__all__'
