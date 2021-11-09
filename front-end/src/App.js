import Listings from './Listings';
import Navbar from './Navbar';

const listing1 = {
  "id" : 1,
  "link" : "https://google.com",
  "img" : "https://www.thesprucepets.com/thmb/kV_cfc9P4QWe-klxZ8y--awxvY4=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/adorable-white-pomeranian-puppy-spitz-921029690-5c8be25d46e0fb000172effe.jpg",
  "location" : "The Moon",
  "bedrooms" : 27,
  "price" : 420
}

const listings = [listing1, listing1, listing1, listing1, listing1, listing1]

function App() {
  return (
    <div className="App">
      <Navbar />
      <Listings listings={listings}/>
    </div>
  );
}

export default App;
