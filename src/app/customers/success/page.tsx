"use client";
import React, { useEffect } from 'react';
import { motion, Variants, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
};

const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('animate');
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

export default function CustomerSuccess() {
  const testimonials = [
    {
      name: "Mr. Mahipal Singh Ahada",
      position: "Senior Manager – LNJ Denim",
      quote: "FIDAS is the solution to go if you want to get quick feedback at the floor level and our everyday quality meetings go easy as required information is hand, thanks to FIDAS. It's a small investment compared to the outsized returns you'll get. I would recommend FIDAS software who wants to get actionable information."
    },
    {
      name: "Mr. Sudhakar",
      position: "Group CTO – SPM Industries",
      quote: "Ventura has been supportive to our business for the past 5 years by implementing FIDAS which was tailored to meet our demands. They are reliable, thorough, smart, available and subject matter experts in denim fabric inspection. FIDAS is must have tool for a highly productive customized fabric inspection software."
    },
    {
      name: "Mr. Padam Jain",
      position: "CTO",
      quote: "Our relationship with Ventura Automation has extended well beyond providing fabric inspection software solutions. The deployment team have deep insight of how textile industry operates & they work closely at end user level to bring up the project, which makes them extremely special."
    }
  ];

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-blue-50 text-gray-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="relative mb-12 overflow-hidden">
          <AnimatedSection>
            <h1 
              className="text-5xl font-bold mb-8 text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400"
            >
              What Our Customers Say About FIDAS
            </h1>
          </AnimatedSection>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
            animate={{
              x: ['-200%', '200%'],
              transition: { repeat: Infinity, duration: 10, ease: "linear" },
            }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index}>
              <div
                className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg p-8 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full"
              >
                <div className="relative flex-grow">
                  <FaQuoteLeft className="absolute top-0 left-0 text-blue-200 text-lg opacity-50" />
                  <p className="text-gray-600 pl-6 pr-6 pt-2 pb-2 relative">
                    {testimonial.quote}
                  </p>
                  <FaQuoteRight className="absolute bottom-0 right-0 text-blue-200 text-lg opacity-50" />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-blue-600">{testimonial.name}</h3>
                  <p className="text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}