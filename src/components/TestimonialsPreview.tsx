import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Michael Richardson',
    role: 'Property Developer',
    quote: 'Gerard and his team delivered our multi-level commercial project ahead of schedule and under budget. Their attention to detail and professionalism is unmatched in the industry.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sarah & David Chen',
    role: 'Homeowners, Mosman',
    quote: 'Building our dream home was a seamless experience. From initial design consultations to final handover, the communication was exceptional. We couldn\'t be happier with the result.',
    rating: 5,
  },
  {
    id: 3,
    name: 'James Morrison',
    role: 'Investment Property Owner',
    quote: 'The duplex Gerard built for us exceeded all expectations. Quality craftsmanship, excellent project management, and a genuine commitment to client satisfaction.',
    rating: 5,
  },
];

export default function TestimonialsPreview() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24" style={{ backgroundColor: '#221F20' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm uppercase tracking-[0.3em] block mb-4"
              style={{ color: '#29ABE2' }}
            >
              Client Testimonials
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
              style={{ color: '#FEFEFE' }}
            >
              What Our Clients Say
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-24 h-0.5 mb-8"
              style={{ backgroundColor: '#D4AF37' }}
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-lg mb-8"
              style={{ color: '#B8B8B8' }}
            >
              Our reputation is built on delivering exceptional results and
              fostering lasting relationships with our clients.
            </motion.p>
            <Link
              to={createPageUrl('Testimonials')}
              className="inline-flex items-center text-sm font-semibold uppercase tracking-wider"
              style={{ color: '#29ABE2' }}
            >
              Read All Reviews
              <svg className="ml-3 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="relative">
            <Quote
              size={80}
              className="absolute -top-4 -left-4 opacity-10"
              style={{ color: '#29ABE2' }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="relative p-8"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  border: '1px solid #5A5A5A',
                }}
              >
                <div className="flex space-x-1 mb-6">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      fill="#D4AF37"
                      style={{ color: '#D4AF37' }}
                    />
                  ))}
                </div>

                <p
                  className="text-lg sm:text-xl leading-relaxed mb-8"
                  style={{ color: '#E6E6E6' }}
                >
                  "{testimonials[current].quote}"
                </p>

                <div>
                  <p
                    className="font-semibold"
                    style={{ color: '#FEFEFE' }}
                  >
                    {testimonials[current].name}
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: '#B8B8B8' }}
                  >
                    {testimonials[current].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-between mt-8">
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className="w-2 h-2 transition-all duration-300"
                    style={{
                      backgroundColor: current === index ? '#29ABE2' : '#5A5A5A',
                      transform: current === index ? 'scale(1.5)' : 'scale(1)',
                    }}
                  />
                ))}
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={prev}
                  className="w-10 h-10 flex items-center justify-center transition-colors duration-300"
                  style={{
                    border: '1px solid #5A5A5A',
                    color: '#FEFEFE',
                  }}
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 flex items-center justify-center transition-colors duration-300"
                  style={{
                    border: '1px solid #5A5A5A',
                    color: '#FEFEFE',
                  }}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
