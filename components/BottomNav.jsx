'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './BottomNav.css';

export default function BottomNav() {
  const pathname = usePathname();

  if (pathname?.startsWith('/experience/')) {
    return null;
  }

  const isActive = (path) => pathname === path;

  const navItems = [
    { path: '/', label: 'Home', icon: '/assets/home.png' },
    { path: '/projects', label: 'Projects', icon: '/assets/projects.jpeg' },
    { path: '/contact', label: 'Contact', icon: '/assets/contact.jpeg' },
    { path: '/about', label: 'About', icon: '/assets/profpic.jpg' },
  ];

  return (
    <div className="bottom-nav-container">
      <nav className="bottom-nav">
        <div className="bottom-nav-group">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
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
