"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ScrollAnimationWrapper } from '@/components/ScrollAnimationWrapper';
import Image from 'next/image';
import { FaThermometerHalf, FaTachometerAlt, FaWeightHanging, FaClock, FaArrowRight } from 'react-icons/fa';
import { GiPressureCooker } from 'react-icons/gi';
import { RiPlugLine } from 'react-icons/ri';

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
};

export default function HeatFuseLabelingMachine() {
  const features = [
    { title: "Temperature Control", description: "Up to 180 Degree Celsius temperature (Adjustable)" },
    { title: "High Pressure", description: "Up to 4 Bar Pressure for optimal fusing" },
    { title: "Lightweight Design", description: "Minimum Weight - Almost handheld Unit for easy operation" },
    { title: "Timing Precision", description: "Adjustable Timing for various fabric types" },
    { title: "Power Supply", description: "230 V Power Supply for consistent performance" },
    { title: "Pneumatic Activation", description: "Pneumatically Activated for smooth operation" },
  ];

  const steps = [
    { title: "Prepare", description: "Set up the machine with appropriate temperature and pressure settings" },
    { title: "Position", description: "Place the fabric and label in the designated area" },
    { title: "Activate", description: "Initiate the pneumatic activation to apply pressure" },
    { title: "Fuse", description: "Allow the heat and pressure to fuse the label onto the fabric" },
    { title: "Cool", description: "Let the fused area cool before handling" },
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
              Fabric Heat Fuse Labeling Machine
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
                Our Fabric Heat Fuse Labeling Machine is a state-of-the-art solution for efficient and precise label application. 
                With its pneumatic activation and adjustable temperature up to 180°C, it ensures perfect adhesion for a wide range of fabrics. 
                The machine&apos;s compact, almost handheld design makes it incredibly versatile and easy to use in various production environments.
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
                src="/images/Heat-Fusing-Machine.png"
                alt="Heat Fuse Labeling Machine"
                layout="fill"
                objectFit="cover"
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
            Additional Features
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