"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ScrollAnimationWrapper } from '@/components/ScrollAnimationWrapper';

export default function DigitalPickCounter() {
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
            Digital Pick Counter
          </motion.h1>
        </ScrollAnimationWrapper>

        <div className="space-y-8">
          <ScrollAnimationWrapper>
            <p className="text-lg leading-relaxed">
              Measuring and recording of fabric properties manually is a tedious and time-consuming task. Especially when measuring fabric thread density in warp and weft way requires a special skill. We at Ventura Automation Services Inc, have developed a software to interface with this pick counter to automate this process.
            </p>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper>
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Automated thread density measurement</li>
              <li>Software interface for easy data recording</li>
              <li>Accurate warp and weft measurements</li>
              <li>Time-saving solution</li>
            </ul>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
}