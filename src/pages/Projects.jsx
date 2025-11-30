import React, { useState, useEffect } from 'react';
import './Projects.css';
import Typewriter from '../components/Typewriter';

function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      id: 'project1',
      title: 'Battery Eliminator Circuit',
      image: '/assets/dcConverter.png',
      link: 'https://docs.google.com/document/d/1nWAGxdaSM9FGoOf1Yinko8zmWANne6PMh4_m-ocxKjU/edit?usp=sharing'
    },
    {
      id: 'project2',
      title: 'Discord Chatbot',
      image: '/assets/noagpt.png',
      link: 'https://noa-void-workbench.lovable.app/'
    },
    {
      id: 'project3',
      title: 'My Game Development Journey',
      image: '/assets/gamedevjourney.png',
      link: 'https://www.instagram.com/p/DMKBiaOOuwc/'
    }
  ];

  return (
    <div className="projects-page">
      <div className={`projects-hero ${isVisible ? 'fade-in-up' : ''}`}>
        <h1>My Projects</h1>
        <Typewriter text="See what I've been working on" speed={40} />
      </div>

      <div className="phone-container">
        <div className={`phone-screen ${isVisible ? 'fade-in-up-delay-1' : ''}`}>
          <div className="apps-grid">
            {projects.map((project, index) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`app-icon ${isVisible ? `fade-in-up-delay-${Math.min(index + 2, 5)}` : ''}`}
              >
                <div className="app-icon-wrapper">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="app-icon-image"
                    />
                  ) : (
                    <div className="app-icon-placeholder">
                      {project.title.charAt(0)}
                    </div>
                  )}
                </div>
                <p className="app-icon-label">{project.title}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;