import React from 'react';
import { data } from '../../data/portfolioData';

const Hero: React.FC = () => {
  const { name, about, resumeLink, profileImage } = data.hero;
  const stats = [
    { label: 'Tech stack', value: new Set(data.experience.flatMap((e) => e.tech)).size + '+' },
    { label: 'Projects', value: data.projects.length.toString() },
    { label: 'Focus', value: 'AI + Backend' },
  ];

  return (
    <section id="hero" className="section hero-section hero-grid reveal">
      <div className="hero-copy">
        <span className="eyebrow">About Me</span>
        <h1>{name}</h1>
        <p className="welcome-note">Backend-focused engineer building high-performance APIs, scalable cloud infrastructure, and AI-powered agentic systems.</p>
        <p className="section-copy">{about}</p>

        <div className="hero-stats" aria-label="Portfolio highlights">
          {stats.map((stat) => (
            <div key={stat.label} className="hero-stat">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="hero-actions">
          <a className="button" href={resumeLink} target="_blank" rel="noreferrer">
            View Resume
          </a>
          <a className="button button-secondary" href="#contact">
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="profile-frame">
          <img src={profileImage} alt="Pawan Kumar profile" className="profile-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
