import SummaryCard from "./SummaryCard";

import useCovidGlobal from "../../hooks/useCovidGlobal";

function SummarySection() {

  const {
    covidData,
    loading,
  } = useCovidGlobal();

  if (loading) {
    return <p>Loading...</p>;
  }

  return (

    <div className="summary-container">

      <SummaryCard
        title="Total Case"
        value={covidData.cases}
        badge={`+${covidData.todayCases}`}
        type="total"
      />

      <SummaryCard
        title="Active Case"
        value={covidData.active}
        type="active"
      />

      <SummaryCard
        title="Recovered Case"
        value={covidData.recovered}
        badge={`+${covidData.todayRecovered}`}
        type="recovered"
      />

      <SummaryCard
        title="Deaths Case"
        value={covidData.deaths}
        badge={`+${covidData.todayDeaths}`}
        type="deaths"
      />

    </div>

  );
}

export default SummarySection;