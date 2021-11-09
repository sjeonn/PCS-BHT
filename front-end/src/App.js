import Listings from './Listings';
import SideBar from './SideBar';

const listing1 = {
  "id" : 1,
  "link" : "https://google.com",
  "img" : "https://www.thesprucepets.com/thmb/kV_cfc9P4QWe-klxZ8y--awxvY4=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/adorable-white-pomeranian-puppy-spitz-921029690-5c8be25d46e0fb000172effe.jpg",
  "location" : "The Moon",
  "bedrooms" : 27,
  "price" : 420
}

const listings = [listing1, listing1, listing1, listing1, listing1, listing1]

const items = [
  { name: 'search', label: 'Search' },
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

function App() {
  return (
    <div className="App">
      <Listings listings={listings}/>
      <SideBar items={items} />
    </div>
  );
}

export default App;
