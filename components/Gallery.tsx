'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

// Placeholder images - replace with actual Cloudinary URLs when available
const galleryImages = [
  {
    id: 1,
    title: 'Competition Ready',
    category: 'Competition',
    placeholder: '/placeholder-1.jpg'
  },
  {
    id: 2,
    title: 'Training Session',
    category: 'Training',
    placeholder: '/placeholder-2.jpg'
  },
  {
    id: 3,
    title: 'Race Day Victory',
    category: 'Competition',
    placeholder: '/placeholder-3.jpg'
  },
  {
    id: 4,
    title: 'Strength Training',
    category: 'Training',
    placeholder: '/placeholder-4.jpg'
  },
  {
    id: 5,
    title: 'Pro Division',
    category: 'Competition',
    placeholder: '/placeholder-5.jpg'
  },
  {
    id: 6,
    title: 'Functional Fitness',
    category: 'Training',
    placeholder: '/placeholder-6.jpg'
  }
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Competition', 'Training'];
  
  const filteredImages = filter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <section id="gallery" ref={ref} className="relative py-24 px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/10 via-transparent to-orange-950/10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Behind the{' '}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Numbers
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Competition moments, training sessions, and the journey to Pro Division.
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                filter === category
                  ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white'
                  : 'glass text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
              className="group relative aspect-square overflow-hidden rounded-2xl glass-dark cursor-pointer"
            >
              {/* Placeholder background with gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-orange-900/30 to-red-900/30"></div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                <div className="text-6xl mb-4">
                  {image.category === 'Competition' ? '🏆' : '💪'}
                </div>
                <h3 className="text-white text-xl font-bold text-center opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-4 transition-all duration-300">
                  {image.title}
                </h3>
                <span className="text-red-400 text-sm mt-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-4 transition-all duration-300 delay-75">
                  {image.category}
                </span>
              </div>

              {/* Corner badge */}
              <div className="absolute top-4 right-4">
                <span className="text-xs font-bold px-3 py-1 rounded-full glass">
                  {image.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note about Cloudinary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="glass-dark rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-white/60 text-sm">
              📸 <strong className="text-white">Ready for your photos:</strong> Configure your Cloudinary 
              credentials in <code className="text-red-400 bg-black/30 px-2 py-1 rounded">.env.local</code> to 
              display your competition and training photos here.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

