import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import WorkExperience from '../data/workExperience';
import Typewriter from '../components/Typewriter';
import './Home.css';

function Home() {
  const [isVisible, setIsVisible] = useState(false);



 
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const quickActions = [
    {
      title: 'Freelance Services',
      icon: '/assets/freelance.png',
      link: '/commissions',
      color: '#23df59'
    },
    {
      title: 'Projects',
      icon: '/assets/projects.jpeg',
      link: '/projects',
      color: '#1fb2d3'
    },
    {
      title: 'Contact',
      icon: '/assets/contact.jpeg',
      link: '/contact',
      color: '#23df59'
    },
    {
      title: 'About',
      icon: '/assets/profpic.jpeg',
      link: '/about',
      color: '#1fb2d3'
    }
  ];
  
  return (
    <div className="home-page">
      <div className={`home-hero ${isVisible ? 'fade-in-up' : ''}`}>
        <div className="home-header">
          <h1>Noah Truong</h1>
          <p>
          UC Berkeley 2029
          </p>
          <p>
          <Typewriter text="Electrical Engineering and Computer Sciences" speed={35} />
          </p>
        </div>
      </div>

      <div className="phone-container">
        <div className={`phone-screen ${isVisible ? 'fade-in-up-delay-1' : ''}`}>
          <div className="screen-content">
            <h2 className="screen-section-title">Quick Actions</h2>
            <div className="apps-grid">
              {quickActions.map((action, index) => (
                <Link
                  key={index}
                  to={action.link}
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className={`app-icon ${isVisible ? `fade-in-up-delay-${Math.min(index + 2, 5)}` : ''}`}
                >
                  <div className="app-icon-wrapper" style={{ background: `linear-gradient(135deg, ${action.color}20 0%, ${action.color}10 100%)` }}>
                    <img 
                      src={action.icon} 
                      alt={action.title}
                      className="app-icon-image"
                    />
                  </div>
                  <p className="app-icon-label">{action.title}</p>
                </Link>
              ))}
            </div>
            
            <h2 className="screen-section-title" style={{ marginTop: '3rem' }}>Work Experience</h2>
            <div className="apps-grid">
              {WorkExperience.map((job, index) => (
                <Link
                  to={`/experience/${job.id}`}
                  key={job.id}
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className={`app-icon ${isVisible ? `fade-in-up-delay-${Math.min(index + 6, 5)}` : ''}`}
                >
                  <div className="app-icon-wrapper">
                    <img 
                      src={job.logo} 
                      alt={job.org}
                      className="app-icon-image"
                    />
                  </div>
                  <p className="app-icon-label">{job.org}</p>
                </Link>
              ))}
            </div>
            <h2 className="screen-section-title" style={{ marginTop: '3rem' }}>Education</h2>
            <div className="berkeley-link">
              <a
                href='https://eecs.berkeley.edu/'
                target="_blank"
                rel="noopener noreferrer"
                className={`berkeley-app ${isVisible ? 'fade-in-up-delay-5' : ''}`}
              >
                <div className="app-icon-wrapper" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)' }}>
                  <img 
                    src='/assets/berkeley_logo.png'
                    alt='UC Berkeley'
                    className="app-icon-image"
                  />
                </div>
                <p className="app-icon-label">UC Berkeley</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

