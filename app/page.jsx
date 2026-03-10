'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Typewriter from '@/components/Typewriter';
import { fetchWorkExperience } from '@/lib/workExperienceApi';
import { fetchEducation } from '@/lib/educationApi';
import { getStorageImageUrl } from '@/lib/supabaseStorage';
import './Home.css';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [workExperience, setWorkExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [loadingWork, setLoadingWork] = useState(true);
  const [loadingEducation, setLoadingEducation] = useState(true);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    fetchWorkExperience().then((data) => {
      setWorkExperience(data);
      setLoadingWork(false);
    });
  }, []);

  useEffect(() => {
    const onFocus = () => {
      fetchWorkExperience().then((data) => setWorkExperience(data));
    };
    document.addEventListener('visibilitychange', onFocus);
    return () => document.removeEventListener('visibilitychange', onFocus);
  }, []);

  useEffect(() => {
    fetchEducation().then((data) => {
      setEducation(data);
      setLoadingEducation(false);
    });
  }, []);

  useEffect(() => {
    const onFocus = () => {
      fetchEducation().then((data) => setEducation(data));
    };
    document.addEventListener('visibilitychange', onFocus);
    return () => document.removeEventListener('visibilitychange', onFocus);
  }, []);

  const quickActions = [
    { title: 'Projects', icon: '/assets/projects.jpeg', link: '/projects', color: '#1fb2d3' },
    { title: 'Contact', icon: '/assets/contact.jpeg', link: '/contact', color: '#23df59' },
    { title: 'About', icon: '/assets/profpic.jpg', link: '/about', color: '#1fb2d3' },
  ];

  return (
    <div className="home-page">
      <div className={`home-hero ${isVisible ? 'fade-in-up' : ''}`}>
        <div className="home-header">
          <h1>Noah Truong</h1>
          <p>UC Berkeley 2029</p>
          <p>
            <Typewriter text="Electrical Engineering and Computer Sciences" speed={35} />
          </p>
        </div>
      </div>

      <div className="phone-container">
        <div className={`phone-screen ${isVisible ? 'fade-in-up-delay-1' : ''}`}>
          <div className="screen-content">
            <h2 className="screen-section-title">Quick Actions</h2>
            <div className="apps-grid">
              {quickActions.map((action, index) => (
                <Link
                  key={index}
                  href={action.link}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className={`app-icon ${isVisible ? `fade-in-up-delay-${Math.min(index + 2, 5)}` : ''}`}
                >
                  <div
                    className="app-icon-wrapper"
                    style={{
                      background: `linear-gradient(135deg, ${action.color}20 0%, ${action.color}10 100%)`,
                    }}
                  >
                    <img src={action.icon} alt={action.title} className="app-icon-image" />
                  </div>
                  <p className="app-icon-label">{action.title}</p>
                </Link>
              ))}
            </div>

            <h2 className="screen-section-title" style={{ marginTop: '3rem' }}>
              Work Experience
            </h2>
            {loadingWork ? (
              <p className="home-loading">Loading…</p>
            ) : (
              <div className="apps-grid">
                {workExperience.map((job, index) => (
                  <Link
                    href={`/experience/${job.id}`}
                    key={job.id}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className={`app-icon ${isVisible ? `fade-in-up-delay-${Math.min(index + 6, 5)}` : ''}`}
                  >
                    <div className="app-icon-wrapper">
                      <img
                        src={getStorageImageUrl(job.logo)}
                        alt={job.org}
                        className="app-icon-image"
                      />
                    </div>
                    <p className="app-icon-label">{job.org}</p>
                  </Link>
                ))}
              </div>
            )}
            <h2 className="screen-section-title" style={{ marginTop: '3rem' }}>
              Education
            </h2>
            {loadingEducation ? (
              <p className="home-loading">Loading…</p>
            ) : (
              <div className="apps-grid">
                {education.map((item, index) => (
                  <a
                    key={item.id}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`app-icon berkeley-app ${isVisible ? `fade-in-up-delay-${Math.min(index + 5, 5)}` : ''}`}
                  >
                    <div
                      className="app-icon-wrapper"
                      style={{
                        background:
                          'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
                      }}
                    >
                      <img
                        src={getStorageImageUrl(item.logo)}
                        alt={item.name}
                        className="app-icon-image"
                      />
                    </div>
                    <p className="app-icon-label">{item.name}</p>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
