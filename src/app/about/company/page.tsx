"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ScrollAnimationWrapper } from '@/components/ScrollAnimationWrapper';

export default function AboutUs() {
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
            About Us
          </motion.h1>
        </ScrollAnimationWrapper>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 space-y-6">
            <ScrollAnimationWrapper>
              <p className="text-lg leading-relaxed">
                Ventura Automation Services Inc is the undisputed leader in providing Fabric Inspection Software Solutions in India. We are passionate about revolutionizing the textile industry through innovative technology.
              </p>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper>
              <p className="text-lg leading-relaxed">
                We are always in the path of developing innovative solutions for the textile industry. As a result, we have succeeded in maximizing technology in the fabric inspection domain.
              </p>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper>
              <p className="text-lg leading-relaxed">
                We are committed to helping our clients achieve the highest standards of quality and efficiency. Our deployment team has deep insight into how the textile industry operates, working closely at the end-user level to bring up projects, which makes us extremely special.
              </p>
            </ScrollAnimationWrapper>
          </div>

          <div className="w-full md:w-1/2 h-[400px] relative">
            {/* Replace placeholder with actual team image */}
            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
              Ventura Team Image
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}