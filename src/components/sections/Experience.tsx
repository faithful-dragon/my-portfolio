import React, { useEffect, useState } from 'react';
import { data } from '../../data/portfolioData';

function useNow() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000 * 60 * 60 * 24);
    return () => window.clearInterval(timer);
  }, []);
  return now;
}

function calcDuration(start: string, end: string | null, now: Date) {
  const from = new Date(start);
  const to = end ? new Date(end) : now;
  let years = to.getFullYear() - from.getFullYear();
  let months = to.getMonth() - from.getMonth();
  let days = to.getDate() - from.getDate();
  if (days < 0) {
    months -= 1;
    const prev = new Date(to.getFullYear(), to.getMonth(), 0);
    days += prev.getDate();
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }
  return { years, months, days };
}

const domainIcons: Record<string, string> = {
  'Backend Engineering': '⚡',
  'AI & Agentic Systems': '🤖',
  'AWS & Infrastructure': '☁️',
  'Recommendation Engine': '🎯',
  'Computer Vision': '👁️',
};

const Experience: React.FC = () => {
  const now = useNow();

  return (
    <section id="experience" className="section">
      <span className="eyebrow">Experience</span>
      <h2>Where I have worked</h2>

      <div className="experience-list">
        {data.experience.map((exp, i) => {
          const isPresent = exp.period.toLowerCase().includes('present');
          const dur = calcDuration(
            exp.period.split('–')[0].trim(),
            isPresent ? null : exp.period.split('–')[1].trim(),
            now
          );

          return (
            <article key={i} className="experience-entry">
              <div className="experience-header">
                <div>
                  <h3>{exp.role}</h3>
                  <p className="experience-company">{exp.company}</p>
                </div>
                <span className="counter">
                  {dur.years > 0 && `${dur.years}y `}
                  {dur.months > 0 && `${dur.months}m `}
                  {dur.days > 0 && `${dur.days}d`}
                </span>
              </div>
              <p className="muted experience-meta">
                {exp.location} · {exp.period}
              </p>
              <p className="experience-overview">{exp.overview}</p>

              <div className="domain-grid">
                {exp.domains.map((domain) => (
                  <div key={domain.title} className="card domain-card">
                    <div className="domain-card-header">
                      <span className="domain-icon">{domainIcons[domain.title] || '▹'}</span>
                      <h4 className="domain-title">{domain.title}</h4>
                    </div>
                    <ul className="bullet-list">
                      {domain.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="tags">
                {exp.tech.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
