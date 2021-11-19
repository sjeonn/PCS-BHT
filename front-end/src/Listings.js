import Card from "./Card";
import './Listings.css';
import axios from 'axios';
import SideBar from './SideBar';


const listing1 = {
  "id" : 1,
  "link" : "https://google.com",
  "img" : "https://www.thesprucepets.com/thmb/kV_cfc9P4QWe-klxZ8y--awxvY4=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/adorable-white-pomeranian-puppy-spitz-921029690-5c8be25d46e0fb000172effe.jpg",
  "location" : "The Moon",
  "bedrooms" : 6,
  "bathrooms" : 9,
  "price" : 420
}

var listings = [listing1, listing1, listing1, listing1, listing1, listing1]
//var listings
const items = [
  { name: 'filter', label: 'Filter',
    items: [
    { name: 'bedrooms', label: 'Bedrooms' },
    { name: 'location', label: 'Location', items: [{ name: 'southside', label: 'Southside' },
    { name: 'northside', label: 'Northside' },],},
    ],
  },
  {
    name: 'sort',
    label: 'Sort',
    items: [
      { name: 'cost', label: 'Cost' },
    ],
  },
]
const test = [];
axios.get('http://127.0.0.1:8000/api/listings/')
      .then(res => {
          //this.setState({ test: res.data });
          console.log(res.data)
          listings = res.data
      })
      .catch(function (error) {
          console.log(error);
      });

function Listings(props) {
  return (
    <div className="listings-page">
      <div className="listings">
        {listings.map((listing) =>
          <ul key={listing.id}>
            <Card listing={listing}/>
          </ul>
        )}
      </div>
      <SideBar items={items} />
    </div>
  );
}
  
export default Listings;
  