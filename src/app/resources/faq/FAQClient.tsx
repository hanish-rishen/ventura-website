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

interface FAQ {
  _id: string;
  question: string;
  answer: string;
}

export function FAQClient({ faqs }: { faqs: FAQ[] }) {
  return (
    <motion.div 
      className="space-y-4"
      variants={staggerChildren}
    >
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <ScrollAnimationWrapper key={faq._id}>
            <motion.div variants={fadeInUp}>
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400 flex justify-between items-center text-left">
                  <span className="text-left">{faq.question}</span>
                  <FaChevronDown className="text-blue-600 transition-transform duration-200 ml-auto flex-shrink-0" />
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
  );
}