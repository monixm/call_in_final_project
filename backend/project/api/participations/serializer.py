from rest_framework import serializers

from project.api.event.models import Event


class EventParticipationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Event
        fields = []
