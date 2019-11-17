from rest_framework import serializers

from project.api.organisation.serializers import OrganisationSerializer
from .models import Event


class EventSerializer(serializers.ModelSerializer):
    organisation = OrganisationSerializer()

    class Meta:
        model = Event
        fields = ['id', 'title', 'picture', 'created', 'start_datetime', 'end_datetime', 'location',
                  'description', 'must_be_approved', 'organisation', 'participants']
        read_only_fields = ['organisation']
        ordering = ['start_datetime']

    def create(self, validated_data):
        return Event.objects.create(
            **validated_data,
            organisation=self.context.get('request').user.organisation
        )
