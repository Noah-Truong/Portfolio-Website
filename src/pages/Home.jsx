import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to My Portfolio</h1>
          <p className="hero-subtitle">Roblox Developer & Creative Designer</p>
          <p className="hero-description">
            Specializing in game development, scripting, and custom Roblox experiences.
            Let's bring your vision to life!
          </p>
          <div className="hero-buttons">
            <Link to="/commissions" className="btn btn-primary">
              Get Commission
            </Link>
            <Link to="/projects" className="btn btn-secondary">
              View My Work
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="floating-card">
            <div className="card-icon">🎮</div>
            <h3>Game Development</h3>
            <p>Custom Roblox experiences</p>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-title">What I Offer</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Fast Turnaround</h3>
              <p>Efficient development and quick delivery times</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Custom Designs</h3>
              <p>Unique, tailored solutions for your projects</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💎</div>
              <h3>Quality Work</h3>
              <p>High-quality code and polished results</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3>Communication</h3>
              <p>Regular updates and collaborative process</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

