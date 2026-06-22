import React, { useEffect, useState } from 'react';
import Hero from './components/sections/Hero';
import Education from './components/sections/Education';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Certifications from './components/sections/Certifications';
import Achievements from './components/sections/Achievements';
import Hobbies from './components/sections/Hobbies';
import Contact from './components/sections/Contact';
import './App.css';

type ThemeMode = 'dark' | 'light';

const navItems = [
  { id: 'hero', label: 'Intro' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Courses' },
  { id: 'achievements', label: 'Awards' },
  { id: 'hobbies', label: 'Hobby' },
  { id: 'contact', label: 'Contact' },
];

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const savedTheme = window.localStorage.getItem('portfolio-theme');
    return savedTheme === 'light' ? 'light' : 'dark';
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(height > 0 ? (scrollTop / height) * 100 : 0);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length === 0) {
          return;
        }
        visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        setActiveSection(visible[0].target.id);
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: [0.15, 0.3, 0.6] },
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-shell">
      <div className="scroll-progress" aria-hidden="true">
        <span style={{ width: scrollProgress + '%' }} />
      </div>

      <header className="topbar">
        <div className="topbar-brand">
          <span className="brand-dot" />
          <div>
            <p className="brand-kicker">Portfolio</p>
            <p className="brand-name">Pawan Kumar</p>
          </div>
        </div>

        <div className="topbar-actions">
          <nav className="topbar-nav" aria-label="Primary">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={'#' + item.id}
                className={activeSection === item.id ? 'topbar-link active' : 'topbar-link'}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="theme-toggle"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {theme === 'dark' ? 'Light mode' : 'Dark mode'}
          </button>
        </div>
      </header>

      <main className="portfolio-shell">
        <Hero />
        <Education />
        <Experience />
        <Projects />
        <Certifications />
        <Achievements />
        <Hobbies />
        <Contact />
      </main>
    </div>
  );
};

export default App;
