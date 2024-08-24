"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ScrollAnimationWrapper } from '@/components/ScrollAnimationWrapper';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

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
    { icon: <FaFacebook />, name: "Facebook", handle: "@FIDAStech", link: "https://facebook.com/FIDAStech" },
    { icon: <FaTwitter />, name: "Twitter", handle: "@FIDAS_tech", link: "https://twitter.com/FIDAS_tech" },
    { icon: <FaInstagram />, name: "Instagram", handle: "@fidas_technology", link: "https://instagram.com/fidas_technology" },
    { icon: <FaLinkedin />, name: "LinkedIn", handle: "FIDAS Technology", link: "https://linkedin.com/company/fidas-technology" },
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
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

        <ScrollAnimationWrapper>
          <motion.div
            variants={fadeInUp}
            className="mt-16 text-center"
          >
            <h2 className="text-3xl font-semibold mb-4 text-blue-600">Stay Connected</h2>
            <p className="text-lg text-gray-600 mb-8">Follow us on social media for the latest updates, industry insights, and more!</p>
            <motion.button
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Our Community
            </motion.button>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
}