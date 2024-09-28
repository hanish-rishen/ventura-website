"use client";
import React, { useEffect, useState } from 'react';
import { motion, Variants, useAnimation } from 'framer-motion';
import { ScrollAnimationWrapper } from '@/components/ScrollAnimationWrapper';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
};

export default function CustomerList() {
  const [isMobile, setIsMobile] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    }
  }, [controls, inView]);

  const customers = [
    { name: "Treves", image: "/images/Treves.jpg" },
    { name: "Nandan", image: "/images/Nandan.jpg" },
    { name: "RSWM", image: "/images/RSWM.jpg" },
    { name: "Tibre", image: "/images/tibre.jpg" },
    { name: "Anubha", image: "/images/anubha.jpg" },
    { name: "BKS", image: "/images/bks.png" },
    { name: "Technocraft", image: "/images/technocraft.jpg" },
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
              Our Valued Customers
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

        <motion.div
          ref={ref}
          initial="initial"
          animate={isMobile ? controls : "animate"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {customers.map((customer, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg p-8 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-600 text-center">{customer.name}</h3>
              <div className="mb-4 flex justify-center h-24 relative w-full">
                <Image
                  src={customer.image}
                  alt={customer.name}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}