import React, { useState } from 'react';
import { data } from '../../data/portfolioData';

const Education: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleCard = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="education" className="section reveal">
      <span className="eyebrow">Education Background</span>
      <h2>Education background</h2>
      <div className="education-grid">
        {data.education.map((item, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={item.degree + "-" + item.period}
              type="button"
              className={isActive ? "card education-card active" : "card education-card"}
              onClick={() => toggleCard(index)}
            >
              <span className="education-chip">{item.degree}</span>
              <h3>{item.institution}</h3>
              {isActive && (
                <div className="education-card-details">
                  <p className="muted education-period">{item.period}</p>
                  <ul className="bullet-list">
                    {item.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
