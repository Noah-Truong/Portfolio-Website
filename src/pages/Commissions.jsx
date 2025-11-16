import React, { useState } from 'react';
import CommissionForm from '../components/CommissionForm';
import './Commissions.css';

function Commissions() {
  const [showForm, setShowForm] = useState(false);

  const commissionTypes = [
    {
      icon: '🎮',
      title: 'Game Development',
      description: 'Full game development, scripting, and game mechanics',
      price: 'Starting at $50'
    },
    {
      icon: '💎',
      title: 'Scripting Services',
      description: 'Custom Lua scripts for your Roblox experiences',
      price: 'Starting at $25'
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Custom GUIs and user interfaces',
      price: 'Starting at $30'
    },
    {
      icon: '🏗️',
      title: 'Building & Modeling',
      description: '3D models, maps, and structures',
      price: 'Starting at $40'
    }
  ];

  return (
    <div className="commissions-page">
      <div className="commissions-hero">
        <h1>Roblox Commissions</h1>
        <p>Let's bring your Roblox vision to life</p>
      </div>

      <div className="container">
        <section className="commission-types">
          <h2 className="section-title">Available Services</h2>
          <div className="commission-grid">
            {commissionTypes.map((type, index) => (
              <div key={index} className="commission-card">
                <div className="commission-icon">{type.icon}</div>
                <h3>{type.title}</h3>
                <p>{type.description}</p>
                <div className="commission-price">{type.price}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="commission-cta">
          <h2>Ready to Get Started?</h2>
          <p>Fill out the form below and I'll get back to you as soon as possible!</p>
          <button 
            className="btn btn-primary"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? 'Hide Form' : 'Request Commission'}
          </button>
        </section>

        {showForm && (
          <section className="commission-form-section">
            <CommissionForm />
          </section>
        )}
      </div>
    </div>
  );
}

export default Commissions;

