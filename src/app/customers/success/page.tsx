"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ScrollAnimationWrapper } from '@/components/ScrollAnimationWrapper';

export default function CustomerSuccess() {
  const successStories = [
    { company: "TextileTech Inc.", story: "Reduced defect rate by 40% within 3 months of implementing FIDAS" },
    { company: "FabricMasters Ltd.", story: "Increased production efficiency by 25% and cut costs by 15%" },
    { company: "QualityWeave Co.", story: "Improved customer satisfaction scores from 7.5 to 9.2 out of 10" },
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
            Customer Success Stories
          </motion.h1>
        </ScrollAnimationWrapper>

        <div className="space-y-8">
          {successStories.map((story, index) => (
            <ScrollAnimationWrapper key={index}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">{story.company}</h2>
                <p className="text-lg">{story.story}</p>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </div>
  );
}