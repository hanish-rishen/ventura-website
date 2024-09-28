"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ScrollAnimationWrapper } from '@/components/ScrollAnimationWrapper';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FaChevronDown } from 'react-icons/fa';

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
          className="space-y-4"
          variants={staggerChildren}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <ScrollAnimationWrapper key={index}>
                <motion.div variants={fadeInUp}>
                  <AccordionItem value={`item-${index}`}>
                    <AccordionTrigger className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400 flex justify-between items-center">
                      <span>{faq.question}</span>
                      <FaChevronDown className="text-blue-600 transition-transform duration-200 ml-auto" />
                    </AccordionTrigger>
                    <AccordionContent className="text-lg text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              </ScrollAnimationWrapper>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </div>
  );
}