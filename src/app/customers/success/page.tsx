"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ScrollAnimationWrapper } from '@/components/ScrollAnimationWrapper';
import { FaQuoteLeft, FaQuoteRight, FaIndustry, FaChartLine, FaSmile } from 'react-icons/fa';

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
};

export default function CustomerSuccess() {
  const successStories = [
    { icon: <FaIndustry />, company: "TextileTech Inc.", story: "Reduced defect rate by 40% within 3 months of implementing FIDAS" },
    { icon: <FaChartLine />, company: "FabricMasters Ltd.", story: "Increased production efficiency by 25% and cut costs by 15%" },
    { icon: <FaSmile />, company: "QualityWeave Co.", story: "Improved customer satisfaction scores from 7.5 to 9.2 out of 10" },
  ];

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-blue-50 text-gray-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="relative mb-12 overflow-hidden">
          <ScrollAnimationWrapper>
            <motion.h1 
              className="text-5xl font-bold mb-8 text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Customer Success Stories
            </motion.h1>
          </ScrollAnimationWrapper>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
            animate={{
              x: ['-200%', '200%'],
              transition: { repeat: Infinity, duration: 10, ease: "linear" },
            }}
          />
        </div>

        <ScrollAnimationWrapper>
          <motion.div
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg p-8 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-4xl text-blue-600 mb-4">{story.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-blue-600">{story.company}</h3>
                <div className="relative">
                  <FaQuoteLeft className="absolute top-0 left-0 text-blue-200 text-lg opacity-50" />
                  <p className="text-gray-600 pl-6 pr-6 pt-2 pb-2 relative">
                    {story.story}
                  </p>
                  <FaQuoteRight className="absolute bottom-0 right-0 text-blue-200 text-lg opacity-50" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
}