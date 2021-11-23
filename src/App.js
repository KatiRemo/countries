import React, { Component } from "react";
import axios from "axios";
import number from "easy-number-formatter";
import "./loading.css";
// import CountryCard from "./components/CountryCard";


class App extends Component {
  state = {
    data: [],
    searchInput:"",
    isLoading: true,
  };

  componentDidMount() {
    axios
    .get("https://restcountries.com/v2/all?fields=name,capital,flags,languages,population,currencies")
    .then((res) => {
      this.setState({ data: res.data, isLoading: false });
    });
  }

  searchHandler = (event) => {
    this.setState({
      searchInput: event.target.value,
    });
    // console.log(this.state.searchInput)
  };

  render() {
    if (!this.state.isLoading) {
      return (
        <div>
          <div class="lds-ripple">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <p>Wait, working on it!</p>
        </div>
      );
    }

    // if(!this.state.isLoading) {
    //   return (<div>
    //     <p>Wait, working on it!</p>
    //   </div> 
    //   );
    // }

    return <div className = "countries">
      <input type="text" name="search" onChange={this.searchHandler}/>
      {this.state.data.filter((country) => {
        return country.name
        .toLowerCase()
        .includes(this.state.searchInput.toLowerCase());
      })
      .map((country) => (
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