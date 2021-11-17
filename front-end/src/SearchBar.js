import React from "react";
import ReactDOM from "react-dom";
import './SearchBar.css'

function SearchBar() {
 const [searchTerm, setSearchTerm] = React.useState("");
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
  return (
    <div class="search">
    <input
        type="text"
        placeholder="Search"
        class = "searchTerm"
        value={searchTerm}
        onChange={handleChange}
    />
    <button type="submit" class="searchButton">
      <i class="fa fa-search"></i>
   </button>
   </div>

  );
}
export default SearchBar