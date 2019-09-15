from rest_framework import viewsets
from rest_framework.response import Response
from .serializers import ArtykulSerializers, FullArtykulSerializers
from .models import Artykul

class ArtykulViewset(viewsets.ModelViewSet):
    serializer_class = ArtykulSerializers
    queryset = Artykul.objects.all()

    def retrieve(self, request, *args, **kwargs):
        news = self.get_object()
        serializer = FullArtykulSerializers(news)
        return Response(serializer.data)
