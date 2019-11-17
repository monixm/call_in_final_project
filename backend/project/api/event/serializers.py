from rest_framework import serializers
from .models import Event


class EventSerializer(serializers.ModelSerializer):
    type = serializers.SerializerMethodField()

    class Meta:
        model = Event
        fields = '__all__'
        read_only_fields = ['organisation', 'type']
        ordering = ['start_datetime']

    def get_type(self, event):
        return 'event'

    def create(self, validated_data):
        return Event.objects.create(
            **validated_data,
            organisation=self.context.get('request').user.organisation
        )
