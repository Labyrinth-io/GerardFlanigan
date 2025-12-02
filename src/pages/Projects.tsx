import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, MapPin, Calendar } from 'lucide-react';
import CTAStrip from '../components/CTAStrip';

const categories = ['All', 'Commercial', 'Premium Homes', 'Duplexes', 'Renovations'];

const projects = [
  {
    id: 1,
    title: 'Friendly Society Hospital',
    category: 'Commercial',
    location: 'Bundaberg West',
    year: '2024',
    image: '/images/Friendlies.jpg',
    description: 'A high-quality medical suites build for The Friendlies Hospital, designed and constructed to meet strict clinical standards while maintaining exceptional finish and functionality.',
  },
  {
    id: 2,
    title: 'Mosman Luxury Residence', 
    category: 'Premium Homes',
    location: 'Mosman, NSW',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    description: 'An architectural masterpiece featuring harbour views, infinity pool, and smart home integration.',
  },
  title: '11 John Francis Drive',
    category: 'Premium Home',
    image: 'public/images/johnfrancisdrive.jpg',
    location: 'Carrara, Gold Coast'
  {
    id: 3,
    title: 'Bondi Beach Duplex',
    category: 'Duplexes',
    location: 'Bondi Beach, NSW',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    description: 'Modern dual-occupancy development maximizing beachside location with premium finishes.',
  },
  {
    id: 4,
    title: 'Heritage Home Renovation',
    category: 'Renovations',
    location: 'Paddington, NSW',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    description: 'Sympathetic restoration of a Victorian terrace with contemporary additions.',
  },
  Bargara
  {
    id: 5,
    title: 'North Bundaberg Office Tower',
    category: 'Commercial',
    location: 'North Bundaberg, QLD',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    description: 'Premium Grade A office space with sustainable design and city views.',
  },
  {
    id: 6,
    title: 'Vaucluse Family Estate',
    category: 'Premium Homes',
    location: 'Vaucluse, NSW',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    description: 'Five-bedroom luxury estate with landscaped gardens and tennis court.',
  },
  {
    id: 7,
    title: 'Coogee Townhouse Development',
    category: 'Duplexes',
    location: 'Coogee, NSW',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80',
    description: 'Three luxury townhouses with rooftop terraces and ocean glimpses.',
  },
  {
    id: 8,
    title: 'Surry Hills Terrace Transformation',
    category: 'Renovations',
    location: 'Surry Hills, NSW',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=800&q=80',
    description: 'Complete renovation of inner-city terrace with rear extension.',
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

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
              Our Portfolio
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
              style={{ color: '#FEFEFE' }}
            >
              Featured Projects
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg"
              style={{ color: '#B8B8B8' }}
            >
              Explore our portfolio of completed projects showcasing our commitment
              to excellence in construction.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-24" style={{ backgroundColor: '#F8F8F8' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className="px-6 py-3 text-sm font-semibold uppercase tracking-wider transition-all duration-300"
                style={{
                  backgroundColor: activeCategory === category ? '#0071BC' : 'transparent',
                  color: activeCategory === category ? '#FEFEFE' : '#5A5A5A',
                  border: `2px solid ${activeCategory === category ? '#0071BC' : '#CCCCCC'}`,
                }}
              >
                {category}
              </button>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.05 }}
                  className="group cursor-pointer"
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div className="relative overflow-hidden mb-6" style={{ aspectRatio: '4/3' }}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div
                      className="absolute inset-0 transition-opacity duration-500"
                      style={{
                        background: 'linear-gradient(to top, rgba(34, 31, 32, 0.6) 0%, transparent 50%)'
                      }}
                    />

                    <div
                      className={`absolute inset-0 transition-opacity duration-500 ${hoveredId === project.id ? 'opacity-100' : 'opacity-0'}`}
                      style={{
                        background: 'linear-gradient(135deg, rgba(0, 113, 188, 0.9), rgba(0, 162, 232, 0.9), rgba(41, 171, 226, 0.9))'
                      }}
                    />

                    <div
                      className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold uppercase tracking-wider"
                      style={{
                        backgroundColor: '#D4AF37',
                        color: '#221F20',
                      }}
                    >
                      {project.category}
                    </div>

                    <div className={`absolute top-4 right-4 transition-all duration-500 ${hoveredId === project.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
                      <div
                        className="w-10 h-10 flex items-center justify-center"
                        style={{ backgroundColor: '#FEFEFE' }}
                      >
                        <ArrowUpRight size={20} style={{ color: '#0071BC' }} />
                      </div>
                    </div>

                    <div className={`absolute inset-x-0 bottom-0 p-6 transition-all duration-500 ${hoveredId === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: '#FEFEFE' }}
                      >
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3
                      className="text-xl font-bold mb-3 transition-colors duration-300"
                      style={{ color: hoveredId === project.id ? '#0071BC' : '#221F20' }}
                    >
                      {project.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm" style={{ color: '#666666' }}>
                      <span className="flex items-center space-x-1">
                        <MapPin size={14} style={{ color: '#0071BC' }} />
                        <span>{project.location}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Calendar size={14} style={{ color: '#0071BC' }} />
                        <span>{project.year}</span>
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <CTAStrip />
    </div>
  );
}
