import { CardCountry } from "../CardCountry";
import useCountryWise from "../../../hooks/useCountryWise.js";
import "./conteinerWise.css";

export const ConteinerWise = ({
  countries,
  selectedCountry,
  setSelectedCountry,
}) => {
  const { filterCountries, loading } = useCountryWise();

  if (loading) return <p>Loading...</p>;

  const handleClick = (country) => {
    console.log("click en ", country.country);
    setSelectedCountry(country.country);
  };

  return (
    <ul className="conteiner-wise">
      {filterCountries.map((country) => (
        <li key={country.country}>
          <CardCountry
            flagUrl={country.countryInfo.flag}
            countryName={country.country}
            active={selectedCountry === country.country}
            onClick={() => setSelectedCountry(country.country)}
          />
        </li>
      ))}
    </ul>
  );
};
