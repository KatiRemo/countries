import React, { Component } from "react";
import CountryList from "./CountryList"
import Home from "./Home";

const App = () => {
  return (
      <div>
          <Home />
          <CountryList />
      </div>    
  );
};

export default App;