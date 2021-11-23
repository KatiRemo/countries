import React from 'react';

function CountryCard(props) {
    return <div className = "countries" id="searchField">
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
      ))}
    </div>;
  }

export default CountryCard;

