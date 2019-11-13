from rest_framework import serializers

from project.api.auth.serializers import User
from project.api.focus.serializer import FocusSerializer
from .models import Volunteer


class VolunteerSerializer(serializers.ModelSerializer):
    interests = FocusSerializer()

    class Meta:
        model = Volunteer
        fields = ['id', 'first_name', 'last_name', 'location', 'social_media',
                  'profile_picture', 'privacy_setting', 'user', 'interests']
        extra_kwargs = {
            'user': {'required': False}
        }

    def create(self, validated_data):
        user_id = self.context.get('request').user.id
        validated_data['user'] = User.objects.get(pk=user_id)
        interests_data = validated_data.pop('interests')
        instance = super(VolunteerSerializer, self).create(validated_data)
        interests_data['volunteer'] = instance
        focus_serializer = self.fields['interests']
        focus_serializer.create(interests_data)
        return instance

    def update(self, instance, validated_data):
        interests_update = validated_data.pop('interests')
        interests = instance.interests
        focus_serializer = self.fields['interests']
        focus_serializer.update(interests, interests_update)
        return super().update(instance, validated_data)


