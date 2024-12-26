"use client";
import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { PortableText } from '@portabletext/react';
import { ScrollAnimationWrapper } from '@/components/ScrollAnimationWrapper';
import { FaCheckCircle } from 'react-icons/fa';
import * as FaIcons from 'react-icons/fa';

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
};

interface CompanyData {
  introduction: string;
  teamImage: string;
  companyValues: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  achievements: any[];
  sapIntegration: any[];
  futureIntegration: any[];
  contactUs: {
    title: string;
    description: string;
  };
}

export function CompanyClient({ companyData }: { companyData: CompanyData }) {
  if (!companyData) {
    return <div>Loading...</div>;
  }

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

        {/* Update the layout section */}
        <div className="flex flex-col gap-12 mb-16">
          <ScrollAnimationWrapper>
            <motion.div 
              className="w-full space-y-8"  // Added space-y-8 for spacing between title and image
              variants={fadeInUp}
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400"
              >
                Our Team
              </motion.h2>
              <div className="relative rounded-lg overflow-hidden">
                {companyData.teamImage && (
                  <Image
                    src={companyData.teamImage}
                    alt="Our Team"
                    width={700}
                    height={700}
                    className="w-full"
                    objectFit="contain"
                  />
                )}
              </div>
            </motion.div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper>
            <motion.div 
              className="w-full space-y-6"
              variants={fadeInUp}
            >
              <p className="text-lg leading-relaxed text-justify">
                {companyData.introduction}
              </p>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>

        {companyData.companyValues && companyData.companyValues.length > 0 && (
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
              {companyData.companyValues.map((value, index) => {
                const IconComponent = FaIcons[value.icon as keyof typeof FaIcons];
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg p-8 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <div className="text-4xl text-blue-600 mb-4">
                      {IconComponent && <IconComponent />}
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-blue-600">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </ScrollAnimationWrapper>
        )}

        {companyData.achievements && companyData.achievements.length > 0 && (
          <ScrollAnimationWrapper>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-bold mt-16 mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400"
            >
              Our Achievements
            </motion.h2>
            <motion.div variants={fadeInUp} className="prose max-w-none list-disc pl-5">
              <PortableText 
                value={companyData.achievements}
                components={{
                  list: {
                    bullet: ({children}) => <ul className="list-disc pl-5">{children}</ul>,
                  },
                }}
              />
            </motion.div>
          </ScrollAnimationWrapper>
        )}

        {companyData.sapIntegration && companyData.sapIntegration.length > 0 && (
          <ScrollAnimationWrapper>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-bold mt-16 mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400"
            >
              SAP Integration Experience
            </motion.h2>
            <motion.div variants={fadeInUp} className="prose max-w-none list-disc pl-5">
              <PortableText 
                value={companyData.sapIntegration}
                components={{
                  list: {
                    bullet: ({children}) => <ul className="list-disc pl-5">{children}</ul>,
                  },
                }}
              />
            </motion.div>
          </ScrollAnimationWrapper>
        )}

        {companyData.futureIntegration && companyData.futureIntegration.length > 0 && (
          <ScrollAnimationWrapper>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-bold mt-16 mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400"
            >
              Future-Ready Integration
            </motion.h2>
            <motion.div variants={fadeInUp} className="prose max-w-none list-disc pl-5">
              <PortableText 
                value={companyData.futureIntegration}
                components={{
                  list: {
                    bullet: ({children}) => <ul className="list-disc pl-5">{children}</ul>,
                  },
                }}
              />
            </motion.div>
          </ScrollAnimationWrapper>
        )}

        {companyData.contactUs && (
          <ScrollAnimationWrapper>
            <motion.div
              variants={fadeInUp}
              className="mt-16 p-8 bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-4 text-blue-600">{companyData.contactUs.title}</h2>
              <div className="text-lg whitespace-pre-line">{companyData.contactUs.description}</div>
            </motion.div>
          </ScrollAnimationWrapper>
        )}
        {/* Removed FIDAS Benefits section */}
      </div>
    </div>
  );
}
