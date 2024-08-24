"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ScrollAnimationWrapper } from '@/components/ScrollAnimationWrapper';
import { FaCheckCircle, FaChartLine, FaCog, FaUsers, FaThumbsUp, FaTrophy } from 'react-icons/fa';

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
};

export default function Benefits() {
  const benefits = [
    { icon: <FaCheckCircle />, title: "Improved Quality Control", description: "Detect defects with higher accuracy and consistency" },
    { icon: <FaCog />, title: "Increased Efficiency", description: "Streamline the inspection process and reduce manual labor" },
    { icon: <FaChartLine />, title: "Cost Reduction", description: "Minimize waste and rework, leading to significant cost savings" },
    { icon: <FaUsers />, title: "Data-Driven Insights", description: "Gain valuable insights to optimize your production processes" },
    { icon: <FaThumbsUp />, title: "Enhanced Customer Satisfaction", description: "Deliver higher quality products to your customers" },
    { icon: <FaTrophy />, title: "Competitive Advantage", description: "Stay ahead in the market with cutting-edge technology" },
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
              Benefits of FIDAS
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
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg p-8 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-4xl text-blue-600 mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-blue-600">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
}