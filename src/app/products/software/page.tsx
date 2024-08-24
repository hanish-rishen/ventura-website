"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ScrollAnimationWrapper } from '@/components/ScrollAnimationWrapper';

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
    <div className="w-full bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <ScrollAnimationWrapper>
          <motion.h1 
            className="text-4xl font-bold mb-8 text-center tracking-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Associated Software Products
          </motion.h1>
        </ScrollAnimationWrapper>

        <div className="space-y-12">
          {products.map((product, index) => (
            <ScrollAnimationWrapper key={index}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">{product.name}</h2>
                <p className="text-lg mb-4">{product.description}</p>
                <ul className="list-disc pl-5 space-y-2">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-base">{feature}</li>
                  ))}
                </ul>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </div>
  );
}