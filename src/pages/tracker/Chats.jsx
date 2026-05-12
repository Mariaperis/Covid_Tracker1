import { useEffect, useState } from "react";

import useCountries from "../../hooks/useCountries";

import StatsCard from "../../components/common/StatsCard";

import { getStatsConfig } from "../../utils/statsConfig";

import "./chats.css";

function Chats() {
  const { countriesAll, loading } = useCountries();

  const [selectedCountry, setSelectedCountry] = useState("Afghanistan");

  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    if (countriesAll.length > 0) {
      const country = countriesAll.find(
        (item) => item.country === selectedCountry,
      );

      setCountryData(country);
    }
  }, [selectedCountry, countriesAll]);

  if (loading || !countryData) {
    return <h2>Loading...</h2>;
  }

  const stats = getStatsConfig(countryData);

  return (
    <div className="right-panel">
      <div className="dashboard-header">
        <select
          className="country-select"
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
        >
          {countriesAll.map((country) => (
            <option key={country.country} value={country.country}>
              {country.country}
            </option>
          ))}
        </select>

        <p className="updated-date">Updated: June 5, 2022</p>
      </div>

      <div className="header-line"></div>

      <br />

      <div className="stats-grid">
        {stats.map((stat) => (
          <StatsCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            color={stat.color}
          />
        ))}
      </div>
    </div>
  );
}

export default Chats;
