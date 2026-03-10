'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { fetchWorkExperienceById } from '@/lib/workExperienceApi';
import { getStorageImageUrl } from '@/lib/supabaseStorage';
import './ExperienceDetail.css';

export default function ExperienceDetail() {
  const params = useParams();
  const id = params?.id;
  const [isVisible, setIsVisible] = useState(false);
  const [experience, setExperience] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setIsVisible(true);
  }, [id]);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }
    fetchWorkExperienceById(id).then((data) => {
      setExperience(data);
      setLoading(false);
    });
  }, [id]);

  useEffect(() => {
    if (!id) return;
    const onFocus = () => {
      fetchWorkExperienceById(id).then((data) => setExperience(data));
    };
    document.addEventListener('visibilitychange', onFocus);
    return () => document.removeEventListener('visibilitychange', onFocus);
  }, [id]);

  if (loading) {
    return (
      <div className="experience-detail-page">
        <div className="phone-container">
          <div className="phone-screen">
            <div className="screen-content">
              <p className="experience-loading">Loading…</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!experience) {
    return (
      <div className="experience-detail-page">
        <div className="phone-container">
          <div className="phone-screen">
            <div className="screen-content">
              <div className="experience-not-found">
                <h1>Experience not found</h1>
                <p>The experience you&apos;re looking for doesn&apos;t exist.</p>
                <Link href="/" className="btn btn-primary">
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="experience-detail-page">
      <div className="experience-hero">
        <Link href="/" className="back-link">
          ← Back to Home
        </Link>
        <div className={`experience-header ${isVisible ? 'fade-in-up' : ''}`}>
          <div className="experience-logo-container">
            <img
              src={getStorageImageUrl(experience.logo)}
              alt={experience.org}
              className="experience-logo"
            />
          </div>
          <h1 className="experience-title">{experience.position}</h1>
          <h2 className="experience-org">{experience.org}</h2>
        </div>
      </div>

      <div className="phone-container">
        <div className={`phone-screen ${isVisible ? 'fade-in-up-delay-1' : ''}`}>
          <div className="screen-content">
            <div className={`experience-content ${isVisible ? 'fade-in-up-delay-1' : ''}`}>
              <div className="experience-description">
                <h3>Overview</h3>
                <p className="description-text center">{experience.description}</p>
              </div>

              {experience.details && (
                <div className="experience-details">
                  <h3>Details</h3>
                  <p className="details-text center">{experience.details}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
