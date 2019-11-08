from rest_framework.response import Response
from rest_framework.generics import ListAPIView, GenericAPIView

from project.api.call.models import Call
from project.api.call.serializer import CallSerializer


class GetAllCalls(ListAPIView):
    """
    GET: List all call
    """
    serializer_class = CallSerializer
    queryset = Call.objects.all().order_by('-created')

    def get_queryset(self):
        queryset = Call.objects.all().order_by('-created')
        return queryset


class CreateCall(GenericAPIView):
    serializer_class = CallSerializer

    def post(self, request):
        serializer = self.get_serializer(
            data=request.data
        )
        serializer.is_valid(raise_exception=True)
        call = serializer.create(serializer.validated_data)
        return Response(CallSerializer(call).data)


class GetUpdateDeleteCall(GenericAPIView):
    queryset = Call.objects.all()
    serializer_class = CallSerializer

    def get(self, request, **kwargs):
        call_id = self.kwargs.get('id')
        call = Call.objects.get(id=call_id)
        serializer = CallSerializer(call)
        return Response(serializer.data)

    def patch(self, request, **kwargs):
        call_id = self.kwargs.get('id')
        call = Call.objects.get(id=call_id)
        serializer = CallSerializer(instance=call, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

    def delete(self, request, **kwargs):
        call_id = self.kwargs.get('id')
        call = Call.objects.get(id=call_id)
        call.delete()
        return Response('call deleted')


class GetListCallOfVol(GenericAPIView):
    queryset = Call.objects.all()
    serializer_class = CallSerializer

    def get(self, request, **kwargs):
        vol_id = self.kwargs.get('vol_id')
        calls = Call.objects.filter(call_options__volunteers=vol_id)
        serializer = CallSerializer(calls, many=True)
        return Response(serializer.data)
