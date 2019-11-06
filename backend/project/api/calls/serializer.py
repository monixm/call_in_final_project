from rest_framework import serializers
from .models import Calls


class CallsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Calls
        field = '__all__'

