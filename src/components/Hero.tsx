import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80&fm=webp')",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(34, 31, 32, 0.75)' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm sm:text-base uppercase tracking-[0.3em] mb-6"
            style={{ color: '#B8B8B8' }}
          >
            Bundaberg&apos;s Trusted Builder Since 1990
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
            style={{ color: '#FEFEFE', fontFamily: 'system-ui' }}
          >
            QUALITY
            <br />
            <span style={{ color: '#00A2E8' }}>BUILT ON REPUTATION</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl"
            style={{ color: '#E6E6E6' }}
          >
            From premium residential homes to complex commercial developments,
            we deliver exceptional craftsmanship with unwavering attention to
            detail. Your vision, built with precision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <Link
              to={createPageUrl('Projects')}
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:scale-105"
              style={{
                background:
                  'linear-gradient(135deg, #0071BC, #00A2E8, #29ABE2)',
                color: '#FEFEFE',
              }}
            >
              View Our Projects
            </Link>
            <Link
              to={createPageUrl('Contact')}
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:scale-105"
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center space-x-3"
          >
            <Phone size={20} style={{ color: '#29ABE2' }} />
            <span style={{ color: '#E6E6E6' }}>
              Or call Gerard on{' '}
              <a
                href="tel:0477037911"
                className="font-semibold hover:underline"
                style={{ color: '#FEFEFE' }}
              >
                0477 037 911
              </a>
            </span>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator: hidden on mobile, visible from sm and up */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-2">
          <span
            className="text-xs uppercase tracking-widest"
            style={{ color: '#B8B8B8' }}
          >
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-12"
            style={{ backgroundColor: '#29ABE2' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
