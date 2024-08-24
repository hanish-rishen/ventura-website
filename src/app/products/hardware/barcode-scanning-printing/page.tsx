"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ScrollAnimationWrapper } from '@/components/ScrollAnimationWrapper';
import { FaArrowRight } from 'react-icons/fa';

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
};

export default function BarcodeScanningPrinting() {
  const steps = [
    { title: "Customization", description: "Create customized Barcodes or QR Codes as per business needs" },
    { title: "Printing", description: "Utilize Printer Pooling for efficient printing on inspection machines" },
    { title: "Management", description: "Access Re-Printing Options through the administration module" },
    { title: "Integration", description: "Implement Weighment attached QR Code printing before packing" },
    { title: "Flexibility", description: "Decide printout type at early stages of order processing" },
    { title: "Scanning", description: "Utilize Roll Scanning for Jobcard, Batch, or Roll identification" },
    { title: "Traceability", description: "Leverage FIDAS Tracking module for complete fabric traceability" },
  ];

  return (
    <div className="w-full bg-gray-50 text-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="relative mb-12 overflow-hidden">
          <motion.h1 
            className="text-5xl font-bold text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Barcode Scanning & Printing System
          </motion.h1>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
            animate={{
              x: ['-200%', '200%'],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "linear",
            }}
            style={{
              width: '200%',
            }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <ScrollAnimationWrapper>
            <motion.div className="space-y-6" variants={fadeInUp}>
              <p className="text-lg leading-relaxed">
                Ventura Automation offers a state-of-the-art Barcode Scanning & Printing System. This versatile solution enhances traceability, streamlines inventory management, and improves overall operational efficiency in textile manufacturing processes.
              </p>
              <h2 className="text-2xl font-semibold">Key Features</h2>
              <ul className="list-none pl-5 space-y-3">
                {["Customized Barcode/QR Code printing", "Printer Pooling for inspection machines", "Re-Printing Options", "Weighment attached QR Code printing", "Flexible printout type selection", "Roll Scanning capabilities", "FIDAS Tracking integration"].map((feature, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="text-blue-500">✓</span>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper>
            <div className="h-96 bg-gray-200 rounded-lg">
              {/* Placeholder for your animated image */}
            </div>
          </ScrollAnimationWrapper>
        </div>

        <h2 className="text-3xl font-bold mb-10 text-center">How It Works</h2>
        <div className="relative overflow-hidden mb-16" style={{ height: '250px' }}>
          <motion.div 
            className="flex absolute"
            animate={{
              x: [0, -2800],
            }}
            transition={{
              x: {
                repeat: Infinity,
                duration: 35,
                ease: "linear",
              },
            }}
            style={{
              width: '5600px', // Doubled the width to create a seamless loop
            }}
          >
            {[...steps, ...steps].map((step, index) => (
              <div key={index} className="flex items-center">
                <motion.div 
                  className="bg-white p-6 rounded-lg shadow-md relative overflow-hidden flex-shrink-0"
                  style={{ width: '300px', height: '200px' }}
                >
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-teal-400" />
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-sm">{step.description}</p>
                </motion.div>
                {index < steps.length * 2 - 1 && (
                  <div className="flex-shrink-0 w-8 flex items-center justify-center">
                    <FaArrowRight className="text-blue-500 text-xl" />
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}