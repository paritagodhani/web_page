'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { containerVariants, itemVariants } from '@/lib/animations';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO at StartupCo',
    image: '👨‍💼',
    content:
      'TechVision transformed our entire web infrastructure. The performance improvements were immediate and the team was incredibly supportive throughout the transition.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'CTO at TechFlow',
    image: '👩‍💻',
    content:
      'The developer experience is outstanding. The documentation is comprehensive and the API is intuitive. Highly recommend for any serious development project.',
    rating: 5,
  },
  {
    name: 'Emma Williams',
    role: 'Product Lead at DigitalHub',
    image: '👨‍🔬',
    content:
      'We scaled from 10k to 1M users without any downtime. The platform is rock solid and their support team is amazing. Best decision we made.',
    rating: 5,
  },
  {
    name: 'David Martinez',
    role: 'Founder at WebBuilders',
    image: '👩‍🎨',
    content:
      'The animation and performance optimization tools are next level. Our page load times dropped by 60%. Worth every penny.',
    rating: 5,
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust TechVision for their web development needs.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="px-4 sm:px-8 md:px-16"
              >
                <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-200">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="text-4xl">{testimonials[currentIndex].image}</div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {testimonials[currentIndex].name}
                        </h3>
                        <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                      </div>
                    </div>
                  </div>

                  {/* Rating */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex gap-1 mb-6"
                  >
                    {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Content */}
                  <p className="text-lg text-gray-600 leading-relaxed mb-8 italic">
                    "{testimonials[currentIndex].content}"
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? 'bg-blue-600 w-8' : 'bg-gray-300'
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
