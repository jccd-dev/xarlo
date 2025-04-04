import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const uncage = localFont({
  src: '../../public/fonts/uncage.woff',
  variable: '--font-uncage',
});

const roboto = localFont({
  src: '../../public/fonts/Roboto.ttf',
  variable: '--font-roboto',
});

const funneldisplay = localFont({
  src: '../../public/fonts/funnel-display.woff2',
  variable: '--font-funnel',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${uncage.variable} ${roboto.variable} ${funneldisplay.variable}`}
      >
        <div>
          <Navigation />
          {/* Page Content */}
          <div className='mt-16 min-h-[calc(100vh-90px-200px)]'>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
