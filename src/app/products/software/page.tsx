"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ScrollAnimationWrapper } from '@/components/ScrollAnimationWrapper';
import { FaCheckCircle } from 'react-icons/fa';

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
};

export default function SoftwareProducts() {
  const products = [
    {
      name: "Greige Fabric Inspection",
      description: "Digitized fabric quality assurance for greige fabrics, automatically calculates fabric grade according to ASTM 4 point system.",
      features: [
        "Sort wise, loom wise, weaver wise quality analysis and reporting",
        "Linkage of Greige defects to final inspection of finished fabrics",
        "Weaving Job worker and purchased fabrics realization Reporting",
        "Integrates with your ERP, Roll wise barcode for fabric traceability"
      ]
    },
    {
      name: "Knitted Fabric Inspection",
      description: "Specialized module for knitted fabric inspection adhering to garmenting unit quality requirements.",
      features: [
        "Real-time GSM verification during production",
        "Online Recording of defects and calculation of points per 100 square meter/yards",
        "Can be implemented directly on compacting machines",
        "Barcode / QR Code generation for style/roll-wise quality data"
      ]
    },
    {
      name: "Denim Fabric Inspection & Optimization",
      description: "Unique software with within-roll optimization feature, avoiding dual inspection.",
      features: [
        "Batch optimization algorithm rated best in the industry",
        "Real-time optimization during inspection",
        "Two-piece joining option for maximizing fresh fabric",
        "Every panel cut is tracked back to rolls for quality assurance"
      ]
    },
    {
      name: "Automotive Seating Fabric Inspection",
      description: "Comprehensive quality verification from loom/warp knitting production to final inspection.",
      features: [
        "Defect tracking from greige stage to final inspection",
        "Automatic foam thickness measurement during lamination",
        "Automatic assignment of compensation meters to buyers",
        "Panel cut tracking for quality assurance"
      ]
    },
    {
      name: "Home Furnishing Fabric Inspection",
      description: "Focuses on utility-based categorization for end-use, with automated grading and cut plan generation.",
      features: [
        "Automatic grading based on style number and fabric type",
        "Integrated camera for evidence and quality approval",
        "Defect location information for lay and cutting table",
        "Shade grouping information for every inspected roll"
      ]
    },
    {
      name: "Fabric Inspection for Readymade Garment Units",
      description: "Versatile inspection system for multiple fabric varieties with brand-specific grading.",
      features: [
        "Automatic grading according to style number and fabric type",
        "Determination of further processing or 100% inspection requirement",
        "Integrated camera for debit note creation and quality approval",
        "Best-in-class piece joining option"
      ]
    }
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
              Associated Software Products
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

        <div className="space-y-12">
          {products.map((product, index) => (
            <ScrollAnimationWrapper key={index}>
              <motion.div
                variants={fadeInUp}
                className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg p-8 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <h2 className="text-2xl font-semibold mb-4 text-blue-600">{product.name}</h2>
                <p className="text-lg mb-6 text-gray-600">{product.description}</p>
                <ul className="space-y-3">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <FaCheckCircle className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </div>
  );
}