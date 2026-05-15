import logoWhite from '../assets/logo-white.png';

import './Navbar.css';  

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logoo">
        <img src={logoWhite} alt="Logo" className="navbar-logoo"  width="50" height="50" />
        <span className="logoo-text">ADD MEDIA AFRICA</span>
      
      
      </div>

      <ul className="nav-links">
        <li>Service</li>
        <li>Work</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
      
    </nav>
  );
}