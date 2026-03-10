'use client';

import { usePathname } from 'next/navigation';
import './TopHomeIndicator.css';

export default function TopHomeIndicator() {
  const pathname = usePathname();

  if (pathname?.startsWith('/experience/')) {
    return null;
  }

  return (
    <div className="top-home-indicator-container">
      <div className="top-home-indicator"></div>
    </div>
  );
}
