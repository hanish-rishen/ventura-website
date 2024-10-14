"use client";

import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { ScrollAnimationWrapper } from '@/components/ScrollAnimationWrapper';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
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
  mapUrl: string;
}

export function ContactUsClient({ contactUsData }: { contactUsData: ContactUsData | null }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const encodedAddress = contactUsData?.address ? encodeURIComponent(contactUsData.address) : '';
  const largerMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.7209805155056!2d80.22504131482266!3d13.065359090796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266c0f9a9e46f%3A0x7f8b2e0c8a2e6d4e!2s51%2C%20Basha%20St%2C%20Bharat%20Nagar%2C%20Choolaimedu%2C%20Chennai%2C%20Tamil%20Nadu%20600094!5e0!3m2!1sen!2sin!4v1623456789012!5m2!1sen!2sin&markers=color:red%7C13.065359090796,80.22504131482266`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contactUsData?.email) {
      const subject = encodeURIComponent('Contact Form Submission');
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`);
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${contactUsData.email}&su=${subject}&body=${body}`, '_blank');
    }
  };

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-blue-50 text-gray-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative mb-12 overflow-hidden">
          <ScrollAnimationWrapper>
            <motion.h1 
              className="text-5xl font-bold mb-8 text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Contact Us
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
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            <motion.div
              variants={fadeInUp}
              className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg p-10 rounded-2xl border border-gray-200 shadow-xl"
            >
              <h2 className="text-3xl font-semibold mb-8 text-blue-600">Get in Touch</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-300" 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-300" 
                  />
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
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg p-10 rounded-2xl border border-gray-200 shadow-xl"
            >
              <h2 className="text-3xl font-semibold mb-8 text-blue-600">Contact Information</h2>
              <div className="space-y-6 mb-8">
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
              {contactUsData?.mapUrl && (
                <>
                  <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg">
                    <iframe 
                      src={contactUsData.mapUrl}
                      width="100%" 
                      height="100%" 
                      style={{border:0}} 
                      allowFullScreen={true}
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                  </div>
                  <div className="mt-4 text-center">
                    <a 
                      href={largerMapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      View on larger map
                    </a>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
}
