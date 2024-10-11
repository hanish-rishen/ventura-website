"use client";
import React, { useEffect, useState } from 'react';
import { motion, Variants, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ScrollAnimationWrapper } from '@/components/ScrollAnimationWrapper';
import { FaFileAlt, FaCogs, FaChartBar, FaDownload, FaFilePdf, FaFilePowerpoint, FaFileWord, FaFileImage, FaFile } from 'react-icons/fa';
import Image from 'next/image';

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
};

interface Download {
  name: string;
  description: string;
  extension: string;
  path: string;
}

const AnimatedDownload = ({ download, index }: { download: Download; index: number }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [showModal, setShowModal] = useState(false);
  const [contactInfo, setContactInfo] = useState({ name: '', email: '', company: '' });

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    }
  }, [controls, inView]);

  const getIcon = (extension: string) => {
    switch (extension.toLowerCase()) {
      case 'pdf': return <FaFilePdf />;
      case 'ppt': case 'pptx': return <FaFilePowerpoint />;
      case 'doc': case 'docx': return <FaFileWord />;
      case 'jpg': case 'jpeg': case 'png': case 'gif': return <FaFileImage />;
      default: return <FaFile />;
    }
  };

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the contact info to your server
    console.log('Contact info:', contactInfo);
    // Then proceed with the download
    window.location.href = download.path;
    setShowModal(false);
  };

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={controls}
      variants={fadeInUp}
      custom={index}
      className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg p-4 sm:p-8 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
    >
      <div className="flex items-center mb-4">
        <div className="text-2xl sm:text-4xl text-blue-600 mr-2 sm:mr-4">{getIcon(download.extension)}</div>
        <h3 className="text-lg sm:text-xl font-semibold text-blue-600">{download.name}</h3>
      </div>
      <div className="mb-4 h-32 sm:h-40 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
        {download.extension.match(/^(jpg|jpeg|png|gif)$/i) ? (
          <Image
            src={download.path}
            alt={download.name}
            width={300}
            height={200}
            objectFit="cover"
          />
        ) : (
          <div className="text-4xl sm:text-6xl text-blue-600">
            {getIcon(download.extension)}
          </div>
        )}
      </div>
      <div className="flex items-center text-xs sm:text-sm text-gray-500 mb-4">
        <span className="uppercase">{download.extension}</span>
      </div>
      <button 
        onClick={handleDownload}
        className="flex items-center bg-blue-600 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
      >
        <FaDownload className="mr-2" />
        Download
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Enter your details to download</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 mb-4 border rounded"
                value={contactInfo.name}
                onChange={(e) => setContactInfo({...contactInfo, name: e.target.value})}
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 mb-4 border rounded"
                value={contactInfo.email}
                onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})}
                required
              />
              <input
                type="text"
                placeholder="Company"
                className="w-full p-2 mb-4 border rounded"
                value={contactInfo.company}
                onChange={(e) => setContactInfo({...contactInfo, company: e.target.value})}
                required
              />
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Download</button>
            </form>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default function Downloads() {
  const [downloads, setDownloads] = useState<Download[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    fetch('/Brouchers/downloads.json')
      .then(response => response.json())
      .then(data => setDownloads(data));

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-blue-50 text-gray-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <div className="relative mb-8 sm:mb-12 overflow-hidden">
          <ScrollAnimationWrapper>
            <motion.h1 
              className="text-5xl font-bold mb-8 text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              FIDAS<br className="sm:hidden" /> Downloads
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {downloads.map((download, index) => (
            <AnimatedDownload key={index} download={download} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}