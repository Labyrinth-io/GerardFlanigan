import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Friendly Society Hospital',
    category: 'Commercial',
    image: '/images/Friendlies.jpg',
    location: 'Bundaberg West',
  },
  {
    id: 2,
    title: '11 John Francis Drive',
    category: 'Premium Home',
    image: 'public/images/johnfrancisdrive.jpg',
    location: 'Carrara, Gold Coast',
  },
  {
    id: 3,
    title: '1/7 Remy Court',
    category: 'Duplex',
    image: '/images/remy court.jpg',
    location: 'Avoca',
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
