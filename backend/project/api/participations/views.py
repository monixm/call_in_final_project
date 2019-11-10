from rest_framework import generics, status
from rest_framework.generics import GenericAPIView, get_object_or_404
from rest_framework.response import Response

from project.api.event.models import Event
from project.api.event.serializers import EventSerializer
from project.api.volunteer.models import Volunteer
from project.api.volunteer.serializer import VolunteerSerializer

from project.api.participations.serializer import EventParticipationSerializer


class ParticipationsListView(generics.ListAPIView):
    serializer_class = EventSerializer

    def get_queryset(self):
        volunteer_id = self.kwargs['volunteer_id']
        return Event.objects.filter(participants__id=volunteer_id)


class ParticipantsView(GenericAPIView):
    serializer_class = EventParticipationSerializer

    def get_queryset(self):
        event_id = self.kwargs['event_id']
        return Volunteer.objects.filter(event__id=event_id)

    def get(self, request, *args, **kwargs):
        get_object_or_404(Event, id=kwargs['event_id'])
        queryset = self.get_queryset()
        serializer = VolunteerSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        event = get_object_or_404(Event, id=kwargs['event_id'])
        try:
            volunteer = request.user.volunteer.get()
            if volunteer is None:
                raise Exception('Volunteer is not defined')

            event.participants.add(volunteer)
            event.save()
            return Response(status=status.HTTP_200_OK)

        except Exception:
            return Response(status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, *args, **kwargs):
        event = get_object_or_404(Event, id=kwargs['event_id'])
        try:
            volunteer = request.user.volunteer.get()
            if volunteer is None:
                raise Exception('Volunteer is not defined')

            event.participants.remove(volunteer)
            event.save()
            return Response(status=status.HTTP_200_OK)
        except Exception:
            return Response(status=status.HTTP_400_BAD_REQUEST)
