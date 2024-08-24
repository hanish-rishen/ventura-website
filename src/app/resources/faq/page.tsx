"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ScrollAnimationWrapper } from '@/components/ScrollAnimationWrapper';

export default function FAQ() {
  const faqs = [
    { question: "What is FIDAS?", answer: "FIDAS is a Fabric Inspection & Defect Analysis System that uses AI to improve textile quality control." },
    { question: "How does FIDAS work?", answer: "FIDAS uses high-resolution cameras and AI algorithms to detect and classify fabric defects in real-time." },
    { question: "Can FIDAS integrate with our existing systems?", answer: "Yes, FIDAS is designed to integrate seamlessly with most existing textile production systems." },
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
            Frequently Asked Questions
          </motion.h1>
        </ScrollAnimationWrapper>

        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <ScrollAnimationWrapper key={index}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">{faq.question}</h2>
                <p className="text-lg">{faq.answer}</p>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </div>
  );
}