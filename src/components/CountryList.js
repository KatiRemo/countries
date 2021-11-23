import React, { Component } from 'react';
import axios from "axios";
import number from "easy-number-formatter";

class CountryList extends Component {
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
      if (this.state.isLoading) {
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
  

export default CountryList;