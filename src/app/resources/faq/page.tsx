"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ScrollAnimationWrapper } from '@/components/ScrollAnimationWrapper';
import { TypeAnimation } from 'react-type-animation';

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function FAQ() {
  const faqs = [
    { question: "What is FIDAS?", answer: "FIDAS is a Fabric Inspection & Defect Analysis System that uses AI to improve textile quality control." },
    { question: "How does FIDAS work?", answer: "FIDAS uses high-resolution cameras and AI algorithms to detect and classify fabric defects in real-time." },
    { question: "Can FIDAS integrate with our existing systems?", answer: "Yes, FIDAS is designed to integrate seamlessly with most existing textile production systems." },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white text-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <ScrollAnimationWrapper>
          <motion.h1 
            className="text-5xl font-bold mb-16 text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Frequently Asked Questions
          </motion.h1>
        </ScrollAnimationWrapper>

        <motion.div 
          className="space-y-12"
          variants={staggerChildren}
        >
          {faqs.map((faq, index) => (
            <ScrollAnimationWrapper key={index}>
              <motion.div 
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={fadeInUp}
              >
                <h2 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400">{faq.question}</h2>
                <TypeAnimation
                  sequence={[
                    faq.answer,
                    3000,
                  ]}
                  wrapper="p"
                  speed={50}
                  className="text-lg text-gray-600"
                  repeat={1}
                />
              </motion.div>
            </ScrollAnimationWrapper>
          ))}
        </motion.div>
      </div>
    </div>
  );
}