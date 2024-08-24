"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ScrollAnimationWrapper } from '@/components/ScrollAnimationWrapper';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const featureVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function TouchscreenMonitor() {
  const features = [
    { title: "Durable Design", description: "Built to withstand harsh industrial environments with a temperature range of -5°C to 60°C" },
    { title: "Responsive Touch", description: "Pre-calibrated 10-point touch with a 300 millisecond response time for efficient operation" },
    { title: "Versatile Integration", description: "Metal enclosure available for seamless integration into existing inspection machines" },
    { title: "Large Display", description: "15 Inch or larger touchscreen monitor for easy fabric defect entry" },
    { title: "Robust Construction", description: "Projected Capacitive Touch Screen Glass with toughened glass resistant to hand nails" },
    { title: "Industrial-grade", description: "Ideal for dusty environments with 1 Year Return to Factory warranty" },
  ];

  const steps = [
    { title: "Connect", description: "Easily integrate the touchscreen monitor with your existing industrial PC setup" },
    { title: "Configure", description: "Set up the monitor for your specific fabric inspection needs" },
    { title: "Operate", description: "Use the responsive touch interface for efficient fabric defect entry" },
    { title: "Analyze", description: "Review collected data to improve quality control processes" },
  ];

  return (
    <div className="w-full bg-gray-50 text-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="relative mb-12 overflow-hidden">
          <ScrollAnimationWrapper>
            <motion.h1 
              className="text-5xl font-bold mb-8 text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Touch Screen Monitor with Industrial PC
            </motion.h1>
          </ScrollAnimationWrapper>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
            animate={{
              x: ['-200%', '200%'],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "linear",
            }}
            style={{
              width: '200%',
            }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <ScrollAnimationWrapper>
            <motion.div className="space-y-6" variants={fadeInUp}>
              <p className="text-lg leading-relaxed">
                Our Touch Screen Monitor with Industrial PC is designed for seamless fabric defect entry in industrial environments. 
                With its robust construction and advanced features, it provides a reliable and efficient solution for quality control processes.
              </p>
              <h2 className="text-2xl font-semibold">Key Features</h2>
              <ul className="list-none pl-5 space-y-3">
                {[
                  "15 Inch Or Larger Touchscreen Monitor for Fabric Defect Entry",
                  "Projected Capacitive Touch Screen Glass",
                  "Toughened Glass that will not be affected by hand nails",
                  "-5° c to 60°c temperature range",
                  "Pre-Calibrated 10 point touch",
                  "300 Milliseconds response",
                  "Ideal for dusty environment",
                  "Metal Enclosure can be supplied for fixing in inspection machine",
                  "1 Year Return to Factory warranty"
                ].map((feature, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="text-blue-500">✓</span>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper>
            <div className="h-96 bg-gray-200 rounded-lg">
              {/* Placeholder for your animated image */}
            </div>
          </ScrollAnimationWrapper>
        </div>

        <h2 className="text-3xl font-bold mb-10 text-center">How It Works</h2>
        <div className="relative overflow-hidden mb-16" style={{ height: '250px' }}>
          <motion.div 
            className="flex absolute"
            animate={{
              x: [0, -2800],
            }}
            transition={{
              x: {
                repeat: Infinity,
                duration: 35,
                ease: "linear",
              },
            }}
            style={{
              width: '5600px', // Doubled the width to create a seamless loop
            }}
          >
            {[...steps, ...steps].map((step, index) => (
              <div key={index} className="flex items-center">
                <motion.div 
                  className="bg-white p-6 rounded-lg shadow-md relative overflow-hidden flex-shrink-0"
                  style={{ width: '300px', height: '200px' }}
                >
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-teal-400" />
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-sm">{step.description}</p>
                </motion.div>
                {index < steps.length * 2 - 1 && (
                  <div className="flex-shrink-0 w-8 flex items-center justify-center">
                    <FaArrowRight className="text-blue-500 text-xl" />
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </div>

        <ScrollAnimationWrapper>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400"
          >
            Additional Features
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={featureVariants}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
              >
                <h3 className="text-xl font-semibold mb-4 text-blue-600">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
}