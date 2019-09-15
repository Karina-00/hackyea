from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from .views import ArtykulViewset

router = routers.DefaultRouter()
router.register('baza', ArtykulViewset)

urlpatterns = [
    path('', include(router.urls)),
]