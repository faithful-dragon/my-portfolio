import React from 'react';

interface CertEntry {
  name: string;
  url: string;
}

const certModules = import.meta.glob('/src/assets/certificates/*', { eager: true });

const certEntries: CertEntry[] = Object.entries(certModules)
  .filter(([path]) => /\.(pdf|jpg|jpeg|png|gif|webp)$/i.test(path))
  .map(([path, mod]) => {
    const url = typeof mod === 'string' ? mod : (mod as Record<string, string>).default;
    const filename = path.split('/').pop() || '';
    const name = filename.replace(/\.[^.]+$/, '');
    return {
      name: name.replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
      url,
    };
  });

const Certifications: React.FC = () => {
  if (certEntries.length === 0) return null;

  return (
    <section id="certifications" className="section">
      <span className="eyebrow">Courses and Certifications</span>
      <div className="stack-list grid-2">
        {certEntries.map((cert) => (
          <article key={cert.name} className="card compact-card">
            <div className="cert-header">
              <h3>{cert.name}</h3>
              <a href={cert.url} target="_blank" rel="noreferrer" className="cert-link" aria-label="View certificate">
                <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM6 20V4h7v5h5v11H6z" fill="currentColor"/>
                  <path d="M9 13l2 2 4-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
            <p className="muted">Certificate</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
