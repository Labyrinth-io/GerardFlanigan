import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { motion } from 'framer-motion';
import { Building2, Home, Layers, Hammer } from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'Commercial & Multi-Level',
    description: 'Complex commercial developments and multi-storey projects delivered with precision engineering and project excellence.',
  },
  {
    icon: Home,
    title: 'Premium Homes',
    description: 'Luxury custom homes crafted with exceptional materials and meticulous attention to every architectural detail.',
  },
  {
    icon: Layers,
    title: 'Duplexes',
    description: 'Investment-grade dual occupancy builds maximizing land value with quality design and construction.',
  },
  {
    icon: Hammer,
    title: 'Renovations',
    description: 'Transformative renovations and extensions that enhance functionality while adding lasting value to your property.',
  },
];

interface ServiceCardsProps {
  darkBackground?: boolean;
}

export default function ServiceCards({ darkBackground = true }: ServiceCardsProps) {
  return (
    <section
      className="py-24"
      style={{ backgroundColor: darkBackground ? '#221F20' : '#FFFFFF' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-[0.3em] block mb-4"
            style={{ color: '#29ABE2' }}
          >
            What We Build
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            style={{ color: darkBackground ? '#FEFEFE' : '#221F20' }}
          >
            Excellence in Every Project
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-24 h-0.5 mx-auto"
            style={{ backgroundColor: '#D4AF37' }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 transition-all duration-500 hover:-translate-y-2"
              style={{
                backgroundColor: darkBackground ? 'rgba(255,255,255,0.03)' : '#F8F8F8',
                border: `1px solid ${darkBackground ? '#5A5A5A' : '#E6E6E6'}`,
              }}
            >
              <div
                className="w-16 h-16 flex items-center justify-center mb-6 transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #0071BC, #00A2E8)',
                }}
              >
                <service.icon size={28} style={{ color: '#FEFEFE' }} />
              </div>

              <h3
                className="text-xl font-bold mb-4"
                style={{ color: '#0071BC' }}
              >
                {service.title}
              </h3>

              <p
                className="text-sm leading-relaxed"
                style={{ color: darkBackground ? '#B8B8B8' : '#666666' }}
              >
                {service.description}
              </p>

              <div
                className="absolute bottom-0 left-0 w-0 h-1 transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: '#E67E22' }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            to={createPageUrl('Services')}
            className="inline-flex items-center text-sm font-semibold uppercase tracking-wider transition-all duration-300"
            style={{ color: '#29ABE2' }}
          >
            <span>View All Services</span>
            <svg
              className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
