"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ScrollAnimationWrapper } from '@/components/ScrollAnimationWrapper';
import Image from 'next/image';
import { FaUsers, FaLightbulb, FaCogs, FaHandshake } from 'react-icons/fa';

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
};

export default function AboutUs() {
  const companyValues = [
    { icon: <FaUsers />, title: "Customer-Centric", description: "We prioritize our clients' needs and satisfaction above all else." },
    { icon: <FaLightbulb />, title: "Innovation", description: "We constantly strive to develop cutting-edge solutions for the textile industry." },
    { icon: <FaCogs />, title: "Expertise", description: "Our team has deep insights into textile industry operations." },
    { icon: <FaHandshake />, title: "Collaboration", description: "We work closely with end-users to ensure successful project implementation." },
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
              About Ventura Automation Services
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

        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-16">
          <ScrollAnimationWrapper>
            <motion.div 
              className="w-full md:w-1/2 space-y-6"
              variants={fadeInUp}
            >
              <p className="text-lg leading-relaxed">
                Ventura Automation Services Inc is the undisputed leader in providing Fabric Inspection Software Solutions in India. We are passionate about revolutionizing the textile industry through innovative technology.
              </p>
              <p className="text-lg leading-relaxed">
                We are always in the path of developing innovative solutions for the textile industry. As a result, we have succeeded in maximizing technology in the fabric inspection domain.
              </p>
              <p className="text-lg leading-relaxed">
                We are committed to helping our clients achieve the highest standards of quality and efficiency. Our deployment team has deep insight into how the textile industry operates, working closely at the end-user level to bring up projects, which makes us extremely special.
              </p>
            </motion.div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper>
            <motion.div 
              className="w-full md:w-1/2 h-[400px] relative rounded-lg overflow-hidden"
              variants={fadeInUp}
            >
              <Image
                src="/images/ventura-team.jpg"
                alt="Ventura Team"
                layout="fill"
                objectFit="cover"
              />
            </motion.div>
          </ScrollAnimationWrapper>
        </div>

        <ScrollAnimationWrapper>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400"
          >
            Our Values
          </motion.h2>
          <motion.div
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {companyValues.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg p-8 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-4xl text-blue-600 mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-blue-600">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
}