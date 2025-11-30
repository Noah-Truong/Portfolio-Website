import React, { useState, useEffect } from 'react';
import CommissionForm from '../components/CommissionForm';
import './Commissions.css';
import Typewriter from '../components/Typewriter';

function Commissions() {
  const [showForm, setShowForm] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const commissionTypes = [
    {
      icon: '/assets/roblox_logo.png',
      title: 'Roblox Game Development',
      description: 'Full game development, scripting, and game mechanics (rates will vary depending on requested service)',
      price: 'Starting at $10'
    }
  ];

  const pastWork = [
    {
      titleImage: '/assets/homeless_addon.png',
      title: '[Beta] Homeless Simulator',
      link: 'https://www.roblox.com/games/76631316909858/Homeless-Simulator'
    },
    {
      titleImage: '/assets/tungtungobby_addon.png',
      title: 'TungTung\nTungSahur\nObby',
      link: 'https://www.roblox.com/games/80929191589661/TungTungTungSahur-Obby'
    },
    {
      titleImage: '/assets/67sim_addon.png',
      title: '[Collect 67] Simulator',
      link: 'https://www.roblox.com/games/121224456961897/COLLECT-67-Simulator-Game'
    }
  ];

  return (
    <div className="commissions-page">
      <div className={`commissions-hero ${isVisible ? 'fade-in-up' : ''}`}>
        <h1>Freelance Services</h1>
        <p>
        <Typewriter text="These are the software/hardware services I currently provide!" speed={40}/>
        </p>
      </div>

      <div className="phone-container">
        <div className={`phone-screen ${isVisible ? 'fade-in-up-delay-1' : ''}`}>
          <div className="screen-content">
            <div className={`service-info-card ${isVisible ? 'fade-in-up-delay-1' : ''}`}>
              <h2 className="screen-section-title">Available Service</h2>
              <div className="service-detail">
                <img src={commissionTypes[0].icon} alt={commissionTypes[0].title} className="service-icon" />
                <h3>{commissionTypes[0].title}</h3>
                <p>{commissionTypes[0].description}</p>
                <div className="commission-price">{commissionTypes[0].price}</div>
              </div>
            </div>

            <h2 className="screen-section-title" style={{ marginTop: '3rem' }}>Past Work</h2>
            <div className="apps-grid">
              {pastWork.map((work, index) => (
                <a 
                  key={index} 
                  href={work.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`app-icon ${isVisible ? `fade-in-up-delay-${Math.min(index + 3, 5)}` : ''}`}
                >
                  <div className="app-icon-wrapper">
                    <img 
                      src={work.titleImage} 
                      alt={work.title}
                      className="app-icon-image"
                    />
                  </div>
                  <p className="app-icon-label">{work.title}</p>
                </a>
              ))}
            </div>

            <div className={`commission-cta-button ${isVisible ? 'fade-in-up-delay-5' : ''}`}>
              <button 
                className="btn btn-primary"
                onClick={() => setShowForm(!showForm)}
              >
                {showForm ? 'Hide Form' : 'Request Commission'}
              </button>
            </div>

            {showForm && (
              <div className={`commission-form-section ${isVisible ? 'fade-in-up-delay-5' : ''}`}>
                <CommissionForm />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Commissions;

