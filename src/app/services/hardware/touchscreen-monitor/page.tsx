"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ScrollAnimationWrapper } from '@/components/ScrollAnimationWrapper';

export default function TouchscreenMonitor() {
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
            Touch Screen Monitor with Industrial PC
          </motion.h1>
        </ScrollAnimationWrapper>

        <div className="space-y-8">
          <ScrollAnimationWrapper>
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>15 Inch Or Larger Touchscreen Monitor for Fabric Defect Entry</li>
              <li>Projected Capacitive Touch Screen Glass</li>
              <li>Toughened Glass that will not be affected by hand nails</li>
              <li>-5° c to 60°c temperature range</li>
              <li>Pre-Calibrated 10 point touch</li>
              <li>300 Milliseconds response</li>
              <li>Ideal for dusty environment</li>
              <li>Metal Enclosure can be supplied for fixing in inspection machine</li>
              <li>1 Year Return to Factory warranty</li>
            </ul>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
}