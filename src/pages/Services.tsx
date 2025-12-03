import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { motion } from 'framer-motion';
import { Building2, Home, Layers, Hammer, Ruler, PaintBucket, ArrowRight, CheckCircle2 } from 'lucide-react';
import CTAStrip from '../components/CTAStrip';

const services = [
  {
    icon: Building2,
    title: 'Commercial & Multi-Level Projects',
    description: 'We specialise in complex commercial developments and multi-storey constructions that demand precision engineering, expert project management, and unwavering attention to safety standards.',
    features: ['Office Buildings', 'Retail Spaces', 'Multi-storey Residential', 'Industrial Facilities', 'Mixed-use Developments'],
    image: '/images/baynestreet2.webp',
  },
  {
    icon: Home,
    title: 'Premium Custom Homes',
    description: 'From architectural masterpieces to contemporary family residences, we craft luxury homes that reflect your unique vision with exceptional materials and meticulous craftsmanship.',
    features: ['Architectural Design', 'Luxury Finishes', 'Smart Home Integration', 'Sustainable Building', 'Custom Joinery'],
    image: '/images/johnfrancispool.png',
  },
  {
    icon: Layers,
    title: 'Duplexes & Multi-Dwellings',
    description: 'Maximise your land investment with expertly designed and constructed duplexes and multi-dwelling developments that meet market demands while exceeding quality standards.',
    features: ['Dual Occupancy', 'Townhouse Developments', 'Investment Properties', 'Land Subdivision', 'Strata Management'],
    image: 'public/images/remyduplux.jpg',
  },
  {
    icon: Hammer,
    title: 'Renovations & Extensions',
    description: 'Transform your existing property with thoughtfully designed renovations and extensions that enhance functionality, increase value, and respect the character of your home.',
    features: ['Kitchen Renovations', 'Bathroom Upgrades', 'Room Extensions', 'Second Storey Additions', 'Structural Modifications'],
    image: 'public/images/johnfrancisinterior.jpg',
  },
  {
    icon: Ruler,
    title: 'Project Management',
    description: 'Our comprehensive project management services ensure seamless coordination of all trades, timelines, and budgets from concept through to completion.',
    features: ['Timeline Management', 'Budget Control', 'Quality Assurance', 'Contractor Coordination', 'Progress Reporting'],
    image: '/images/constructionsite.webp',
  },
  {
    icon: PaintBucket,
    title: 'Fit-outs & Interior Works',
    description: 'Commercial and residential fit-outs delivered with precision, transforming empty spaces into functional, aesthetically pleasing environments.',
    features: ['Commercial Fit-outs', 'Retail Shopfitting', 'Office Renovations', 'Custom Cabinetry', 'Interior Finishes'],
    image: '/images/constructionsite.webp',
  },
];

export default function Services() {
  return (
    <div>
      <section
        className="relative py-32 md:py-40"
        style={{ backgroundColor: '#221F20' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm uppercase tracking-[0.3em] block mb-4 pt-12"
              style={{ color: '#29ABE2' }}
            >
              Our Services
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
              style={{ color: '#FEFEFE' }}
            >
              Comprehensive Building Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg"
              style={{ color: '#B8B8B8' }}
            >
              From concept to completion, we deliver exceptional construction
              services tailored to your specific needs.
            </motion.p>
          </div>
        </div>
      </section>

      {services.map((service, index) => (
        <section
          key={service.title}
          className="py-24"
          style={{ backgroundColor: index % 2 === 0 ? '#FFFFFF' : '#F8F8F8' }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full"
                  style={{ aspectRatio: '4/3', objectFit: 'cover' }}
                />
                <div
                  className="absolute -bottom-6 left-8 p-4"
                  style={{
                    background: 'linear-gradient(135deg, #0071BC, #00A2E8)',
                  }}
                >
                  <service.icon size={32} style={{ color: '#FEFEFE' }} />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={index % 2 === 1 ? 'lg:order-1' : ''}
              >
                <h2
                  className="text-2xl sm:text-3xl font-bold mb-6"
                  style={{ color: '#221F20' }}
                >
                  {service.title}
                </h2>
                <div
                  className="w-16 h-0.5 mb-6"
                  style={{ backgroundColor: '#D4AF37' }}
                />
                <p
                  className="text-lg leading-relaxed mb-8"
                  style={{ color: '#5A5A5A' }}
                >
                  {service.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-3">
                      <CheckCircle2 size={18} style={{ color: '#0071BC' }} />
                      <span className="text-sm" style={{ color: '#666666' }}>{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to={createPageUrl('Contact')}
                  className="inline-flex items-center px-8 py-4 text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:scale-105 group"
                  style={{
                    backgroundColor: '#E67E22',
                    color: '#FEFEFE',
                  }}
                >
                  Get a Quote
                  <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      <CTAStrip />
    </div>
  );
}
