import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80')`,
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(34, 31, 32, 0.75)' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm sm:text-base uppercase tracking-[0.3em] mb-6"
            style={{ color: '#B8B8B8' }}
          >
            Bundaberg&apos;s Trusted Builder Since 1998
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
            style={{ color: '#FEFEFE', fontFamily: 'system-ui' }}
          >
            QUALITY
            <br />
            <span style={{ color: '#00A2E
