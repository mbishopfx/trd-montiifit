'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const achievements = [
  {
    year: '2025',
    event: 'Boston S8 Pro Doubles Women',
    time: '1:16:55',
    partner: 'with Giselle Diaz',
    highlight: true
  },
  {
    year: '2025',
    event: 'D.C. North American Championships',
    time: '1:27:35',
    partner: 'with Gianna Bruce',
    highlight: false
  },
  {
    year: '2025',
    event: 'New York S7 Doubles Women',
    time: '1:29:52',
    partner: 'with Gianna Bruce',
    highlight: false
  },
  {
    year: '2024',
    event: 'Toronto S7 Pro Doubles Women',
    time: '1:27:33',
    partner: 'with Elle Lambadarios',
    highlight: false
  },
  {
    year: '2024',
    event: 'Chicago S7 Open Women',
    time: '1:41:56',
    partner: 'Individual',
    highlight: false
  },
  {
    year: '2023',
    event: 'New York S6 Doubles Mixed',
    time: '1:40:19',
    partner: 'with Carlos Luciano',
    highlight: false
  }
];

const stats = [
  { label: 'Years Competing', value: '3+', icon: '🏆' },
  { label: 'Total Competitions', value: '8', icon: '🎯' },
  { label: 'Cities Competed', value: '5', icon: '🌎' },
  { label: 'Performance Improvement', value: '23%', icon: '📈' }
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="relative py-24 px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-950/10 via-transparent to-red-950/10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Proven Track Record of{' '}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Elite Performance
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            As a HYROX Pro Division competitor, I've raced at the highest level across North America. 
            My journey from 1:40 to 1:16 proves the power of strategic, data-driven training.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="glass-dark rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-red-500 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-white/60">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Competition History */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-dark rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Competition History
          </h3>

          <div className="space-y-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                className={`relative flex flex-col md:flex-row md:items-center justify-between p-6 rounded-2xl transition-all duration-300 ${
                  achievement.highlight
                    ? 'bg-gradient-to-r from-red-600/20 to-orange-600/20 border-2 border-red-500/50'
                    : 'glass hover:bg-white/5'
                }`}
              >
                {achievement.highlight && (
                  <div className="absolute -top-3 -right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    BEST TIME
                  </div>
                )}

                <div className="flex-1 mb-4 md:mb-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-red-500 font-bold text-lg">
                      {achievement.year}
                    </span>
                    <span className="text-white font-semibold">
                      {achievement.event}
                    </span>
                  </div>
                  <div className="text-white/60 text-sm">
                    {achievement.partner}
                  </div>
                </div>

                <div className={`text-3xl font-bold ${
                  achievement.highlight
                    ? 'bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent'
                    : 'text-white'
                }`}>
                  {achievement.time}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid md:grid-cols-2 gap-12"
        >
          <div className="glass-dark rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              My Philosophy
            </h3>
            <p className="text-white/70 leading-relaxed mb-4">
              Elite performance isn't about training harder — it's about training smarter. 
              Through strategic programming, precise pacing strategies, and data-driven optimization, 
              I've improved my HYROX time by 23% in just three years.
            </p>
            <p className="text-white/70 leading-relaxed">
              Now, I'm sharing these exact strategies with athletes who are serious about results. 
              No generic programs. No guesswork. Just proven methods that work.
            </p>
          </div>

          <div className="glass-dark rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Why Work With Me
            </h3>
            <ul className="space-y-3">
              {[
                'Active Pro Division competitor, not just a coach',
                'Proven 23% performance improvement',
                'Experience in Individual, Women's, and Mixed Doubles',
                'Competed across 5 major North American cities',
                'Holistic approach: Training + Nutrition + Mindset',
                'Real-world race strategies from Pro-level competition'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/80">
                  <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

