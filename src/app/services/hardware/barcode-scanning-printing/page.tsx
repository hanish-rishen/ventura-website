"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ScrollAnimationWrapper } from '@/components/ScrollAnimationWrapper';

export default function BarcodeScanningPrinting() {
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
            Barcode Scanning & Printing
          </motion.h1>
        </ScrollAnimationWrapper>

        <div className="space-y-8">
          <ScrollAnimationWrapper>
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Customized Barcodes or QR Codes printing as per business needs</li>
              <li>Printer Pooling for inspection machines</li>
              <li>Re-Printing Options available at administration module</li>
              <li>Weighment attached QR Code printing before packing</li>
              <li>Type of printout can be decided at very early stages of order</li>
              <li>Roll Scanning option available for Jobcard / Batch / Roll</li>
              <li>FIDAS Tracking module utilizes barcoding solutions for complete fabric traceability</li>
            </ul>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
}