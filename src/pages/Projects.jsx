import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Adventure Quest Game',
      description: 'A complete RPG experience with quests, inventory system, and combat mechanics',
      image: '🎮',
      technologies: ['Lua', 'Roblox Studio', 'Game Design'],
      link: '#'
    },
    {
      id: 2,
      title: 'Custom GUI System',
      description: 'A fully customizable UI framework for Roblox games with smooth animations',
      image: '🎨',
      technologies: ['Lua', 'UI/UX', 'Animations'],
      link: '#'
    },
    {
      id: 3,
      title: 'Racing Game Mechanics',
      description: 'Advanced vehicle physics and racing mechanics with leaderboards',
      image: '🏎️',
      technologies: ['Lua', 'Physics', 'Networking'],
      link: '#'
    },
    {
      id: 4,
      title: 'Tycoon System',
      description: 'Custom tycoon game with upgrade systems and automated production',
      image: '💰',
      technologies: ['Lua', 'Data Structures', 'Game Economy'],
      link: '#'
    },
    {
      id: 5,
      title: 'Obby Platformer',
      description: 'Challenging obby with checkpoints, timers, and dynamic obstacles',
      image: '🧗',
      technologies: ['Lua', 'Level Design', 'Game Mechanics'],
      link: '#'
    },
    {
      id: 6,
      title: 'Social Hub',
      description: 'Interactive social space with custom minigames and friend systems',
      image: '👥',
      technologies: ['Lua', 'Social Features', 'Networking'],
      link: '#'
    }
  ];

  return (
    <div className="projects-page">
      <div className="projects-hero">
        <h1>My Projects</h1>
        <p>Explore my past work and creations</p>
      </div>

      <div className="container">
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="project-icon">{project.image}</div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <a href={project.link} className="project-link">
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;

