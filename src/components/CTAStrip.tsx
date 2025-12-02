import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { motion } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';

export default function CTAStrip() {
  return (
    <section
      className="py-20"
      style={{
        background: 'linear-gradient(135deg, #0071BC, #00A2E8, #29ABE2)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
              style={{ color: '#FEFEFE' }}
            >
              Ready to Start Your Project?
            </h2>
            <p
              className="text-lg"
              style={{ color: 'rgba(254, 254, 254, 0.9)' }}
            >
              Let's discuss your vision and bring it to life with precision and excellence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to={createPageUrl('Contact')}
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:scale-105 group"
              style={{
                backgroundColor: '#E67E22',
                color: '#FEFEFE',
              }}
            >
              Request a Quote
              <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a
              href="tel:0477037911"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: '#FEFEFE',
                color: '#0071BC',
              }}
            >
              <Phone size={18} className="mr-2" />
              0477 037 911
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
