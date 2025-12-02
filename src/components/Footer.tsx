import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: '#221F20' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex flex-col items-start">
              <img
                src="/Gerard Logo copy.svg"
                alt="Gerard Flanigan Logo"
                className="h-16 w-16 mb-4"
              />

              {/* BUSINESS NAME */}
              <span
                className="text-xl sm:text-2xl font-bold tracking-wide"
                style={{ color: '#FEFEFE', fontFamily: 'system-ui' }}
              >
                GERARD FLANIGAN
              </span>

              {/* MOBILE "CONSTRUCTIONS" (ONLY below sm) */}
              <span
                className="uppercase inline-block sm:hidden"
                style={{
                  color: '#29ABE2',
                  letterSpacing: '1.2em',   // 👈 MOBILE width
                  fontSize: '0.52rem',      // 👈 MOBILE size
                  lineHeight: '1rem',
                  transform: 'translateY(0px)',
                  whiteSpace: 'nowrap',
                  maxWidth: '100%',
                }}
              >
                CONSTRUCTIONS
              </span>

              {/* DESKTOP "CONSTRUCTIONS" (ONLY sm and up) */}
              <span
                className="uppercase hidden sm:inline-block"
                style={{
                  color: '#29ABE2',
                  letterSpacing: '1.28em',  // 👈 DESKTOP width
                  fontSize: '0.6rem',       // 👈 DESKTOP size
                  lineHeight: '1rem',
                  transform: 'translateY(1px)',
                  whiteSpace: 'nowrap',
                  maxWidth: '100%',
                }}
              >
                CONSTRUCTIONS
              </span>
            </div>

            <p
              style={{ color: '#B8B8B8' }}
              className="text-sm leading-relaxed"
            >
              Building excellence across Bundaberg for over 25 years. Commercial
              projects, premium homes, and quality renovations.
            </p>
            <div
              className="w-16 h-0.5"
              style={{ backgroundColor: '#D4AF37' }}
            />
          </div>

          <div>
            <h4
              className="text-sm font-semibold uppercase tracking-[0.2em] mb-6"
              style={{ color: '#FEFEFE' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Projects', 'Testimonials', 'Contact'].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to={createPageUrl(item)}
                      className="text-sm transition-colors duration-200 hover:pl-2"
                      style={{ color: '#B8B8B8' }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = '#29ABE2')
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = '#B8B8B8')
                      }
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4
              className="text-sm font-semibold uppercase tracking-[0.2em] mb-6"
              style={{ color: '#FEFEFE' }}
            >
              Our Services
            </h4>
            <ul className="space-y-3">
              {[
                'Commercial Projects',
                'Multi-Level Builds',
                'Premium Homes',
                'Duplexes',
                'Renovations',
                'Extensions',
              ].map((service) => (
                <li key={service}>
                  <span className="text-sm" style={{ color: '#B8B8B8' }}>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="text-sm font-semibold uppercase tracking-[0.2em] mb-6"
              style={{ color: '#FEFEFE' }}
            >
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:0477037911"
                  className="flex items-center space-x-3 transition-all duration-200 hover:pl-2"
                >
                  <Phone size={18} style={{ color: '#29ABE2' }} />
                  <span
                    className="text-sm transition-colors duration-200"
                    style={{ color: '#B8B8B8' }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = '#29ABE2')
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = '#B8B8B8')
                    }
                  >
                    0477 037 911
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:gflaniganbuilder@gmail.com"
                  className="flex items-center space-x-3 transition-all duration-200 hover:pl-2"
                >
                  <Mail size={18} style={{ color: '#29ABE2' }} />
                  <span
                    className="text-sm transition-colors duration-200"
                    style={{ color: '#B8B8B8' }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = '#29ABE2')
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = '#B8B8B8')
                    }
                  >
                    gflaniganbuilder@gmail.com
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/URAsRQPe2gwKQDZd9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3 transition-all duration-200 hover:pl-2"
                >
                  <MapPin
                    size={18}
                    style={{ color: '#29ABE2' }}
                    className="mt-0.5"
                  />
                  <span
                    className="text-sm transition-colors duration-200"
                    style={{ color: '#B8B8B8' }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = '#29ABE2')
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = '#B8B8B8')
                    }
                  >
                    12 Churchill Street<br />
                    Svensson Heights, Bundaberg QLD
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t" style={{ borderColor: '#5A5A5A' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm" style={{ color: '#666666' }}>
              © {currentYear} Gerard Flanigan Builder. All rights reserved.
            </p>
            <p className="text-sm" style={{ color: '#666666' }}>
              Licensed Builder | NSW Licence #123456C
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
