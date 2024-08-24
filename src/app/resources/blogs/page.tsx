"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ScrollAnimationWrapper } from '@/components/ScrollAnimationWrapper';

export default function Blogs() {
  const blogs = [
    { title: "The Future of Fabric Inspection", summary: "Exploring upcoming trends in textile quality control" },
    { title: "AI in Textile Manufacturing", summary: "How artificial intelligence is revolutionizing the industry" },
    { title: "Sustainable Practices in Fabric Production", summary: "Balancing quality control with environmental responsibility" },
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
            FIDAS Blog
          </motion.h1>
        </ScrollAnimationWrapper>

        <div className="space-y-8">
          {blogs.map((blog, index) => (
            <ScrollAnimationWrapper key={index}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">{blog.title}</h2>
                <p className="text-lg">{blog.summary}</p>
                <a href="#" className="text-blue-500 hover:underline mt-2 inline-block">Read more</a>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </div>
  );
}