'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface PhotoCardProps {
  src: string;
  alt: string;
  caption?: string;
  date?: string;
  onClick?: () => void;
}

export default function PhotoCard({ src, alt, caption, date, onClick }: PhotoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      onClick={onClick}
      className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer glass-dark"
    >
      {/* Image */}
      <div className="relative w-full h-full">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Caption overlay */}
        {(caption || date) && (
          <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            {caption && (
              <h3 className="text-white font-semibold mb-1">{caption}</h3>
            )}
            {date && (
              <p className="text-white/60 text-sm">{date}</p>
            )}
          </div>
        )}
      </div>

      {/* Play icon for videos */}
      {src.includes('.mp4') && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
          </div>
        </div>
      )}
    </motion.div>
  );
}

