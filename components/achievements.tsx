'use client';

import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '@/lib/animations';
import { Award, Zap, Users, Globe } from 'lucide-react';

const achievements = [
  {
    id: 1,
    icon: Award,
    title: 'Power Elite',
    description: 'Sold more than $1M on Envato Market',
    metric: '$1M+',
  },
  {
    id: 2,
    icon: Zap,
    title: 'Top Monthly',
    description: 'Became a Top 20 Author of the Month',
    metric: 'Top 20',
  },
  {
    id: 3,
    icon: Globe,
    title: 'Trendsetter',
    description: 'Had items that were trending',
    metric: '50+',
  },
  {
    id: 4,
    icon: Users,
    title: 'Featured',
    description: 'Listed on shadcn/ui Registry',
    metric: '⭐',
  },
];

export function Achievements() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <motion.div variants={itemVariants} className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold">
              Achievements
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Crafting Experiences,{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Earning Recognition
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Milestones and awards that reflect our dedication to quality, innovation, and craftsmanship.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group relative p-8 bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 overflow-hidden"
              >
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow"
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {achievement.metric}
                  </h3>

                  <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    {achievement.title}
                  </h4>

                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {achievement.description}
                  </p>
                </div>

                {/* Border animation on hover */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500/50 transition-colors duration-300" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Featured badges section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 pt-12 border-t border-gray-200 dark:border-slate-700"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center"
          >
            Proudly Featured On
          </motion.h3>

          <motion.div
            variants={containerVariants}
            className="flex flex-wrap justify-center items-center gap-8"
          >
            {[
              'Product Hunt',
              'Hacker News',
              'Designer Hangout',
              'Indie Hackers',
            ].map((platform, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                className="px-6 py-3 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700 text-gray-700 dark:text-gray-300 font-semibold cursor-pointer hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
              >
                {platform}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
