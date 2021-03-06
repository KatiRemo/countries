import React from 'react';
import number from "easy-number-formatter";
import {Link} from "react-router-dom";

const CountryCard = ({
  name,
  capital,
  languages,
  currencies,
  population,
  flags,
}) => {
  return (
    <Link to={{ pathname: `${capital}` }}>
    <div className="country" key={name}>
      <h2>{name}</h2> <h3>{capital}</h3>
      <img src={flags.png} alt={name} />
      <div className="cardContent">
        <p>
          Language(s):
          {languages?.map((lang, i) => (
            <span key={i}><strong> {lang.name} </strong></span>
          ))}
        </p>

        <p>
          Currencies:
          {currencies?.map((mon, i) => (
            <span key={i}>
              <strong>{mon.name} - {mon.symbol}</strong>
            </span>
          ))}
        </p>
        <p>
          Population:
          <span className="low"><strong>{number.formatNumber(population)}</strong></span>
        </p>
      </div>
    </div>
    </Link>
  );
};


export default CountryCard;

