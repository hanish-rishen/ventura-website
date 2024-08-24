"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ScrollAnimationWrapper } from '@/components/ScrollAnimationWrapper';
import Image from 'next/image';

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
};

const letterAnimation: Variants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
};

export default function WhatIsFIDAS() {
  const heroContent = {
    title: "FIDAS",
    subtitle: "Fabric Inspection & Defect Analysis System",
    description: "An innovative solution designed to revolutionize the fabric inspection process.",
    imageUrl: "/images/fidas-hero.jpg", // Replace with actual image path
  };

  const features = [
    {
      title: "Real-time Inspection",
      description: "Combines multiple inspection-specific IoT devices & software for real-time on-table fabric inspection.",
      icon: "icon-realtime", // Replace with actual icon component or path
    },
    {
      title: "Proven Track Record",
      description: "De facto software for fabric inspection in India with over 100 successful implementations for 17 years.",
      icon: "icon-track-record", // Replace with actual icon component or path
    },
    // Add more features as needed
  ];

  const benefits = [
    "Improved quality control processes",
    "Maximized fresh fabric realization",
    "Reduced wastage",
    "Enhanced efficiency in textile manufacturing",
    // Add more benefits as needed
  ];

  return (
    <div className="w-full bg-gray-50 text-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="relative mb-12 overflow-hidden">
          <ScrollAnimationWrapper>
            <motion.h1 
              className="text-5xl font-bold mb-8 text-center tracking-tight"
              initial="initial"
              animate="animate"
              transition={{ staggerChildren: 0.1 }}
            >
              {heroContent.title.split('').map((letter, index) => (
                <motion.span
                  key={index}
                  variants={letterAnimation}
                  transition={{ duration: 0.5 }}
                  className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400"
                >
                  {letter}
                </motion.span>
              ))}
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
          <motion.p
            variants={fadeInUp}
            className="text-xl text-center mb-6 text-gray-600"
          >
            {heroContent.subtitle}
          </motion.p>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-center mb-10 text-gray-600"
          >
            {heroContent.description}
          </motion.p>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <motion.div
            variants={fadeInUp}
            className="mb-16"
          >
            <Image
              src={heroContent.imageUrl}
              alt="FIDAS Hero"
              width={1200}
              height={600}
              className="rounded-lg shadow-xl"
            />
          </motion.div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400"
          >
            Features
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
                <div className="text-4xl text-blue-600 mb-4">
                  {/* Replace with actual icon component */}
                  <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-blue-600">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold mt-16 mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400"
          >
            Benefits
          </motion.h2>
          <motion.ul
            variants={fadeInUp}
            className="space-y-4"
          >
            {benefits.map((benefit, index) => (
              <motion.li key={index} className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-3 text-base text-gray-700">{benefit}</p>
              </motion.li>
            ))}
          </motion.ul>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
}