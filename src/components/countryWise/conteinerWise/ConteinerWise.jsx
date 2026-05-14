import { CardCountry } from "../CardCountry";
import useCountryWise from "../../../hooks/useCountryWise.js";
import "./ConteinerWise.css";

export const ConteinerWise = ({ countries, selectedCountry, setSelectedCountry }) => {
  const { filterCountries, loading } = useCountryWise();

  if (loading) return <p>Loading...</p>;

  const handleClick = (country) => {
    console.log("click en ", country.country);
    setSelectedCountry(country.country);
  };

  return (
    <ul className="conteiner-wise">
      <li>
        {filterCountries.map((country) => (
          <CardCountry
            key={country.country}
            flagUrl={country.countryInfo.flag}
            countryName={country.country}
            totalCases={country.cases}
            active={selectedCountry === country.country}
            onClick={() => setSelectedCountry(country.country)} 
          />
        ))}
      </li>
    </ul>
  );
};
