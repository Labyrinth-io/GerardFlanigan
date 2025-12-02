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
            <div>
              <span
                className="text-2xl font-bold tracking-wide block"
                style={{ color: '#FEFEFE' }}
              >
                GERARD FLANIGAN
              </span>
              <span
                className="text-sm tracking-[0.3em] uppercase"
                style={{ color: '#29ABE2' }}
              >
                Builder
              </span>
            </div>
            <p style={{ color: '#B8B8B8' }} className="text-sm leading-relaxed">
              Building excellence across Bundaberg for over 25 years. Commercial projects,
              premium homes, and quality renovations.
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
              {['Home', 'About', 'Services', 'Projects', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={createPageUrl(item)}
                    className="text-sm transition-colors duration-200 hover:pl-2"
                    style={{ color: '#B8B8B8' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#29ABE2')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#B8B8B8')}
                  >
                    {item}
                  </Link>
                </li>
              ))}
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
                'Extensions'
              ].map((service) => (
                <li key={service}>
                  <span
                    className="text-sm"
                    style={{ color: '#B8B8B8' }}
                  >
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
                  className="flex items-center space-x-3 group"
                >
                  <Phone size={18} style={{ color: '#29ABE2' }} />
                  <span
                    className="text-sm transition-colors duration-200"
                    style={{ color: '#B8B8B8' }}
                  >
                    0477 037 911
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@gerardflanigan.com.au"
                  className="flex items-center space-x-3"
                >
                  <Mail size={18} style={{ color: '#29ABE2' }} />
                  <span
                    className="text-sm transition-colors duration-200"
                    style={{ color: '#B8B8B8' }}
                  >
                    info@gerardflanigan.com.au
                  </span>
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} style={{ color: '#29ABE2' }} className="mt-0.5" />
                <span
                  className="text-sm"
                  style={{ color: '#B8B8B8' }}
                >
                  Bundaberg, QLD<br />Australia
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="border-t"
        style={{ borderColor: '#5A5A5A' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p
              className="text-sm"
              style={{ color: '#666666' }}
            >
              © {currentYear} Gerard Flanigan Builder. All rights reserved.
            </p>
            <p
              className="text-sm"
              style={{ color: '#666666' }}
            >
              Licensed Builder | NSW Licence #123456C
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
