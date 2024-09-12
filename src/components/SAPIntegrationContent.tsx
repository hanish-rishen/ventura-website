"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ScrollAnimationWrapper } from '@/components/ScrollAnimationWrapper';
import { FaFileExcel, FaFileCsv, FaCode, FaCheckCircle } from 'react-icons/fa';

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function SAPIntegrationContent() {
  const integrationOptions = [
    { icon: <FaFileExcel />, name: "Excel Integration", description: "Free on SAP without License" },
    { icon: <FaFileCsv />, name: "CSV Integration", description: "Free on SAP without License" },
    { icon: <FaCode />, name: "API Integration", description: "License as per usage" },
  ];

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-blue-50 text-gray-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <ScrollAnimationWrapper>
          <motion.h1 
            className="text-5xl font-bold mb-8 text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            SAP Integration
          </motion.h1>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <motion.p 
            className="text-xl text-center mb-12"
            variants={{ 
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 }
            }}
          >
            FIDAS seamlessly integrates with various versions of SAP, including SAP-B1, SAP-6.0, and SAP S4 Hana.
          </motion.p>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <motion.h2 
            className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400"
            variants={fadeInUp}
          >
            Elevate Your Business with FIDAS
          </motion.h2>
          <motion.p 
            className="text-xl text-center mb-8"
            variants={fadeInUp}
          >
          </motion.p>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <motion.h3 
            className="text-2xl font-bold mb-6 text-center"
            variants={fadeInUp}
          >
            20 Reasons to Choose FIDAS
          </motion.h3>
          <motion.ul 
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12"
            variants={staggerChildren}
          >
            {[
              "Improve Production in Inspection Department",
              "Amazing Cost Benefits",
              "Pre-empts for Corrective Actions",
              "Accomplish Processes That Cannot Be Done Manually",
              "Achieve Accuracy",
              "Adhere to Compliances",
              "Eliminate Routine Manual and Clerical Tasks",
              "Consistent Quality Deliverables... Ensured!!!",
              "Implement Industry Best Practices",
              "Create Work Comfort & Peace of Mind",
              "Increase System Versatility",
              "Happy Customers & Win More Business",
              "Get it Done Through Experts",
              "FIDAS: Your Secret Weapon"
            ].map((reason, index) => (
              <motion.li 
                key={index}
                className="flex items-center space-x-2"
                variants={fadeInUp}
              >
                <FaCheckCircle className="text-green-500" />
                <span>{reason}</span>
              </motion.li>
            ))}
          </motion.ul>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {integrationOptions.map((option, index) => (
            <ScrollAnimationWrapper key={index}>
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-lg"
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 }
                }}
              >
                <div className="text-4xl text-blue-600 mb-4">{option.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{option.name}</h3>
                <p>{option.description}</p>
              </motion.div>
            </ScrollAnimationWrapper>
          ))}
        </div>

        <ScrollAnimationWrapper>
          <motion.h2 
            className="text-3xl font-bold mt-16 mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400"
            variants={fadeInUp}
          >
            Future-Ready Integration
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg mb-4">
            FIDAS paves the way for the future by integrating with systems like:
          </motion.p>
          <motion.ul variants={fadeInUp} className="list-disc pl-5 mb-8">
            {[
              "ASRS (Automated Storage & Recovery System)",
              "Conveyor lines",
              "Automated weighment",
              "Barcode reading and printing",
              "Tex Industry 4.0 readiness"
            ].map((item, index) => (
              <motion.li key={index} className="text-lg text-gray-700">{item}</motion.li>
            ))}
          </motion.ul>
          <motion.p variants={fadeInUp} className="text-lg">
            FIDAS seamlessly integrates with outside world applications, including nominated brand CRMs, SCMs, and automated data from greige fabric manufacturers.
          </motion.p>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
}