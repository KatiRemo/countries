import React, { Component } from "react";
import axios from "axios";
import number from "easy-number-formatter";
// import CountryCard from "./components/CountryCard";


class App extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    axios
    .get("https://restcountries.com/v2/all?fields=name,capital,flags,languages,population,currencies")
    .then((res) => {
      this.setState({ data: res.data });
    });
  }

  render() {
    return <div className = "countries">
      {this.state.data.map((country) => (
        <div className = "country" key={country.name}>
          <header>
            <h2>{country.name}</h2> 
            <h3>Capital: {country.capital}</h3>
          </header>
            <img src={country.flags.png}/>
            <div className="cardContent">
              <p>
              Language(s): {country.languages.map((lang, i) =>(
                <span key={i}> {lang.name} </span>
                ))}
                </p> 
                <p>
                Population:
                  <span className="low">{number.formatNumber(country.population)}</span>
              </p>
                <p>
                  Currencies: {country.currencies.map((cur, i) =>(
                <span key={i}>{" "} {cur.name} {cur.symbol} </span>
                ))}
                </p>
            </div>
        </div>
      ))};
    </div>;
  }
}

export default App;