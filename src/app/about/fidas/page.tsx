"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ScrollAnimationWrapper } from '../../../components/ScrollAnimationWrapper';

export default function WhatIsFIDAS() {
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
            What is FIDAS?
          </motion.h1>
        </ScrollAnimationWrapper>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 space-y-6">
            <ScrollAnimationWrapper>
              <p className="text-lg leading-relaxed">
                FIDAS (Fabric Inspection & Defect Analysis System) is an innovative solution designed to revolutionize the fabric inspection process. It is the de facto software for fabric inspection in India, with over 100 successful implementations across the country for 17 years since its inception.
              </p>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper>
              <p className="text-lg leading-relaxed">
                FIDAS combines multiple inspection-specific IoT devices & software exclusively integrated for real-time on-table fabric inspection purposes. It enables textile manufacturers to significantly improve their quality control processes, maximize fresh fabric realization, and avoid wastage.
              </p>
            </ScrollAnimationWrapper>
          </div>

          <div className="w-full md:w-1/2 h-[400px] relative">
            {/* Replace placeholder with actual FIDAS image or animation */}
            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
              FIDAS System Image
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}