import React from 'react';
import Hero from '../components/Hero';
import ServiceCards from '../components/ServiceCards';
import Partnerships from '../components/Partnerships';
import FeaturedProjects from '../components/FeaturedProjects';
import TestimonialsPreview from '../components/TestimonialsPreview';
import BuildProcess from '../components/BuildProcess';
import CTAStrip from '../components/CTAStrip';

export default function Home() {
  return (
    <div>
      <Hero />
      <ServiceCards darkBackground={true} />
      <Partnerships />
      <FeaturedProjects />
      <TestimonialsPreview />
      <BuildProcess />
      <CTAStrip />
    </div>
  );
}
