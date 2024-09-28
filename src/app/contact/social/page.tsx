"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ScrollAnimationWrapper } from '@/components/ScrollAnimationWrapper';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
};

const floatingIcon: Variants = {
  animate: {
    y: [0, -5, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function SocialMedia() {
  const socialPlatforms = [
    { icon: <FaFacebook />, name: "Facebook", handle: "@fidas.in", link: "https://www.facebook.com/fidas.in" },
    { icon: <FaTwitter />, name: "Twitter", handle: "@fidas_in", link: "https://twitter.com/fidas_in" },
    { icon: <FaLinkedin />, name: "LinkedIn", handle: "Ventura Automation Services", link: "https://www.linkedin.com/company/ventura-automation-services/" },
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
              Connect With Us
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

        <ScrollAnimationWrapper>
          <motion.div
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {socialPlatforms.map((platform, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg p-8 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <motion.div variants={floatingIcon} animate="animate" className="text-4xl text-blue-600 mb-4">{platform.icon}</motion.div>
                <h3 className="text-xl font-semibold mb-2 text-blue-600">{platform.name}</h3>
                <p className="text-gray-600 mb-4">{platform.handle}</p>
                <a href={platform.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Follow Us</a>
              </motion.div>
            ))}
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
}