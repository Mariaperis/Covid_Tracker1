import React from "react";
import "./sidebar.css";

import logo from "../../assets/icons/favicon.png";

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
  <BiPieChartAlt />,
  <BiMenu />,
  <BiGridAlt />,
  <BiFolder />,
  <BiCopy />,
  <BiLineChart />,
  <BiWorld />,
  <BiComment />,
];

const Sidebar = () => {
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

            {menuItems.map((icon, index) => (
              <li key={index}>

                <a
                  href="#"
                  className={index === 0 ? "active" : ""}
                >
                  {icon}
                </a>

              </li>
            ))}

          </div>

          {/* BOTTOM ICON */}
          <li className="bottom-icon">
            <a href="#">
              <BiLogoFlickr />
            </a>
          </li>

        </ul>

      </div>
    </nav>
  );
};

export default Sidebar;