import React from 'react';
import "./Navbar.scss";
import logo from "../Asset/companyLogo.jpeg"
const NavBar = () => {
  return (
    <nav>
    <div className="nav-icon">
    <img src={logo}></img>
    </div>
    <ul className="nav-tabs">
      <li className="nav-dropdown">consecetuer</li>
      <li><button className="nav-button">Anmelden</button></li>
    </ul>
  </nav>
  )
}

export default NavBar