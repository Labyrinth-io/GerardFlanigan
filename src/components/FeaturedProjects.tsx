import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Harbourview Commercial Complex',
    category: 'Commercial',
    image: 'data:image/jpeg;base64,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',
    location: 'Bundaberg CBD',
  },
  {
    id: 2,
    title: 'Mosman Luxury Residence',
    category: 'Premium Home',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    location: 'Mosman, NSW',
  },
  {
    id: 3,
    title: 'Bondi Beach Duplex',
    category: 'Duplex',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    location: 'Bondi Beach, NSW',
  },
  {
    id: 4,
    title: 'Heritage Home Renovation',
    category: 'Renovation',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    location: 'Paddington, NSW',
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-24" style={{ backgroundColor: '#F8F8F8' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm uppercase tracking-[0.3em] block mb-4"
              style={{ color: '#0071BC' }}
            >
              Our Portfolio
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold"
              style={{ color: '#221F20' }}
            >
              Featured Projects
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              to={createPageUrl('Projects')}
              className="inline-flex items-center mt-6 md:mt-0 text-sm font-semibold uppercase tracking-wider transition-colors duration-300"
              style={{ color: '#0071BC' }}
            >
              View All Projects
              <ArrowUpRight size={18} className="ml-2" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden cursor-pointer"
              style={{ aspectRatio: '16/10' }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(to top, rgba(34, 31, 32, 0.8) 0%, transparent 60%)'
                }}
              />

              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(135deg, rgba(0, 113, 188, 0.9), rgba(0, 162, 232, 0.9), rgba(41, 171, 226, 0.9))'
                }}
              />

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform transition-transform duration-500 group-hover:-translate-y-4">
                  <span
                    className="text-xs uppercase tracking-[0.2em] block mb-2"
                    style={{ color: '#29ABE2' }}
                  >
                    <span className="group-hover:text-white transition-colors duration-300">
                      {project.category}
                    </span>
                  </span>
                  <h3
                    className="text-xl sm:text-2xl font-bold mb-2 transition-colors duration-300"
                    style={{ color: '#FEFEFE' }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-sm transition-colors duration-300"
                    style={{ color: '#E6E6E6' }}
                  >
                    {project.location}
                  </p>
                </div>

                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                  <div
                    className="w-12 h-12 flex items-center justify-center"
                    style={{ backgroundColor: '#FEFEFE' }}
                  >
                    <ArrowUpRight size={24} style={{ color: '#0071BC' }} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
