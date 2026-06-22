import React from 'react';
import { data } from '../../data/portfolioData';

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="section">
      <span className="eyebrow">Awards & Achievements</span>
      <div className="stack-list grid-2">
        {data.achievements.map((item, i) => (
          <article key={item.title + '-' + i} className="card compact-card">
            <div className="achievement-header">
              <h3>{item.title}</h3>
              {item.file && (
                <a href={item.file} target="_blank" rel="noreferrer" className="achievement-link" aria-label="View certificate">
                  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM6 20V4h7v5h5v11H6z" fill="currentColor"/>
                    <path d="M9 13l2 2 4-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              )}
            </div>
            <p>{item.description}</p>
            <p className="muted">{item.date}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
