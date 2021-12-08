from craigslist import CraigslistHousing
import sys
sys.path.append(".")
from . import models

def get_listings():
    data = []
    cl_h = CraigslistHousing(site='sfbay', area='eby', category='apa',
                         filters={'zip_code': "94704", 'search_distance':"2",})

    for result in cl_h.get_results(sort_by='newest', geotagged=True):
        result['price'] = result['price'].replace('$','').replace(',','')
        temp = models.Listing(address = result['where'], email = "", price = result['price'], rooms = "", photo = "https://sfbay.craigslist.org/eby/roo/d/berkeley-lovely-private-sunny-very/7405635388.html")
        data.append(temp)
    return data