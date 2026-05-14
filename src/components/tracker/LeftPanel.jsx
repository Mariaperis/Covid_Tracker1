import SummarySection from "./SummarySection";
import CountriesSection from "./CountriesSection";

import "./leftPanel.css";

function LeftPanel() {
  return (
    <div className="left-panel">

      <h1 className="dashboard-title">
        COVID-19 Tracker
      </h1>

      <SummarySection />

      <CountriesSection />

    </div>
  );
}

export default LeftPanel;