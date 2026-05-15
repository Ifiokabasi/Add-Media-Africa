import React, { useState } from 'react';
import './Work.css';
import logoWhite from '../assets/logo-white.png';

const Work = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      title: 'Documentary Project 1',
      category: 'Documentary',
      description: 'High-quality documentary production'
    },
    {
      id: 2,
      title: 'Documentary Project 2',
      category: 'Documentary',
      description: 'Engaging storytelling through documentaries'
    },
    {
      id: 3,
      title: 'Film Production 1',
      category: 'Films',
      description: 'Professional film production services'
    },
    {
      id: 4,
      title: 'Film Production 2',
      category: 'Films',
      description: 'Creative cinematography and editing'
    },
    {
      id: 5,
      title: 'Interview Series 1',
      category: 'Interviews',
      description: 'Professional interview production'
    },
    {
      id: 6,
      title: 'Interview Series 2',
      category: 'Interviews',
      description: 'Expert-led interview content'
    },
    {
      id: 7,
      title: 'Social Campaign 1',
      category: 'Social Campaigns',
      description: 'Viral social media campaigns'
    },
    {
      id: 8,
      title: 'Social Campaign 2',
      category: 'Social Campaigns',
      description: 'Engaging social content creation'
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
