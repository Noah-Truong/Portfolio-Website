import './globals.css';
import AppWrapper from '@/components/AppWrapper';
import TopHomeIndicator from '@/components/TopHomeIndicator';
import BottomNav from '@/components/BottomNav';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata = {
  title: 'Noah Truong | Portfolio',
  description: 'Electrical Engineering and Computer Sciences - UC Berkeley 2029',
  icons: {
    icon: '/assets/tabimg.png',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#0a0a0a',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppWrapper>
          <TopHomeIndicator />
          <main className="main-content">{children}</main>
          <BottomNav />
        </AppWrapper>
        <SpeedInsights />
      </body>
    </html>
  );
}
