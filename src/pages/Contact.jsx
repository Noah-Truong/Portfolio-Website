import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
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
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      info: 'Send me an email',
      value: 'contact@id0ntn0ahguy.com'
    },
    {
      icon: '💬',
      title: 'Discord',
      info: 'Message me on Discord',
      value: 'ID0ntN0ahGuy#1234'
    },
    {
      icon: '🎮',
      title: 'Roblox',
      info: 'Find me on Roblox',
      value: 'ID0ntN0ahGuy'
    }
  ];

  if (submitted) {
    return (
      <div className="contact-page">
        <div className="contact-hero">
          <h1>Get In Touch</h1>
          <p>I'd love to hear from you!</p>
        </div>
        <div className="container">
          <div className="form-success">
            <div className="success-icon">✓</div>
            <h2>Message Sent!</h2>
            <p>Thank you for reaching out. I'll get back to you as soon as possible!</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <h1>Get In Touch</h1>
        <p>Have a question or want to work together? Let's chat!</p>
      </div>

      <div className="container">
        <div className="contact-content">
          <section className="contact-methods">
            <h2>Contact Methods</h2>
            <p>Choose your preferred way to reach me</p>
            <div className="methods-grid">
              {contactMethods.map((method, index) => (
                <div key={index} className="method-card">
                  <div className="method-icon">{method.icon}</div>
                  <h3>{method.title}</h3>
                  <p className="method-info">{method.info}</p>
                  <p className="method-value">{method.value}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="contact-form-section">
            <h2>Send a Message</h2>
            <p>Fill out the form below and I'll respond as soon as I can</p>
            <form className="contact-form" onSubmit={handleSubmit}>
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

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="8"
                  placeholder="Tell me what's on your mind..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-submit">
                Send Message
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Contact;

