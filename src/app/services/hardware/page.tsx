"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ScrollAnimationWrapper } from '@/components/ScrollAnimationWrapper';
import Link from 'next/link';

export default function HardwareServices() {
  const services = [
    { name: "Fabric Length Measurement Counter", link: "/services/hardware/fabric-length-counter" },
    { name: "Automatic Width Measurement System", link: "/services/hardware/width-measurement-system" },
    { name: "Digital Pick Counter", link: "/services/hardware/digital-pick-counter" },
    { name: "Automatic Fabric GSM Capturing", link: "/services/hardware/gsm-capturing" },
    { name: "Barcode Scanning & Printing", link: "/services/hardware/barcode-scanning-printing" },
    { name: "Automatic Defect Stickering System", link: "/services/hardware/defect-stickering-system" },
    { name: "Touch Screen Monitor with Industrial PC", link: "/services/hardware/touchscreen-monitor" },
    { name: "Fabric Heat Fuse Labeling Machine", link: "/services/hardware/heat-fuse-labeling-machine" },
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
            Hardware Services
          </motion.h1>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ScrollAnimationWrapper key={index}>
              <Link href={service.link}>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h2 className="text-2xl font-semibold">{service.name}</h2>
                </div>
              </Link>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </div>
  );
}