import Sidebar from "../layouts/sidebar/Sidebar";
import LeftPanel from "../components/tracker/LeftPanel";
import Tiles from "./Tiles";

import "./tracker.css";

function Tracker() {
  return (
    <div className="tracker-layout">

      <Sidebar />

      <LeftPanel />
      
      <Tiles />

    </div>
  );
}

export default Tracker;