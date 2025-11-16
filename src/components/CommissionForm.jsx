import React, { useState } from 'react';
import './CommissionForm.css';

function CommissionForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    robloxUsername: '',
    commissionType: '',
    budget: '',
    description: '',
    timeline: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
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
        timeline: ''
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
            placeholder="John Doe"
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
            placeholder="YourRobloxUsername"
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
            <option value="25-50">$25 - $50</option>
            <option value="50-100">$50 - $100</option>
            <option value="100-250">$100 - $250</option>
            <option value="250-500">$250 - $500</option>
            <option value="500+">$500+</option>
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

      <div className="form-group">
        <label htmlFor="description">Project Description *</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          rows="6"
          placeholder="Tell me about your project, what you're looking for, and any specific requirements..."
        ></textarea>
      </div>

      <button type="submit" className="btn btn-primary btn-submit">
        Submit Commission Request
      </button>
    </form>
  );
}

export default CommissionForm;

