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
  { name: 'Home', href: '/' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '#contact' }
];

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button - Fixed top right */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-50 bg-white border border-gray-200 p-4 rounded-full hover:shadow-lg transition-all duration-300 group"
        style={{ borderColor: '#d0d0d0' }}
      >
        <div className="w-6 h-5 relative flex flex-col justify-between">
          <motion.span
            animate={isOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
            className="w-full h-0.5 rounded-full transition-all"
            style={{ background: '#e8998d' }}
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-full h-0.5 rounded-full"
            style={{ background: '#e8998d' }}
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
            className="w-full h-0.5 rounded-full transition-all"
            style={{ background: '#e8998d' }}
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
              className="fixed inset-0 bg-black/30 backdrop-blur-md z-40"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-96 bg-white border-l border-gray-200 z-40 overflow-y-auto shadow-2xl"
            >
              <div className="p-8 pt-24">
                {/* Brand */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Montana
                    <span style={{ color: '#e8998d' }}>
                      {' '}Tornatore
                    </span>
                  </h2>
                  <p className="text-gray-600 text-sm">HYROX Pro | Fitness Coach</p>
                </div>

                {/* Navigation Links */}
                <div className="mb-12">
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
                    Navigation
                  </h3>
                  <nav className="space-y-2">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="block text-lg text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg px-4 py-3 transition-all duration-200"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </nav>
                </div>

                {/* Social Links */}
                <div className="mb-12">
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
                    Connect
                  </h3>
                  <div className="space-y-2">
                    {socialLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg px-4 py-3 transition-all duration-200"
                      >
                        <span className="text-2xl">{link.icon}</span>
                        <span>{link.name}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Ready to Transform?
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Only 3 coaching spots available this month.
                  </p>
                  <a 
                    href="https://linktr.ee/montanatornatore" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full py-3 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-200 text-center"
                    style={{ background: 'linear-gradient(135deg, #e8998d 0%, #d88579 100%)' }}
                  >
                    Apply Now
                  </a>
                </div>

                {/* Discount Codes */}
                <div className="mt-6 bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <h3 className="text-sm font-bold text-gray-900 mb-3">
                    Exclusive Discounts
                  </h3>
                  <div className="space-y-3 text-xs">
                    <a 
                      href="https://hyrox.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-between hover:bg-white p-2 rounded transition-colors"
                    >
                      <span className="text-gray-600">HYROX Registration</span>
                      <code className="font-mono px-2 py-1 rounded" style={{ color: '#e8998d', background: '#fef5f3' }}>
                        MONTANA-10
                      </code>
                    </a>
                    <a 
                      href="https://oneractive.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-between hover:bg-white p-2 rounded transition-colors"
                    >
                      <span className="text-gray-600">Oner Active Gear</span>
                      <code className="font-mono px-2 py-1 rounded" style={{ color: '#e8998d', background: '#fef5f3' }}>
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

