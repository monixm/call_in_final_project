from rest_framework import serializers
from django.contrib.auth.models import User

from project.api.organisation.serializers import OrganisationSerializer
from project.api.volunteer.serializers import VolunteerSerializer


class ReadMeSerializer(serializers.ModelSerializer):
    organisation = OrganisationSerializer()
    volunteer = VolunteerSerializer()

    class Meta:
        model = User
        fields = ['username', 'email', 'organisation', 'volunteer']
