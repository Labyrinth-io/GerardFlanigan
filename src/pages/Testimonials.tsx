import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import CTAStrip from '../components/CTAStrip';

const testimonials = [
  {
    id: 1,
    name: 'Michael Richardson',
    role: 'Property Developer',
    company: 'Richardson Developments',
    quote: 'Gerard and his team delivered our multi-level commercial project ahead of schedule and under budget. Their attention to detail and professionalism is unmatched in the industry. I wouldn\'t hesitate to recommend them for any scale of project.',
    rating: 5,
    featured: true,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
  },
  {
    id: 2,
    name: 'Sarah & David Chen',
    role: 'Homeowners',
    company: 'Mosman',
    quote: 'Building our dream home was a seamless experience. From initial design consultations to final handover, the communication was exceptional. We couldn\'t be happier with the result.',
    rating: 5,
    featured: false,
  },
  {
    id: 3,
    name: 'James Morrison',
    role: 'Investment Property Owner',
    company: 'Morrison Holdings',
    quote: 'The duplex Gerard built for us exceeded all expectations. Quality craftsmanship, excellent project management, and a genuine commitment to client satisfaction. A builder you can trust.',
    rating: 5,
    featured: false,
  },
  {
    id: 4,
    name: 'Amanda Williams',
    role: 'Architect',
    company: 'Williams Architecture',
    quote: 'As an architect, I\'ve worked with many builders over the years. Gerard\'s team stands out for their ability to translate complex designs into reality while maintaining the highest construction standards.',
    rating: 5,
    featured: false,
  },
  {
    id: 5,
    name: 'Robert & Lisa Thompson',
    role: 'Homeowners',
    company: 'Vaucluse',
    quote: 'Our renovation transformed our family home beyond recognition. Gerard\'s team was professional, tidy, and respectful of our space throughout the entire process. Highly recommended.',
    rating: 5,
    featured: false,
  },
  {
    id: 6,
    name: 'Peter Chang',
    role: 'Commercial Director',
    company: 'Harbour Properties',
    quote: 'We\'ve completed three commercial projects with Gerard Flanigan Builder and each one has been delivered to an exceptional standard. Their project management is second to none.',
    rating: 5,
    featured: false,
  },
];

const featuredTestimonial = testimonials.find(t => t.featured);
const regularTestimonials = testimonials.filter(t => !t.featured);

export default function Testimonials() {
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
              Client Testimonials
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
              style={{ color: '#FEFEFE' }}
            >
              What Our Clients Say
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg"
              style={{ color: '#B8B8B8' }}
            >
              Read what our valued clients have to say about their experience
              working with Gerard Flanigan Builder.
            </motion.p>
          </div>
        </div>
      </section>

      {featuredTestimonial && (
        <section className="py-24" style={{ backgroundColor: '#221F20' }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative p-8 md:p-12"
              style={{
                backgroundColor: 'rgba(255,255,255,0.03)',
                border: '1px solid #5A5A5A',
              }}
            >
              <div
                className="absolute top-0 left-0 w-full h-1"
                style={{ backgroundColor: '#D4AF37' }}
              />

              <Quote
                size={100}
                className="absolute top-8 right-8 opacity-5"
                style={{ color: '#29ABE2' }}
              />

              <div className="flex flex-col md:flex-row gap-8 items-start">
                {featuredTestimonial.image && (
                  <div
                    className="w-24 h-24 flex-shrink-0 overflow-hidden"
                    style={{ border: '2px solid #D4AF37' }}
                  >
                    <img
                      src={featuredTestimonial.image}
                      alt={featuredTestimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div>
                  <div className="flex space-x-1 mb-6">
                    {[...Array(featuredTestimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={24}
                        fill="#D4AF37"
                        style={{ color: '#D4AF37' }}
                      />
                    ))}
                  </div>

                  <p
                    className="text-xl md:text-2xl leading-relaxed mb-8 italic"
                    style={{ color: '#E6E6E6' }}
                  >
                    "{featuredTestimonial.quote}"
                  </p>

                  <div>
                    <p
                      className="font-bold text-lg"
                      style={{ color: '#FEFEFE' }}
                    >
                      {featuredTestimonial.name}
                    </p>
                    <p style={{ color: '#29ABE2' }}>
                      {featuredTestimonial.role}
                    </p>
                    <p
                      className="text-sm"
                      style={{ color: '#B8B8B8' }}
                    >
                      {featuredTestimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

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
              More Reviews
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl font-bold mb-6"
              style={{ color: '#221F20' }}
            >
              Trusted by Clients Across Sydney
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 group hover:-translate-y-2 transition-transform duration-300"
                style={{
                  backgroundColor: '#F8F8F8',
                  border: '1px solid #E6E6E6',
                }}
              >
                <Quote
                  size={40}
                  className="mb-6 opacity-20"
                  style={{ color: '#0071BC' }}
                />

                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill="#D4AF37"
                      style={{ color: '#D4AF37' }}
                    />
                  ))}
                </div>

                <p
                  className="leading-relaxed mb-6"
                  style={{ color: '#5A5A5A' }}
                >
                  "{testimonial.quote}"
                </p>

                <div className="pt-4" style={{ borderTop: '1px solid #E6E6E6' }}>
                  <p
                    className="font-semibold"
                    style={{ color: '#221F20' }}
                  >
                    {testimonial.name}
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: '#0071BC' }}
                  >
                    {testimonial.role}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: '#B8B8B8' }}
                  >
                    {testimonial.company}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip />
    </div>
  );
}
