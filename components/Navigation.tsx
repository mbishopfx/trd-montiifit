'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#services', label: 'Programs' },
    { href: '#about', label: 'About' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass-dark shadow-lg' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#"
              className="text-2xl font-bold text-white"
              whileHover={{ scale: 1.05 }}
            >
              Montana
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Tornatore
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/70 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
              
              <button className="px-6 py-2 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-200">
                Apply Now
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden glass-dark border-t border-white/10"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-white/70 hover:text-white transition-colors duration-200 py-2"
                >
                  {link.label}
                </a>
              ))}
              <button className="w-full px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-full">
                Apply Now
              </button>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Spacer to prevent content from going under fixed nav */}
      <div className="h-20"></div>
    </>
  );
}

