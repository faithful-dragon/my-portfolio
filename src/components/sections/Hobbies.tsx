import React from 'react';
import { data } from '../../data/portfolioData';

const Hobbies: React.FC = () => {
  return (
    <section id="hobbies" className="section">
      <span className="eyebrow">Hobby</span>
      <div className="tags">
        {data.hobbies.map((hobby) => (
          <span key={hobby} className="tag">
            {hobby}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Hobbies;
