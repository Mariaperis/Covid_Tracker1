import React from "react";
import "./sidebar.css";

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
    icon: <BiPieChartAlt />,
  },
  {
    id: "table",
    icon: <BiMenu />,
  },
  {
    id: "tiles",
    icon: <BiGridAlt />,
  },
  {
    id: "country-wise",
    icon: <BiFolder />,
  },
  {
    id: "widgets",
    icon: <BiCopy />,
  },
  {
    id: "charts",
    icon: <BiLineChart />,
  },
  {
    id: "continent",
    icon: <BiWorld />,
  },
  {
    id: "messages",
    icon: <BiComment />,
  },
];

const Sidebar = ({ activeScreen, setActiveScreen }) => {

  return (
    <nav className="navigation">

      <div className="nav-content">

        <ul>

          <li className="logo">
            <img
              src={logo}
              alt="logo"
              className="logo-animation"
            />
          </li>

          <div className="menu-icons">

            {menuItems.map((item) => (

              <li key={item.id}>

                <button
                  onClick={() => setActiveScreen(item.id)}
                  className={
                    activeScreen === item.id
                      ? "active"
                      : ""
                  }
                >
                  {item.icon}
                </button>

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