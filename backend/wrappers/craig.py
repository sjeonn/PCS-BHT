from craigslist import CraigslistHousing
import sys
sys.path.append("~/../scrapper")
from models import Listing #this needs work 
import axios from 'axios';

def get_listings():
    data = []
    cl_h = CraigslistHousing(site='sfbay', area='eby', category='apa',
                         filters={'zip_code': "94704", 'search_distance':"1", 'max_price': 1200, 'private_room': True})

    for result in cl_h.get_results(sort_by='newest', geotagged=True):
        temp = Listing(address = result['where'], email = "", price = result['price'], rooms = "", photo = "https://sfbay.craigslist.org/eby/roo/d/berkeley-lovely-private-sunny-very/7405635388.html")
        data.append(temp)
    axios.post('http://localhost:3000/listings', data)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });
    return data