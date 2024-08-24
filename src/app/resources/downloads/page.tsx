"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ScrollAnimationWrapper } from '@/components/ScrollAnimationWrapper';

export default function Downloads() {
  const downloads = [
    { name: "FIDAS Brochure", description: "Comprehensive overview of FIDAS capabilities" },
    { name: "Technical Specifications", description: "Detailed technical information about FIDAS" },
    { name: "Case Studies", description: "Real-world examples of FIDAS implementation" },
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
            Downloads
          </motion.h1>
        </ScrollAnimationWrapper>

        <div className="space-y-8">
          {downloads.map((download, index) => (
            <ScrollAnimationWrapper key={index}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">{download.name}</h2>
                <p className="text-lg mb-4">{download.description}</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                  Download
                </button>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </div>
  );
}