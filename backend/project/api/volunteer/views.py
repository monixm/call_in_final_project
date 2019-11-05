from django.shortcuts import render

# Create your views here.
from rest_framework import status
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response

from .models import Volunteer
from .serializer import VolunteerSerializer


class GetVolunteers(GenericAPIView):
    queryset = Volunteer.objects.all()
    serializer_class = VolunteerSerializer

    def get(self, request, *args, **kwargs):
        serializer = VolunteerSerializer(self.queryset.all(), many=True)
        return Response(serializer.data)
