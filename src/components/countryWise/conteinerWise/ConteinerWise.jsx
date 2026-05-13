import { CardCountry } from "../CardCountry";
import dataCountries from "../../../assets/data/data-countries";

import useCountryWise from "../../../hooks/useCountryWise.js";

import "./ConteinerWise.css";

export const ConteinerWise = () => {
  const { countries, loading } = useCountryWise();
  console.log(countries);

  if(loading) {
    return <p>Loading...</p>;
  }

  return (
    <ul className="conteiner-wise">
      <li>
        {dataCountries.map((country) => (
          <CardCountry
            
            flagUrl={country.countryInfo.flag}
            countryName={country.country}
          />
        ))}
      </li>
    </ul>
  );
};
