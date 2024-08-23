"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function FidasContent() {
  return (
    <div className="w-full bg-gradient-to-br from-blue-100 to-blue-200 text-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <section className="py-24 space-y-24">
          <motion.h1 
            className="text-7xl font-black mb-8 text-center tracking-tight"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            About FIDAS
          </motion.h1>

          <motion.div 
            className="space-y-8"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <p className="text-3xl font-light leading-relaxed text-center max-w-4xl mx-auto">
              Fabric Inspection & Defect Analysis System (FIDAS) combines multiple inspection-specific IoT devices & software exclusively integrated for real-time on-table fabric inspection purposes.
            </p>
            <div className="text-center">
              <Button variant="outline" size="lg" className="text-xl font-semibold px-12 py-6 rounded-full border-2 hover:bg-blue-600 hover:text-white transition-all duration-300">
                Explore FIDAS
              </Button>
            </div>
          </motion.div>
        </section>

        <section className="py-24 space-y-24">
          <motion.h2 
            className="text-6xl font-bold mb-16 text-center"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            Automotive Seating Fabric Inspection Software
          </motion.h2>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-24"
            variants={staggerChildren}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeInUp}>
              <h3 className="text-4xl font-bold mb-8">What we do</h3>
              <p className="text-2xl leading-relaxed">
                We monitor fabric quality in real-time and suggest cutting decisions to inspectors, maximizing fresh realization and avoiding wastage.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h3 className="text-4xl font-bold mb-8">Step into the Future with FIDAS</h3>
              <ul className="space-y-6 text-2xl">
                {['NO data entry', 'Automatize fabric inspection', 'Reduce manual labour', 'Achieve perfect accuracy', 'Stay compliant'].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <CheckCircle className="text-green-500 mr-4" size={24} />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </section>

        <section className="py-24 space-y-24">
          <motion.h3 
            className="text-5xl font-bold mb-16 text-center"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            How Does FIDAS Work?
          </motion.h3>
          <motion.ul 
            className="space-y-12 text-2xl"
            variants={staggerChildren}
            initial="initial"
            animate="animate"
          >
            {[
              'Connect various fabric inspection devices to the touchscreen monitor.',
              'Fabric checker punches defects, FIDAS calculates points in real-time.',
              'Automatically acquire Fabric Length, Width & Weight using IoT devices.',
              'AI provides real-time downgrade alerts and cutting suggestions.',
              'Automatically grade fabric, generate reports, and print custom codes.'
            ].map((item, index) => (
              <motion.li 
                key={index}
                className="flex items-start"
                variants={fadeInUp}
              >
                <span className="text-5xl font-bold text-blue-600 mr-6">{index + 1}</span>
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </section>

        <section className="py-24">
          <motion.h2 
            className="text-6xl font-bold mb-16 text-center"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            Industry Verticals We Serve
          </motion.h2>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerChildren}
            initial="initial"
            animate="animate"
          >
            {[
              { name: 'Greige', description: 'Greige Fabric Inspection Software', icon: '🧵' },
              { name: 'Knits', description: 'Knitted Fabric Inspection Software', icon: '🧶' },
              { name: 'Denim Fabrics', description: 'Cut Optimization Module', icon: '👖' },
              { name: 'Automotive Fabric', description: 'Seating Fabric Inspection Solutions', icon: '🚗' },
              { name: 'Home Textiles', description: 'Specifically Developed to suit industry needs', icon: '🏠' },
              { name: 'Apparel Manufacturing', description: 'Fabric Inspection for Readymade Garmenting', icon: '👕' }
            ].map((industry, index) => (
              <motion.div 
                key={index} 
                className="bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:bg-opacity-70"
                variants={fadeInUp}
              >
                <div className="p-8">
                  <div className="text-6xl mb-4">{industry.icon}</div>
                  <h4 className="text-2xl font-bold mb-2 text-gray-800">{industry.name}</h4>
                  <p className="text-gray-600">{industry.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
    </div>
  );
}