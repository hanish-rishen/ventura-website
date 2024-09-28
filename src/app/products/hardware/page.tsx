"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ScrollAnimationWrapper } from '@/components/ScrollAnimationWrapper';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function HardwareServices() {
  const services = [
    { name: "Fabric Length Measurement Counter", link: "/products/hardware/fabric-length-counter", image: "/images/DIGITAL-FABRIC-LENGTH-MEASUREMENT-COUNTER.jpg" },
    { name: "Automatic Width Measurement System", link: "/products/hardware/width-measurement-system", image: "/images/DIGITAL-FABRIC-WIDTH-MEASUREMENT.jpeg" },
    { name: "Digital Pick Counter", link: "/products/hardware/digital-pick-counter", image: "/images/DIGITAL-PICK-COUNTER.png" },
    { name: "Automatic Fabric GSM Capturing", link: "/products/hardware/gsm-capturing", image: "/images/GSM-Scale.jpg" },
    { name: "Barcode Scanning & Printing", link: "/products/hardware/barcode-scanning-printing", image: "/images/barcode-printer.jpeg" },
    { name: "Automatic Defect Stickering System", link: "/products/hardware/defect-stickering-system", image: "/images/AUTOMATED-STICKERING-MACHINE.png" },
    { name: "Touch Screen Monitor with Industrial PC", link: "/products/hardware/touchscreen-monitor", image: "/images/pcu.jpg" },
    { name: "Fabric Heat Fuse Labeling Machine", link: "/products/hardware/heat-fuse-labeling-machine", image: "/images/Heat-Fusing-Machine.png" },
  ];

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-blue-50 text-gray-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <ScrollAnimationWrapper>
          <motion.h1 
            className="text-5xl font-bold mb-12 text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hardware Products
          </motion.h1>
        </ScrollAnimationWrapper>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={fadeInUp} className="h-full">
              <Link href={service.link} className="block h-full">
                <div className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg p-8 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group h-full flex flex-col justify-between">
                  <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={service.image}
                      alt={service.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <h2 className="text-xl font-semibold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{service.name}</h2>
                  <div className="flex items-center text-blue-500">
                    <span className="mr-2">Learn More</span>
                    <FaArrowRight />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}