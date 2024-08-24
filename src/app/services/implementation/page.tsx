"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ScrollAnimationWrapper } from '@/components/ScrollAnimationWrapper';

export default function Implementation() {
  const steps = [
    { title: "Initial Consultation", description: "We assess your specific needs and requirements" },
    { title: "Customized Solution Design", description: "Our team designs a tailored FIDAS setup for your facility" },
    { title: "Hardware Installation", description: "We install and configure the necessary hardware components" },
    { title: "Software Integration", description: "FIDAS software is integrated with your existing systems" },
    { title: "Staff Training", description: "We provide comprehensive training for your team" },
    { title: "Ongoing Support", description: "Our support team ensures smooth operation and addresses any issues" },
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
            Implementation Methodology
          </motion.h1>
        </ScrollAnimationWrapper>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <ScrollAnimationWrapper key={index}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">{`Step ${index + 1}: ${step.title}`}</h2>
                <p className="text-lg">{step.description}</p>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </div>
  );
}