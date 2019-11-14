from rest_framework import serializers
from django.contrib.auth.models import User

from project.api.organisation.serializer import OrganisationSerializer
from project.api.volunteer.serializer import VolunteerSerializer

from project.api.call_option.serializer import CallOptionSerializer
from project.api.call.models import Call


class ReadMeSerializer(serializers.ModelSerializer):
    organisation = OrganisationSerializer()
    volunteer = VolunteerSerializer()

    class Meta:
        model = User
        fields = ['username', 'email', 'organisation', 'volunteer']


class CallFeedSerializer(serializers.ModelSerializer):
    call_options = CallOptionSerializer(many=True, required=False)

    class Meta:
        model = Call
        fields = ['title', 'call_picture', 'organisation', 'start_datetime', 'end_datetime',
                  'location', 'description', 'must_be_approved', 'call_options']
        read_only_fields = ['organisation']
        ordering = ['start_datetime']
