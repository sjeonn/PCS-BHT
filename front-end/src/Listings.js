import Card from "./Card";
import './Listings.css';
import axios from 'axios';
import SideBar from './SideBar';
import Listings2 from './Listings2'
import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";

const listing1 = {
  "id" : 1,
  "link" : "https://google.com",
  "photo" : "https://www.thesprucepets.com/thmb/kV_cfc9P4QWe-klxZ8y--awxvY4=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/adorable-white-pomeranian-puppy-spitz-921029690-5c8be25d46e0fb000172effe.jpg",
  "address" : "The Moon",
  "bedrooms" : 6,
  "bathrooms" : 9,
  "price" : 420
}

function listingFactory(numListings) {
  var fakeListings = []
  for (let i = 0; i < numListings; i++) {
    var listing = {}
    listing.id = i
    listing.link = listing1.link
    listing.photo = listing1.photo
    listing.address = listing1.address
    listing.bedrooms = i
    listing.bathrooms = i
    listing.price = i
    fakeListings.push(listing)
  }
  return fakeListings
}

function filter(selected, listings) {
  var res = listings;
  if (selected.includes("price_ascending") && !selected.includes("price_descending")) {
    res = res.sort((a, b) => a.price - b.price)
  }
  if (!selected.includes("price_ascending") && selected.includes("price_descending")) {
    res = res.sort((a, b) => b.price - a.price)
  }
  if (selected.includes("northside") && !selected.includes("southside")) {
    res = res.filter(e => e.address == "Northside")
  }
  if (!selected.includes("northside") && selected.includes("southside")) {
    res = res.filter(e => e.address === "Southside")
  }
  if (selected.includes("bedrooms_ascending") && !selected.includes("bedrooms_descending")) {
    res = res.sort((a, b) => a.rooms - b.rooms)
  }
  if (!selected.includes("bedrooms_ascending") && selected.includes("bedrooms_descending")) {
    res = res.sort((a, b) => b.rooms - a.rooms)
  }
  if (selected.includes("bathrooms_ascending") && !selected.includes("bathrooms_descending")) {
    res = res.sort((a, b) => a.rooms - b.rooms)
  }
  if (!selected.includes("bathrooms_ascending") && selected.includes("bathrooms_descending")) {
    res = res.sort((a, b) => b.rooms - a.rooms)
  }
  return res
}

/*const items = [
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
]*/

function Listings() {
  var [listings, setListings] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selected, setSelected] = useState([])

  listings.forEach((listing, index) => {
    listing.id = index
    listing.rooms = index
  })

  var searchExpression = ".*"
  searchTerm.split('').forEach(char => {
    searchExpression += char + ".*"
  })
  var compiledSearchExpression = new RegExp(searchExpression, "i")
  listings = listings.filter(listing => {
    return compiledSearchExpression.test(listing.address)
  })

  listings = filter(selected, listings)

  useEffect(async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/listings/');
    console.log(response.data)
    //setListings(response.data);
    setListings(listingFactory(20))
  }, []);

  return (
    <div className="listings-page">
        <div className="listings">
        {listings.map((listing) =>
          <ul key={listing.id}>
            <Card listing={listing}/>
          </ul>
        )}

        </div>
      {/* <SideBar items={items} /> */}
      <div className="sidebar">
        <h1 style = {{marginBlockStart:0}} >Search</h1>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <Listings2 selected={selected} setSelected={setSelected}/>
      </div>
    </div>
  );
}
  
export default Listings;
  