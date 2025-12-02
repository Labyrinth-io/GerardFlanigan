import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, MapPin, Calendar } from 'lucide-react';
import CTAStrip from '../components/CTAStrip';

const categories = ['All', 'Commercial', 'Premium Homes', 'Duplexes', 'Renovations'];

const projects = [
  // MULTIPLE LEVEL PROJECTS
  {
    id: 1,
    title: '1 Bayne Street, West Gladstone',
    category: 'Multiple Level',
    location: 'West Gladstone, QLD',
    year: '2014', // building completed approx. 2014
    image: '/images/baynestreet.webp', // update to your actual filename
    description:
      'Multi-level apartment complex in West Gladstone, delivering modern, low-maintenance living close to the CBD.',
  },
  {
    id: 2,
    title: 'Friendlies Medical Suites, Bundaberg',
    category: 'Multiple Level',
    location: 'Bundaberg West, QLD',
    year: '2015',
    image: '/images/Friendlies.jpg', // matches your FeaturedProjects
    description:
      'Purpose-built specialist medical suites constructed behind the Friendly Society Private Hospital to expand Bundaberg’s healthcare precinct.',
  },
  {
    id: 3,
    title: '39 Scenery Street, West Gladstone',
    category: 'Multiple Level',
    location: 'West Gladstone, QLD',
    year: '2013',
    image: '/images/scenerystreet.jpg', // update to your actual filename
    description:
      'A contemporary multi-level townhouse development maximising an elevated site with outlooks over West Gladstone.',
  },

  // PRESTIGE HOMES
  {
    id: 4,
    title: '11 John Francis Drive, Carrara',
    category: 'Prestige Homes',
    location: 'Carrara, Gold Coast, QLD',
    year: '2009',
    image: '/images/johnfrancisdrive.jpg', // matches your FeaturedProjects
    description:
      'Architecturally detailed prestige home with generous indoor–outdoor living and refined finishes throughout.',
  },
  {
    id: 5,
    title: '3 Parkview Terrace, Bundaberg North',
    category: 'Prestige Homes',
    location: 'Bundaberg North, QLD',
    year: '2021', // currently using sale/likely completion year – adjust if needed
    image: '/images/parkviewterrace.webp', // update to your actual filename
    description:
      'Large family residence on a 2,339m² allotment overlooking the Botanic Gardens, designed for relaxed, premium Bundaberg living.',
  },

  // RESIDENTIAL
  {
    id: 6,
    title: '15 Whitewash Street, Bargara',
    category: 'Residential',
    location: 'Bargara, QLD',
    year: '2025', // sold 2025 – use exact build year if you prefer
    image: '/images/whitewashstreet.webp', // matches your FeaturedProjects
    description:
      'Modern coastal home in Bargara, combining clean lines, open-plan living and easy access to the beachfront.',
  },
  {
    id: 7,
    title: '5 Remy Court, Avoca',
    category: 'Residential',
    location: 'Avoca, Bundaberg, QLD',
    year: '2019', // based on sale timing – update to true build year if different
    image: '/images/5remycourt.webp',
    description:
      'Contemporary single-storey home in a quiet Avoca cul-de-sac, designed for low-maintenance family living.',
  },
  {
    id: 8,
    title: '12 Lamond Place, Bargara',
    category: 'Residential',
    location: 'Bargara, QLD',
    year: '2021', // land sold 2020, house sold 2022 – midpoint as build proxy
    image: '/images/lamondplace.jpg',
    description:
      'Spacious four-bedroom home on a generous block in Bargara, blending coastal lifestyle with suburban comfort.',
  },

  // DUPLEX
  {
    id: 9,
    title: '1/7 Remy Court, Avoca',
    category: 'Duplexes',
    location: 'Avoca, Bundaberg, QLD',
    year: '2023', // sold 2023 – update if you know the exact construction year
    image: '/images/remy court.jpg',
    description:
      'High-quality duplex residence with three bedrooms, double bathrooms and generous parking, finished to a premium investment standard.',
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
