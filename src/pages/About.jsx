import React from 'react';
import './About.css';

function About() {
  const blogs = [
    {
      id: 1,
      title: 'Getting Started with Roblox Development',
      date: 'November 15, 2024',
      excerpt: 'A comprehensive guide to beginning your journey in Roblox game development...',
      link: '#'
    },
    {
      id: 2,
      title: 'Best Practices for Lua Scripting',
      date: 'November 10, 2024',
      excerpt: 'Learn the essential patterns and practices for writing clean, efficient Lua code...',
      link: '#'
    },
    {
      id: 3,
      title: 'Creating Engaging Game Mechanics',
      date: 'November 5, 2024',
      excerpt: 'Tips and tricks for designing game mechanics that keep players engaged...',
      link: '#'
    }
  ];

  const socialLinks = [
    { name: 'Roblox', icon: '🎮', url: '#', username: 'ID0ntN0ahGuy' },
    { name: 'Discord', icon: '💬', url: '#', username: 'ID0ntN0ahGuy#1234' },
    { name: 'Twitter', icon: '🐦', url: '#', username: '@ID0ntN0ahGuy' },
    { name: 'YouTube', icon: '📺', url: '#', username: 'ID0ntN0ahGuy' },
    { name: 'GitHub', icon: '💻', url: '#', username: 'ID0ntN0ahGuy' }
  ];

  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="about-avatar">
          <div className="avatar-circle">ID</div>
        </div>
        <h1>About Me</h1>
        <p className="about-tagline">Roblox Developer & Creative Problem Solver</p>
      </div>

      <div className="container">
        <section className="about-section">
          <div className="about-content">
            <h2>Who I Am</h2>
            <p>
              Hi! I'm ID0ntN0ahGuy, a passionate Roblox developer dedicated to creating
              engaging and innovative game experiences. With years of experience in Lua
              scripting, game design, and 3D modeling, I specialize in bringing creative
              visions to life on the Roblox platform.
            </p>
            <p>
              Whether it's developing complex game mechanics, designing intuitive user
              interfaces, or building immersive worlds, I'm committed to delivering
              high-quality work that exceeds expectations. I love collaborating with
              clients to understand their vision and turn it into reality.
            </p>
            <p>
              When I'm not coding, you can find me exploring new game development
              techniques, participating in game jams, or sharing knowledge with the
              Roblox development community.
            </p>
          </div>
        </section>

        <section className="social-section">
          <h2>Connect With Me</h2>
          <p>Follow me on these platforms to stay updated with my latest work!</p>
          <div className="social-grid">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="social-card"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="social-icon">{social.icon}</div>
                <div className="social-info">
                  <h3>{social.name}</h3>
                  <p>{social.username}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="blogs-section">
          <h2>Latest Blog Posts</h2>
          <p>Check out my thoughts on game development and Roblox</p>
          <div className="blogs-grid">
            {blogs.map((blog) => (
              <article key={blog.id} className="blog-card">
                <div className="blog-date">{blog.date}</div>
                <h3>{blog.title}</h3>
                <p>{blog.excerpt}</p>
                <a href={blog.link} className="blog-link">
                  Read More →
                </a>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;

