import React from 'react';
import { useState } from 'react';
import './Contact.css';
import { FaEnvelope, FaPhone, FaLocationPin } from "react-icons/fa6";
import logoBlack from '../assets/logo-black.png';
import { motion, AnimatePresence } from 'framer-motion';

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

// 🔵 LAYER 3 - CONTENT (Medium-fast)
const layer3ContentVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.96
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

// ⚪ LAYER 4 - MICRO / UI ELEMENTS (Camera flash)
const layer4MicroVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.95,
    filter: "blur(1px)"
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.3,
      ease: easeCinematic
    }
  },
  tap: {
    scale: 0.97,
    transition: { 
      duration: 0.1,
      ease: easeCinematic
    }
  }
};

// Info item variants for stagger
const infoItemVariants = {
  hidden: { 
    opacity: 0, 
    x: -30,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    x: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: easeCinematic
    }
  }
};

// Stagger container
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
      ease: easeCinematic
    }
  }
};

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(event.target);
    formData.append("access_key", "ce130845-dc34-45fc-b4ef-1565d04731c4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success! We'll get back to you soon." : "Error. Please try again.");
    setIsSubmitting(false);
    
    // Clear form on success
    if (data.success) {
      event.target.reset();
      setTimeout(() => setResult(""), 5000);
    }
  };

  return (
    <motion.section 
      id='contact'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: easeCinematic }}
    >
      <div className="contact">
        <div className="contact-container">
          
          {/* 🟣 LAYER 1 - HERO: Header */}
          <motion.div 
            className='contact-header'
            variants={layer1HeroVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <img src={logoBlack} alt="Logo" className="contact-logo" width='100' height='100' />
            <h1>Get In Touch</h1>
          </motion.div>

          {/* 🟡 LAYER 2 - TEXT: Description */}
          <motion.div 
            className='contact-desc'
            variants={layer2MediumVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <p>Ready to bring your vision to life?</p>
            <p>Let's start a conversation</p>
          </motion.div>

          {/* 🎬 CINEMATIC POLISH LAYER */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: easeCinematic }}
          >
            <div className="contact-content">
              
              {/* 🔵 LAYER 3 - FORM */}
              <motion.div 
                className="contact-form"
                variants={layer3ContentVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <form onSubmit={onSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                      type="text"   
                      id="name" 
                      placeholder="Enter your name" 
                      name="name" 
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      placeholder="Enter your email" 
                      name="email" 
                      required 
                    />
                  </div>
                 
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      placeholder="Tell me about your project..." 
                      rows="9" 
                      required
                    />
                  </div>
                  
                  <div className='button-container'>
                    <motion.button 
                      type="submit" 
                      className="submit-btn"
                      variants={layer4MicroVariants}
                      whileHover={{ 
                        scale: 1.02,
                        transition: { duration: 0.2, ease: easeCinematic }
                      }}
                      whileTap="tap"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </motion.button>
                    
                    <AnimatePresence mode="wait">
                      {result && (
                        <motion.p 
                          className={`form-result ${result.includes("Success") ? "success" : "error"}`}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3, ease: easeCinematic }}
                        >
                          {result}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </form>
              </motion.div>

              {/* 🟡 LAYER 2 - Contact Info with stagger */}
              <motion.div 
                className="contact-info"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <motion.h2 variants={layer2MediumVariants}>
                  Contact<br />Information
                </motion.h2>
                
                <motion.div variants={staggerContainer}>
                  {/* Email */}
                  <motion.div className="info-item" variants={infoItemVariants}>
                    <motion.div 
                      className="icon-badge"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.2, ease: easeCinematic }
                      }}
                    >
                      <FaEnvelope />
                    </motion.div>
                    <div>
                      <h3>Email</h3>
                      <p>michael-eme@hotmail.de</p>
                      <p>ieshawshank1@gmail.com</p>
                    </div>
                  </motion.div>

                  {/* Phone */}
                  <motion.div className="info-item" variants={infoItemVariants}>
                    <motion.div 
                      className="icon-badge"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.2, ease: easeCinematic }
                      }}
                    >
                      <FaPhone />
                    </motion.div>
                    <div>
                      <h3>Phone</h3>
                      <p>+447760775089</p>
                      <p>+2349094822090</p>
                      <p>+2348129286231</p>
                    </div>
                  </motion.div>

                  {/* Address */}
                  <motion.div className="info-item" variants={infoItemVariants}>
                    <motion.div 
                      className="icon-badge"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.2, ease: easeCinematic }
                      }}
                    >
                      <FaLocationPin />
                    </motion.div>
                    <div>
                      <h3>Address</h3>
                      <p>Berliner Allee 8<br/> 30175 Hannover, Germany</p>
                      <p>Plot 245 Liberty Boulevard<br/> Jos, Nigeria</p>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;