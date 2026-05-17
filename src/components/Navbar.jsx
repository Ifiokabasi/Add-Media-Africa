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
        <li><a href ='#service'>Service</a></li>
        <li><a href ='#work'>Work</a></li>
        <li><a href ='#about'>About</a></li>
        <li><a href ='#contact'>Contact Us</a></li>
      </ul>
      
    </nav>
  );
}