'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-950/20 via-transparent to-orange-950/20"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 glass rounded-full px-6 py-2 text-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="text-white/90">HYROX Pro Athlete</span>
          </motion.div>

          {/* Main headline */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Train with a HYROX Pro
              <br />
              <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Who's Improved 23%
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto">
              From <span className="text-white font-semibold">1:40</span> to{' '}
              <span className="text-red-500 font-bold">1:16</span> — Get the exact training system 
              that took me to the Pro Division. No guesswork. Just proven results.
            </p>
          </div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto my-12"
          >
            {[
              { value: '1:16:55', label: 'Best Time' },
              { value: '8+', label: 'Competitions' },
              { value: '23%', label: 'Improvement' },
              { value: 'Pro', label: 'Division' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/60 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50">
              <span className="relative z-10">Apply for 1:1 Coaching</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="px-8 py-4 glass text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300">
              View Programs
            </button>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-sm text-white/50 mt-8"
          >
            ✨ Limited spots available • <span className="text-red-400">3 spots open</span> this month
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-red-500 rounded-full"></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

