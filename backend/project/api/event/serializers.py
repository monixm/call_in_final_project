from rest_framework import serializers
from .models import Event


class EventSerializer(serializers.ModelSerializer):

    class Meta:
        model = Event
        fields = '__all__'
        read_only_fields = ['organisation']
        ordering = ['start_datetime']

    def create(self, validated_data):
        return Event.objects.create(
            **validated_data,
            organisation=self.context.get('request').user.organisation
        )
