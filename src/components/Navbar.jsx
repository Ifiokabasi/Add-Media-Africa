import React, { useState } from "react";
import logoWhite from "../assets/logo-white.png";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* LOGO */}
      <div className="logoo">
        <img src={logoWhite} alt="Logo" className="navbar-logoo" />
        <span className="logoo-text">ADD MEDIA AFRICA</span>
      </div>

      {/* HAMBURGER */}
      <div className="menu-toggle" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* NAV LINKS */}
      <ul className={`nav-links ${open ? "active" : ""}`}>
        <li><a href="#service">Service</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
    </nav>
  );
}