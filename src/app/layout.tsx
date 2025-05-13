import React from 'react';
import Header from '../components/Header';
import '../styles/globals.css';

export const metadata = {
  title: 'Gal Kremer - Frontend Developer',
  description: 'Personal portfolio of Gal Kremer, Senior Frontend Developer',
  icons: {
    icon: '/favicon.ico',
    apple: '/images/gal.png',
  },
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/images/gal.png" />
      </head>
      <body className="min-h-screen bg-gradient-to-br from-primary-100 to-neutral-50 text-neutral-800">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default Layout;
