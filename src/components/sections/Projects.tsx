import React from 'react';
import { data } from '../../data/portfolioData';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section">
      <span className="eyebrow">Featured Work</span>
      <h2>Projects</h2>
      <div className="stack-list grid-2">
        {data.projects.map((project) => (
          <article key={project.name} className="card">
            <div className="project-header">
              <h3>{project.name}</h3>
              {project.link && (
                <a href={project.link} target="_blank" rel="noreferrer" className="project-link" aria-label="GitHub repository">
                  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                    <path d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.48.08.66-.21.66-.47v-1.66c-2.7.59-3.27-1.17-3.27-1.17-.44-1.12-1.07-1.42-1.07-1.42-.88-.6.07-.59.07-.59.97.07 1.48 1 1.48 1 .86 1.47 2.26 1.05 2.81.8.09-.62.34-1.05.62-1.29-2.16-.25-4.44-1.08-4.44-4.8 0-1.06.37-1.93.98-2.61-.1-.25-.43-1.23.1-2.56 0 0 .8-.26 2.62.98a9.15 9.15 0 0 1 4.77 0c1.82-1.24 2.62-.98 2.62-.98.53 1.33.2 2.31.1 2.56.61.68.98 1.55.98 2.61 0 3.73-2.28 4.54-4.45 4.79.35.3.66.89.66 1.79v2.65c0 .27.18.56.67.47A9.5 9.5 0 0 0 12 2.5Z" fill="currentColor"/>
                  </svg>
                </a>
              )}
            </div>
            <p>{project.description}</p>
            <div className="tags">
              {project.stack.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
