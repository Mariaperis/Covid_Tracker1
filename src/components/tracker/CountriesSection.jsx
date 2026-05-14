import CountryItem from "./CountryItem";

import useTopCountries from "../../hooks/useTopCountries";

function CountriesSection() {

  const { countries, loading } =
    useTopCountries();

  if (loading) {
    return <p>Loading...</p>;
  }

  return (

    <div className="countries-section">

      <h2 className="countries-title">
        Top 10 Country
      </h2>

      {countries.map((country) => (

        <CountryItem
          key={country.country}

          country={country.country}

          flag={country.countryInfo.flag}

          total={country.cases}
        />

      ))}

    </div>

  );
}

export default CountriesSection;