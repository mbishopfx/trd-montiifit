'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const services = [
  {
    title: '1:1 Online Coaching',
    price: '$400/month',
    description: 'Fully personalized HYROX training with direct coach access, custom programming, and unlimited support.',
    features: [
      'Custom workout programming',
      'Personalized pacing strategy',
      'Weekly video check-ins',
      'Unlimited messaging access',
      'Nutrition & recovery guidance',
      'Race day preparation'
    ],
    highlight: true,
    badge: 'Most Popular'
  },
  {
    title: 'Competition Prep',
    price: '$1,500',
    description: '8-week intensive program to get you race-ready with Pro-level strategies and personalized preparation.',
    features: [
      '8 weeks HYROX-specific training',
      'Race-day pacing strategy',
      'Weekly 30-min coaching calls',
      'Detailed race-day plan',
      'Nutrition protocol',
      'Post-race debrief'
    ],
    highlight: false
  },
  {
    title: 'Digital Training Guide',
    price: '$127',
    description: 'Complete self-paced HYROX training guide for beginners. Everything you need to prepare for your first race.',
    features: [
      '12-week training plan',
      'Station technique videos',
      'Pacing strategy templates',
      'Race day checklist',
      'Nutrition guide',
      'Lifetime access'
    ],
    highlight: false,
    badge: 'Best Value'
  }
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="relative py-24 px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/10 to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Choose Your{' '}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Path to Results
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Whether you're chasing a PR or starting your HYROX journey, I have a program designed for your goals.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative group ${
                service.highlight 
                  ? 'md:-mt-8 md:mb-0' 
                  : ''
              }`}
            >
              {/* Card */}
              <div className={`h-full glass-dark rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 ${
                service.highlight 
                  ? 'border-2 border-red-500/50 shadow-2xl shadow-red-500/20' 
                  : ''
              }`}>
                {/* Badge */}
                {service.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-600 to-orange-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                      {service.badge}
                    </span>
                  </div>
                )}

                {/* Title & Price */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <div className="text-4xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent mb-4">
                    {service.price}
                  </div>
                  <p className="text-white/60">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/80">
                      <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                  service.highlight
                    ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white hover:scale-105 hover:shadow-xl hover:shadow-red-500/50'
                    : 'glass text-white hover:bg-white/10'
                }`}>
                  {service.highlight ? 'Apply Now' : 'Learn More'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-white/60 mb-4">
            Not sure which program is right for you?
          </p>
          <button className="px-8 py-3 glass text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300">
            Schedule a Free Strategy Call
          </button>
        </motion.div>
      </div>
    </section>
  );
}

