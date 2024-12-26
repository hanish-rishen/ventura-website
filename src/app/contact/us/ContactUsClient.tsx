"use client";

import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaTimes } from 'react-icons/fa';
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';

const fadeInUp: Variants = {
  initial: { 
    opacity: 1, // Changed from 0
    y: 0 // Changed from 60
  },
  animate: { 
    opacity: 1, 
    y: 0 
  },
};

const floatingIcon: Variants = {
  animate: {
    y: [0, -5, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

interface ContactUsData {
  address: string;
  phone: string;
  email: string;
}

export function ContactUsFormWithReCaptcha({ contactUsData }: { contactUsData: ContactUsData | null }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [message, setMessage] = useState('');
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const { executeRecaptcha } = useGoogleReCaptcha();

  // Sample interests (you can move this to Sanity schema later)
  const availableInterests = [
    { name: 'FIDAS Software', tag: 'software' },
    { name: 'Hardware Solutions', tag: 'hardware' },
    { name: 'Technical Support', tag: 'support' },
    { name: 'Business Inquiry', tag: 'business' },
    { name: 'Partnership', tag: 'partnership' },
    { name: 'Product Demo', tag: 'demo' },
  ];

  const toggleInterest = (tag: string) => {
    setSelectedInterests(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!executeRecaptcha) {
      console.log('Execute recaptcha not available yet');
      return;
    }

    try {
      // This will trigger the reCAPTCHA v3 verification
      const token = await executeRecaptcha('contact_form');
      
      if (token) {
        // Continue with form submission
        if (contactUsData?.email) {
          const subject = encodeURIComponent('Contact Form Submission');
          const interestsText = selectedInterests.length > 0 
            ? `\n\nInterested in: ${selectedInterests.join(', ')}`
            : '';
          const body = encodeURIComponent(
            `First Name: ${firstName}
            Last Name: ${lastName}
            Work Email: ${workEmail}
            Phone Number: ${phoneNumber}
            Job Title: ${jobTitle}
            Company: ${companyName}
            
            Message: ${message}${interestsText}`
          );
          window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${contactUsData.email}&su=${subject}&body=${body}`, '_blank');
        }
      }
    } catch (error) {
      console.error('Error executing reCAPTCHA:', error);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {/* Interested In Section */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Interested In
        </label>
        <div className="flex flex-wrap gap-2">
          {availableInterests.map((interest) => (
            <motion.button
              key={interest.tag}
              type="button"
              onClick={() => toggleInterest(interest.tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedInterests.includes(interest.tag)
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {interest.name}
              {selectedInterests.includes(interest.tag) && (
                <FaTimes className="inline-block ml-2 w-3 h-3" />
              )}
            </motion.button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
          <input 
            type="text" 
            id="firstName" 
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-300" 
            required
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
          <input 
            type="text" 
            id="lastName" 
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-300" 
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="workEmail" className="block text-sm font-medium text-gray-700 mb-1">Work Email</label>
        <input 
          type="email" 
          id="workEmail" 
          value={workEmail}
          onChange={(e) => setWorkEmail(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-300" 
          required
        />
      </div>

      <div>
        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">Mobile Phone Number</label>
        <input 
          type="tel" 
          id="phoneNumber" 
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-300" 
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
          <input 
            type="text" 
            id="jobTitle" 
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-300" 
            required
          />
        </div>
        <div>
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
          <input 
            type="text" 
            id="companyName" 
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-300" 
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
        <textarea 
          id="message" 
          name="message" 
          rows={4} 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-300"
        ></textarea>
      </div>
      
      <motion.button
        type="submit"
        className="w-full px-6 py-3 rounded-lg text-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Send Message
      </motion.button>
    </form>
  );
}

// Wrap the main component with the ReCAPTCHA provider
export function ContactUsClient({ contactUsData }: { contactUsData: ContactUsData | null }) {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
    >
      <div className="w-full bg-gradient-to-br from-gray-50 to-blue-50 text-gray-800 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Title Section - No ScrollAnimationWrapper */}
          <div className="relative mb-12 overflow-hidden">
            <motion.h1 
              className="text-5xl font-bold mb-8 text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400"
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Contact Us
            </motion.h1>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
              animate={{
                x: ['-200%', '200%'],
                transition: { repeat: Infinity, duration: 10, ease: "linear" },
              }}
            />
          </div>

          {/* Content Section - No ScrollAnimationWrapper */}
          <motion.div
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {/* Left Column - Form */}
            <motion.div
              variants={fadeInUp}
              className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg p-10 rounded-2xl border border-gray-200 shadow-xl"
            >
              <h2 className="text-3xl font-semibold mb-8 text-blue-600">Get in Touch</h2>
              <ContactUsFormWithReCaptcha contactUsData={contactUsData} />
            </motion.div>

            {/* Right Column - Contact Info */}
            <motion.div
              variants={fadeInUp}
              className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg p-10 rounded-2xl border border-gray-200 shadow-xl h-fit"
            >
              <h2 className="text-3xl font-semibold mb-8 text-blue-600">Contact Information</h2>
              <div className="space-y-6">
                {contactUsData?.address && (
                  <div className="flex items-center">
                    <motion.div variants={floatingIcon} animate="animate">
                      <FaMapMarkerAlt className="text-blue-600 mr-4 text-2xl" />
                    </motion.div>
                    <p className="text-lg"><strong>Address:</strong> {contactUsData.address}</p>
                  </div>
                )}
                {contactUsData?.phone && (
                  <div className="flex items-center">
                    <motion.div variants={floatingIcon} animate="animate">
                      <FaPhoneAlt className="text-blue-600 mr-4 text-2xl" />
                    </motion.div>
                    <p className="text-lg"><strong>Phone:</strong> {contactUsData.phone}</p>
                  </div>
                )}
                {contactUsData?.email && (
                  <div className="flex items-center">
                    <motion.div variants={floatingIcon} animate="animate">
                      <FaEnvelope className="text-blue-600 mr-4 text-2xl" />
                    </motion.div>
                    <p className="text-lg"><strong>Email:</strong> {contactUsData.email}</p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </GoogleReCaptchaProvider>
  );
}
