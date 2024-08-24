"use client";
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

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

const floatingAnimation = {
  y: [0, -10, 0],
  transition: {
    y: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const numberAnimation = {
  scale: [1, 1.2, 1],
  color: ['#2563EB', '#3B82F6', '#2563EB'],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

const buttonShimmerAnimation = {
  background: ['linear-gradient(45deg, #3B82F6 0%, #60A5FA 50%, #3B82F6 100%)', 'linear-gradient(45deg, #60A5FA 0%, #3B82F6 50%, #60A5FA 100%)'],
  transition: {
    background: {
      duration: 2,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

const buttonShineAnimation = {
  backgroundPosition: ['200% 50%', '-200% 50%'],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "linear"
  }
};

const ScrollAnimationWrapper = ({ children }: { children: React.ReactNode }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    } else {
      controls.start("initial");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={controls}
      variants={fadeInUp}
    >
      {children}
    </motion.div>
  );
};

export default function FidasContent() {
  return (
    <div className="w-full bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <section className="py-24 space-y-24">
          <ScrollAnimationWrapper>
            <motion.h1 
              className="text-7xl font-black mb-8 text-center tracking-tight"
              variants={fadeInUp}
            >
              <TypeAnimation
                sequence={[
                  'About FIDAS',
                  1000,
                  'Fabric Inspection',
                  1000,
                  'Defect Analysis',
                  1000,
                  'About FIDAS',
                  1000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.h1>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper>
            <div className="space-y-8">
              <p className="text-3xl font-light leading-relaxed text-center max-w-4xl mx-auto">
                Fabric Inspection & Defect Analysis System (FIDAS) combines multiple inspection-specific IoT devices & software exclusively integrated for real-time on-table fabric inspection purposes.
              </p>
              <div className="text-center">
                <button className="relative inline-flex h-14 items-center justify-center rounded-full border border-blue-800 bg-blue-600 px-8 font-semibold text-white overflow-hidden">
                  <span className="relative z-10">Explore FIDAS</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 animate-shimmer"></span>
                </button>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </section>

        <section className="py-24 space-y-24">
          <ScrollAnimationWrapper>
            <h2 className="text-6xl font-bold mb-16 text-center">
              Automotive Seating Fabric Inspection Software
            </h2>
          </ScrollAnimationWrapper>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-24"
            variants={staggerChildren}
          >
            <ScrollAnimationWrapper>
              <div>
                <h3 className="text-4xl font-bold mb-8">What we do ?</h3>
                <TypeAnimation
                  sequence={[
                    'We monitor fabric quality in real-time and suggest cutting decisions to inspectors, maximizing fresh realization and avoiding wastage.',
                    5000,
                  ]}
                  wrapper="p"
                  speed={50}
                  repeat={Infinity}
                  className="text-2xl leading-relaxed"
                  cursor={false}
                />
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper>
              <div>
                <h3 className="text-4xl font-bold mb-8">Step into the Future with FIDAS</h3>
                <motion.ul 
                  className="space-y-6 text-2xl"
                  variants={staggerChildren}
                >
                  {['NO data entry', 'Automatize fabric inspection', 'Reduce manual labour', 'Achieve perfect accuracy', 'Stay compliant'].map((item, index) => (
                    <motion.li 
                      key={index}
                      variants={fadeInUp}
                      className="flex items-center"
                    >
                      <CheckCircle className="text-green-500 mr-4" size={24} />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </ScrollAnimationWrapper>
          </motion.div>
        </section>

        <section className="py-24 space-y-24">
          <ScrollAnimationWrapper>
            <motion.h3 
              className="text-5xl font-bold mb-16 text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              How Does FIDAS Work?
            </motion.h3>
          </ScrollAnimationWrapper>
          <motion.ul 
            className="space-y-12 text-2xl"
            variants={staggerChildren}
          >
            {[
              'Connect various fabric inspection devices to the touchscreen monitor.',
              'Fabric checker punches defects, FIDAS calculates points in real-time.',
              'Automatically acquire Fabric Length, Width & Weight using IoT devices.',
              'AI provides real-time downgrade alerts and cutting suggestions.',
              'Automatically grade fabric, generate reports, and print custom codes.'
            ].map((item, index) => (
              <ScrollAnimationWrapper key={index}>
                <motion.li 
                  className="flex items-start"
                  variants={fadeInUp}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <motion.span 
                    className="text-5xl font-bold text-blue-600 mr-6"
                    animate={numberAnimation}
                  >
                    {index + 1}
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: (index * 0.1) + 0.2 }}
                  >
                    {item}
                  </motion.span>
                </motion.li>
              </ScrollAnimationWrapper>
            ))}
          </motion.ul>
        </section>

        <section className="py-24">
          <ScrollAnimationWrapper>
            <h2 className="text-6xl font-bold mb-16 text-center">
              Industry Verticals We Serve
            </h2>
          </ScrollAnimationWrapper>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerChildren}
          >
            {[
              { name: 'Greige', description: 'Greige Fabric Inspection Software', icon: '🧵' },
              { name: 'Knits', description: 'Knitted Fabric Inspection Software', icon: '🧶' },
              { name: 'Denim Fabrics', description: 'Cut Optimization Module', icon: '👖' },
              { name: 'Automotive Fabric', description: 'Seating Fabric Inspection Solutions', icon: '🚗' },
              { name: 'Home Textiles', description: 'Specifically Developed to suit industry needs', icon: '🏠' },
              { name: 'Apparel Manufacturing', description: 'Fabric Inspection for Readymade Garmenting', icon: '👕' }
            ].map((industry, index) => (
              <ScrollAnimationWrapper key={index}>
                <motion.div 
                  className="bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:bg-opacity-70 h-full"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="p-8 h-full flex flex-col justify-between">
                    <motion.div 
                      className="text-6xl mb-4"
                      animate={floatingAnimation}
                    >
                      {industry.icon}
                    </motion.div>
                    <div>
                      <h4 className="text-2xl font-bold mb-2 text-gray-800">{industry.name}</h4>
                      <p className="text-gray-600">{industry.description}</p>
                    </div>
                  </div>
                </motion.div>
              </ScrollAnimationWrapper>
            ))}
          </motion.div>
        </section>
      </div>
    </div>
  );
}