import Sidebar from "../layouts/sidebar/Sidebar";
import LeftPanel from "../components/tracker/LeftPanel";

import "./tracker.css";

function Tracker() {
  return (
    <div className="tracker-layout">

      <Sidebar />

      <LeftPanel />

    </div>
  );
}

export default Tracker;