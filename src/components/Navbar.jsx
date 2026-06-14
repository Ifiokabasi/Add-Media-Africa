import React, { useState } from "react";
import logoWhite from "../assets/logo-white.png";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setOpen(false);
  };

  // Close menu when clicking outside (optional but recommended)
  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      setOpen(false);
    }
  };

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

      {/* NAV LINKS - add onClick to close menu */}
      <ul 
        className={`nav-links ${open ? "active" : ""}`}
        onClick={handleOutsideClick}
      >
        <li><a href="#service" onClick={handleLinkClick}>Service</a></li>
        <li><a href="#work" onClick={handleLinkClick}>Work</a></li>
        <li><a href="#about" onClick={handleLinkClick}>About</a></li>
        <li><a href="#contact" onClick={handleLinkClick}>Contact Us</a></li>
      </ul>
    </nav>
  );
}