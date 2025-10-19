'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission here
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
    }, 3000);
  };

  return (
    <section id="contact" ref={ref} className="relative py-24 px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-950/30 via-orange-950/20 to-red-950/30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="glass-dark rounded-3xl p-12 md:p-16 text-center border-2 border-red-500/20"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 glass rounded-full px-6 py-2 text-sm mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="text-white/90">Limited Spots Available</span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to Transform Your{' '}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              HYROX Performance?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-white/70 mb-12 max-w-2xl mx-auto"
          >
            Get proven strategies, personalized programming, and direct access to a Pro Division competitor. 
            Only <span className="text-red-400 font-semibold">3 spots remaining</span> this month.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <button className="group relative px-10 py-5 bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50">
              <span className="relative z-10">Apply for 1:1 Coaching</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="px-10 py-5 glass text-white font-bold text-lg rounded-full hover:bg-white/10 transition-all duration-300">
              Schedule Free Call
            </button>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="relative my-12"
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 glass rounded-full text-white/60">or</span>
            </div>
          </motion.div>

          {/* Email Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Get the Free HYROX Training Guide
            </h3>
            <p className="text-white/60 mb-6">
              7-day training plan with Pro-level strategies delivered to your inbox.
            </p>
            
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-6 py-4 rounded-full bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  disabled={submitted}
                  className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-all duration-300 disabled:opacity-50"
                >
                  {submitted ? '✓ Sent!' : 'Get Guide'}
                </button>
              </div>
            </form>
            
            <p className="text-xs text-white/40 mt-4">
              No spam. Unsubscribe anytime. Used by 500+ HYROX athletes.
            </p>
          </motion.div>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { icon: '⚡', text: 'Average 15% time improvement' },
            { icon: '🎯', text: '20+ active coaching clients' },
            { icon: '⭐', text: '5.0 rating from athletes' }
          ].map((item, index) => (
            <div key={index} className="glass rounded-2xl p-6 text-center">
              <div className="text-3xl mb-2">{item.icon}</div>
              <p className="text-white/80 text-sm">{item.text}</p>
            </div>
          ))}
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-12 text-center"
        >
          <p className="text-white/60 mb-4">
            Questions? Let's connect
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="https://linktr.ee/montanatornatore" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300 transition-colors">
              Linktree
            </a>
            <a href="https://instagram.com/montanatornatore" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300 transition-colors">
              Instagram
            </a>
            <a href="mailto:coaching@montanatornatore.com" className="text-red-400 hover:text-red-300 transition-colors">
              Email
            </a>
          </div>
        </motion.div>

        {/* Brand Partnerships */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 glass-dark rounded-2xl p-8"
        >
          <h3 className="text-xl font-bold text-white text-center mb-6">
            Exclusive Athlete Discounts
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">🏃‍♀️</div>
              <p className="text-white font-semibold mb-1">HYROX Race Registration</p>
              <p className="text-sm text-white/60 mb-2">Use code <span className="text-red-400 font-mono">MONTANA-10</span></p>
              <span className="text-red-500 font-bold">10% OFF</span>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">👟</div>
              <p className="text-white font-semibold mb-1">Oner Active Apparel</p>
              <p className="text-sm text-white/60 mb-2">Premium athletic gear</p>
              <span className="text-red-500 font-bold">$10 OFF</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

