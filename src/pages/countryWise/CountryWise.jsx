//import { ConteinerTotal }  from "../../components/countryWise/conteinerTotal/ConteinerTotal";
import { ConteinerWise } from "../../components/countryWise/conteinerWise/ConteinerWise";

import { useEffect, useState } from "react";
import { InfoHook } from "../../hooks/UseApi";

import StatsCard from "../../components/common/StatsCard";
import { getStatsConfig } from "../../utils/statsConfig";
import LoadingDots from "../../components/common/LoadingDots";
import FloatingActions from "../../components/common/FloatingActions";


import "./countryWise.css";

export const CountryWise = () => {

  const { countries, loading } = InfoHook();
  const [selectedCountry, setSelectedCountry] = useState("France");
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
console.log()

  return (
    <div className="countryWise-layout">
      <div className="country-panel">
        <div className="tit-panel">
        <h1 className="countryWise-title">Covid-19 Country Wise - Tabs</h1>
        <p className="updated-date">Updated: June 5, 2022</p>
        </div>

        <div className="header-line"></div>

        <div>
          <ConteinerWise 
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
          />
        </div>

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
        
        <LoadingDots />
        <FloatingActions />
      </div>
      </div>

  );
};
