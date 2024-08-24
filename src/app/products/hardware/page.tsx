"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ScrollAnimationWrapper } from '@/components/ScrollAnimationWrapper';
import Link from 'next/link';

export default function HardwareProducts() {
  const products = [
    {
      name: "Fabric Length Measurement Counter",
      description: "Indigenously developed digital fabric length measurement counter for real-time length measurement and communication to computer systems.",
      link: "/services/hardware/fabric-length-counter"
    },
    {
      name: "Automatic Width Measurement System",
      description: "Real-time fabric width measurement system for deployment in fabric inspection machines, process house production lines, and compacting machines.",
      link: "/services/hardware/width-measurement-system"
    },
    {
      name: "Digital Pick Counter",
      description: "Automates the process of measuring fabric thread density in warp and weft way.",
      link: "/services/hardware/digital-pick-counter"
    },
    {
      name: "Automatic Fabric GSM Capturing",
      description: "Real-time GSM measurement with 10 milligram accuracy and variation alerts.",
      link: "/services/hardware/gsm-capturing"
    },
    {
      name: "Barcode Scanning & Printing",
      description: "Customized barcode and QR code printing solutions for fabric traceability.",
      link: "/services/hardware/barcode-scanning-printing"
    },
    {
      name: "Automatic Defect Stickering System",
      description: "USB-operated fabric label applicator for defect marking.",
      link: "/services/hardware/defect-stickering-system"
    },
    {
      name: "Touch Screen Monitor with Industrial PC",
      description: "15-inch or larger touchscreen monitor for fabric defect entry, ideal for dusty environments.",
      link: "/services/hardware/touchscreen-monitor"
    },
    {
      name: "Fabric Heat Fuse Labeling Machine",
      description: "Pneumatically activated heat fuse labeling machine for fabric labeling.",
      link: "/services/hardware/heat-fuse-labeling-machine"
    },
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
            Hardware Products
          </motion.h1>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <ScrollAnimationWrapper key={index}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">{product.name}</h2>
                <p className="text-lg mb-4">{product.description}</p>
                <Link href={product.link} className="text-blue-500 hover:underline">
                  Learn More
                </Link>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </div>
  );
}