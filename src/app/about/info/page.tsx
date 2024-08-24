"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ScrollAnimationWrapper } from '@/components/ScrollAnimationWrapper';

export default function CompanyInfo() {
  const history = [
    { year: 2005, event: "Company incorporated as Pragmatic Solutions (P) Ltd to deliver automation solutions for Textile Industry" },
    { year: 2008, event: "Ventura Automation Services Inc was created to focus on Fabric Inspection Software domain within textile industry" },
    { year: 2015, event: "Powerful Fabric Optimization Engine utilizing linear algorithm launched and implemented successfully in finished fabric inspection" },
    { year: 2022, event: "More than 100 Successful FIDAS software implementations across India in various verticals of fabric Inspection" },
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
            Company Information
          </motion.h1>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <ScrollAnimationWrapper>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-lg">To empower textile manufacturers with cutting-edge technology for fabric inspection and quality control.</p>
            </div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
              <p className="text-lg">To be the global leader in AI-driven fabric inspection solutions, revolutionizing the textile industry.</p>
            </div>
          </ScrollAnimationWrapper>
        </div>

        <ScrollAnimationWrapper>
          <h2 className="text-3xl font-bold mb-6 text-center">Our History</h2>
        </ScrollAnimationWrapper>

        <div className="space-y-6">
          {history.map((item, index) => (
            <ScrollAnimationWrapper key={index}>
              <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
                <div className="text-3xl font-bold text-blue-600 mr-6">{item.year}</div>
                <p className="text-lg">{item.event}</p>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </div>
  );
}