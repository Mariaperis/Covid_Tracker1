import React from "react";
import "./sidebar.css";
import { Link, NavLink } from "react-router-dom";
import UnderConstruction from "../../../pages/tracker/UnderConstruction";

import logo from "../../../assets/icons/favicon.png";

import {
  BiPieChartAlt,
  BiMenu,
  BiGridAlt,
  BiFolder,
  BiCopy,
  BiLineChart,
  BiWorld,
  BiComment,
  BiLogoFlickr,
} from "react-icons/bi";

const menuItems = [
  {
    id: "chats",
    path: "/tracker/chats",
    icon: <BiPieChartAlt />,
  },
  {
    id: "table",
    path: "/tracker/table",
    icon: <BiMenu />,
  },
  {
    id: "tiles",
    path: "/tracker/tiles",
    icon: <BiGridAlt />,
  },
  {
    id: "country-wise",
    path: "/tracker/country-wise",
    icon: <BiFolder />,
  },
  {
    id: "widgets",
    path: "/tracker/widgets",
    icon: <BiCopy />,
  },
  {
    id: "charts",
    path: "/tracker/charts",
    icon: <BiLineChart />,
  },
  {
    id: "continent",
    path: "/tracker/continent",
    icon: <BiWorld />,
  },
  {
    id: "messages",
    path: "/tracker/messages",
    icon: <BiComment />,
  },
];

const Sidebar = () => {
  return (
    <nav className="navigation">
      <div className="nav-content">
        <ul>
          <li className="logo">
            <Link to="/">
              <img src={logo} alt="logo" className="logo-animation" />
            </Link>
          </li>

          <div className="menu-icons">
            {menuItems.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {item.icon}
                </NavLink>
              </li>
            ))}
          </div>

          <li className="bottom-icon">
            <button>
              <BiLogoFlickr />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
