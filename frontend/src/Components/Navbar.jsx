import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faHeart } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css";

function Navbar() {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <div className="navbar-section">
      <h1 className="navbar-title">
        <a href="#">
          <span className="navbar-logo">
            <FontAwesomeIcon icon={faHeart} className="navbar-logo-icon" />
          </span>
          <span className="navbar-brand">
            <span>AyurSutra</span>
            <span>Professional Healthcare Platform</span>
          </span>
        </a>
      </h1>

      {/* Desktop */}
      <ul className="navbar-items">
        <li>
          <a href="#" className="navbar-links">
            Home
          </a>
        </li>
        <li>
          <a href="#services" className="navbar-links">
            Services
          </a>
        </li>
        <li>
          <a href="#about" className="navbar-links">
            About
          </a>
        </li>
      </ul>

      {/* Mobile */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar-close">
          <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
        </div>

        <ul className="mobile-navbar-links">
          <li>
            <a href="#" onClick={openNav}>
              Home
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#services">
              Services
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#about">
              About
            </a>
          </li>
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div className="mobile-nav">
        <FontAwesomeIcon
          icon={faBars}
          onClick={openNav}
          className="hamb-icon"
        />
      </div>
    </div>
  );
}

export default Navbar;
