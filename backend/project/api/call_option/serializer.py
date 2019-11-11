from rest_framework import serializers

from project.api.call.models import Call
from .models import CallOption


class CallOptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = CallOption
        fields = '__all__'
        extra_kwargs = {
            'call': {'required': False}
        }

    def create(self, validated_data):
        call_id = self.context.get('view').kwargs.get('call_id')
        if call_id is None:
            raise serializers.ValidationError("Must set the call_id kwarg to use this serializer.")
        validated_data['call'] = Call.objects.get(pk=call_id)
        return super(CallOptionSerializer, self).create(validated_data)

