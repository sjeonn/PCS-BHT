from craigslist import CraigslistHousing
import sys
sys.path.append(".")
from . import models

def get_listings():
    data = []
    cl_h = CraigslistHousing(site='sfbay', area='eby', category='apa',
                         filters={'zip_code': "94704", 'search_distance':"3",'bundle_duplicates':True})
    for result in cl_h.get_results(sort_by='newest', geotagged=True, limit=100):
        print(result)
        result['price'] = result['price'].replace('$','').replace(',','')
        temp = models.Listing(address = result['where'],link = result['url'] ,email = "", price = result['price'], rooms = "1", photo = result['img'])
        data.append(temp)
    return data