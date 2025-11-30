import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import WorkExperience from '../data/workExperience';
import './ExperienceDetail.css';

function ExperienceDetail() {
  const { id } = useParams();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, [id]);

  const experience = WorkExperience.find(
    (exp) => exp.id === id
  );

  if (!experience) {
    return (
      <div className="experience-detail-page">
        <div className="phone-container">
          <div className="phone-screen">
            <div className="screen-content">
              <div className="experience-not-found">
                <h1>Experience not found</h1>
                <p>The experience you're looking for doesn't exist.</p>
                <Link to="/" className="btn btn-primary">
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="experience-detail-page">
      <div className="experience-hero">
        <Link to="/" className="back-link">
          ← Back to Home
        </Link>
        <div className={`experience-header ${isVisible ? 'fade-in-up' : ''}`}>
          <div className="experience-logo-container">
            <img 
              src={experience.logo} 
              alt={experience.org}
              className="experience-logo"
            />
          </div>
          <h1 className="experience-title">{experience.position}</h1>
          <h2 className="experience-org">{experience.org}</h2>
        </div>
      </div>

      <div className="phone-container">
        <div className={`phone-screen ${isVisible ? 'fade-in-up-delay-1' : ''}`}>
          <div className="screen-content">
            <div className={`experience-content ${isVisible ? 'fade-in-up-delay-1' : ''}`}>
              <div className="experience-description">
                <h3>Overview</h3>
                <p className="description-text">{experience.description}</p>
              </div>

              {experience.details && (
                <div className="experience-details">
                  <h3>Details</h3>
                  <p className="details-text">{experience.details}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceDetail;
