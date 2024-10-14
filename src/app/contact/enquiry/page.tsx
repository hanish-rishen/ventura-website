"use client";
import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { ScrollAnimationWrapper } from '@/components/ScrollAnimationWrapper';
import { FaUser, FaEnvelope, FaBuilding, FaCommentAlt } from 'react-icons/fa';

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
};

export default function Enquiry() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [enquiry, setEnquiry] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent('Enquiry Form Submission');
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\nEnquiry Details: ${enquiry}`);
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=regi@fidas.in&su=${subject}&body=${body}`, '_blank');
  };

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-blue-50 text-gray-800 min-h-screen">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-16">
        <div className="relative mb-12 overflow-hidden">
          <ScrollAnimationWrapper>
            <motion.h1 
              className="text-4xl font-bold mb-8 text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Make an Enquiry
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

        <ScrollAnimationWrapper>
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg p-8 rounded-xl border border-gray-200 shadow-lg"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="flex items-center text-sm font-medium text-gray-700 mb-1">
                  <FaUser className="mr-2 text-blue-600" />
                  Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-300" 
                  required 
                />
              </div>
              <div>
                <label htmlFor="email" className="flex items-center text-sm font-medium text-gray-700 mb-1">
                  <FaEnvelope className="mr-2 text-blue-600" />
                  Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-300" 
                  required 
                />
              </div>
              <div>
                <label htmlFor="company" className="flex items-center text-sm font-medium text-gray-700 mb-1">
                  <FaBuilding className="mr-2 text-blue-600" />
                  Company
                </label>
                <input 
                  type="text" 
                  id="company" 
                  name="company" 
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-300" 
                />
              </div>
              <div>
                <label htmlFor="enquiry" className="flex items-center text-sm font-medium text-gray-700 mb-1">
                  <FaCommentAlt className="mr-2 text-blue-600" />
                  Enquiry Details
                </label>
                <textarea 
                  id="enquiry" 
                  name="enquiry" 
                  rows={6} 
                  value={enquiry}
                  onChange={(e) => setEnquiry(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-300" 
                  required
                ></textarea>
              </div>
              <div>
                <motion.button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Submit Enquiry
                </motion.button>
              </div>
            </form>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
}