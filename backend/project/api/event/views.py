from rest_framework import status
from rest_framework.generics import GenericAPIView, RetrieveUpdateDestroyAPIView, ListAPIView
from rest_framework.response import Response
from .models import Event
from .serializers import EventSerializer


class GetEvents(GenericAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

    def get(self, request, *args, **kwargs):
        serializer = EventSerializer(self.queryset.all(), many=True)
        return Response(serializer.data)


class EventCreateView(GenericAPIView):
    serializer_class = EventSerializer

    def post(self, request):
        serializer = self.get_serializer(
            data=request.data,
            context={'request': request},
        )
        serializer.is_valid(raise_exception=True)
        event = serializer.create(serializer.validated_data)
        return Response(EventSerializer(event).data)


class EventGetUpdateDeleteView(RetrieveUpdateDestroyAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    lookup_url_kwarg = 'id'

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(data='Organisation was deleted', status=status.HTTP_204_NO_CONTENT)

class GetEventsByOrg(ListAPIView):
    serializer_class = EventSerializer

    def get_queryset(self):
        queryset = Event.objects.all().order_by('created')
        org = self.kwargs.get('org_id')
        queryset = queryset.filter(type=org)
        return queryset




