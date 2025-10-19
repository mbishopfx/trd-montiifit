'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

const socialLinks = [
  { name: 'Instagram', href: 'https://www.instagram.com/montanatornatore/', icon: '📷' },
  { name: 'Linktree', href: 'https://linktr.ee/montanatornatore', icon: '🔗' },
  { name: 'Email', href: 'mailto:coaching@montanatornatore.com', icon: '✉️' }
];

const navLinks = [
  { name: 'Gallery', href: '/' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' }
];

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button - Fixed top right */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-50 glass-dark p-4 rounded-full hover:bg-white/10 transition-all duration-300 group"
      >
        <div className="w-6 h-5 relative flex flex-col justify-between">
          <motion.span
            animate={isOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
            className="w-full h-0.5 bg-white rounded-full transition-all"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-full h-0.5 bg-white rounded-full"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
            className="w-full h-0.5 bg-white rounded-full transition-all"
          />
        </div>
      </button>

      {/* Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-40"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-96 glass-dark border-l border-white/10 z-40 overflow-y-auto"
            >
              <div className="p-8 pt-24">
                {/* Brand */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-2">
                    Montana
                    <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                      Tornatore
                    </span>
                  </h2>
                  <p className="text-white/60 text-sm">HYROX Pro | Fitness Coach</p>
                </div>

                {/* Navigation Links */}
                <div className="mb-12">
                  <h3 className="text-sm font-bold text-white/40 uppercase tracking-wider mb-4">
                    Navigation
                  </h3>
                  <nav className="space-y-2">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="block text-lg text-white/80 hover:text-white hover:bg-white/5 rounded-lg px-4 py-3 transition-all duration-200"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </nav>
                </div>

                {/* Social Links */}
                <div className="mb-12">
                  <h3 className="text-sm font-bold text-white/40 uppercase tracking-wider mb-4">
                    Connect
                  </h3>
                  <div className="space-y-2">
                    {socialLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg px-4 py-3 transition-all duration-200"
                      >
                        <span className="text-2xl">{link.icon}</span>
                        <span>{link.name}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="glass rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Ready to Transform?
                  </h3>
                  <p className="text-white/60 text-sm mb-4">
                    Only 3 coaching spots available this month.
                  </p>
                  <a 
                    href="https://linktr.ee/montanatornatore" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-200 text-center"
                  >
                    Apply Now
                  </a>
                </div>

                {/* Discount Codes */}
                <div className="mt-6 glass rounded-2xl p-6">
                  <h3 className="text-sm font-bold text-white/80 mb-3">
                    Exclusive Discounts
                  </h3>
                  <div className="space-y-3 text-xs">
                    <a 
                      href="https://hyrox.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-between hover:bg-white/5 p-2 rounded transition-colors"
                    >
                      <span className="text-white/60">HYROX Registration</span>
                      <code className="text-red-400 font-mono bg-black/30 px-2 py-1 rounded">
                        MONTANA-10
                      </code>
                    </a>
                    <a 
                      href="https://oneractive.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-between hover:bg-white/5 p-2 rounded transition-colors"
                    >
                      <span className="text-white/60">Oner Active Gear</span>
                      <code className="text-red-400 font-mono bg-black/30 px-2 py-1 rounded">
                        $10 OFF
                      </code>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

