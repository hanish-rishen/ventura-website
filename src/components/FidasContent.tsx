"use client";

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';

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

const marqueeAnimation = {
  animate: {
    x: [0, -1920],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 50,
        ease: "linear",
      },
    },
  },
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
  trustedByTitle: string;
  trustedCompanies: Array<{
    asset: { url: string };
    alt: string;
  }>;
  expertiseTitle: string;
  videoUrl: string;
  features: Array<{
    title: string;
    description: string;
  }>;
  testimonial: {
    quote: string;
    name: string;
    position: string;
    company: string;
  };
  whyChooseTitle: string;
  whyChoosePoints: Array<{
    title: string;
    description: string;
  }>;
  industryVerticalsTitle: string;
  industryVerticals: Array<{
    icon: string;
    name: string;
    description: string;
  }>;
  industryVerticalsIframeSrc: string;
  whyChooseFidas: Array<{
    title: string;
    description: string;
  }>;
}

async function getFidasContentData(): Promise<FidasContentData> {
  const fidasContentData = await client.fetch(`*[_type == "fidasContentPage"][0]{
    mainTitle,
    mainDescription,
    trustedByTitle,
    trustedCompanies,
    expertiseTitle,
    videoUrl,
    features,
    testimonial,
    whyChooseFidas,
    whyChoosePoints,
    industryVerticalsTitle,
    industryVerticals,
    industryVerticalsIframeSrc
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
    <div className="w-full bg-gradient-to-br from-gray-50 to-blue-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-0">
        

        {/* Trusted By Section */}
        <section className="py-16">
          <ScrollAnimationWrapper>
            <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400">
              {pageData.trustedByTitle}
            </h2>
          </ScrollAnimationWrapper>
          
          <div className="relative overflow-hidden">
            <div className="flex">
              <motion.div 
                className="flex space-x-12 whitespace-nowrap"
                animate="animate"
                variants={marqueeAnimation}
              >
                {/* First set of images */}
                {pageData.trustedCompanies.map((company, index) => (
                  <div 
                    key={`first-${index}`} 
                    className="flex-shrink-0 flex items-center justify-center min-w-[200px]"
                  >
                    <Image
                      src={urlForImage(company.asset)?.url() || ''}
                      alt={company.alt || 'Trusted Company'}
                      width={150}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {pageData.trustedCompanies.map((company, index) => (
                  <div 
                    key={`second-${index}`} 
                    className="flex-shrink-0 flex items-center justify-center min-w-[200px]"
                  >
                    <Image
                      src={urlForImage(company.asset)?.url() || ''}
                      alt={company.alt || 'Trusted Company'}
                      width={150}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-16">
          <ScrollAnimationWrapper>
            <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400">
              {pageData.expertiseTitle}
            </h2>
          </ScrollAnimationWrapper>

          <div className="relative bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl p-4 md:p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left Column */}
              <div className="lg:w-1/2 space-y-8">
                {/* Video Section */}
                <div className="relative w-full rounded-lg overflow-hidden shadow-lg bg-white h-[400px] md:h-[500px]">
                  <iframe
                    src={pageData.videoUrl}
                    title="Fabric Inspection Process"
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {pageData.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3 bg-white bg-opacity-70 p-4 rounded-lg shadow-sm">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex-shrink-0 flex items-center justify-center">
                        <span className="text-blue-600">✓</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">{feature.title}</h4>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column */}
              <div className="lg:w-1/2 space-y-6">
                <h3 className="text-2xl font-semibold text-blue-600">
                  Your Trusted Partner for Accurate Fabric Insights
                </h3>
                              
                {/* Testimonial */}
                <div className="bg-white bg-opacity-70 rounded-lg p-6 shadow-sm">
                  <p className="mb-4 italic text-gray-700">
                    &ldquo;{pageData.testimonial.quote}&rdquo;
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between">
                    <div>
                      <p className="font-semibold text-blue-600">{pageData.testimonial.name}</p>
                      <p className="text-sm text-gray-500">{pageData.testimonial.position} – {pageData.testimonial.company}</p>
                    </div>
                    <Link href="/customers/success" className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors">
                      <span className="mr-2">More Testimonials</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Unique Selling Points */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-blue-600">{pageData.whyChooseTitle}</h4>
                  <div className="space-y-3">
                    {pageData.whyChooseFidas.map((point, index) => (
                      <div key={index} className="flex items-start space-x-3 bg-white bg-opacity-60 p-4 rounded-lg">
                        <div className="flex-shrink-0 mt-1">
                          <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-800">{point.title}</h5>
                          <p className="text-sm text-gray-600">{point.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end mb-6">
                  <Link href="/resources/blogs" className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors group">
                    <span className="mr-2">Explore Blogs</span>
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-4">
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
      </div>
      <section className="py-2 mt-8 md:mt-0 space-y-4">
          <div className="w-full space-y-8">
            <ScrollAnimationWrapper>
              <motion.h1
                className="text-3xl md:text-4xl font-bold mb-4 text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400"
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
              <div className="space-y-8">
                <p className="text-base md:text-lg leading-relaxed text-center text-gray-600">
                  {pageData.mainDescription}
                </p>
                <div className="text-center">
                  <Link href="/about/fidas">
                    <button className="mb-24 relative inline-flex h-10 items-center justify-center rounded-full border border-blue-600 bg-blue-500 px-4 md:px-6 font-semibold text-white text-sm overflow-hidden">
                      <span className="relative z-10">Explore FIDAS</span>
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 animate-shimmer"></span>
                    </button>
                  </Link>
                </div>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </section>
    </div>
  );
}