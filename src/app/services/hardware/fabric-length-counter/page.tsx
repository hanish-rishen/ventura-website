"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ScrollAnimationWrapper } from '@/components/ScrollAnimationWrapper';

export default function FabricLengthCounter() {
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
            Fabric Length Measurement Counter
          </motion.h1>
        </ScrollAnimationWrapper>

        <div className="space-y-8">
          <ScrollAnimationWrapper>
            <p className="text-lg leading-relaxed">
              Ventura Automation has indigenously developed a digital fabric length measurement counter to suit specific needs of fabric manufacturing companies. The fabric length is measured and communicated to the computer systems on real-time basis.
            </p>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper>
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Real-time length measurement</li>
              <li>Direct communication with computer systems</li>
              <li>Customized for fabric manufacturing needs</li>
              <li>High accuracy and reliability</li>
            </ul>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
}