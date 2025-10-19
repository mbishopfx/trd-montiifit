'use client';

import { motion } from 'framer-motion';

interface InfoCardProps {
  title: string;
  type: 'about' | 'cta' | 'services' | 'contact' | 'stats' | 'achievement';
  content: string | React.ReactNode;
  ctaText?: string;
  ctaLink?: string;
  stats?: Array<{ label: string; value: string; icon?: string }>;
  className?: string;
}

export default function InfoCard({
  title,
  type,
  content,
  ctaText,
  ctaLink,
  stats,
  className = '',
}: InfoCardProps) {
  const getBackgroundClass = () => {
    switch (type) {
      case 'cta':
        return 'bg-gradient-to-br from-red-600/20 to-orange-600/20 border-2 border-red-500/50';
      case 'stats':
        return 'bg-gradient-to-br from-orange-900/20 to-red-900/20';
      case 'achievement':
        return 'bg-gradient-to-br from-red-950/40 to-orange-950/40';
      default:
        return 'glass-dark';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`relative aspect-square overflow-hidden rounded-2xl ${getBackgroundClass()} ${className}`}
    >
      <div className="absolute inset-0 p-8 flex flex-col justify-between">
        {/* Header */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {title}
          </h3>
          
          {/* Content */}
          {typeof content === 'string' ? (
            <p className="text-white/70 text-sm md:text-base leading-relaxed">
              {content}
            </p>
          ) : (
            <div className="text-white/70">{content}</div>
          )}

          {/* Stats Grid */}
          {stats && (
            <div className="grid grid-cols-2 gap-4 mt-6">
              {stats.map((stat, i) => (
                <div key={i} className="glass rounded-xl p-4">
                  {stat.icon && <div className="text-2xl mb-2">{stat.icon}</div>}
                  <div className="text-2xl font-bold text-red-500">{stat.value}</div>
                  <div className="text-xs text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* CTA Button */}
        {ctaText && (
          <button
            onClick={() => ctaLink && window.open(ctaLink, '_blank')}
            className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
              type === 'cta'
                ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white hover:scale-105 hover:shadow-xl'
                : 'glass text-white hover:bg-white/10'
            }`}
          >
            {ctaText}
          </button>
        )}
      </div>

      {/* Decorative elements */}
      {type === 'cta' && (
        <div className="absolute top-4 right-4">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
        </div>
      )}
    </motion.div>
  );
}

