'use client';

import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '@/lib/animations';
import { Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'ThemeSelection Pro',
    description: 'Premium UI templates & Figma kits for modern design',
    tags: ['Templates', 'Figma UI Kits', 'Components'],
    icon: '🎨',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    name: 'ShadCN Studio',
    description: 'Blocks, templates & plugins for shadcn/ui',
    tags: ['Blocks', 'Templates', 'Plugins'],
    icon: '⚡',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    name: 'FlyonUI',
    description: 'Tailwind CSS blocks & components library',
    tags: ['Tailwind', 'Blocks', 'Templates'],
    icon: '🚀',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    id: 4,
    name: 'Jetship',
    description: 'Production-ready SaaS boilerplate',
    tags: ['Boilerplate', 'SaaS', 'Full Stack'],
    icon: '🛸',
    color: 'from-orange-500 to-red-500',
  },
];

export function Products() {
  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.div variants={itemVariants} className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold">
              Our Products
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Products that Power{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Modern Development
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl"
          >
            Built in-house to accelerate innovation for startups, SaaS teams, and enterprises worldwide.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)' }}
              className="group relative p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-900 dark:to-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 hover:border-transparent transition-all duration-300 overflow-hidden"
            >
              {/* Animated background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {product.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {product.name}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  {product.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/50 dark:bg-slate-700/50 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-2 px-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 dark:from-blue-500 dark:to-blue-600 text-white rounded-lg font-semibold transition-all duration-300"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
