'use client';

import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '@/lib/animations';
import { Lightbulb, Hammer, Zap, Users } from 'lucide-react';

const values = [
  {
    id: 1,
    icon: Lightbulb,
    title: 'Innovation Driven',
    description: 'Every idea & product rooted in innovation that solves real problems for creators',
  },
  {
    id: 2,
    icon: Hammer,
    title: 'In-House Craft',
    description: 'From ideation to launch, handled by our lean team with pure craftsmanship',
  },
  {
    id: 3,
    icon: Zap,
    title: 'Built for Creators',
    description: 'Intuitive, frictionless tools that help designers and developers move quickly',
  },
  {
    id: 4,
    icon: Users,
    title: 'Quality Support',
    description: 'Clear documentation & human support from the team of actual creators',
  },
];

export function Team() {
  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold">
              About Us
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            A Lean Team With a{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Clear Vision
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl"
          >
            We're a focused, battle-tested team of builders who care deeply about digital craftsmanship. 
            Empowering creators with high-quality tools designed for speed, simplicity, and impact.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group relative p-8 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300"
              >
                {/* Animated icon background */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow"
                >
                  <Icon className="w-7 h-7 text-white" />
                </motion.div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {value.description}
                </p>

                {/* Decorative number */}
                <div className="absolute top-4 right-4 text-6xl font-bold text-gray-100 dark:text-slate-700 opacity-50">
                  0{index + 1}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 p-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl"
        >
          {[
            { label: 'Open-source Projects', value: '50+' },
            { label: 'Countries Served', value: '50+' },
            { label: 'Github Stars', value: '10K+' },
            { label: 'Active Users', value: '30K+' },
          ].map((stat, index) => (
            <motion.div key={index} variants={itemVariants} className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
                className="text-3xl md:text-4xl font-bold text-white mb-2"
              >
                {stat.value}
              </motion.div>
              <p className="text-blue-100">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
