import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './About.css';
import aboutImage from '../assets/About-Image.jpg';
import logoBlack from '../assets/logo-black.png';

const easeCinematic = [0.25, 0.1, 0.25, 1];

// 🟣 LAYER 1 - SLOW (1.2s)
// Headers, Hero text, Main titles - Premium, deliberate
const layer1SlowVariants = {
  hidden: { 
    opacity: 0, 
    y: 30, 
    filter: "blur(8px)" 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      ease: easeCinematic
    }
  }
};

// 🟡 LAYER 2 - MEDIUM (0.9s)
// Sections, Images, Content blocks - Standard elegance
const layer2MediumVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.98
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

// 🔵 LAYER 3 - FAST (0.5s)
// Stats, Cards, UI elements - Snappy, responsive
const layer3FastVariants = {
  hidden: { 
    opacity: 0, 
    y: 30, 
    scale: 0.96 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: easeCinematic
    }
  }
};

// Ultra-fast for micro-interactions (0.3s)
const microFastVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.98 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.3,
      ease: easeCinematic
    }
  }
};

// Cinematic stagger with layer-aware timing
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

// Accordion content variants for material unfolding effect
const accordionContentVariants = {
  hidden: { 
    opacity: 0, 
    height: 0, 
    y: 10
  },
  visible: { 
    opacity: 1, 
    height: "auto", 
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeCinematic
    }
  },
  exit: { 
    opacity: 0, 
    height: 0, 
    y: 10,
    transition: {
      duration: 0.5,
      ease: easeCinematic
    }
  }
};

const CountUp = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
};

const About = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const processSteps = [
    {
      title: 'Discovery & Planning',
      content: 'We start by understanding your vision, goals, and target audience. Through detailed consultations and research, we develop a comprehensive strategy tailored to your needs.'
    },
    {
      title: 'Pre-Production',
      content: 'Our team handles scripting, storyboarding, location scouting, casting, and all necessary preparations to ensure a smooth production process.'
    },
    {
      title: 'Production',
      content: 'With state-of-the-art equipment and experienced crew, we bring your vision to life through professional filming and photography sessions.'
    },
    {
      title: 'Post-Production',
      content: 'Expert editing, color grading, sound design, and visual effects are applied to create a polished final product that exceeds expectations.'
    },
    {
      title: 'Delivery & Launch',
      content: 'We deliver your project in multiple formats and assist with distribution strategies to maximize reach and impact.'
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <motion.div 
      className='about'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: easeCinematic }}
    >
      <div className="about-container">
        {/* 🟣 LAYER 1 - SLOW: Main Header (1.2s) */}
        <motion.div 
          className='about-header'
          variants={layer1SlowVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <img src={logoBlack} alt="Logo" className="about-logo" width="100" height="100" />
          <h1>About Us</h1>
        </motion.div>

        {/* 🟡 LAYER 2 - MEDIUM: Description (0.9s) */}
        <motion.p 
          className='about-desc'
          variants={layer2MediumVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.15 }}
        >
          Learn more about Add Media Africa and our mission
        </motion.p>

        {/* 🟡 LAYER 2 - MEDIUM: About Content Sections (0.9s) */}
        <motion.div 
          className="about-content"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="about-text"
            variants={layer2MediumVariants}
          >
            <h2>Who We Are</h2>
            <p>
              ADD Media Africa is a leading media production company dedicated to creating
              compelling stories and premium content that resonates with audiences worldwide.
            </p>
            <p>
              With a team of experienced professionals, we specialize in video production,
              photography, digital marketing, and broadcast media solutions.
            </p>
          </motion.div>

          <motion.div 
            className="about-mission"
            variants={layer2MediumVariants}
          >
            <h2>Our Mission</h2>
            <p>
              To empower brands and creators through innovative media solutions that
              deliver exceptional results and create meaningful connections with audiences.
            </p>
          </motion.div>
        </motion.div>

        {/* 🟡 LAYER 2 - MEDIUM: Stats Title */}
        <motion.h2 
          className="stats-title"
          variants={layer2MediumVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{ textAlign: "center", marginBottom: "2rem" }}
        >
          Our Impact
        </motion.h2>

        {/* 🔵 LAYER 3 - FAST: Stats Cards (0.5s - snappy & responsive) */}
        <motion.div 
          className="stats-section"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="stat-item"
            variants={layer3FastVariants}
          >
            <div className="stat-number">
              <CountUp end={40} />+
            </div>
            <div className="stat-label">Projects Completed</div>
          </motion.div>
          <motion.div 
            className="stat-item"
            variants={layer3FastVariants}
          >
            <div className="stat-number">
              <CountUp end={15} />
            </div>
            <div className="stat-label">Years Experience</div>
          </motion.div>
          <motion.div 
            className="stat-item"
            variants={layer3FastVariants}
          >
            <div className="stat-number">
              <CountUp end={98} suffix="%" />
            </div>
            <div className="stat-label">Client Satisfaction</div>
          </motion.div>
        </motion.div>

        {/* Process Section */}
        <div className="process-section">
          {/* 🟡 LAYER 2 - MEDIUM: Process Image */}
          <motion.img 
            src={aboutImage} 
            alt="About Image" 
            className="about-image"
            variants={layer2MediumVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          />
          
          {/* 🟣 LAYER 1 - SLOW: Process Header (important section title) */}
          <motion.h2 
            variants={layer1SlowVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            Our Process
          </motion.h2>
          
          {/* 🔵 LAYER 3 - FAST: Accordion Items (UI elements) */}
          <motion.div 
            className="accordion"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {processSteps.map((step, index) => (
              <motion.div 
                key={index} 
                className="accordion-item"
                variants={layer3FastVariants}
              >
                <button
                  className={`accordion-header ${activeIndex === index ? 'active' : ''}`}
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="step-number">{index + 1}</span>
                  <span className="step-title">{step.title}</span>
                  <span className="accordion-icon">{activeIndex === index ? '−' : '+'}</span>
                </button>
                
                {/* Material Unfolding Accordion Content */}
                <AnimatePresence mode="wait">
                  {activeIndex === index && (
                    <motion.div 
                      className="accordion-content open"
                      variants={accordionContentVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <p>{step.content}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;