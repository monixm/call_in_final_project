from rest_framework import serializers

from project.api.auth.serializers import User
from project.api.focus.serializer import FocusSerializer
from .models import Organisation


class OrganisationSerializer(serializers.ModelSerializer):
    focus = FocusSerializer()

    class Meta:
        model = Organisation
        fields = ['id', 'type', 'name', 'location', 'privacy_setting', 'profile_pic',
                  'description', 'website', 'phone', 'user', 'facebook', 'instagram',
                  'linkedin', 'focus']
        extra_kwargs = {
            'user': {'required': False}
        }

    def create(self, validated_data):
        user_id = self.context.get('request').user.id
        validated_data['user'] = User.objects.get(pk=user_id)
        focus_data = validated_data.pop('focus')
        instance = super(OrganisationSerializer, self).create(validated_data)
        focus_data['organisation'] = instance
        focus_serializer = self.fields['focus']
        focus_serializer.create(focus_data)
        return instance

    def partial_update(self, instance, validated_data):
        focus_update = validated_data.pop('focus')
        focus = instance.focus
        focus_serializer = self.fields['focus']
        focus_serializer.update(focus, focus_update)
        return super().update(instance, validated_data)
