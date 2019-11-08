from rest_framework import serializers
from .models import CallOption


class CallOptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = CallOption
        fields = '__all__'
