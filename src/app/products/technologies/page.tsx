"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ScrollAnimationWrapper } from '@/components/ScrollAnimationWrapper';
import { FaRobot, FaNetworkWired, FaChartLine, FaDatabase, FaExchangeAlt } from 'react-icons/fa';

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
};

export default function Technologies() {
  const technologies = [
    {
      icon: <FaRobot />,
      name: "AI-Powered Defect Detection",
      description: "Advanced AI algorithms for real-time defect detection and classification.",
      features: [
        "Real-time alerts for quality downgrades",
        "Automatic grading based on ASTM 4 point system",
        "Defect location tracking for lay and cutting tables"
      ]
    },
    {
      icon: <FaNetworkWired />,
      name: "IoT Integration",
      description: "Seamless connection with fabric inspection hardware for comprehensive data collection.",
      features: [
        "Automatic fabric length, width, and weight acquisition",
        "Real-time GSM verification",
        "Foam thickness measurement during lamination"
      ]
    },
    {
      icon: <FaChartLine />,
      name: "Optimization Algorithms",
      description: "Best-in-class optimization algorithms for maximizing fabric utilization.",
      features: [
        "Within-roll optimization to avoid dual inspection",
        "Batch optimization for increased profitability",
        "Two-piece joining suggestions for maximizing fresh fabric"
      ]
    },
    {
      icon: <FaDatabase />,
      name: "Data Analytics and Reporting",
      description: "Comprehensive analytics for process improvement and decision-making.",
      features: [
        "360-degree view of quality from yarn to finished fabric",
        "Order-based profitability analysis",
        "Vendor analysis and performance tracking"
      ]
    },
    {
      icon: <FaExchangeAlt />,
      name: "ERP Integration",
      description: "Seamless integration with existing ERP systems for streamlined operations.",
      features: [
        "Automated roll-wise barcode generation",
        "Real-time data synchronization",
        "Traceability throughout the production process"
      ]
    }
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
              Our Technologies
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
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg p-8 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-4xl text-blue-600 mb-4">{tech.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-blue-600">{tech.name}</h3>
                <p className="text-gray-600 mb-4">{tech.description}</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  {tech.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm">{feature}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
}