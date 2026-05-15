import React from 'react';
import landingImage from '../assets/Landing-Image_addMedia.jpg';
import './Hero.css'; // Assuming we'll create a CSS file for styling;
// import {framer} from 'framer-motion';


const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Creating <span className="hero-span">Memorable</span> Stories that Matter</h1>
          <p>We're a full-service media production company 
            delivering premium content across all platforms</p>
          <button className="cta-button">View Our Work</button>
          <button className="cta-button-outline">Get in Touch</button>
        </div>
        <div className="hero-image">
          <img src={landingImage} alt="Landing Image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;