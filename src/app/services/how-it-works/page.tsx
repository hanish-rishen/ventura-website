"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ScrollAnimationWrapper } from '@/components/ScrollAnimationWrapper';

export default function HowItWorks() {
  const steps = [
    { title: "Fabric Scanning", description: "High-resolution cameras capture fabric images" },
    { title: "AI Analysis", description: "Advanced algorithms detect and classify defects" },
    { title: "Real-time Reporting", description: "Instant feedback on fabric quality" },
    { title: "Data Insights", description: "Comprehensive analytics for process improvement" },
  ];

  return (
    <div className="w-full bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <ScrollAnimationWrapper>
          <motion.h1 
            className="text-4xl font-bold mb-8 text-center tracking-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            How FIDAS Works
          </motion.h1>
        </ScrollAnimationWrapper>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <ScrollAnimationWrapper key={index}>
              <div className="flex items-center">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {index + 1}
                </div>
                <div className="ml-4">
                  <h2 className="text-2xl font-semibold">{step.title}</h2>
                  <p className="text-lg mt-2">{step.description}</p>
                </div>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </div>
  );
}