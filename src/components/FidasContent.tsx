"use client";

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';

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

interface FidasContentData {
  mainTitle: string;
  mainDescription: string;
  automotiveTitle: string;
  whatWeDoTitle: string;
  whatWeDoDescription: string;
  futureWithFidasTitle: string;
  futureWithFidasPoints: string[];
  automotiveIframeSrc: string;
  howItWorksTitle: string;
  howItWorksSteps: string[];
  howItWorksIframeSrc: string;
  industryVerticalsTitle: string;
  industryVerticals: { icon: string; name: string; description: string }[];
  industryVerticalsIframeSrc: string;
  businessElevationTitle: string;
  businessElevationPoints: string[];
  integrationTitle: string;
  integrationSubtitle: string;
  integrationDescription: string;
  integrationApps: { name: string; color: string }[];
}

async function getFidasContentData(): Promise<FidasContentData> {
  const fidasContentData = await client.fetch(`*[_type == "fidasContentPage"][0]{
    mainTitle,
    mainDescription,
    automotiveTitle,
    whatWeDoTitle,
    whatWeDoDescription,
    futureWithFidasTitle,
    futureWithFidasPoints,
    automotiveIframeSrc,
    howItWorksTitle,
    howItWorksSteps,
    howItWorksIframeSrc,
    industryVerticalsTitle,
    industryVerticals,
    industryVerticalsIframeSrc,
    businessElevationTitle,
    businessElevationPoints,
    integrationTitle,
    integrationSubtitle,
    integrationDescription,
    integrationApps
  }`);
  
  return fidasContentData;
}

const colorClasses = [
  'bg-blue-500',
  'bg-green-500',
  'bg-red-500',
  'bg-yellow-500',
  'bg-purple-500',
  'bg-indigo-500',
  'bg-pink-500',
  'bg-teal-500'
];

export default function FidasContent() {
  const [pageData, setPageData] = React.useState<FidasContentData | null>(null);

  React.useEffect(() => {
    getFidasContentData().then(data => setPageData(data));
  }, []);

  if (!pageData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="py-16 space-y-8">
          <div className="w-full space-y-8">
            <ScrollAnimationWrapper>
              <motion.h1 
                className="text-4xl font-bold mb-4 text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400"
                variants={fadeInUp}
              >
                <TypeAnimation
                  sequence={[
                    pageData.mainTitle,
                    1500,
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
                  {pageData.mainDescription}
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
              {pageData.automotiveTitle}
            </h2>
          </ScrollAnimationWrapper>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <motion.div 
              className="w-full md:w-1/2 space-y-6 order-2 md:order-1"
              variants={staggerChildren}
            >
              <ScrollAnimationWrapper>
                <div className="w-full">
                  <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400">{pageData.whatWeDoTitle}</h3>
                  <div className="h-20">
                    <TypeAnimation
                      sequence={[
                        pageData.whatWeDoDescription,
                        3000,
                      ]}
                      wrapper="p"
                      speed={60}
                      repeat={Infinity}
                      className="text-base leading-relaxed text-gray-600"
                      cursor={true}
                    />
                  </div>
                </div>
              </ScrollAnimationWrapper>

              <ScrollAnimationWrapper>
                <div>
                  <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400">{pageData.futureWithFidasTitle}</h3>
                  <motion.ul 
                    className="space-y-3 text-base"
                    variants={staggerChildren}
                  >
                    {pageData.futureWithFidasPoints.map((item, index) => (
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
                src={pageData.automotiveIframeSrc}
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
              {pageData.howItWorksTitle}
            </motion.h3>
          </ScrollAnimationWrapper>

          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-1/2 h-[400px] md:h-[500px] relative mb-8 md:mb-0 order-1 md:order-1">
              <iframe 
                src={pageData.howItWorksIframeSrc}
                className="w-full h-full"
                style={{ border: 'none' }}
              ></iframe>
            </div>

            <motion.ul 
              className="w-full md:w-1/2 space-y-6 text-base order-2 md:order-2"
              variants={staggerChildren}
            >
              {pageData.howItWorksSteps.map((item, index) => (
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
              {pageData.industryVerticalsTitle}
            </h2>
          </ScrollAnimationWrapper>

          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div 
              className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 order-2 md:order-1"
              variants={staggerChildren}
            >
              {pageData.industryVerticals.map((industry, index) => (
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
                src={pageData.industryVerticalsIframeSrc}
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
              {pageData.businessElevationTitle}
            </motion.h2>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper>
            <motion.ul 
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              variants={staggerChildren}
            >
              {pageData.businessElevationPoints.map((item, index) => (
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
              {pageData.integrationTitle}
            </motion.h2>
          </ScrollAnimationWrapper>

          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-600">{pageData.integrationSubtitle}</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {pageData.integrationDescription}
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
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0">
                  {pageData.integrationApps.map((app, index) => {
                    const randomColor = colorClasses[Math.floor(Math.random() * colorClasses.length)];
                    return (
                      <React.Fragment key={app.name}>
                        <div
                          className="absolute top-1/2 left-1/2 w-[45%] h-[2px] bg-gray-300 origin-left"
                          style={{
                            transform: `rotate(${index * 45}deg)`,
                          }}
                        />
                        <motion.div
                          className={`absolute w-20 h-20 ${randomColor} rounded-full flex items-center justify-center text-white text-xs font-semibold z-10 shadow-lg`}
                          style={{
                            top: `${40 - 45 * Math.cos(index * Math.PI / 4)}%`,
                            left: `${38 + 45 * Math.sin(index * Math.PI / 4)}%`,
                          }}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                          whileHover={{
                            scale: 1.1,
                            boxShadow: "0px 0px 8px rgba(0,0,0,0.3)",
                          }}
                        >
                          <span className="text-center leading-tight">{app.name}</span>
                        </motion.div>
                      </React.Fragment>
                    );
                  })}
                </div>
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
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}