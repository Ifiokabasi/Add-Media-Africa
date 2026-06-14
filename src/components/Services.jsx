import React from 'react';
import {motion} from 'framer-motion';
import './Services.css'; // Assuming you'll add styles later
import logoWhite from '../assets/logo-white.png';
import { FaVideo, FaCamera, FaPhotoVideo, FaBullhorn, FaYoutube, FaBroadcastTower,  FaMicrophone, FaLaptopCode,   FaCameraRetro, FaUsers  } from "react-icons/fa";


const Services = () => {
  const services = [
    {
      title: 'Video Production',
      description: 'High-quality video content for commercials, corporate videos, and social media campaigns.',
      icon: <FaVideo />
    },
    {
      title: 'Broadcast Media',
      description: 'Professional broadcast solutions for TV, radio, and streaming platforms.',
      icon: <FaMicrophone />
    },
    {
      title: 'Media Training',
      description: 'Professional media training and coaching to enhance on-camera presence and communication skills.',
      icon: <  FaUsers />
    },
    {
      title: 'Photography',
      description: 'Stunning photography for advertising, editorial, and commercial projects.',
      icon: <FaCameraRetro />
      
    },
    {
      title: 'Digital Marketing',
      description: 'Strategic digital campaigns that drive engagement and deliver results.',
      icon: <FaBullhorn/>
    },
    {
      title: 'Content Creation',
      description: 'Creative content development for all platforms and audiences.',
      icon: <FaYoutube/>
    }
  ]

  return (
    <motion.section 
      id='service'
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
    <div className="services">
      <div className="services-container">
        <div className='services-header'><img src={logoWhite} alt="Logo" className="services-logo" width="100" height="100" /><h1>Our Services</h1></div>
        <p className = 'services-desc'>From concept to delivery, we provide 
          comprehensive media solutions tailored to your needs</p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </motion.section>
  );
};

export default Services;