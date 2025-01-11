"use client";

import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaTimes } from 'react-icons/fa';

const fadeInUp: Variants = {
  initial: { 
    opacity: 1, 
    y: 0 
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

interface FormspreeResponse {
  ok: boolean;
  errors?: Array<{
    code: string;
    field?: string;
    message: string;
  }>;
}

export function ContactUsFormWithReCaptcha({ contactUsData }: { contactUsData: ContactUsData | null }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [message, setMessage] = useState('');
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [otherInterest, setOtherInterest] = useState('');
  const [hoveredInterest, setHoveredInterest] = useState<string | null>(null);

  const availableInterests = [
    { 
      name: 'FIDAS Software', 
      tag: 'software',
      description: 'Our flagship fabric inspection and data analysis solution'
    },
    { 
      name: 'Hardware Solutions', 
      tag: 'hardware',
      description: 'Cutting-edge hardware for fabric inspection systems'
    },
    { 
      name: 'Technical Support', 
      tag: 'support',
      description: '24/7 technical assistance and customer support'
    },
    { 
      name: 'Business Inquiry', 
      tag: 'business',
      description: 'Partnership opportunities and business collaboration'
    },
    { 
      name: 'Partnership', 
      tag: 'partnership',
      description: 'Strategic alliances and integration possibilities'
    },
    { 
      name: 'Product Demo', 
      tag: 'demo',
      description: 'Live demonstration of our products and solutions'
    },
    { 
      name: 'Others', 
      tag: 'others',
      description: 'Custom requirements or specific inquiries'
    }
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
    setSubmitError(null);
    setIsSubmitting(true);

    try {
      const formData = {
        firstName,
        lastName,
        email: workEmail,
        phoneNumber,
        jobTitle,
        companyName,
        message,
        interests: selectedInterests.join(', '),
        ...(selectedInterests.includes('others') && { otherInterest }),
        _subject: `New contact form submission from ${firstName} ${lastName}`
      };

      const response = await fetch('https://formspree.io/f/xwppwzlq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Reset form fields
        setFirstName('');
        setLastName('');
        setWorkEmail('');
        setPhoneNumber('');
        setJobTitle('');
        setCompanyName('');
        setMessage('');
        setSelectedInterests([]);
        setOtherInterest('');
      } else {
        const result = await response.json();
        console.error('Formspree error:', result);
        setSubmitError('Failed to submit form. Please try again or contact us directly.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitError('An unexpected error occurred. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-50 p-6 rounded-xl"
        >
          <h3 className="text-2xl font-semibold text-green-600 mb-2">Thank You!</h3>
          <p className="text-green-700">Your message has been sent successfully.</p>
        </motion.div>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Interested In
        </label>
        <div className="flex flex-wrap gap-2 mb-2">
          {availableInterests.map((interest) => (
            <div key={interest.tag} className="relative inline-flex flex-col items-center">
              <motion.button
                type="button"
                onClick={() => toggleInterest(interest.tag)}
                onMouseEnter={() => setHoveredInterest(interest.tag)}
                onMouseLeave={() => setHoveredInterest(null)}
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
              {hoveredInterest === interest.tag && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute z-10 w-48 p-2 text-sm text-white bg-gray-800 rounded-md shadow-lg bottom-full mb-2"
                >
                  {interest.description}
                  <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full">
                    <div className="border-[6px] border-transparent border-t-gray-800"></div>
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>
        {selectedInterests.includes('others') && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-2"
          >
            <input
              type="text"
              placeholder="Please specify your interest"
              value={otherInterest}
              onChange={(e) => setOtherInterest(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-300"
            />
          </motion.div>
        )}
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
      
      {submitError && (
        <div className="text-red-600 text-sm">
          {submitError}
        </div>
      )}

      <motion.button
        type="submit"
        disabled={isSubmitting}
        className={`w-full px-6 py-3 rounded-lg text-lg font-semibold transition-colors duration-300
          ${isSubmitting 
            ? 'bg-blue-400 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700'
          } text-white`}
        whileHover={!isSubmitting ? { scale: 1.05 } : {}}
        whileTap={!isSubmitting ? { scale: 0.95 } : {}}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </motion.button>
    </form>
  );
}

export function ContactUsClient({ contactUsData }: { contactUsData: ContactUsData | null }) {
  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-blue-50 text-gray-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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

        <motion.div
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          <motion.div
            variants={fadeInUp}
            className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg p-10 rounded-2xl border border-gray-200 shadow-xl"
          >
            <h2 className="text-3xl font-semibold mb-8 text-blue-600">Get in Touch</h2>
            <ContactUsFormWithReCaptcha contactUsData={contactUsData} />
          </motion.div>

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
  );
}
