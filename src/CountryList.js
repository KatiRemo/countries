import React, { Component } from "react";
import axios from "axios";
import "./loading.css";
import CountryCard from "./CountryCard";

class CountryList extends Component {
  state = {
    data: [],
    searchInput: "",
    isLoading: true,
  };

  componentDidMount() {
    axios
      .get(
        "https://restcountries.com/v2/all?fields=name,capital,flags,languages,currencies,population"
      )
      .then((res) => {
        this.setState({ data: res.data, isLoading: false });
        console.log(this.state.data);
      });
  }

  searchHandler(e) {
    this.setState({
      searchInput: e.target.value,
    });
    console.log(this.state.searchInput);
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div>
          <div className="lds-ripple">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      );
    }

    if (!this.state.isLoading) {
      return (
        <div>
          <input
            type="text"
            name="search"
            placeholder="Search..."
            onChange={this.searchHandler.bind(this)}
          />
          <div className="countries">
          {this.state.data
            .filter((c) => {
              return c.name
                .toLowerCase()
                .includes(this.state.searchInput.toLowerCase());
            })
            .map((country) => (
              <CountryCard {...country} key={country.name} />
            ))}
        </div>
        </div>
      );
    }
  }
}

export default CountryList;