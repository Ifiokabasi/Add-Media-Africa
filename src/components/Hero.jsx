import React from 'react';
import landingImage from '../assets/Landing-Image_addMedia.jpg';
import './Hero.css'; // Assuming we'll create a CSS file for styling;
import {motion} from 'framer-motion';


const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-image">
        <motion.img src={landingImage} alt="Landing Image"
          
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute"
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 2.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 10 // Optional: pause before reversing
        }} />
      </div>

      <div className="hero-text">
        <motion.h1  initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                      delay: 0.5,
                      duration: 1,
                      ease: [0.25, 0.1, 0.25, 1]
                    }}>
          Creating <span className="hero-span">Memorable</span> Stories that Matter
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                      delay: 1,
                      duration: 1,
                      ease: [0.25, 0.1, 0.25, 1]
                    }}>
          We're a full-service media production company delivering premium content across all platforms
        </motion.p>

        <motion.button 
        onClick={() => {
          document.getElementById("work").scrollIntoView({ behavior: "smooth" });
        }}
        className="cta-button"
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}   
        >
          View Our Work
        </motion.button>

        <motion.button 
        className="cta-button-outline"
        onClick={() => {
          document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
        }}
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6, ease: "easeOut" }}   
        >
          Get in Touch
        </motion.button>
      </div>
</section>  
  );
};

export default Hero;