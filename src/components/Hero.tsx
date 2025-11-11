import React from 'react';
import { Portfolio } from '../models';
import '../styles/Hero.css';

interface HeroProps {
  portfolio: Portfolio;
}

const Hero: React.FC<HeroProps> = ({ portfolio }) => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">{portfolio.name}</span>
        </h1>
        <h2 className="hero-subtitle">{portfolio.title}</h2>
        <p className="hero-bio">{portfolio.bio}</p>
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={() => {
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            View Projects
          </button>
          <button className="btn btn-secondary" onClick={() => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
