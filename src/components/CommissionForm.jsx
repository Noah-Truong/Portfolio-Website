import React, { useState } from 'react';
import './CommissionForm.css';
// Backend API endpoint
const API_URL = import.meta.env.VITE_API_URL || '';

function CommissionForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    robloxUsername: '',
    commissionType: '',
    budget: '',
    description: '',
    timeline: '',
    discordUsername: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      console.log('📧 Sending commission request to backend API...');
      console.log('API URL:', `/api/send-commission`);
      console.log('Form data:', formData);

      const response = await fetch(`/api/send-commission`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          robloxUsername: formData.robloxUsername,
          discordUsername: formData.discordUsername,
          commissionType: formData.commissionType,
          budget: formData.budget,
          timeline: formData.timeline,
          description: formData.description,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        console.error('❌ API Error:', result);
        alert(`Failed to send email: ${result.error || 'Unknown error'}\n\nMake sure the backend server is running on port 3001.`);
        return;
      }

      console.log('✅ Email sent successfully!', result);
      setSubmitted(true);
    } catch (error) {
      console.error('❌ Error sending email:', error);
      
      if (error.message.includes('fetch') || error.message.includes('Failed to fetch')) {
        alert('Connection Error: Could not connect to the email server.\n\nMake sure the backend server is running:\n  npm run server\n\nOr check that the server is running on http://localhost:3001');
      } else {
        alert(`Error: ${error.message}\n\nCheck console for details.`);
      }
      
      return;
    }
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        robloxUsername: '',
        commissionType: '',
        budget: '',
        description: '',
        timeline: '',
        discordUsername: ''
      });
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="form-success">
        <div className="success-icon">✓</div>
        <h2>Thank you!</h2>
        <p>Your commission request has been submitted. I'll get back to you soon!</p>
      </div>
    );
  }

  return (
    <form className="commission-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">Your Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="robloxUsername">Roblox Username *</label>
          <input
            type="text"
            id="robloxUsername"
            name="robloxUsername"
            value={formData.robloxUsername}
            onChange={handleChange}
            required
            placeholder="Your Roblox Username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="commissionType">Commission Type *</label>
          <select
            id="commissionType"
            name="commissionType"
            value={formData.commissionType}
            onChange={handleChange}
            required
          >
            <option value="">Select a type</option>
            <option value="game-dev">Game Development</option>
            <option value="scripting">Scripting Services</option>
            <option value="ui-design">UI/UX Design</option>
            <option value="building">Building & Modeling</option>
          </select>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="budget">Budget Range *</label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            required
          >
            <option value="">Select budget</option>
            <option value="10-20">$10 - $20</option>
            <option value="20-30">$20 - $30</option>
            <option value="40-50">$40 - $50</option>
            <option value="50-60">$50 - $60</option>
            <option value="60+">$60+</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="timeline">Timeline *</label>
          <select
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            required
          >
            <option value="">Select timeline</option>
            <option value="asap">ASAP</option>
            <option value="1-week">Within 1 week</option>
            <option value="2-weeks">Within 2 weeks</option>
            <option value="1-month">Within 1 month</option>
            <option value="flexible">Flexible</option>
          </select>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="discordUsername">Discord Username *</label>
          <input
            type="text"
            id="discordUsername"
            name="discordUsername"
            value={formData.discordUsername}
            onChange={handleChange}
            required
            placeholder="Your Discord Username"
          />
        </div>
      </div>
    <div className="form-row">
      <div className="form-group">
        <label htmlFor="description">Project Description *</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          rows="6"
          placeholder="Tell me about your billion robux idea..."
        ></textarea>
      </div>
    
      </div>
      <button type="submit" className="btn btn-primary btn-submit">
        Submit Commission Request
      </button>
    </form>
  );
}

export default CommissionForm;

