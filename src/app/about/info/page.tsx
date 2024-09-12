"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ScrollAnimationWrapper } from '@/components/ScrollAnimationWrapper';

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
};

export default function CompanyInfo() {
  const history = [
    { year: 2005, event: "Company incorporated as Pragmatic Solutions (P) Ltd to deliver automation solutions for Textile Industry" },
    { year: 2008, event: "Ventura Automation Services Inc was created to focus on Fabric Inspection Software domain within textile industry" },
    { year: 2015, event: "Powerful Fabric Optimization Engine utilizing linear algorithm launched and implemented successfully in finished fabric inspection" },
    { year: 2022, event: "More than 100 Successful FIDAS software implementations across India in various verticals of fabric Inspection" },
    { year: 2010, event: "Launched FIDAS, revolutionizing fabric inspection in India" },
    { year: 2018, event: "Reached milestone of 5 million meters of fabric inspected daily using FIDAS" },
    { year: 2020, event: "Expanded to serve 99% of automotive car seating fabrics inspection in India" },
  ];

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-blue-50 text-gray-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="relative mb-12 overflow-hidden">
          <ScrollAnimationWrapper>
            <motion.h1 
              className="text-5xl font-bold mb-8 text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Company Information
            </motion.h1>
          </ScrollAnimationWrapper>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
            animate={{
              x: ['-200%', '200%'],
              transition: { repeat: Infinity, duration: 10, ease: "linear" },
            }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <ScrollAnimationWrapper>
            <motion.div 
              className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg p-8 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              variants={fadeInUp}
            >
              <h2 className="text-2xl font-semibold mb-4 text-blue-600">Our Mission</h2>
              <p className="text-lg text-gray-600">To empower textile manufacturers with cutting-edge technology for fabric inspection and quality control.</p>
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <motion.div 
              className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg p-8 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              variants={fadeInUp}
            >
              <h2 className="text-2xl font-semibold mb-4 text-blue-600">Our Vision</h2>
              <p className="text-lg text-gray-600">To be the global leader in AI-driven fabric inspection solutions, revolutionizing the textile industry.</p>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>

        <ScrollAnimationWrapper>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400"
          >
            Our History
          </motion.h2>
        </ScrollAnimationWrapper>

        <motion.div
          initial="initial"
          animate="animate"
          className="space-y-6"
        >
          {history.map((item, index) => (
            <ScrollAnimationWrapper key={index}>
              <motion.div 
                variants={fadeInUp}
                className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg p-8 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex items-center"
              >
                <div className="text-3xl font-bold text-blue-600 mr-6">{item.year}</div>
                <p className="text-lg text-gray-600">{item.event}</p>
              </motion.div>
            </ScrollAnimationWrapper>
          ))}
        </motion.div>
      </div>
    </div>
  );
}