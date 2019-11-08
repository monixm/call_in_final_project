from django.http import Http404
from rest_framework import status
from rest_framework.generics import GenericAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.response import Response

from project.api.call.models import Call
from project.api.call_option.models import CallOption
from project.api.call_option.serializer import CallOptionSerializer
from .models import Volunteer
from .serializer import VolunteerSerializer


# /api/volunteers/ GET: Get the list of all the volunteers
class GetVolunteers(GenericAPIView):
    queryset = Volunteer.objects.all()
    serializer_class = VolunteerSerializer
    # permission_classes = IsAuthenticated

    def get(self, request, *args, **kwargs):
        serializer = VolunteerSerializer(self.queryset.all(), many=True)
        return Response(serializer.data)

# /api/volunteers/new/ POST: Create a new volunteer


class VolunteerCreateView(GenericAPIView):
    serializer_class = VolunteerSerializer
    # permission_classes = IsAuthenticated

    def post(self, request):
        serializer = self.get_serializer(
            data=request.data,
            context={'request': request},
        )
        serializer.is_valid(raise_exception=True)
        volunteer = serializer.create(serializer.validated_data)
        return Response(VolunteerSerializer(volunteer).data)

# GET: Get the details of a volunteer by providing the id of the volunteer
# PATCH: Update a volunteer by id (only by volunteer owner or admin)
# DELETE: Delete a volunteer by id (only by volunteer owner or admin)


class VolunteerGetUpdateDeleteView(RetrieveUpdateDestroyAPIView):
    queryset = Volunteer.objects.all()
    serializer_class = VolunteerSerializer
    lookup_url_kwarg = 'id'

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(data='User was deleted', status=status.HTTP_204_NO_CONTENT)

# /api/volunteers/request/call/<int:call_id>/ POST: Confirm a volunteer's participation in a Call (only by volunteer)


class ConfirmCallVolunteer(GenericAPIView):
    def patch(self, request, *args, **kwargs):
        call_option_id = self.kwargs.get('call_id')
        try:
            selected_call = CallOption.objects.get(id = call_option_id)
        except CallOption.DoesNotExist:
            raise Http404
        volunteer = Volunteer.objects.get(id = request.user.id)
        selected_call.volunteers.add(volunteer)
        return Response('Your participation in the Call is confirmed', status.HTTP_200_OK)
