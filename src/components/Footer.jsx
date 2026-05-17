import React from 'react';
import './Footer.css'; // Assuming you'll add styles later
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logoWhite from '../assets/logo-white.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        <div className="footer-section">
          <span className="logo-container">
            <img src={logoWhite} alt="Logo" className="footer-logo" />
            <h3>ADD MEDIA AFRICA</h3>
          </span>
          <p>ADD Media Africa Creating compelling stories
             and premium content that<br></br> resonates with
              audiences worldwide.</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#service">Services</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

       
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="https://www.facebook.com/share/1CVH4GeVnZ/?mibextid=wwXIfr"
               target="_blank"
               rel="noopener noreferrer"      
            ><FaFacebook className="social-icon" /></a>
            <a href="#twitter"><FaTwitter className="social-icon" /></a>
            <a href="#instagram"><FaInstagram className="social-icon" /></a>

            <a 
                href="https://www.linkedin.com/company/add-media-africa/"
               target="_blank"
               rel="noopener noreferrer" 
            
            
            ><FaLinkedin className="social-icon" /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 ADD Media Africa. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;