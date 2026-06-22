import React from 'react';
import { data } from '../../data/portfolioData';

type ContactIcon = 'phone' | 'email' | 'linkedin' | 'github';

const ICONS: Record<ContactIcon, { icon: React.ReactNode; className: string }> = {
  phone: {
    className: 'contact-icon-phone',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.8 21 3 13.2 3 3c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1l-2.2 2.2Z" />
      </svg>
    ),
  },
  email: {
    className: 'contact-icon-email',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M4 6.5h16c1.1 0 2 .9 2 2v7c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-7c0-1.1.9-2 2-2Zm0 2 8 5 8-5" />
      </svg>
    ),
  },
  linkedin: {
    className: 'contact-icon-linkedin',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M6.5 9H4v11h2.5V9Zm-1.25-5A1.75 1.75 0 1 0 5.25 8.5 1.75 1.75 0 0 0 5.25 4Zm6.5 5H10.2v11h2.55v-5.8c0-1.53.29-3 2.17-3 1.86 0 1.88 1.74 1.88 3.1V20H19.3v-6.48c0-3.18-.68-5.52-4.39-5.52-1.79 0-2.99.98-3.47 1.9V9Z" />
      </svg>
    ),
  },
  github: {
    className: 'contact-icon-github',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.48.08.66-.21.66-.47v-1.66c-2.7.59-3.27-1.17-3.27-1.17-.44-1.12-1.07-1.42-1.07-1.42-.88-.6.07-.59.07-.59.97.07 1.48 1 1.48 1 .86 1.47 2.26 1.05 2.81.8.09-.62.34-1.05.62-1.29-2.16-.25-4.44-1.08-4.44-4.8 0-1.06.37-1.93.98-2.61-.1-.25-.43-1.23.1-2.56 0 0 .8-.26 2.62.98a9.15 9.15 0 0 1 4.77 0c1.82-1.24 2.62-.98 2.62-.98.53 1.33.2 2.31.1 2.56.61.68.98 1.55.98 2.61 0 3.73-2.28 4.54-4.45 4.79.35.3.66.89.66 1.79v2.65c0 .27.18.56.67.47A9.5 9.5 0 0 0 12 2.5Z" />
      </svg>
    ),
  },
};

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section">
      <span className="eyebrow">Contacts</span>
      <div className="contact-links">
        {data.contacts.map((contact) => {
          const entry = ICONS[contact.icon as ContactIcon];
          const external = !(contact.href.startsWith('mailto:') || contact.href.startsWith('tel:'));

          return (
            <a
              key={contact.label}
              className="contact-link"
              href={contact.href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noreferrer' : undefined}
              aria-label={`${contact.label}: ${contact.value}`}
              title={`${contact.label}: ${contact.value}`}
            >
              <span className={`contact-logo ${entry.className}`} aria-hidden="true">
                {entry.icon}
              </span>
              <span className="contact-link-label">{contact.label}</span>
              <span className="contact-link-value">{contact.value}</span>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Contact;
