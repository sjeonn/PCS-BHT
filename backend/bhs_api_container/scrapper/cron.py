from .models import Listing
from .serializers import *
import sys
from django.db import migrations as mb
import sys
sys.path.append("../")
listings = __import__('migrations.0002_listings')


def my_cron_job():
    print('My Cron')
    for item in Listing.objects.all():
        item.delete()
    mb.RunPython(listings.create_data)
    
