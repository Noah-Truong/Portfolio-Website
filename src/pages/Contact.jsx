import React, { useState, useEffect } from 'react';
import './Contact.css';
import Typewriter from '../components/Typewriter';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would typically send the data to a backend
    
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
    try {
      console.log('📧 Sending commission request to backend API...');
      console.log('API URL:', `/api/send-commission`);
      console.log('Form data:', formData);

      const response = await fetch(`/api/send-contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        alert(`Failed to send message: ${result.error || 'Unknown error'}`);
        return;
      }

      console.log('✅ Email sent successfully!', result);
      setSubmitted(true);
    } catch (error) {
      console.error('❌ Error sending email:', error);
      
      if (error.message.includes('fetch') || error.message.includes('Failed to fetch')) {
        alert(`Failed to send message: ${result.error || 'Unknown error'}`);
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
        subject: '',
        message: ''
      });
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="contact-page">
        <div className={`contact-hero ${isVisible ? 'fade-in-up' : ''}`}>
          <h1>Get In Touch</h1>
          <p>I'd love to hear from you!</p>
        </div>
        <div className="phone-container">
          <div className={`phone-screen ${isVisible ? 'fade-in-up-delay-1' : ''}`}>
            <div className="screen-content">
              <div className={`form-success ${isVisible ? 'scale-in' : ''}`}>
                <div className="success-icon">✓</div>
                <h2>Message Sent!</h2>
                <p>Thank you for reaching out. I'll get back to you as soon as possible!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-page">
      <div className={`contact-hero ${isVisible ? 'fade-in-up' : ''}`}>
        <h1>Get In Touch</h1>
        <Typewriter text="Have a question or want to work together? Let's chat!" speed={35} />
      </div>

      <div className="phone-container">
        <div className={`phone-screen ${isVisible ? 'fade-in-up-delay-1' : ''}`}>
          <div className="screen-content">
          <section className={`contact-form-section ${isVisible ? 'fade-in-up-delay-1' : ''}`}>
            <h2>Send a Message</h2>
            <p>Fill out the form below and I'll respond as soon as I can</p>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
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
    </div>
  );
}

export default Contact;

