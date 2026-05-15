import React from 'react';
import './ClientLogos.css';

import bbcLogo from '../assets/BBC.jpg';
import bbcSport from '../assets/bbc-sports.png';
import afp from '../assets/AFP.jpg' 
import cgtn from '../assets/CGTN.jpg'
import aljazeera from '../assets/Aljazeera.png'
import voa from '../assets/VOA.jpg'
import spiro from '../assets/Spiro.png'
import oando from '../assets/Oando-Plc.jpg'

export default function ClientLogos() {
  const logos = [
    bbcLogo,
    bbcSport,
    afp,
    cgtn,
    aljazeera,
    voa,
    spiro,
    oando
   
  ];

  
  return (
    <section className="logo-section">

      <div className="logo-text">
        <h2>Trusted By Leading Media Brands</h2>
        <p>
          Some of the global brands and platforms we’ve worked with.
        </p>
      </div>

      <div className="logo-track">
        {[...logos, ...logos].map((logo, index) => (
          <img key={index} src={logo} alt="client logo" className="logo" />
        ))}
      </div>
    </section>
  );
}