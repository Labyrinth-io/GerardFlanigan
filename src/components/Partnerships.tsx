import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  {
    imgSrc: '/images/masterbuilders.png',
    alt: 'Master Builders Queensland',
  },
  {
    imgSrc: '/images/cqbuildingsupplies.png',
    alt: 'CQ Building Supplies',
  },
  {
    imgSrc: '/images/Kens-Tile-Centre.png',
    alt: 'Ken\'s Tiles',
  },
  {
    imgSrc: '/images/gatley.png',
    alt: 'Gatley Building Design',
  },
  {
    imgSrc: '/images/kenspumbing.png',
    alt: 'Ken\'s Plumbing',
  },
  {
    imgSrc: 'https://noosaelectric.co/wp-785/wp-content/uploads/clipsal_sunshine_coast.png',
    alt: 'Clipsal',
  },
  {
    imgSrc: 'https://cdn.finder.com.au/finder-au/wp-uploads/2020/11/Handy-Finance-logo-250x250-1.png',
    alt: 'Handy Finance',
  },
];

export default function Partnerships() {
  return (
    <section className="py-24" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title / Intro – unchanged */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-[0.3em] block mb-4"
            style={{ color: '#0071BC' }}
          >
            Trusted & Accredited
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold mb-6"
            style={{ color: '#221F20' }}
          >
            Industry Partnerships
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

        {/* Logos only – no boxes, no names, no descriptions */}
        {/* First row - 4 logos */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center justify-items-center mb-8 md:mb-8">
          {partners.slice(0, 4).map((partner, index) => (
            <motion.div
              key={partner.alt}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <img
                src={partner.imgSrc}
                alt={partner.alt}
                className="max-h-32 w-auto object-contain"
                loading="lazy"
                decoding="async"
              />
            </motion.div>
          ))}
        </div>

        {/* Second row - 3 logos centered */}
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          {partners.slice(4).map((partner, index) => (
            <motion.div
              key={partner.alt}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index + 4) * 0.1 }}
              className="flex items-center justify-center"
            >
              <img
                src={partner.imgSrc}
                alt={partner.alt}
                className="max-h-32 w-auto object-contain"
                style={partner.alt === "Ken's Plumbing" ? { maxHeight: '89.6px' } : {}}
                loading="lazy"
                decoding="async"
              />
            </motion.div>
          ))}
        </div>

        {/* Quote box – unchanged */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center p-8"
          style={{
            backgroundColor: '#F8F8F8',
            borderLeft: '4px solid #D4AF37',
          }}
        >
          <p
            className="text-lg italic"
            style={{ color: '#5A5A5A' }}
          >
            "Over 30 years of building excellence with a reputation built on trust,
            quality craftsmanship, and exceptional client relationships."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
