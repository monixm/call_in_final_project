from rest_framework import status
from .serializer import OrganisationSerializer
from rest_framework.generics import GenericAPIView, RetrieveUpdateDestroyAPIView, ListAPIView
from rest_framework.response import Response
from .models import Organisation


# /api/organisations/ GET: Get the list of all the organisations
class GetOrganisations(GenericAPIView):
    queryset = Organisation.objects.all()
    serializer_class = OrganisationSerializer
    # permission_classes = IsAuthenticated

    def get(self, request, *args, **kwargs):
        serializer = OrganisationSerializer(self.queryset.all(), many=True)
        return Response(serializer.data)


# /api/organisations/new/ POST: Create a new organisation

class OrganisationCreateView(GenericAPIView):
    serializer_class = OrganisationSerializer

    def post(self, request):
        serializer = self.get_serializer(
            data=request.data,
            context={'request': request},
        )
        serializer.is_valid(raise_exception=True)
        organisation = serializer.create(serializer.validated_data)
        return Response(OrganisationSerializer(organisation).data)

# /api/organisations/<int:id>/ GET: Get the details of an organisation by providing the id of the organisation.
# /api/organisations/<int:id>/ PATCH: Update an organisation by id (only by organisation owner or admin).
# /api/organisations/<int:id>/ DELETE: Delete an organisation by id (only by organisation owner or admin).

class OrganisationGetUpdateDeleteView(RetrieveUpdateDestroyAPIView):
    queryset = Organisation.objects.all()
    serializer_class = OrganisationSerializer
    lookup_url_kwarg = 'id'

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(data='Organisation was deleted', status=status.HTTP_204_NO_CONTENT)

# /api/organisations/ngos/ GET: Get the all the ngos

class GetNGO(ListAPIView):
    serializer_class = OrganisationSerializer
    queryset = Organisation.objects.all()

    def get_queryset(self):
        ngos = self.queryset.filter(type='Non-profit organisation')
        return ngos

# /api/organisations/projects/ GET: Get the all the projects

class GetProjects(ListAPIView):
    serializer_class = OrganisationSerializer
    queryset = Organisation.objects.all()

    def get_queryset(self):
        projects = self.queryset.filter(type='Project')
        return projects

# /api/organisations/<int:user_id>/ GET: Get the all the organisations created by a specific user in chronological order
class GetUserOrgs(ListAPIView):
    serializer_class = OrganisationSerializer

    def get_queryset(self):
        queryset = Organisation.objects.all().order_by('created')
        user = self.kwargs.get('user_id')
        queryset = queryset.filter(type=user)
        return queryset

# Get a list of all calls/events created by a given organisation
# 1 endpoint for call and 1 endpoint for event of an organisation - u can combine these in frontend

