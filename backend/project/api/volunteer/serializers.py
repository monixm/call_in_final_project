from rest_framework import serializers

from project.api.auth.serializers import User
from project.api.focus.serializers import FocusSerializer
from .models import Volunteer


class VolunteerSerializer(serializers.ModelSerializer):
    interests = FocusSerializer()
    type = serializers.SerializerMethodField()

    class Meta:
        model = Volunteer
        fields = ['id', 'first_name', 'last_name', 'location', 'facebook',
                  'instagram', 'linkedin', 'profile_picture', 'privacy_setting',
                  'user', 'interests', 'type']
        read_only_fields = ['type']
        extra_kwargs = {
            'user': {'required': False}
        }

    def get_type(self, volunteer):
        return 'volunteer'

    def create(self, validated_data):
        user_id = self.context.get('request').user.id
        validated_data['user'] = User.objects.get(pk=user_id)
        interests_data = validated_data.pop('interests')
        instance = super(VolunteerSerializer, self).create(validated_data)
        interests_data['volunteer'] = instance
        interests_serializer = self.fields['interests']
        interests_serializer.create(interests_data)
        return instance

    def partial_update(self, instance, validated_data):
        interests_update = validated_data.pop('interests')
        interests = instance.interests
        interests_serializer = self.fields['interests']
        interests_serializer.update(interests, interests_update)
        return super().update(instance, validated_data)
