"use client";
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';

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
  color: ['#3B82F6', '#60A5FA', '#3B82F6'],
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
        <section className="py-16 space-y-8">
          <div className="w-full space-y-8">
            <ScrollAnimationWrapper>
              <motion.h1 
                className="text-4xl font-bold mb-4 text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400"
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
                <p className="text-lg leading-relaxed text-center text-gray-600">
                  Fabric Inspection & Defect Analysis System (FIDAS) combines multiple inspection-specific IoT devices & software exclusively integrated for real-time on-table fabric inspection purposes.
                </p>
                <div className="text-center">
                  <Link href="/about/fidas">
                    <button className="relative inline-flex h-10 items-center justify-center rounded-full border border-blue-600 bg-blue-500 px-6 font-semibold text-white text-sm overflow-hidden">
                      <span className="relative z-10">Explore FIDAS</span>
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 animate-shimmer"></span>
                    </button>
                  </Link>
                </div>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </section>

        <section className="py-24 space-y-8">
          <ScrollAnimationWrapper>
            <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400">
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
                  <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400">What we do ?</h3>
                  <TypeAnimation
                    sequence={[
                      'We monitor fabric quality in real-time and suggest cutting decisions to inspectors, maximizing fresh realization and avoiding wastage.',
                      3000,
                    ]}
                    wrapper="p"
                    speed={60}
                    repeat={Infinity}
                    className="text-base leading-relaxed text-gray-600"
                    cursor={true}
                  />
                </div>
              </ScrollAnimationWrapper>

              <ScrollAnimationWrapper>
                <div>
                  <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400">Step into the Future with FIDAS</h3>
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
                        <span className="text-gray-600">{item}</span>
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
              className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400"
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
                      className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400 mr-4"
                      animate={numberAnimation}
                    >
                      {index + 1}
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: (index * 0.1) + 0.2 }}
                      className="text-gray-600"
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
            <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400">
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
                        <h4 className="text-lg font-semibold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400">{industry.name}</h4>
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

        <section className="py-16 space-y-8">
          <ScrollAnimationWrapper>
            <motion.h2 
              className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400"
              variants={fadeInUp}
            >
              Elevate Your Business with FIDAS: The Industry Standard
            </motion.h2>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper>
            <motion.ul 
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              variants={staggerChildren}
            >
              {[
                "Improve production efficiency in inspection department",
                "Faster defect logging and automated grade generation",
                "Real-time online monitoring of inspection production",
                "De facto inspection software for the Indian textile industry",
                "Chosen by multinational companies worldwide",
                "Inspects 99% of automotive car seating fabrics in India",
                "Ensures strict adherence to customer quality terms",
                "100% project success rate over the past 15 years",
                "Guaranteed return on investment",
                "Eliminates routine manual and clerical tasks",
                "Implements industry best practices",
                "Increases system versatility",
                "Integrates seamlessly with third-party applications",
                "Provides pre-emptive corrective actions",
                "Achieves consistent quality deliverables",
                "Enhances overall operational efficiency and productivity"
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start space-x-2"
                  variants={fadeInUp}
                >
                  <CheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </ScrollAnimationWrapper>
        </section>

        <section className="py-16">
          <ScrollAnimationWrapper>
            <motion.h2 
              className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400"
              variants={fadeInUp}
            >
              FIDAS - Integration with 3rd Party Applications
            </motion.h2>
          </ScrollAnimationWrapper>

          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Seamless Integration</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                FIDAS effortlessly connects with a wide array of third-party applications, 
                amplifying its capabilities and adapting fluidly to diverse business environments.
              </p>
              <Link href="/products/sap-integration">
                <motion.button
                  className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Integrations
                </motion.button>
              </Link>
            </motion.div>

            <div className="w-full md:w-1/2">
              <motion.div 
                className="relative w-80 h-80 mx-auto"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {[
                  { name: "SAP S4 HANA", color: "bg-blue-500" },
                  { name: "SALUTO MES", color: "bg-green-500" },
                  { name: "YOUR OWN PORTAL", color: "bg-red-500" },
                  { name: "VENDOR RETURNS DATA", color: "bg-purple-500" },
                  { name: "3rd Party Analytics", color: "bg-indigo-500" },
                  { name: "CUSTOMER SCM CLOUD", color: "bg-teal-500" },
                  { name: "AUTOMATED EMAIL", color: "bg-pink-500" },
                  { name: "WHATSAPP", color: "bg-green-400" }
                ].map((app, index) => (
                  <React.Fragment key={app.name}>
                    <motion.div
                      className="absolute top-1/2 left-1/2 w-[45%] h-[2px] bg-gray-300 origin-left"
                      style={{
                        rotate: `${index * 45}deg`,
                      }}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    />
                    <motion.div
                      className={`absolute w-20 h-20 ${app.color} rounded-full flex items-center justify-center text-white text-xs font-semibold z-10 shadow-lg`}
                      style={{
                        top: `${40 - 45 * Math.cos(index * Math.PI / 4)}%`,
                        left: `${38 + 45 * Math.sin(index * Math.PI / 4)}%`,
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ 
                        opacity: 1, 
                        scale: 1,
                      }}
                      transition={{ 
                        delay: index * 0.1 + 0.5,
                        duration: 0.5,
                      }}
                      whileHover={{
                        scale: 1.1,
                        boxShadow: "0px 0px 8px rgba(0,0,0,0.3)",
                      }}
                    >
                      <span className="text-center leading-tight">{app.name}</span>
                    </motion.div>
                  </React.Fragment>
                ))}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  <motion.div 
                    className="w-28 h-28 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-sm text-center z-20 shadow-xl"
                    whileHover={{ scale: 1.1 }}
                    animate={floatingAnimation}
                  >
                    FIDAS Software
                  </motion.div>
                </motion.div>
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    rotate: 360
                  }}
                  transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}