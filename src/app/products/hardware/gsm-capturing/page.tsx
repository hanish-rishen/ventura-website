"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ScrollAnimationWrapper } from '@/components/ScrollAnimationWrapper';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
};

export default function GSMCapturing() {
  const features = [
    { title: "High Precision", description: "10 Milligram Accuracy for precise measurements" },
    { title: "Real-Time Monitoring", description: "7-Segment RED LED meter Display for instant readings" },
    { title: "Data Connectivity", description: "USB Communication to PC for seamless data transfer" },
    { title: "Versatile Integration", description: "Fixed Along with Inspection / Compacting / Stenter Machine" },
    { title: "Quality Control", description: "Real-Time GSM Variation Alerts for immediate action" },
    { title: "Reliable Power", description: "230 V SMPS Power Supply for consistent performance" },
  ];

  const steps = [
    { title: "Measurement", description: "High-precision sensors measure fabric GSM in real-time" },
    { title: "Data Processing", description: "Collected data is instantly processed and analyzed" },
    { title: "Quality Control", description: "System ensures consistent fabric GSM throughout production" },
    { title: "Reporting", description: "Comprehensive reports are generated for analysis and decision-making" },
  ];

  return (
    <div className="w-full bg-gray-50 text-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="relative mb-12 overflow-hidden">
          <ScrollAnimationWrapper>
            <motion.h1 
              className="text-4xl font-bold mb-8 text-center tracking-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Automatic Fabric GSM Capturing System
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
                Ventura Automation&apos;s Automatic Fabric GSM Capturing System is an advanced solution designed to provide accurate and real-time measurements of fabric weight. 
                Our system integrates seamlessly with existing machinery, offering precise data for quality control and production optimization in textile manufacturing.
              </p>
              <h2 className="text-2xl font-semibold">Key Features</h2>
              <ul className="list-none pl-5 space-y-3">
                {features.map((feature, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="text-blue-500">✓</span>
                    <span>{feature.description}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper>
            <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/images/GSM-Scale.jpg"
                alt="Automatic Fabric GSM Capturing System"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
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
            Benefits
          </motion.h2>
          <motion.div
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
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