'use client';

import HamburgerMenu from '@/components/HamburgerMenu';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <HamburgerMenu />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/photos/IMG_5056.jpg"
            alt="Montana Tornatore Training"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#f5f5f5]/80 via-[#f5f5f5]/70 to-[#f5f5f5]" />
        </div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block px-6 py-2 bg-white border border-gray-200 rounded-full text-sm font-semibold tracking-wide shadow-sm" style={{ color: '#e8998d' }}>
              HYROX PRO ATHLETE & ELITE FITNESS COACH
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Transform Your Body,
            <br />
            <span style={{ color: '#e8998d' }}>Elevate Your Performance</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Elite 1-on-1 coaching program designed for athletes who refuse to settle. 
            Build strength, endurance, and mental resilience with proven training systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="https://linktr.ee/montanatornatore"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 text-white text-lg font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #e8998d 0%, #d88579 100%)' }}
            >
              Apply for Coaching →
            </a>
            <Link
              href="/gallery"
              className="px-10 py-5 bg-white text-gray-900 text-lg font-bold rounded-full border-2 border-gray-200 hover:border-[#e8998d] hover:shadow-lg transition-all duration-300"
            >
              View Gallery
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-8 text-sm text-gray-500"
          >
            ⚡ Only 3 coaching spots available this month
          </motion.p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center p-8 rounded-2xl bg-gray-50 border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="text-5xl font-bold mb-2" style={{ color: '#e8998d' }}>12+</div>
              <div className="text-gray-900 font-semibold text-lg">Years Experience</div>
              <div className="text-gray-600 text-sm mt-2">Elite Athletic Training</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center p-8 rounded-2xl bg-gray-50 border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="text-5xl font-bold mb-2" style={{ color: '#e8998d' }}>100+</div>
              <div className="text-gray-900 font-semibold text-lg">Athletes Coached</div>
              <div className="text-gray-600 text-sm mt-2">Competition Ready Results</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-8 rounded-2xl bg-gray-50 border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="text-5xl font-bold mb-2" style={{ color: '#e8998d' }}>Pro</div>
              <div className="text-gray-900 font-semibold text-lg">HYROX Athlete</div>
              <div className="text-gray-600 text-sm mt-2">Elite Competition Level</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What You'll Get Section */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What You'll Get
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive coaching designed for maximum results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: '1-on-1 Personalized Training',
                description: 'Custom workout programs tailored to your goals, fitness level, and schedule.',
                icon: '💪'
              },
              {
                title: 'Nutrition Guidance',
                description: 'Sustainable nutrition strategies that fuel performance and recovery.',
                icon: '🥗'
              },
              {
                title: 'Competition Preparation',
                description: 'HYROX-specific training protocols used by pro athletes to dominate.',
                icon: '🏆'
              },
              {
                title: 'Weekly Check-ins',
                description: 'Regular progress assessments and program adjustments for optimal results.',
                icon: '📊'
              },
              {
                title: 'Mental Performance',
                description: 'Build the mindset and resilience needed for peak athletic performance.',
                icon: '🧠'
              },
              {
                title: '24/7 Support',
                description: 'Direct access to coaching support whenever you need guidance or motivation.',
                icon: '💬'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4 p-6 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-[#e8998d]"
              >
                <div className="text-4xl flex-shrink-0">{benefit.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Who This Is For
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Competitive Athletes',
                description: 'Serious competitors preparing for HYROX, CrossFit, or endurance events.',
                emoji: '🏃‍♀️'
              },
              {
                title: 'Fitness Enthusiasts',
                description: 'Dedicated individuals ready to take their training to the next level.',
                emoji: '💫'
              },
              {
                title: 'Transformation Seekers',
                description: 'People committed to making a complete lifestyle and physique change.',
                emoji: '🔥'
              }
            ].map((persona, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8 bg-gray-50 rounded-2xl border border-gray-200 hover:shadow-lg transition-all"
              >
                <div className="text-5xl mb-4">{persona.emoji}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {persona.title}
                </h3>
                <p className="text-gray-600">
                  {persona.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center bg-gradient-to-br from-white to-gray-50 rounded-3xl p-12 md:p-16 border border-gray-200 shadow-xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Start Your
            <br />
            <span style={{ color: '#e8998d' }}>Transformation?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Limited coaching spots available. Apply now to secure your spot and begin your journey to peak performance.
          </p>
          <a
            href="https://linktr.ee/montanatornatore"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-6 text-white text-xl font-bold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            style={{ background: 'linear-gradient(135deg, #e8998d 0%, #d88579 100%)' }}
          >
            Apply for Coaching Now
          </a>
          <p className="mt-8 text-sm text-gray-500">
            ⚡ Only 3 spots remaining this month
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Montana <span style={{ color: '#e8998d' }}>Tornatore</span>
              </h3>
              <p className="text-gray-600">HYROX Pro | Elite Fitness Coach</p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="https://www.instagram.com/montanatornatore/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#e8998d] transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://linktr.ee/montanatornatore"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#e8998d] transition-colors"
              >
                Linktree
              </a>
              <a
                href="mailto:coaching@montanatornatore.com"
                className="text-gray-600 hover:text-[#e8998d] transition-colors"
              >
                Email
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
            <p className="flex items-center justify-center gap-2">
              Built By{' '}
              <a href="https://truerankdigital.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#e8998d] font-semibold transition-colors">
                True Rank Digital
              </a>{' '}
              with <span className="text-[#e8998d]">♥</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
