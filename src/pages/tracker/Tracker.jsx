import { Outlet } from "react-router-dom";

import Sidebar from "../../components/layout/sidebar/Sidebar";
import LeftPanel from "../../components/tracker/LeftPanel";
import RightPanel from "../../components/tracker/RightPanel";

import "./tracker.css";

function Tracker() {
  return (
    <div className="tracker-page">
      <Sidebar />

      <LeftPanel />

      <Outlet />
    </div>
  );
}

export default Tracker;