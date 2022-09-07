import React from "react";
import logo from "../images/logo.png";

function Header() {
  return (
    <div>
      <header>
        <div className="navbar">
          <img src={logo} alt="" className="nav-logo" />
          <ul className="nav-list">
            <li>Home</li>
            <li>Service</li>
            <li>Experience</li>
            <li>Contact</li>
            <li>Testmonial</li>
          </ul>
          <button className="nav-button">Portfolio</button>
        </div>
      </header>
    </div>
  );
}

export default Header;
