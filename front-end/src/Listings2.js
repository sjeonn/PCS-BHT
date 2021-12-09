import React, { Component } from "react";
import Multiselect from "@khanacademy/react-multi-select";

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
    res = res.sort((a, b) => a.bedrooms > b.bedrooms)
  }
  if (!selected.includes("bedrooms_ascending") && selected.includes("bedrooms_descending")) {
    res = res.sort((a, b) => a.bedrooms < b.bedrooms)
  }
  if (selected.includes("bathrooms_ascending") && !selected.includes("bathrooms_descending")) {
    res = res.sort((a, b) => a.bathrooms > b.bathrooms)
  }
  if (!selected.includes("bathrooms_ascending") && selected.includes("bathrooms_descending")) {
    res = res.sort((a, b) => a.bathrooms < b.bathrooms)
  }
  return res
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
      isLoading: true,
      listings: [props.listings]
    };
    console.log(props.listings)
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      });
    }, 100);
  }

  options = [
    { label: "Price (Ascending)", value: "price_ascending" },
    { label: "Price (Descending)", value: "price_descending" },
    { label: "Northside", value: "northside" },
    { label: "Southside", value: "southside" },
    { label: "Bedrooms (Ascending)", value: "bedrooms_ascending" },
    { label: "Bedrooms (Descending)", value: "bedrooms_descending" },
    { label: "Bathrooms (Ascending)", value: "bathrooms_ascending" },
    { label: "Bathrooms (Descending)", value: "bathrooms_descending" }
  ];
  
  handleSelectedChanged = selected => {
    this.setState({ selected });
    console.log(selected, filter(selected, this.state.listings))
  };

  render() {
    const { selected, isLoading } = this.state;
    return (
      <div>
        <h1>Filter / Sort</h1>
        <Multiselect
          options={this.options}
          onSelectedChanged={this.handleSelectedChanged}
          selected={selected}
          isLoading={isLoading}
          disabled={isLoading}
          disableSearch={false}
          renderHeader={false}
          overrideStrings={{
            selectSomeItems: "Select from options",
            allItemsAreSelected: "All selected so no results will be returned",
            selectAll: "All",
            search: "Search for filter"
          }}
        />
        {selected.join(", ")}
      </div>
    );
  }
}

export default App;