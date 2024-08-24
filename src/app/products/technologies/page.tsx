"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ScrollAnimationWrapper } from '@/components/ScrollAnimationWrapper';

export default function Technologies() {
  const technologies = [
    {
      name: "AI-Powered Defect Detection",
      description: "Advanced AI algorithms for real-time defect detection and classification.",
      features: [
        "Real-time alerts for quality downgrades",
        "Automatic grading based on ASTM 4 point system",
        "Defect location tracking for lay and cutting tables"
      ]
    },
    {
      name: "IoT Integration",
      description: "Seamless connection with fabric inspection hardware for comprehensive data collection.",
      features: [
        "Automatic fabric length, width, and weight acquisition",
        "Real-time GSM verification",
        "Foam thickness measurement during lamination"
      ]
    },
    {
      name: "Optimization Algorithms",
      description: "Best-in-class optimization algorithms for maximizing fabric utilization.",
      features: [
        "Within-roll optimization to avoid dual inspection",
        "Batch optimization for increased profitability",
        "Two-piece joining suggestions for maximizing fresh fabric"
      ]
    },
    {
      name: "Data Analytics and Reporting",
      description: "Comprehensive analytics for process improvement and decision-making.",
      features: [
        "360-degree view of quality from yarn to finished fabric",
        "Order-based profitability analysis",
        "Vendor analysis and performance tracking"
      ]
    },
    {
      name: "ERP Integration",
      description: "Seamless integration with existing ERP systems for streamlined operations.",
      features: [
        "Automated roll-wise barcode generation",
        "Real-time data synchronization",
        "Traceability throughout the production process"
      ]
    }
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
            Our Technologies
          </motion.h1>
        </ScrollAnimationWrapper>

        <div className="space-y-12">
          {technologies.map((tech, index) => (
            <ScrollAnimationWrapper key={index}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">{tech.name}</h2>
                <p className="text-lg mb-4">{tech.description}</p>
                <ul className="list-disc pl-5 space-y-2">
                  {tech.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-base">{feature}</li>
                  ))}
                </ul>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </div>
  );
}