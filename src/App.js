import React from "react";
import CountryList from "./CountryList"
import Home from "./Home";
import { 
  BrowserRouter, 
  Link, 
  Routes, 
  Route, 
  useParams,
} from "react-router-dom";
import CountrySingle from "./CountrySingle";
import About from "./About";

const RouteWrapper = (props) => {
  const params = useParams();
  return <CountrySingle params={params} {...props} />
};

const App = () => {
  return (
      <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/countries">Countries</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        </nav>

        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/countries" element={<CountryList />} />
          <Route path="/countries/:name" element={<RouteWrapper />} />
        </Routes>
      </BrowserRouter>    


  );
};

export default App;