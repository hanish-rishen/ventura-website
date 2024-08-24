"use client";
import React, { useEffect } from 'react';
import { motion, Variants, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaComments, FaCogs, FaDesktop, FaCode, FaUserGraduate, FaHeadset } from 'react-icons/fa';

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
};

const staggerChildren: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Implementation() {
  const steps = [
    { icon: <FaComments />, title: "Initial Consultation", description: "We assess your specific needs and requirements." },
    { icon: <FaCogs />, title: "Customized Solution Design", description: "Our team designs a tailored FIDAS setup for your facility." },
    { icon: <FaDesktop />, title: "Hardware Installation", description: "We install and configure the necessary hardware components." },
    { icon: <FaCode />, title: "Software Integration", description: "FIDAS software is integrated with your existing systems." },
    { icon: <FaUserGraduate />, title: "Staff Training", description: "We provide comprehensive training for your team." },
    { icon: <FaHeadset />, title: "Ongoing Support", description: "Our support team ensures smooth operation and addresses any issues." },
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    }
  }, [controls, inView]);

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-blue-50 text-gray-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="relative mb-12 overflow-hidden">
          <motion.h1 
            className="text-5xl font-bold mb-8 text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Implementation Methodology
          </motion.h1>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
            animate={{
              x: ['-200%', '200%'],
              transition: { repeat: Infinity, duration: 10, ease: "linear" },
            }}
          />
        </div>

        <motion.div
          ref={ref}
          initial="initial"
          animate={controls}
          variants={staggerChildren}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg p-8 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-4xl text-blue-600 mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600">{`Step ${index + 1}: ${step.title}`}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}