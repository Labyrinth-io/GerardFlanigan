import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', page: 'Home' },
    { name: 'About', page: 'About' },
    { name: 'Services', page: 'Services' },
    { name: 'Projects', page: 'Projects' },
    { name: 'Testimonials', page: 'Testimonials' },
    { name: 'Contact', page: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-2xl' : ''
      }`}
      style={{ backgroundColor: '#221F20' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to={createPageUrl('Home')} className="flex items-center gap-3">
            <img
              src="/Gerard Logo copy.svg"
              alt="Gerard Flanigan Logo"
              className="h-12 w-12 sm:h-14 sm:w-14"
            />
            <div className="flex flex-col leading-tight">
              <span
                className="text-xl sm:text-2xl font-bold tracking-wide"
                style={{ color: '#FEFEFE', fontFamily: 'system-ui' }}
              >
                GERARD FLANIGAN
              </span>

              {/* ✅ FIXED CONSTRUCTIONS SPACING + SIZE */}
              <span
                className="uppercase"
                style={{
                  color: '#29ABE2',
                  letterSpacing: '0.40em',
                  fontSize: '0.6rem',
                  lineHeight: '1rem',
                  transform: 'translateY(1px)',
                  whiteSpace: 'nowrap',
                  display: 'inline-block',
                  maxWidth: '100%',
                }}
              >
                CONSTRUCTIONS
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={createPageUrl(item.page)}
                className="relative text-sm font-medium tracking-wide uppercase transition-colors duration-200 group"
                style={{ color: '#FEFEFE' }}
              >
                {item.name}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: '#29ABE2' }}
                />
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-6">
            <a
              href="tel:0477037911"
              className="flex items-center space-x-2 transition-colors duration-200"
              style={{ color: '#FEFEFE' }}
            >
              <Phone size={18} style={{ color: '#29ABE2' }} />
              <span className="font-medium">0477 037 911</span>
            </a>
            <Link
              to={createPageUrl('Contact')}
              className="px-6 py-3 text-sm font-semibold uppercase tracking-wide transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: '#E67E22',
                color: '#FEFEFE',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = '#C15427')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = '#E67E22')
              }
            >
              Request a Quote
            </Link>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ color: '#FEFEFE' }}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? 'max-h-96 pb-6' : 'max-h-0'
          }`}
        >
          <nav className="flex flex-col space-y-4 pt-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={createPageUrl(item.page)}
                className="text-sm font-medium tracking-wide uppercase py-2"
                style={{ color: '#FEFEFE' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <a
              href="tel:0477037911"
              className="flex items-center space-x-2 py-2"
              style={{ color: '#FEFEFE' }}
            >
              <Phone size={18} style={{ color: '#29ABE2' }} />
              <span className="font-medium">0477 037 911</span>
            </a>

            <Link
              to={createPageUrl('Contact')}
              className="inline-block px-6 py-3 text-sm font-semibold uppercase tracking-wide text-center"
              style={{ backgroundColor: '#E67E22', color: '#FEFEFE' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Request a Quote
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
