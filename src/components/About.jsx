import React, { useState, useEffect } from 'react';
import './About.css';
import aboutImage from '../assets/About-Image.jpg';
import logoBlack from '../assets/logo-black.png';


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
    <div className="about">
      <div className="about-container">
        <div className='about-header'><img src={logoBlack} alt="Logo" className="about-logo" width="100" height="100" /><h1>About Us</h1></div>
        <p>Learn more about ADD Media Africa and our mission</p>

        <div className="about-content">
          <div className="about-text">
            <h2>Who We Are</h2>
            <p>
              ADD Media Africa is a leading media production company dedicated to creating
              compelling stories and premium content that resonates with audiences worldwide.
            </p>
            <p>
              With a team of experienced professionals, we specialize in video production,
              photography, digital marketing, and broadcast media solutions.
            </p>
          </div>

          <div className="about-mission">
            <h2>Our Mission</h2>
            <p>
              To empower brands and creators through innovative media solutions that
              deliver exceptional results and <br></br>create meaningful connections with audiences.
            </p>
          </div>
        </div>

        <div className="stats-section">
          <div className="stat-item">
            <div className="stat-number">
              <CountUp end={40} />+
            </div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">
              <CountUp end={15} />
            </div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">
              <CountUp end={98} suffix="%" />
            </div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
        </div>

        <div className="process-section">
          <img src={aboutImage} alt="About Image" className="about-image" />
          <h2>Our Process</h2>
          <div className="accordion">
            {processSteps.map((step, index) => (
              <div key={index} className="accordion-item">
                <button
                  className={`accordion-header ${activeIndex === index ? 'active' : ''}`}
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="step-number">{index + 1}</span>
                  <span className="step-title">{step.title}</span>
                  <span className="accordion-icon">{activeIndex === index ? '-' : '+'}</span>
                </button>
                <div className={`accordion-content ${activeIndex === index ? 'open' : ''}`}>
                  <p>{step.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
