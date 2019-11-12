from datetime import datetime

from rest_framework.generics import ListAPIView
from rest_framework.response import Response

from project.api.call.models import Call
from project.api.call.serializer import CallSerializer
from project.api.event.models import Event
from project.api.event.serializers import EventSerializer


class CombineListViewFeed(ListAPIView):
    serializer_class_Calls = CallSerializer
    serializer_class_Event = EventSerializer

    def get_queryset_call(self):
        return Call.objects.filter(start_datetime__gte=datetime.now())

    def get_queryset_event(self):
        return Event.objects.filter(start_datetime__gte=datetime.now())

    def list(self, request, *args, **kwargs):
        call = self.serializer_class_Calls(self.get_queryset_call(), many=True)
        event = self.serializer_class_Event(self.get_queryset_event(), many=True)
        return Response({
            "**CALL**": call.data,
            "**EVENT**": event.data
        })
