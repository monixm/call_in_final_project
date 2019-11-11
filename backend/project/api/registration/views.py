from rest_framework import status
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response

from .serializer import RegistrationSerializer, RegistrationValidationSerializer


class RegistrationView(GenericAPIView):
    permission_classes = []
    serializer_class = RegistrationSerializer

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        try:
            serializer.is_valid(raise_exception=True)
            new_user = serializer.save(serializer.validated_data)
            return Response(self.get_serializer(new_user).data)
        except Exception:
            return Response(status=status.HTTP_401_UNAUTHORIZED)


class RegistrationValidationView(GenericAPIView):
    permission_classes = []
    serializer_class = RegistrationValidationSerializer

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save(
            serializer.validated_data,
        )
        return Response(self.get_serializer(user).data)
