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

export default function DigitalPickCounter() {
  const features = [
    { title: "Automated Measurement", description: "Measures thread density in warp and weft directions automatically" },
    { title: "High Precision", description: "Digital sensor ensures accurate readings for quality control" },
    { title: "User-Friendly Interface", description: "Easy to operate, reducing training time and improving efficiency" },
    { title: "Data Management", description: "Logging and export capabilities for comprehensive analysis" },
    { title: "Versatile Application", description: "Compatible with a wide range of fabric types" },
    { title: "Time-Saving", description: "Significantly reduces measurement time compared to manual counting" },
  ];

  const steps = [
    { title: "Fabric Placement", description: "Place the fabric sample on the device&apos;s measurement area" },
    { title: "Automated Scanning", description: "The digital sensor scans the fabric, detecting thread count" },
    { title: "Data Processing", description: "Advanced algorithms process the scanned data for accuracy" },
    { title: "Result Display", description: "Thread density measurements are displayed on the user interface" },
    { title: "Data Logging", description: "Results are automatically logged for quality control and analysis" },
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
              Digital Pick Counter
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
                Ventura Automation&apos;s Digital Pick Counter is an advanced solution designed to automate the process of measuring fabric thread density. 
                Our system provides accurate, real-time measurements, ensuring optimal quality control and production efficiency in textile manufacturing.
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
                src="/images/DIGITAL-PICK-COUNTER.png"
                alt="Digital Pick Counter"
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
      </div>
    </div>
  );
}