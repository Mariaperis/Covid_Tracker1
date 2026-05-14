import { CardCountry } from "../CardCountry";
import useCountryWise from "../../../hooks/useCountryWise.js";
import "./ConteinerWise.css";

export const ConteinerWise = ({ selectedCountry, setSelectedCountry }) => {
  const { filterCountries, loading } = useCountryWise();
  const handleClick = (country) => setSelectedCountry(country.country);
  
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <ul className="conteiner-wise">
      <li>
        {filterCountries.map((country) => (
          <CardCountry
            flagUrl={country.countryInfo.flag}
            countryName={country.country}
            active={selectedCountry === country.country}
            onClick={() => handleClick(country)}
          />
        ))}
      </li>
    </ul>
  );
};
