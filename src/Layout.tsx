import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#FFFFFF' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

        * {
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
        }

        html {
          scroll-behavior: smooth;
        }

        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #221F20;
        }

        ::-webkit-scrollbar-thumb {
          background: #0071BC;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #00A2E8;
        }

        ::selection {
          background: #29ABE2;
          color: #FEFEFE;
        }
      `}</style>
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
