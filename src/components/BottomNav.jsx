import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './BottomNav.css';

function BottomNav() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  
  // Hide bottom nav on experience detail pages
  if (location.pathname.startsWith('/experience/')) {
    return null;
  }

  const navItems = [
    {
      path: '/',
      label: 'Home',
      icon: '/assets/home.png'
    },
    {
      path: '/commissions',
      label: 'Freelance Services',
      icon: '/assets/freelance.png'
    },
    {
      path: '/projects',
      label: 'Projects',
      icon: '/assets/projects.jpeg'
    },  
    {
      path: '/contact',
      label: 'Contact',
      icon: '/assets/contact.jpeg'
    },
    {
      path: '/about',
      label: 'About',
      icon: '/assets/profpic.jpeg'
    }
  ];

  return (
  <div className="bottom-nav-container">
  <nav className="bottom-nav">
    <div className="bottom-nav-group">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`bottom-nav-item ${isActive(item.path) ? 'active' : ''}`}
        >
          <div className="bottom-nav-icon">
            <img src={item.icon} alt={item.label} />
          </div>
          <span className="bottom-nav-label">{item.label}</span>
        </Link>
      ))}
    </div>
  </nav>
</div>

  );
}

export default BottomNav;

