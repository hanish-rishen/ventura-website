"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ScrollAnimationWrapper } from '@/components/ScrollAnimationWrapper';

export default function WidthMeasurementSystem() {
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
            Automatic Width Measurement System
          </motion.h1>
        </ScrollAnimationWrapper>

        <div className="space-y-8">
          <ScrollAnimationWrapper>
            <p className="text-lg leading-relaxed">
              As a part of having integrated data collection system, Ventura Automation has developed a real-time fabric width measurement system that can be deployed in fabric inspection machines, process house production lines, and in compacting machines for knitting where width measurement is crucial and alerted when excess or less width is detected.
            </p>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper>
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Real-time width measurement</li>
              <li>Deployable in various machines</li>
              <li>Alerts for width deviations</li>
              <li>Integrated data collection</li>
            </ul>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
}