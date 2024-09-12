"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ScrollAnimationWrapper } from '@/components/ScrollAnimationWrapper';
import Image from 'next/image';
import { FaUsers, FaLightbulb, FaCogs, FaHandshake, FaCheckCircle } from 'react-icons/fa';

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

  const achievements = [
    "At least 5 million meters of fabric is inspected everyday using FIDAS software and FIDAS allied products",
    "We provide real-time inspection system, Length, Width, Weight is captured real-time basis using our own IoT devices and provides real-time gradation to Fabric Checkers",
    "We manufacture our own electronic IoT devices such as Length Counters, Width Measurement System, Marking Systems & related Electronics",
    "Our Electronic Length Counters are operational for more than 15 years",
    "Ventura Automation is the only company in India that has more than 87 successful Fabric Inspection Software Implementations spanning over 17 years",
    "FIDAS is De-Facto inspection software for Indian Textile Industry",
    "FIDAS has been chosen for many multinational companies",
    "FIDAS has replaced European Fabric Inspection Applications in many organizations",
    "99% of automotive car seating fabrics in India is inspected through FIDAS",
    "FIDAS is at-least 35% lesser cost in terms of comparable/equivalent European software products"
  ];

  const integrations = [
    "SAP-B1",
    "SAP-6.0",
    "SAP S4 Hana"
  ];

  const integrationOptions = [
    "Through Excel (Free on SAP without License)",
    "Through CSV (Free on SAP without License)",
    "Through API (License as per usage)"
  ];

  const futureIntegrations = [
    "ASRS (Automated Storage & Recovery System)",
    "Conveyor line",
    "Automated Weighment, Automated Barcode Reading & Barcode Printing",
    "Automated Trolley Doffing",
    "Tex Industry 4.0 ready"
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
              className="w-full space-y-6"
              variants={fadeInUp}
            >
              <p className="text-lg leading-relaxed text-justify">
                Ventura Automation Services Inc is the undisputed leader in providing Fabric Inspection Software Solutions in India. We are passionate about revolutionizing the textile industry through innovative technology.
              </p>
              <p className="text-lg leading-relaxed text-justify">
                We are Subject Matter Experts in Fabric Inspection. We possess deep domain knowledge and retain experts in our core team. We are stubborn in management's core objectives and will never allow things to go wrong.
              </p>
              <p className="text-lg leading-relaxed text-justify">
                Our specialty is that we provide real-time inspection systems. Length, Width, and Weight are captured on a real-time basis using our own IoT devices, providing real-time gradation to Fabric Checkers.
              </p>
            </motion.div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper>
            <motion.div 
              className="w-full relative rounded-lg overflow-hidden"
              variants={fadeInUp}
            >
              <Image
                src="/images/ROUTINE WORKS.gif"
                alt="Roll Stacking Process"
                width={700}
                height={700}
                objectFit="contain"
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

        <ScrollAnimationWrapper>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold mt-16 mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400"
          >
            Our Achievements
          </motion.h2>
          <motion.ul
            variants={fadeInUp}
            className="space-y-4 list-disc pl-5"
          >
            {achievements.map((achievement, index) => (
              <motion.li key={index} className="text-lg text-gray-700">{achievement}</motion.li>
            ))}
          </motion.ul>        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold mt-16 mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400"
          >
            SAP Integration Experience
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg mb-4">
            We have vast experience in successfully integrating with various versions of SAP:
          </motion.p>
          <motion.ul variants={fadeInUp} className="list-disc pl-5 mb-8">
            {integrations.map((integration, index) => (
              <motion.li key={index} className="text-lg text-gray-700">{integration}</motion.li>
            ))}
          </motion.ul>
          <motion.p variants={fadeInUp} className="text-lg mb-4">
            Various options for Integrating with SAP:
          </motion.p>
          <motion.ul variants={fadeInUp} className="list-disc pl-5">
            {integrationOptions.map((option, index) => (
              <motion.li key={index} className="text-lg text-gray-700">{option}</motion.li>
            ))}
          </motion.ul>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold mt-16 mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400"
          >
            Future-Ready Integration
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg mb-4">
            FIDAS paves the way for future. We have experience in integrating the following systems:
          </motion.p>
          <motion.ul variants={fadeInUp} className="list-disc pl-5">
            {futureIntegrations.map((integration, index) => (
              <motion.li key={index} className="text-lg text-gray-700">{integration}</motion.li>
            ))}
          </motion.ul>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <motion.div
            variants={fadeInUp}
            className="mt-16 p-8 bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4 text-blue-600">Contact Us</h2>
            <p className="text-lg mb-2">Regis Xavier</p>
            <p className="text-lg mb-2">Email: regi@fidas.in</p>
            <p className="text-lg mb-2">Website: www.fidas.in</p>
          </motion.div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold mt-16 mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400"
          >
            Why Choose Ventura Automation?
          </motion.h2>
          <motion.ul variants={fadeInUp} className="space-y-4 list-disc pl-5">
            <motion.li className="text-lg text-gray-700">Your Search is Over! Ventura Automation is a fully dedicated organization specializing in Fabric Inspection Software.</motion.li>
            <motion.li className="text-lg text-gray-700">Every day, at least 5 million meters of fabric are inspected using FIDAS software.</motion.li>
            <motion.li className="text-lg text-gray-700">We are subject matter experts in fabric inspection, retaining a team of domain experts committed to our core objectives.</motion.li>
            <motion.li className="text-lg text-gray-700">One Stop Solution for your Fabric IoT devices, including length counters, width measurement systems, and marking systems.</motion.li>
            <motion.li className="text-lg text-gray-700">Ventura Automation stands out as the only company in India with over 127 successful fabric inspection software implementations spanning 19 years.</motion.li>
            <motion.li className="text-lg text-gray-700">FIDAS has replaced European fabric inspection applications in several organizations, including LNJ Bhilwara Group and MAAG Tex (Germany).</motion.li>
            <motion.li className="text-lg text-gray-700">FIDAS boasts a 100% project success rate over the past 15 years, guaranteeing a return on investment.</motion.li>
            <motion.li className="text-lg text-gray-700">We focus on minimizing wastage, ensuring traceability, and caring for every stakeholder involved in the project.</motion.li>
          </motion.ul>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold mt-16 mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400"
          >
            FIDAS Benefits
          </motion.h2>
          <motion.ul variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Accomplish processes that cannot be done manually",
              "Achieve Accuracy",
              "Adhere to Compliances",
              "Eliminate routine manual and clerical tasks",
              "Consistent quality deliverables",
              "Implement Industry Best Practices",
              "Create Work Comfort & Peace of Mind",
              "Increase System versatility",
              "Happy customers & Win more business",
              "Get it Done through experts"
            ].map((benefit, index) => (
              <motion.li key={index} className="flex items-center space-x-2">
                <FaCheckCircle className="text-green-500" />
                <span>{benefit}</span>
              </motion.li>
            ))}
          </motion.ul>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
}
