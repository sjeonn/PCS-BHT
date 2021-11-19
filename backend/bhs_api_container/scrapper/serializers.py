from rest_framework import serializers
from .models import Listing

class ListingSerializer(serializers.ModelSerializer):

    class Meta:
        model = Listing
        fields = ('link', 'location', 'description', 'email', 'bedrooms', 'bathrooms', 'price', 'photo','registrationDate')
