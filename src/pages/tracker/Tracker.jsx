import { useState } from "react";

import Sidebar from "../../components/layout/sidebar/Sidebar";
import LeftPanel from "../../components/tracker/LeftPanel";
import RightPanel from "../../components/tracker/RightPanel";

import "./tracker.css";

function Tracker() {

  const [activeScreen, setActiveScreen] = useState("dashboard");

  return (
    <div className="tracker-page">

      <Sidebar
        activeScreen={activeScreen}
        setActiveScreen={setActiveScreen}
      />

      <LeftPanel />

      <RightPanel activeScreen={activeScreen} />

    </div>
  );
}

export default Tracker;