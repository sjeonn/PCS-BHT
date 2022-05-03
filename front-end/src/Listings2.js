import React, { Component } from "react";
import Multiselect from "@khanacademy/react-multi-select";



function Listings2({selected, setSelected}) {
  const handleChange = newSelected => {
    setSelected(newSelected);
  };

  const options = [
    { label: "Price (Ascending)", value: "price_ascending" },
    { label: "Price (Descending)", value: "price_descending" },
    { label: "Northside", value: "northside" },
    { label: "Southside", value: "southside" },
    { label: "Westside", value: "westside" },
    { label: "Downtown", value: "downtown" },
    { label: "Bedrooms (Ascending)", value: "bedrooms_ascending" },
    { label: "Bedrooms (Descending)", value: "bedrooms_descending" },
    { label: "Bathrooms (Ascending)", value: "bathrooms_ascending" },
    { label: "Bathrooms (Descending)", value: "bathrooms_descending" }
  ]

  return (  
    <div>
      <h1>Filter / Sort</h1>
      <Multiselect
        options={options}
        onSelectedChanged={handleChange}
        selected={selected}
        isLoading={false}
        disabled={false}
        disableSearch={false}
        renderHeader={false}
        overrideStrings={{
          selectSomeItems: "Select from options",
          allItemsAreSelected: "All selected so no results will be returned",
          selectAll: "All",
          search: "Search for filter"
        }}
      />
    </div>
  );
}
export default Listings2