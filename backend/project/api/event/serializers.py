from rest_framework import serializers

from project.api.organisation.serializers import OrganisationSerializer
from .models import Event


class EventSerializer(serializers.ModelSerializer):
    organisation = OrganisationSerializer()
    type = serializers.SerializerMethodField()

    class Meta:
        model = Event
        fields = ['id', 'title', 'picture', 'created', 'start_datetime', 'end_datetime', 'location',
                  'description', 'must_be_approved', 'organisation', 'participants', 'type']
        read_only_fields = ['organisation', 'type']
        ordering = ['start_datetime']

    def get_type(self, event):
        return 'event'

    def create(self, validated_data):
        return Event.objects.create(
            **validated_data,
            organisation=self.context.get('request').user.organisation
        )
