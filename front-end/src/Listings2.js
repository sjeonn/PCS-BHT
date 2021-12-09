import React, { Component } from "react";
import Multiselect from "@khanacademy/react-multi-select";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
      isLoading: true,
      listings: [props.listings]
    };
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
// this.listings = {options.some(e => e.label === 'Price (Ascending)') ? 
// this.listings.filter(person => person.age < 60) : this.listings}
  handleSelectedChanged = selected => {
    this.setState({ selected });
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