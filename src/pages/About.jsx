import React, { useState, useEffect } from 'react';
import './About.css';
import Typewriter from '../components/Typewriter';

function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const socialLinks = [
    { name: 'LinkedIn', logo: '/assets/linkedin_logo.png', url: 'https://www.linkedin.com/in/noah-truong-86350b321/?skipRedirect=true'},
    { name: 'GitHub', logo: '/assets/github_logo.png', url: 'https://github.com/Noah-Truong'},
    { name: 'Twitter', logo: '/assets/xlogo.png', url: 'https://x.com/iD0ntNoahGuy'},
    { name: 'Roblox', logo: '/assets/roblox_logo.png', url: 'https://www.roblox.com/users/299705154/profile'},
    { name: 'Gmail', logo: '/assets/gmail_logo.png', url: 'https://mail.google.com/mail/u/1/#inbox?compose=GTvVlcSDbFRXvtrsVpWBfzlgMSzpkXTczZwxPjRXThRFsXBcXgQXFmHBdrtCxgthbkNWjLqcmmdnG'}
  ];

  const aboutText = `Hi! I'm Noah, an aspiring hardware engineer who is passionate about system design and problem solving no matter the scale. I need to be kept busy so I built this website! Please feel free to reach out about anything engineering related.

Whether it's developing complex game mechanics, designing intuitive user interfaces, or building immersive worlds, I'm committed to delivering high-quality work that exceeds expectations. I love collaborating with clients to understand their vision and turn it into reality.

When I'm not coding, you can find me exploring new game development techniques, participating in game jams, or sharing knowledge with the Roblox development community.`;

  return (
    <div className="about-page">
      <div className={`about-hero ${isVisible ? 'fade-in-up' : ''}`}>
        <h1>About Me</h1>
        <p>
        <Typewriter text="Learn more about me!" speed={40}/>
        </p>
      </div>

      <div className="phone-container">
        <div className={`phone-screen ${isVisible ? 'fade-in-up-delay-1' : ''}`}>
          <div className="screen-content">
            <div className={`about-text-card ${isVisible ? 'fade-in-up-delay-1' : ''}`}>
              <h2 className="screen-section-title">Who I Am</h2>
              <p className="about-text">{aboutText}</p>
            </div>

            <h2 className="screen-section-title" style={{ marginTop: '3rem' }}>Connect With Me</h2>
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

export default About;

