import coreapi
from django.db.models import Q
from rest_framework import status

from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework.schemas import AutoSchema

from project.api.call.models import Call
from project.api.call.serializer import CallSerializer
from project.api.event.models import Event
from project.api.event.serializers import EventSerializer
from project.api.volunteer.models import Volunteer
from project.api.volunteer.serializer import VolunteerSerializer


class SearchView(GenericAPIView):
    """"
    GET: Search for 'event', 'call' or 'volunteer'.{type: 'volunteer', 'search_string': 'interest'}
    """

    schema = AutoSchema(
        manual_fields=[
            coreapi.Field("search_string",
                          required=False,
                          location='query',
                          description='Search events, calls, volunteers'),
            coreapi.Field("volunteer_interest",
                          required=False,
                          location='query',
                          description='Define the interests you are looking for in your volunteers'),
        ]
    )

    def get(self, request, *args, **kwargs):
        search_string = self.request.query_params.get('search_string', None)
        volunteer_interest = self.request.query_params.get('volunteer_interest', None)
        results = list()
        results += self.searchVolunteers(search_string, volunteer_interest)
        results += self.searchCalls(search_string)
        results += self.searchEvents(search_string)
        return Response(results, status=status.HTTP_200_OK)

    def searchVolunteers(self, search_string, volunteer_interest):
        queryset = Volunteer.objects.all()
        queries = []
        if search_string is not None:
            queries.append(Q(first_name__icontains=search_string))
            queries.append(Q(last_name__icontains=search_string))
            queries.append(Q(location__icontains=search_string))

        if volunteer_interest is not None:
            interests = volunteer_interest.split(',')

            if 'social' in interests:
                queries.append(Q(interests__social__icontains=search_string))

            if 'languages' in interests:
                queries.append(Q(interests__languages__icontains=search_string))

            if 'sports' in interests:
                queries.append(Q(interests__sports__icontains=search_string))

            if 'arts_culture' in interests:
                queries.append(Q(interests__arts_culture__icontains=search_string))

            if 'coaching' in interests:
                queries.append(Q(interests__coaching__icontains=search_string))

            if 'food' in interests:
                queries.append(Q(interests__food__icontains=search_string))

            if 'politics' in interests:
                queries.append(Q(interests__politics_icontains=search_string))

            if 'items' in interests:
                queries.append(Q(interests_items_icontains=search_string))

        if len(queries):
            query = queries.pop()
            # Or the Q object with the ones remaining in the list
            for item in queries:
                query |= item
            queryset = queryset.filter(query)

        serializer = VolunteerSerializer(queryset, many=True)
        return serializer.data

    def searchCalls(self, search_string):
        queryset = Call.objects.all()
        if search_string is not None:
            queryset = queryset.filter(Q(
                Q(title__icontains=search_string) |
                Q(location__icontains=search_string) |
                Q(description__icontains=search_string)
            ))
        serializer = CallSerializer(queryset, many=True)
        return serializer.data

    def searchEvents(self, search_string):
        queryset = Event.objects.all()
        if search_string is not None:
            queryset = queryset.filter(Q(
                Q(location__icontains=search_string) |
                Q(title__icontains=search_string)
            ))
        serializer = EventSerializer(queryset, many=True)
        return serializer.data
