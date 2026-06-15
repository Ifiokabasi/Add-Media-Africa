import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logoWhite from '../assets/logo-white.png';

// 🎬 FILM-GRADE MOTION CURVE
const easeCinematic = [0.25, 0.1, 0.25, 1];

// 🟣 LAYER 1 - SLOW (Footer brand section)
const layer1SlowVariants = {
  hidden: { 
    opacity: 0, 
    y: 40, 
    filter: "blur(8px)",
    scale: 0.98
  },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      duration: 1.2,
      ease: easeCinematic
    }
  }
};

// 🟡 LAYER 2 - MEDIUM (Quick links)
const layer2MediumVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.97
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: easeCinematic
    }
  }
};

// 🔵 LAYER 3 - FAST (Social icons)
const socialIconVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    rotate: -10
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.5,
      ease: easeCinematic
    }
  },
  hover: {
    scale: 1.15,
    rotate: 5,
    transition: {
      duration: 0.2,
      ease: easeCinematic
    }
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1,
      ease: easeCinematic
    }
  }
};

// Link item variants for stagger
const linkItemVariants = {
  hidden: { 
    opacity: 0, 
    x: -20,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    x: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: easeCinematic
    }
  },
  hover: {
    x: 5,
    transition: {
      duration: 0.2,
      ease: easeCinematic
    }
  }
};

// Stagger container for links
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
      ease: easeCinematic
    }
  }
};

// Social icons stagger
const socialStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
      ease: easeCinematic
    }
  }
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: easeCinematic }}
    >
      <div className="footer-content">
        
        {/* 🟣 LAYER 1 - SLOW: Brand Section */}
        <motion.div 
          className="footer-section"
          variants={layer1SlowVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.span 
            className="logo-container"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2, ease: easeCinematic }}
          >
            <img src={logoWhite} alt="Logo" className="footer-logo" />
            <h3>ADD MEDIA AFRICA</h3>
          </motion.span>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: easeCinematic }}
          >
            ADD Media Africa Creating compelling stories
            and premium content that resonates with
            audiences worldwide.
          </motion.p>
        </motion.div>

        {/* 🟡 LAYER 2 - MEDIUM: Quick Links with stagger */}
        <motion.div 
          className="footer-section"
          variants={layer2MediumVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h3
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: easeCinematic }}
          >
            Quick Links
          </motion.h3>
          <motion.ul variants={staggerContainer}>
            {['Services', 'Work', 'About', 'Contact'].map((link, index) => (
              <motion.li key={link} variants={linkItemVariants}>
                <motion.a 
                  href={`#${link.toLowerCase()}`}
                  whileHover="hover"
                  variants={linkItemVariants}
                >
                  {link}
                </motion.a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* 🔵 LAYER 3 - FAST: Social Section */}
        <motion.div 
          className="footer-section"
          variants={layer2MediumVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1 }}
        >
          <motion.h3
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: easeCinematic }}
          >
            Follow Us
          </motion.h3>
          <motion.div 
            className="social-links"
            variants={socialStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.a 
              href="https://www.facebook.com/share/1CVH4GeVnZ/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              variants={socialIconVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <FaFacebook className="social-icon" />
            </motion.a>
            
            <motion.a 
              href="#twitter"
              variants={socialIconVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <FaTwitter className="social-icon" />
            </motion.a>
            
            <motion.a 
              href="#instagram"
              variants={socialIconVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <FaInstagram className="social-icon" />
            </motion.a>

            <motion.a 
              href="https://www.linkedin.com/company/add-media-africa/"
              target="_blank"
              rel="noopener noreferrer"
              variants={socialIconVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <FaLinkedin className="social-icon" />
            </motion.a>
          </motion.div>
        </motion.div>
        <div className="footer-watermark">
              ADD MEDIA AFRICA
        </div>
      </div>
      
      {/* Footer Bottom with fade in */}
      <motion.div 
        className="footer-bottom"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3, ease: easeCinematic }}
      >
        <p>&copy; {currentYear} ADD Media Africa. All rights reserved.</p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;