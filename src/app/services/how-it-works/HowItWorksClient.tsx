"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ScrollAnimationWrapper } from '@/components/ScrollAnimationWrapper';
import Image from 'next/image';
import * as FaIcons from 'react-icons/fa';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
};

interface HowItWorksData {
  mainImage: string;
  steps: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
}

export function HowItWorksClient({ howItWorksData }: { howItWorksData: HowItWorksData }) {
  if (!howItWorksData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-16">
      <ScrollAnimationWrapper>
        <motion.h1 
          className="text-5xl font-bold mb-8 text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400"
          variants={fadeInUp}
        >
          How FIDAS Works
        </motion.h1>
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper>
        <motion.div variants={fadeInUp} className="mb-12 flex justify-center">
          <div className="relative w-full max-w-3xl aspect-w-16 aspect-h-9">
            <Image
              src={howItWorksData.mainImage}
              alt="FIDAS Fabric Inspection Machine"
              width={800}
              height={450}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </motion.div>
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={fadeInUp}
        >
          {howItWorksData.steps.map((step, index) => {
            const IconComponent = FaIcons[step.icon as keyof typeof FaIcons];
            return (
              <motion.div 
                key={index}
                className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg p-8 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                variants={fadeInUp}
              >
                <div className="text-4xl text-blue-600 mb-4">
                  {IconComponent && <IconComponent />}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-blue-600">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
}