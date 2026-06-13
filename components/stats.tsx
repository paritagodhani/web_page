'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { number: 500, suffix: '+', label: 'Happy Clients' },
  { number: 1000, suffix: '+', label: 'Projects Completed' },
  { number: 50, suffix: '+', label: 'Team Members' },
  { number: 99.9, suffix: '%', label: 'Uptime Guarantee' },
];

export function Stats() {
  const [counters, setCounters] = useState(stats.map(() => 0));
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    stats.forEach((stat, index) => {
      const obj = { value: 0 };
      gsap.to(obj, {
        value: stat.number,
        duration: 2.5,
        ease: 'power2.out',
        onUpdate: () => {
          setCounters((prev) => {
            const newCounters = [...prev];
            newCounters[index] = Math.floor(obj.value);
            return newCounters;
          });
        },
      });
    });
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            By The Numbers
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Real results from real businesses using our platform.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="group cursor-pointer"
              >
                <div className="text-5xl md:text-6xl font-bold text-white mb-2 group-hover:text-blue-100 transition-colors">
                  {counters[index]}
                  <span className="text-4xl">{stat.suffix}</span>
                </div>
                <p className="text-lg text-blue-100 group-hover:text-white transition-colors font-semibold">
                  {stat.label}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-blue-100 mb-6">Join thousands of businesses already using TechVision</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Start Your Free Trial
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
