import React, { Component } from 'react';
import axios from 'axios';
import './loading.css';
import './index.css';
import Footer from './Footer';
import number from "easy-number-formatter";

function getCountry(capital) {
    return axios.get(`https://restcountries.com/v2/capital/${capital}`);
  }
  
  function getWeather(capital) {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_KEY}` 
   );
  }

class CountrySingle extends Component {
    state = {
        country: {},
        weather: {},
        currency: {},
        population: {},
        isLoading: true,
    };

    componentDidMount() {
        Promise.all([
            getCountry(this.props.params.name), 
            getWeather(this.props.params.name),
        ]).then((res) => {
        this.setState({
            country: res[0].data[0],
            weather: res[1].data,
            isLoading: false,
        });
        console.log("response", res);
        console.log("state country", this.state.country);
        console.log("state weather", this.state.weather);
        });
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
                <div className="capitalData">
                    <div className="single">
                        <h2>{this.state.country.name} / {this.state.country.nativeName}</h2>
                    <img 
                    src={`http://openweathermap.org/img/wn/${this.state.weather.weather[0].icon}@2x.png`} 
                    alt={this.state.weather.weather[0].description}
                    />
                    <p>Temperature in the capital city {" "} {this.state.country.capital} is {this.state.weather.main.temp} °C at the moment 
                    </p>
                    <p>The population of {this.state.country.name} is <span className="low">{number.formatNumber(this.state.country.population)}</span></p>
                    <p>The language(s) spoken in {this.state.country.name} are: {this.state.country.languages.map((lang, i) => (
                        <span key={i}> {lang.name} </span>
                    ))}
                    </p>
                    <p>
                        {this.state.country.name} is situated in the continent of {this.state.country.region}
                    </p>
                    <p>
                        The timezone of {this.state.country.name} is {this.state.country.timezones}
                    </p>
                  </div>
                  <Footer />
                </div>
            );
        }
    }
}

export default CountrySingle;