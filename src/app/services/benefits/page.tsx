"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ScrollAnimationWrapper } from '@/components/ScrollAnimationWrapper';

export default function Benefits() {
  const benefits = [
    { title: "Improved Quality Control", description: "Detect defects with higher accuracy and consistency" },
    { title: "Increased Efficiency", description: "Streamline the inspection process and reduce manual labor" },
    { title: "Cost Reduction", description: "Minimize waste and rework, leading to significant cost savings" },
    { title: "Data-Driven Insights", description: "Gain valuable insights to optimize your production processes" },
    { title: "Enhanced Customer Satisfaction", description: "Deliver higher quality products to your customers" },
    { title: "Competitive Advantage", description: "Stay ahead in the market with cutting-edge technology" },
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
            Benefits of FIDAS
          </motion.h1>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <ScrollAnimationWrapper key={index}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">{benefit.title}</h2>
                <p className="text-lg">{benefit.description}</p>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </div>
  );
}