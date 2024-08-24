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
        <section className="py-16 space-y-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-1/2 h-96 relative mb-8 md:mb-0 order-1 md:order-1">
              <iframe 
                src="https://lottie.host/embed/88cd69c5-a546-498e-91d6-04d91fe3c78b/Bzh8iDIoca.json"
                className="w-full h-full"
                style={{ border: 'none' }}
              ></iframe>
            </div>

            <div className="w-full md:w-1/2 space-y-8 order-2 md:order-2">
              <ScrollAnimationWrapper>
                <motion.h1 
                  className="text-4xl font-bold mb-4 text-center md:text-left tracking-tight"
                  variants={fadeInUp}
                >
                  <TypeAnimation
                    sequence={[
                      'About FIDAS',
                      1500,
                      'Fabric Inspection',
                      1500,
                      'Defect Analysis',
                      1500,
                      'About FIDAS',
                      1500
                    ]}
                    wrapper="span"
                    speed={40}
                    repeat={Infinity}
                  />
                </motion.h1>
              </ScrollAnimationWrapper>

              <ScrollAnimationWrapper>
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed text-center md:text-left">
                    Fabric Inspection & Defect Analysis System (FIDAS) combines multiple inspection-specific IoT devices & software exclusively integrated for real-time on-table fabric inspection purposes.
                  </p>
                  <div className="text-center md:text-left">
                    <button className="relative inline-flex h-10 items-center justify-center rounded-full border border-blue-800 bg-blue-600 px-6 font-semibold text-white text-sm overflow-hidden">
                      <span className="relative z-10">Explore FIDAS</span>
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 animate-shimmer"></span>
                    </button>
                  </div>
                </div>
              </ScrollAnimationWrapper>
            </div>
          </div>
        </section>

        <section className="py-16 space-y-8">
          <ScrollAnimationWrapper>
            <h2 className="text-3xl font-bold mb-8 text-center">
              Automotive Seating Fabric Inspection Software
            </h2>
          </ScrollAnimationWrapper>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.div 
              className="w-full md:w-1/2 space-y-6 order-2 md:order-1"
              variants={staggerChildren}
            >
              <ScrollAnimationWrapper>
                <div>
                  <h3 className="text-2xl font-bold mb-4">What we do ?</h3>
                  <TypeAnimation
                    sequence={[
                      'We monitor fabric quality in real-time and suggest cutting decisions to inspectors, maximizing fresh realization and avoiding wastage.',
                      7000,
                    ]}
                    wrapper="p"
                    speed={40}
                    repeat={Infinity}
                    className="text-base leading-relaxed"
                    cursor={false}
                  />
                </div>
              </ScrollAnimationWrapper>

              <ScrollAnimationWrapper>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Step into the Future with FIDAS</h3>
                  <motion.ul 
                    className="space-y-3 text-base"
                    variants={staggerChildren}
                  >
                    {['NO data entry', 'Automatize fabric inspection', 'Reduce manual labour', 'Achieve perfect accuracy', 'Stay compliant'].map((item, index) => (
                      <motion.li 
                        key={index}
                        variants={fadeInUp}
                        className="flex items-center"
                      >
                        <CheckCircle className="text-green-500 mr-2" size={16} />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </ScrollAnimationWrapper>
            </motion.div>

            <div className="w-full md:w-1/2 h-96 relative mb-8 md:mb-0 order-1 md:order-2">
              <iframe 
                src="https://lottie.host/embed/4cee5214-6537-4dc1-8e94-cdfbd52d0dc5/YOV0UPWFZq.json"
                className="w-full h-full"
                style={{ border: 'none' }}
              ></iframe>
            </div>
          </div>
        </section>

        <section className="py-16 space-y-16">
          <ScrollAnimationWrapper>
            <motion.h3 
              className="text-3xl font-bold mb-8 text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              How Does FIDAS Work?
            </motion.h3>
          </ScrollAnimationWrapper>

          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-1/2 h-[400px] md:h-[500px] relative mb-8 md:mb-0 order-1 md:order-1">
              <iframe 
                src="https://lottie.host/embed/19d23eb1-283b-463a-8592-fd61cb863cc0/lIIvvuIRkT.json"
                className="w-full h-full"
                style={{ border: 'none' }}
              ></iframe>
            </div>

            <motion.ul 
              className="w-full md:w-1/2 space-y-6 text-base order-2 md:order-2"
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
                      className="text-3xl font-bold text-blue-600 mr-4"
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
          </div>
        </section>

        <section className="py-16">
          <ScrollAnimationWrapper>
            <h2 className="text-3xl font-bold mb-8 text-center">
              Industry Verticals We Serve
            </h2>
          </ScrollAnimationWrapper>

          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div 
              className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 order-2 md:order-1"
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
                    className="bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:bg-opacity-70 h-full"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="p-4 h-full flex flex-col justify-between">
                      <motion.div 
                        className="text-4xl mb-2"
                        animate={floatingAnimation}
                      >
                        {industry.icon}
                      </motion.div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1 text-gray-800">{industry.name}</h4>
                        <p className="text-sm text-gray-600">{industry.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </ScrollAnimationWrapper>
              ))}
            </motion.div>

            <div className="w-full md:w-1/3 h-full relative mb-8 md:mb-0 order-1 md:order-2">
              <iframe 
                src="https://lottie.host/embed/e85a08cc-83ac-4334-a01a-f814336117d8/mteqh6RjoZ.json"
                className="w-full h-[400px] md:h-[600px]"
                style={{ border: 'none' }}
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}