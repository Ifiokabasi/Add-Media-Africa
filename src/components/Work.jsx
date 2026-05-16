import React, { useState } from 'react';
import './Work.css';
import logoWhite from '../assets/logo-white.png';

const Work = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      title: 'On the days I find food, the babies can eat',
      category: 'Documentary',
      description: 'In northern Nigeria, 4.4 million children under five are acutely malnourished – that’s more than double last year’s figure according to the World Food Programme. ',
      thumbnail: '../assets/Umi.jpg',
      youtubeLink: 'https://youtu.be/M-EoALzsYo0'


    },
    {
      id: 2,
      title: "Concerns over popularity of skin bleaching creams in Nigeria",
      category: 'Documentary',
      description: 'More than three quarters of people use skin-whitening or lightening creams, commonly known as bleaching creams in Nigeria.',
      thumbnail: 'https://img.youtube.com/vi/djTyHf-7oxo/hqdefault.jpg',
      youtubeLink: 'https://youtu.be/djTyHf-7oxo'
    },
    {
      id: 3,
      title: 'Love to Hate',
      category: 'Films',
      description: 'Betrayal, heartbreak, and tough choices unfold in this must-watch Nollywood masterpiece that explores love, friendship, and the pain of unspoken emotions. ',
      thumbnail: 'https://img.youtube.com/vi/nzwltDr-OBg/hqdefault.jpg',
      youtubeLink: 'https://www.youtube.com/watch?v=nzwltDr-OBg'
    },
    {
      id: 4,
      title: 'Finding Hope',
      category: 'Films',
      description: 'A story that seeks to Find Hope Okem, a Teenager Abducted at the age of 14',
      thumbnail: 'https://img.youtube.com/vi/VwEL07NVZ9s&pp=ygUTZmluZGluZyBob3BlIGV0dGFuZw%3D%3D/hqdefault.jpg',
      youtubeLink: 'https://www.youtube.com/watch?v=VwEL07NVZ9s&pp=ygUTZmluZGluZyBob3BlIGV0dGFuZw%3D%3D'
    },
    {
      id: 5,
      title: "If you can become a mother you can achieve anything ",
      category: 'Interviews',
      description: "Sarah Ogoke is a mother of a toddler, a certified medical doctor, and the only woman to have won the Women’s African Basketball Championship five times.",
      thumbnail: 'https://img.youtube.com/vi/ESgZgAtH9ew/hqdefault.jpg',
      youtubeLink: 'https://youtu.be/ESgZgAtH9ew'
    },
    {
      id: 6,
      title: "Soyinka: 'Donald Trump is a petty-minded dictator 2",
      category: 'Interviews',
      description: "91-year-old, Nigerian author and Nobel Laurate, Wole Soyinka has linked his recent U.S visa revocation to his open criticism of President Donald Trump’s administration's radical stance on immigration. ",
      thumbnail: 'https://img.youtube.com/vi/E4EyGFrZ6rg/hqdefault.jpg',
      youtubeLink: 'https://youtu.be/E4EyGFrZ6rg'
    },
    {
      id: 7,
      title: 'Pan-Atlantic University students spend the day at Oando.',
      category: 'Social Campaigns',
      description: 'Pan-Atlantic University media and communication students visit Oando PLC to gain practical knowledge and experience to back up their theoretical knowledge.',
      thumbnail: 'https://img.youtube.com/vi/HlFUM8p5iHY/hqdefault.jpg',
      youtubeLink: 'https://www.youtube.com/watch?v=HlFUM8p5iHY'
    },
    {
      id: 8,
      title: "Highlights of Oando's NAOC signing ceremony",
      category: 'Social Campaigns',
      description: 'Watch the highlights from our NAOC Ltd acquisition signing ceremony in London.',
      thumbnail: 'https://img.youtube.com/vi/7LFY6hA0LMo/hqdefault.jpg',
      youtubeLink: 'https://youtu.be/7LFY6hA0LMo'
    }
  ];

  const categories = ['all', 'Documentary', 'Films', 'Interviews', 'Social Campaigns'];

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="work">
      <div className="work-container">
        <div className='work-header'><img src={logoWhite} alt="Logo" className="work-logo" width= '100' height='100' />
        <h1>Our Work</h1></div>
        <p>Showcasing our portfolio of exceptional projects and campaigns</p>

        <div className="category-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredItems.map((item) => (
            <div key={item.id} className="portfolio-card">
              <div className="portfolio-image"></div>
              <h3>{item.title}</h3>
              <p className="category-tag">{item.category}</p>
              <p className="description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
