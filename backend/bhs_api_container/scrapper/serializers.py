from rest_framework import serializers
from .models import Listing

class ListingSerializer(serializers.ModelSerializer):

    class Meta:
        model = Listing
        fields = ('pk', 'address', 'email', 'price', 'rooms', 'photo','registrationDate')