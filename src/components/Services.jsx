import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Services.css';
import logoWhite from '../assets/logo-white.png';
import { FaVideo, FaCamera, FaPhotoVideo, FaBullhorn, FaYoutube, FaBroadcastTower, FaMicrophone, FaLaptopCode, FaCameraRetro, FaUsers } from "react-icons/fa";

// 🎬 FILM-GRADE MOTION CURVE
const easeCinematic = [0.25, 0.1, 0.25, 1];

// 🟣 LAYER 1 - HERO / TITLE (Camera pull focus)
const layer1HeroVariants = {
  hidden: { 
    opacity: 0, 
    y: 40, 
    filter: "blur(10px)",
    scale: 0.98
  },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      duration: 1.3,
      ease: easeCinematic
    }
  }
};

// 🟡 LAYER 2 - TEXT / DESCRIPTION
const layer2MediumVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.97
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      delay: 0.1,
      ease: easeCinematic
    }
  }
};

// 🔵 LAYER 3 - CARDS (Floating service frames)
const cinematicCardVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.94
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: easeCinematic
    }
  }
};

// 🎬 STAGGER CONTAINER
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.25,
      ease: easeCinematic
    }
  }
};

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
      icon: <FaUsers />
    },
    {
      title: 'Photography',
      description: 'Stunning photography for advertising, editorial, and commercial projects.',
      icon: <FaCameraRetro />
    },
    {
      title: 'Digital Marketing',
      description: 'Strategic digital campaigns that drive engagement and deliver results.',
      icon: <FaBullhorn />
    },
    {
      title: 'Content Creation',
      description: 'Creative content development for all platforms and audiences.',
      icon: <FaYoutube />
    }
  ];

  return (
    <motion.section 
      id='service'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.7,
        ease: easeCinematic
      }}
    >
      <div className="services">
        <div className="services-container">
          
          {/* 🟣 LAYER 1 - HERO: Header */}
          <motion.div 
            className='services-header'
            variants={layer1HeroVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <img src={logoWhite} alt="Logo" className="services-logo" width="100" height="100" />
            <h1>Our Services</h1>
          </motion.div>

          {/* 🟡 LAYER 2 - TEXT: Description */}
          <motion.p 
            className='services-desc'
            variants={layer2MediumVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            From concept to delivery, we provide comprehensive media solutions tailored to your needs
          </motion.p>

          {/* 🎬 CINEMATIC POLISH LAYER - Global fade wrapper */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: easeCinematic }}
          >
            {/* 🔵 LAYER 3 - CARDS: Floating service frames */}
            <motion.div 
              className="services-grid"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {services.map((service, index) => (
                <motion.div 
                  key={index} 
                  className="service-card" 
                  variants={cinematicCardVariants}
                  whileHover={{
                    y: -12,
                    scale: 1.02,
                    transition: { duration: 0.3, ease: easeCinematic }
                  }}
                >
                  <motion.div 
                    className="service-icon"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.2, ease: easeCinematic }
                    }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Services;