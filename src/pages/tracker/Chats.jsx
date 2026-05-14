import { useEffect, useState } from "react";
import { InfoHook } from "../../hooks/UseApi";
import { getStatsConfig } from "../../utils/statsConfig";
import StatsCard from "../../components/common/StatsCard";
import LoadingDots from "../../components/common/LoadingDots";
import FloatingActions from "../../components/common/FloatingActions";

import "./chats.css";

function Chats() {
  const { countries, loading } = InfoHook();

  const [selectedCountry, setSelectedCountry] = useState("Afghanistan");

  const [countryData, setCountries] = useState(null);

  useEffect(() => {
    if (countries.length > 0) {
      const country = countries.find(
        (item) => item.country === selectedCountry,
      );

      setCountries(country);
    }
  }, [selectedCountry, countries]);

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
          {countries.map((country) => (
            <option
              key={country.country}
              value={country.country}
            >
              {country.country}
            </option>
          ))}
        </select>

        <p className="updated-date">
          Updated: June 5, 2022
        </p>

      </div>

      <div className="header-line"></div>

      <br />

      <div className="stats-section">

        <div className="stats-grid">

          {stats.map((stat) => (
            <StatsCard
              key={stat.title}
              title={stat.title}
              value={stat.value}
              color={stat.color}
              icon={stat.icon}
            />
          ))}

        </div>

        <FloatingActions />

      </div>

    </div>
  );
}

export default Chats;