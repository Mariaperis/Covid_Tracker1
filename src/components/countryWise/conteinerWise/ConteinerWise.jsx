import { CardCountry } from "../CardCountry";
import dataCountries from "../../../assets/data/data-countries";
import "./ConteinerWise.css";

export const ConteinerWise = () => {
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
