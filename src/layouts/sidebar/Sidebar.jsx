import React from "react";
import "./sidebar.css";

import logo from "../../assets/icons/favicon.png";
import icon01 from "../../assets/icons/icon01.png";
import icon02 from "../../assets/icons/icon02.png";
import icon03 from "../../assets/icons/icon03.png";
import icon04 from "../../assets/icons/icon04.png";
import icon05 from "../../assets/icons/icon05.png";
import icon06 from "../../assets/icons/icon06.png";
import icon07 from "../../assets/icons/icon07.png";
import icon08 from "../../assets/icons/icon08.png";
import icon09 from "../../assets/icons/icon09.png";

const menuItems = [
  icon01,
  icon02,
  icon03,
  icon04,
  icon05,
  icon06,
  icon07,
  icon08,
];

const Sidebar = () => {
  return (
    <nav className="navigation">
      <div className="nav-content">
        <ul>
          <li className="logo">
            <img src={logo} alt="logo" className="logo-animation"/>
          </li>

          <div className="menu-icons">
            {menuItems.map((icon, index) => (
              <li key={index}>
                <a href="#" className={index === 0 ? "active" : ""}>
                  <img src={icon} alt="" />
                </a>
              </li>
            ))}
          </div>

          <li className="bottom-icon">
            <a href="#">
              <img src={icon09} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;