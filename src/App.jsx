import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import BottomNav from './components/BottomNav';
import TopHomeIndicator from './components/TopHomeIndicator';
import Home from './pages/Home';
import Commissions from './pages/Commissions';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import ExperienceDetail from './pages/ExperienceDetail';
import './style.css';

function AppContent() {
  const [isLoaded, setIsLoaded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Initial load animation
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    // Trigger page transition animation on route change
    setIsLoaded(false);
    const timer = setTimeout(() => setIsLoaded(true), 50);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className={`app ${isLoaded ? 'loaded' : ''}`}>
      <TopHomeIndicator />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/commissions" element={<Commissions />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/experience/:id" element={<ExperienceDetail />} />
        </Routes>
      </main>
      <BottomNav />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;



