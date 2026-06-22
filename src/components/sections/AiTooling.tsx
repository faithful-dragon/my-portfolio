import React from 'react';
import { data } from '../../data/portfolioData';

const AiTooling: React.FC = () => {
  const { description, methodologies } = data.aiTooling;

  return (
    <section id="ai-tooling" className="section">
      <span className="eyebrow">AI Tooling</span>
      <h2>AI tooling & prompt engineering</h2>
      <p className="section-copy">{description}</p>
      <ul className="bullet-list">
        {methodologies.map((method) => (
          <li key={method}>{method}</li>
        ))}
      </ul>
    </section>
  );
};

export default AiTooling;
