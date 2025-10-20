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
            src="/photos/montiifit_3317222096930872912_59842297436_2024-03-05.jpg"
            alt="Montana Tornatore Training"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#f5f5f5]/75 via-[#f5f5f5]/60 to-[#f5f5f5]" />
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
            className="mb-8"
          >
            <span className="inline-block px-8 py-3 bg-white border-2 border-gray-300 rounded-full text-xs font-black tracking-[0.2em] shadow-md uppercase" style={{ color: '#e8998d' }}>
              HYROX PRO ATHLETE & ELITE FITNESS COACH
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 mb-6 leading-[1.1] tracking-tight"
            style={{ letterSpacing: '-0.02em' }}
          >
            TRANSFORM YOUR BODY,
            <br />
            <span style={{ color: '#e8998d' }}>ELEVATE YOUR PERFORMANCE</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed font-medium"
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
              className="px-12 py-5 text-white text-base font-black uppercase tracking-wider rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #e8998d 0%, #d88579 100%)' }}
            >
              Apply for Coaching →
            </a>
            <Link
              href="/gallery"
              className="px-12 py-5 bg-white text-gray-900 text-base font-black uppercase tracking-wider rounded-full border-2 border-gray-300 hover:border-[#e8998d] hover:shadow-xl transition-all duration-300"
            >
              View Gallery
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-8 text-sm font-bold text-gray-700 uppercase tracking-wider"
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
              <div className="text-6xl font-black mb-2" style={{ color: '#e8998d' }}>12+</div>
              <div className="text-gray-900 font-black text-lg uppercase tracking-wide">Years Experience</div>
              <div className="text-gray-600 text-sm mt-2 font-semibold">Elite Athletic Training</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center p-8 rounded-2xl bg-gray-50 border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="text-6xl font-black mb-2" style={{ color: '#e8998d' }}>100+</div>
              <div className="text-gray-900 font-black text-lg uppercase tracking-wide">Athletes Coached</div>
              <div className="text-gray-600 text-sm mt-2 font-semibold">Competition Ready Results</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-8 rounded-2xl bg-gray-50 border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="text-6xl font-black mb-2" style={{ color: '#e8998d' }}>PRO</div>
              <div className="text-gray-900 font-black text-lg uppercase tracking-wide">HYROX Athlete</div>
              <div className="text-gray-600 text-sm mt-2 font-semibold">Elite Competition Level</div>
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
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight uppercase">
              What You&apos;ll Get
            </h2>
            <p className="text-lg text-gray-700 font-semibold">
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
                  <h3 className="text-lg font-bold text-gray-900 mb-2 uppercase tracking-wide">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 font-medium">
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
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight uppercase">
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
                <h3 className="text-lg font-black text-gray-900 mb-3 uppercase tracking-wide">
                  {persona.title}
                </h3>
                <p className="text-gray-600 font-medium">
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
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight uppercase leading-[1.1]">
            Ready to Start Your
            <br />
            <span style={{ color: '#e8998d' }}>Transformation?</span>
          </h2>
          <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto font-medium">
            Limited coaching spots available. Apply now to secure your spot and begin your journey to peak performance.
          </p>
          <a
            href="https://linktr.ee/montanatornatore"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-14 py-6 text-white text-lg font-black uppercase tracking-wider rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            style={{ background: 'linear-gradient(135deg, #e8998d 0%, #d88579 100%)' }}
          >
            Apply for Coaching Now
          </a>
          <p className="mt-8 text-sm font-bold text-gray-700 uppercase tracking-wider">
            ⚡ Only 3 spots remaining this month
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-black text-gray-900 mb-2 tracking-tight">
                MONTANA <span style={{ color: '#e8998d' }}>TORNATORE</span>
              </h3>
              <p className="text-gray-600 font-semibold text-sm tracking-wide">HYROX PRO | ELITE FITNESS COACH</p>
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
