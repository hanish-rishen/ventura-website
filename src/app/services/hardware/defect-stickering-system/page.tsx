"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ScrollAnimationWrapper } from '@/components/ScrollAnimationWrapper';

export default function DefectStickeringSystem() {
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
            Automatic Defect Stickering System
          </motion.h1>
        </ScrollAnimationWrapper>

        <div className="space-y-8">
          <ScrollAnimationWrapper>
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Fabric Label Applicator operated via USB port connected to Inspection PC and activated using FIDAS software</li>
              <li>Industrial Push Button manual defect labeling purposes</li>
              <li>Can be retrofitted on any Fabric Inspection Machine</li>
              <li>USB / RS-232 Connectivity Option</li>
              <li>Metal bolds for fixing in machine rod</li>
              <li>1 Year Manufacturer Warranty</li>
            </ul>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
}