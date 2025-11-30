import React from 'react';
import { useLocation } from 'react-router-dom';
import './TopHomeIndicator.css';

function TopHomeIndicator() {
  const location = useLocation();
  
  // Hide top indicator on experience detail pages
  if (location.pathname.startsWith('/experience/')) {
    return null;
  }

  return (
    <div className="top-home-indicator-container">
      <div className="top-home-indicator"></div>
    </div>
  );
}

export default TopHomeIndicator;

