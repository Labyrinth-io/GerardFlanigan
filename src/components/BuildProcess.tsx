import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, PenTool, FileCheck, HardHat, Key } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Initial Consultation',
    description: 'We discuss your vision, requirements, and budget to understand your project goals.',
  },
  {
    number: '02',
    icon: PenTool,
    title: 'Design & Planning',
    description: 'Our team develops detailed plans and specifications tailored to your needs.',
  },
  {
    number: '03',
    icon: FileCheck,
    title: 'Approvals & Permits',
    description: 'We handle all council submissions and regulatory approvals on your behalf.',
  },
  {
    number: '04',
    icon: HardHat,
    title: 'Construction',
    description: 'Expert project management ensures quality delivery on time and on budget.',
  },
  {
    number: '05',
    icon: Key,
    title: 'Handover',
    description: 'Final inspections, documentation, and keys to your completed project.',
  },
];

export default function BuildProcess() {
  return (
    <section className="py-24" style={{ backgroundColor: '#E8E1D9' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-[0.3em] block mb-4"
            style={{ color: '#0071BC' }}
          >
            How We Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            style={{ color: '#221F20' }}
          >
            Our Build Process
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

        <div className="relative">
          <div
            className="hidden lg:block absolute top-16 left-0 right-0 h-0.5"
            style={{ backgroundColor: '#CCCCCC' }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative text-center lg:text-left"
              >
                <div className="relative inline-flex flex-col items-center lg:items-start mb-6">
                  <div
                    className="w-16 h-16 flex items-center justify-center mb-4 relative z-10"
                    style={{
                      background: 'linear-gradient(135deg, #0071BC, #00A2E8)',
                    }}
                  >
                    <step.icon size={28} style={{ color: '#FEFEFE' }} />
                  </div>
                  <span
                    className="text-xs font-semibold uppercase tracking-[0.2em]"
                    style={{ color: '#D4AF37' }}
                  >
                    Step {step.number}
                  </span>
                </div>

                <h3
                  className="text-lg font-bold mb-3"
                  style={{ color: '#221F20' }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: '#5A5A5A' }}
                >
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
