from rest_framework import serializers

from project.api.organisation.models import Organisation
from .models import Focus


class FocusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Focus
        fields = '__all__'
