'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function AppWrapper({ children }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    setIsLoaded(false);
    const timer = setTimeout(() => setIsLoaded(true), 50);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div className={`app ${isLoaded ? 'loaded' : ''}`} id="app-root">
      {children}
    </div>
  );
}
