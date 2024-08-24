"use client";
import React, { useEffect } from 'react';
import { motion, Variants, useAnimation } from 'framer-motion';
import { ScrollAnimationWrapper } from '@/components/ScrollAnimationWrapper';
import { FaCalendarAlt, FaUser, FaTags } from 'react-icons/fa';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
};

export default function Blogs() {
  const blogs = [
    {
      title: "The Future of Fabric Inspection",
      summary: "Exploring upcoming trends in textile quality control and how they will shape the industry in the coming years.",
      author: "Jane Doe",
      date: "May 15, 2023",
      tags: ["Quality Control", "Future Trends", "Technology"],
      imageUrl: "/images/blog/fabric-inspection-future.jpg"
    },
    {
      title: "AI in Textile Manufacturing",
      summary: "How artificial intelligence is revolutionizing the industry, from production processes to quality assurance.",
      author: "John Smith",
      date: "April 28, 2023",
      tags: ["AI", "Manufacturing", "Innovation"],
      imageUrl: "/images/blog/ai-textile-manufacturing.jpg"
    },
    {
      title: "Sustainable Practices in Fabric Production",
      summary: "Balancing quality control with environmental responsibility: strategies for a greener textile industry.",
      author: "Emily Green",
      date: "April 10, 2023",
      tags: ["Sustainability", "Environment", "Best Practices"],
      imageUrl: "/images/blog/sustainable-fabric-production.jpg"
    },
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    }
  }, [controls, inView]);

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-blue-50 text-gray-800 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative mb-12 overflow-hidden">
          <ScrollAnimationWrapper>
            <motion.h1 
              className="text-4xl font-bold mb-8 text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              FIDAS Blog
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

        <motion.div
          ref={ref}
          initial="initial"
          animate={controls}
          className="space-y-6"
        >
          {blogs.map((blog, index) => (
            <motion.article
              key={index}
              variants={fadeInUp}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <Image src={blog.imageUrl} alt={blog.title} width={500} height={300} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2 text-gray-800">{blog.title}</h2>
                <p className="text-gray-600 mb-4">{blog.summary}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <FaUser className="mr-2" />
                  <span className="mr-4">{blog.author}</span>
                  <FaCalendarAlt className="mr-2" />
                  <span>{blog.date}</span>
                </div>
                <div className="flex flex-wrap items-center text-sm text-gray-500 mb-4">
                  <FaTags className="mr-2" />
                  {blog.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="mr-2 mb-2 bg-blue-100 text-blue-600 px-2 py-1 rounded">{tag}</span>
                  ))}
                </div>
                <a href="#" className="text-blue-600 hover:underline inline-block">Read more</a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </div>
  );
}