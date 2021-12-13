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
                    <p>Capital city: <strong>{this.state.country.capital}</strong></p> <p>Current temperature: {" "} <strong>{this.state.weather.main.temp}</strong> °C</p>
                    <p>Population: <span className="low"><strong>{number.formatNumber(this.state.country.population)}</strong></span></p>
                    <p>The official language(s): {this.state.country.languages.map((lang, i) => (
                        <span key={i}><strong> {lang.name} </strong></span>
                    ))}
                    </p>
                    <p>Continent: <strong> {this.state.country.region}</strong></p>
                    <p>
                        Timezones: {this.state.country.timezones.map((tz, i) => (
                        <span key={i}> <strong>{tz} </strong> </span>))}
                    </p>
                  </div>
                  <Footer />
                </div>
            );
        }
    }
}

export default CountrySingle;