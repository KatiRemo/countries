import React, { Component } from "react";
import axios from "axios";
import number from "easy-number-formatter";
import "./loading.css";
import "./index.css";
import "./components/CountryList";
// import CountryCard from "./components/CountryCard";
import Home from "./components/Home";

const App = () => {
  return (
      <Router>
          <Home />
          <Footer />
      </Router>
  );
};

export default App;