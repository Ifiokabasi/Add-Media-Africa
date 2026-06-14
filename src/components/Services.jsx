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


   // Variants for stagger animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.95
    },
    visible: { 
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
        duration: 0.9,
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0.1
      }
    }
  };

  const headerVariants = {
    hidden: { 
      opacity: 0, 
      y: -30 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        duration: 0.5
      }
    }
  };

  const descVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        delay: 0.2,
        duration: 0.5
      }
    }
  };

  return (
    <motion.section 
      id='service'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
    <div className="services">
      <div className="services-container">
        <motion.div className='services-header'
        variants={headerVariants}
        
        ><img src={logoWhite} alt="Logo" className="services-logo" width="100" height="100" /><h1>Our Services</h1></motion.div>
        <motion.p 
        variants={descVariants}
        
        className = 'services-desc'>From concept to delivery, we provide 
          comprehensive media solutions tailored to your needs</motion.p>

        <motion.div className="services-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
             >
          {services.map((service, index) => (
            <motion.div key={index} className="service-card" variants={cardVariants}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
    </motion.section>
  );
};

export default Services;