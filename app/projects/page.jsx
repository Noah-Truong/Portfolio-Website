'use client';

import { useState, useEffect } from 'react';
import Typewriter from '@/components/Typewriter';
import { getSupabase } from '@/lib/supabase';
import { getStorageImageUrl } from '@/lib/supabaseStorage';
import './Projects.css';

const FALLBACK_PROJECTS = [
  { id: 'project1', title: 'Battery Eliminator Circuit', image: 'dcConverter.png', link: 'https://acrobat.adobe.com/id/urn:aaid:sc:US:b186107f-ccf0-4e71-9196-d5e1e288893c' },
  { id: 'project2', title: 'Discord Chatbot', image: 'noagpt.png', link: 'https://noagpt-website.vercel.app/' },
  { id: 'project3', title: 'Fourier Series Visualizer', image: 'fourier.png', link: 'https://fourier-app.vercel.app/' },
  { id: 'project4', title: '[Beta] Homeless Simulator', image: 'homeless_addon.png', link: 'https://www.roblox.com/games/76631316909858/Homeless-Simulator' },
  { id: 'project5', title: 'TungTung\nTungSahur\nObby', image: 'tungtungobby_addon.png', link: 'https://www.roblox.com/games/80929191589661/TungTungTungSahur-Obby' },
  { id: 'project6', title: '[Collect 67] Simulator', image: '67sim_addon.png', link: 'https://www.roblox.com/games/121224456961897/COLLECT-67-Simulator-Game' },
];

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [projects, setProjects] = useState(FALLBACK_PROJECTS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const supabase = getSupabase();
    if (!supabase) {
      setLoading(false);
      return;
    }
    async function fetchProjects() {
      try {
        const { data, error } = await supabase
          .from('projects')
          .select('id, title, image, link')
          .order('sort_order', { ascending: true });
        if (!error && data?.length) setProjects(data);
      } catch (_) {
        // keep fallback
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  useEffect(() => {
    const onFocus = async () => {
      const supabase = getSupabase();
      if (!supabase) return;
      try {
        const { data, error } = await supabase
          .from('projects')
          .select('id, title, image, link')
          .order('sort_order', { ascending: true });
        if (!error && data?.length) setProjects(data);
      } catch (_) {}
    };
    document.addEventListener('visibilitychange', onFocus);
    return () => document.removeEventListener('visibilitychange', onFocus);
  }, []);

  return (
    <div className="projects-page">
      <div className={`projects-hero ${isVisible ? 'fade-in-up' : ''}`}>
        <h1>My Projects</h1>
        <p>
          <Typewriter text="See what I've been working on!" speed={40} />
        </p>
      </div>

      <div className="phone-container">
        <div className={`phone-screen ${isVisible ? 'fade-in-up-delay-1' : ''}`}>
          <div className="screen-content">
            <h2 className="screen-section-title">Projects</h2>
            {loading ? (
              <p className="projects-loading">Loading…</p>
            ) : (
              <div className="apps-grid">
                {projects.map((project, index) => (
                  <a
                    key={project.id}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`app-icon ${isVisible ? `fade-in-up-delay-${Math.min(index + 2, 5)}` : ''}`}
                  >
                    <div className="app-icon-wrapper">
                      {project.image ? (
                        <img
                          src={getStorageImageUrl(project.image)}
                          alt={project.title}
                          className="app-icon-image"
                        />
                      ) : (
                        <div className="app-icon-placeholder">
                          {project.title.charAt(0)}
                        </div>
                      )}
                    </div>
                    <p className="app-icon-label">{project.title}</p>
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
