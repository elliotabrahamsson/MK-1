import React from 'react';
import { Portfolio } from '../models';
import '../styles/About.css';

interface AboutProps {
  portfolio: Portfolio;
}

const About: React.FC<AboutProps> = ({ portfolio }) => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>{portfolio.name}</h3>
            <p className="about-subtitle">{portfolio.title}</p>
            <p className="about-description">{portfolio.bio}</p>
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">{portfolio.getTotalProjects()}</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{portfolio.getTotalSkills()}</span>
                <span className="stat-label">Skills</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">2+</span>
                <span className="stat-label">Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
