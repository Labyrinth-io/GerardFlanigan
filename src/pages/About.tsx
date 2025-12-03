import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, Users, Clock, ArrowRight } from 'lucide-react';
import CTAStrip from '../components/CTAStrip';

const stats = [
  { number: '30+', label: 'Years Experience' },
  { number: '500+', label: 'Projects Completed' },
  { number: '100%', label: 'Client Satisfaction' },
  { number: '50+', label: 'Industry Awards' },
];

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description: 'We pursue the highest standards in every aspect of our work, from materials to craftsmanship.',
  },
  {
    icon: Users,
    title: 'Integrity',
    description: 'Honest communication and transparent practices build the foundation of our client relationships.',
  },
  {
    icon: Clock,
    title: 'Reliability',
    description: 'We deliver on our promises, meeting deadlines and budgets without compromising quality.',
  },
];

export default function About() {
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
              About Gerard Flanigan Builder
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
              style={{ color: '#FEFEFE' }}
            >
              Building Excellence Since 1990
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.2 }}
              className="w-24 h-0.5"
              style={{ backgroundColor: '#D4AF37' }}
            />
          </div>
        </div>
      </section>

      <section className="py-24" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="public/images/Gerard.jpg"
                alt="Gerard Flanigan - Construction Consultation"
                className="w-full"
                style={{ aspectRatio: '4/5', objectFit: 'cover' }}
              />
              <div
                className="absolute -bottom-8 -right-8 p-8 text-center"
                style={{
                  background: 'linear-gradient(135deg, #0071BC, #00A2E8)',
                }}
              >
                <span
                  className="text-5xl font-bold block"
                  style={{ color: '#FEFEFE' }}
                >
                  25+
                </span>
                <span
                  className="text-sm uppercase tracking-wider"
                  style={{ color: 'rgba(254,254,254,0.9)' }}
                >
                  Years
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span
                className="text-sm uppercase tracking-[0.3em] block mb-4"
                style={{ color: '#0071BC' }}
              >
                Our Story
              </span>
              <h2
                className="text-3xl sm:text-4xl font-bold mb-6"
                style={{ color: '#221F20' }}
              >
                A Legacy of Quality Construction
              </h2>
              <div
                className="w-24 h-0.5 mb-8"
                style={{ backgroundColor: '#D4AF37' }}
              />
              <div className="space-y-6" style={{ color: '#5A5A5A' }}>
                <p className="text-lg leading-relaxed">
                  For over three decades, Gerard Flanigan Builder has been Bundaberg's trusted partner
                  for exceptional construction projects. From humble beginnings as a local builder,
                  we've grown into a respected name handling complex commercial developments and
                  premium residential homes.
                </p>
                <p className="leading-relaxed">
                  Our philosophy is simple: every project, regardless of size, deserves the same
                  unwavering commitment to quality, transparency, and client satisfaction. We don't
                  just build structures. We create lasting relationships built on trust and excellence.
                </p>
                <p className="leading-relaxed">
                  Today, our team brings together decades of combined experience in construction,
                  project management, and design. We take pride in our reputation as builders who
                  deliver on their promises, every time.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                {['Licensed & Insured', 'Quality Guaranteed', 'On-Time Delivery', 'Transparent Pricing'].map((item) => (
                  <div key={item} className="flex items-center space-x-3">
                    <CheckCircle2 size={20} style={{ color: '#0071BC' }} />
                    <span className="text-sm font-medium" style={{ color: '#221F20' }}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#E8E1D9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <span
                  className="text-4xl sm:text-5xl font-bold block mb-2"
                  style={{ color: '#0071BC' }}
                >
                  {stat.number}
                </span>
                <span
                  className="text-sm uppercase tracking-wider"
                  style={{ color: '#5A5A5A' }}
                >
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm uppercase tracking-[0.3em] block mb-4"
              style={{ color: '#0071BC' }}
            >
              What Drives Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl font-bold mb-6"
              style={{ color: '#221F20' }}
            >
              Our Core Values
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 text-center"
                style={{
                  backgroundColor: '#F8F8F8',
                  border: '1px solid #E6E6E6',
                }}
              >
                <div
                  className="w-16 h-16 mx-auto flex items-center justify-center mb-6"
                  style={{
                    background: 'linear-gradient(135deg, #0071BC, #00A2E8)',
                  }}
                >
                  <value.icon size={28} style={{ color: '#FEFEFE' }} />
                </div>
                <h3
                  className="text-xl font-bold mb-4"
                  style={{ color: '#221F20' }}
                >
                  {value.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: '#666666' }}
                >
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24" style={{ backgroundColor: '#F8F8F8' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold mb-6"
            style={{ color: '#221F20' }}
          >
            Let's Build Something Great Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg mb-10"
            style={{ color: '#666666' }}
          >
            Ready to discuss your project? Contact us today for a free consultation.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              to={createPageUrl('Contact')}
              className="inline-flex items-center px-10 py-4 text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:scale-105 group"
              style={{
                backgroundColor: '#E67E22',
                color: '#FEFEFE',
              }}
            >
              Get in Touch
              <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      <CTAStrip />
    </div>
  );
}
