'use client';

import { useState, useEffect } from 'react';
import './About.css';
import Typewriter from '@/components/Typewriter';

const socialLinks = [
  {
    name: 'LinkedIn',
    logo: '/assets/linkedin_logo.png',
    url: 'https://www.linkedin.com/in/noah-truong-86350b321/?skipRedirect=true',
  },
  { name: 'GitHub', logo: '/assets/github_logo.png', url: 'https://github.com/Noah-Truong' },
  { name: 'Twitter', logo: '/assets/xlogo.png', url: 'https://x.com/iD0ntNoahGuy' },
  {
    name: 'Gmail',
    logo: '/assets/gmail_logo.png',
    url: 'https://mail.google.com/mail/u/1/#inbox?compose=GTvVlcSDbFRXvtrsVpWBfzlgMSzpkXTczZwxPjRXThRFsXBcXgQXFmHBdrtCxgthbkNWjLqcmmdnG',
  },
];

const aboutText = `Hello world, I'm Noah! My goal in life is to build a thing that build things, and eventually I want that thing to build a statue of myself building the thing that is building the statue of myself building the thing.`;

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="about-page">
      <div className={`about-hero ${isVisible ? 'fade-in-up' : ''}`}>
        <h1>About Me</h1>
        <p>
          <Typewriter text="Learn more about me!" speed={40} />
        </p>
      </div>

      <div className="phone-container">
        <div className={`phone-screen ${isVisible ? 'fade-in-up-delay-1' : ''}`}>
          <div className="screen-content">
            <div className={`about-text-card ${isVisible ? 'fade-in-up-delay-1' : ''}`}>
              <h2 className="screen-section-title">Who I Am</h2>
              <p className="about-text">{aboutText}</p>
            </div>

            <h2 className="screen-section-title" style={{ marginTop: '3rem' }}>
              Connect With Me
            </h2>
            <div className="apps-grid">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className={`app-icon ${isVisible ? `fade-in-up-delay-${Math.min(index + 3, 5)}` : ''}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="app-icon-wrapper">
                    <img
                      src={social.logo}
                      alt={social.name}
                      className="app-icon-image"
                    />
                  </div>
                  <p className="app-icon-label">{social.name}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
