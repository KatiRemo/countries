import React, { Component } from "react";
import axios from "axios";
import CountryCard from "./components/CountryCard";

class App extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      this.setState({ data: res.data });
  });
  }

  render() {
    return <div className = "countries">
      {this.state.data.map((country) => (
        <div className = "country" key={country.name.common}>
        <h2>{country.name.common}</h2> <p>Capital: {country.capital}</p>
        <img src={country.flags.png}/>
        </div>
      ))};
    </div>;
  }
}

export default App;