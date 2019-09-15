from rest_framework import serializers
from .models import Artykul

class FullArtykulSerializers(serializers.ModelSerializer):
    class Meta:
        model = Artykul
        fields = '__all__'

class ArtykulSerializers(serializers.ModelSerializer):
    class Meta:
        model = Artykul
        fields = ['id', 'tytul']