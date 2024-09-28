"use client";
import React, { useEffect } from 'react';
import { motion, Variants, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCamera, FaRobot, FaChartLine, FaDatabase } from 'react-icons/fa';
import Image from 'next/image';

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
};

const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('animate');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={controls}
      variants={fadeInUp}
    >
      {children}
    </motion.div>
  );
};

export default function HowItWorks() {
  const steps = [
    { icon: <FaCamera />, title: "Fabric Scanning", description: "High-resolution cameras capture fabric images for detailed analysis." },
    { icon: <FaRobot />, title: "AI Analysis", description: "Advanced algorithms detect and classify defects with high accuracy." },
    { icon: <FaChartLine />, title: "Real-time Reporting", description: "Instant feedback on fabric quality for immediate action." },
    { icon: <FaDatabase />, title: "Data Insights", description: "Comprehensive analytics for continuous process improvement." },
  ];

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-blue-50 text-gray-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="relative mb-12 overflow-hidden">
          <AnimatedSection>
            <h1 className="text-5xl font-bold mb-8 text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400">
              How FIDAS Works
            </h1>
          </AnimatedSection>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
            animate={{
              x: ['-200%', '200%'],
              transition: { repeat: Infinity, duration: 10, ease: "linear" },
            }}
          />
        </div>

        <AnimatedSection>
          <div className="mb-12 flex justify-center">
            <div className="relative w-full max-w-3xl aspect-w-16 aspect-h-9">
              <Image
                src="/images/FIDAS - 1.jpg"
                alt="FIDAS Fabric Inspection Machine"
                width={800}
                height={450}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <AnimatedSection key={index}>
              <div className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg p-8 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-4xl text-blue-600 mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-blue-600">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}