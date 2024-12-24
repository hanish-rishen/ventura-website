"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { client } from "@/lib/sanity";
import { motion } from "framer-motion";

interface HeroData {
  title: string;
  subtitle: string;
  primaryButton: {
    text: string;
    link: string;
  };
  secondaryButton: {
    text: string;
    link: string;
  };
}

const WaveAnimation = () => (
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
    <svg
      className="relative w-full h-[120px] min-w-[1000px]" // Increased height from 60px to 120px
      preserveAspectRatio="none"
      viewBox="0 0 1440 120" // Updated viewBox height to match new height
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M0 60L48 55C96 50 192 40 288 35C384 30 480 30 576 35C672 40 768 50 864 55C960 60 1056 60 1152 55C1248 50 1344 40 1392 35L1440 30L1440 120L1392 120C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120L0 120Z"
        fill="rgb(59 130 246 / 0.1)"
        animate={{
          d: "M0 80L48 75C96 70 192 60 288 55C384 50 480 50 576 55C672 60 768 70 864 75C960 80 1056 80 1152 75C1248 70 1344 60 1392 55L1440 50L1440 120L1392 120C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120L0 120Z"
        }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 4,
          ease: "easeInOut"
        }}
      />
      <motion.path
        d="M0 80L48 75C96 70 192 60 288 65C384 70 480 80 576 85C672 90 768 90 864 85C960 80 1056 70 1152 70C1248 70 1344 80 1392 85L1440 90L1440 120L1392 120C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120L0 120Z"
        fill="rgb(59 130 246 / 0.2)"
        animate={{
          d: "M0 100L48 95C96 90 192 80 288 85C384 90 480 100 576 105C672 110 768 110 864 105C960 100 1056 90 1152 90C1248 90 1344 100 1392 105L1440 110L1440 120L1392 120C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120L0 120Z"
        }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 3,
          ease: "easeInOut",
          delay: 0.2
        }}
      />
    </svg>
  </div>
);

export default function HeroSlideshow() {
  const router = useRouter();
  const [heroData, setHeroData] = useState<HeroData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchHeroData() {
      try {
        const data = await client.fetch(`*[_type == "heroSlideshow"][0]{
          title,
          subtitle,
          primaryButton,
          secondaryButton
        }`);
        setHeroData(data);
      } catch (error) {
        console.error("Error fetching hero data:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchHeroData();
  }, []);

  if (isLoading || !heroData) {
    return <div>Loading...</div>;
  }

  const navigateToPage = (link: string) => {
    router.push(link);
  };

  return (
    <div className="relative w-full min-h-[400px] sm:min-h-[500px] mt-20 sm:mt-24">
      {/* Dots pattern */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle at center, #93c5fd 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
          opacity: 0.4
        }}
      />
      
      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 via-blue-500 to-teal-400 bg-clip-text text-transparent"
          >
            {heroData.title}
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-8 text-gray-600"
          >
            {heroData.subtitle}
          </motion.h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0">
            <button
              onClick={() => navigateToPage(heroData.primaryButton.link)}
              className="w-full sm:w-auto min-w-[220px] px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-base sm:text-lg font-medium transition-colors flex items-center justify-center shadow-md"
            >
              {heroData.primaryButton.text}
            </button>
            <button
              onClick={() => navigateToPage(heroData.secondaryButton.link)}
              className="w-full sm:w-auto min-w-[220px] px-6 sm:px-8 py-3 sm:py-4 bg-white/90 hover:bg-white border-2 border-blue-600 rounded-full text-blue-600 text-base sm:text-lg font-medium transition-colors flex items-center justify-center shadow-md backdrop-blur-sm"
            >
              {heroData.secondaryButton.text}
            </button>
          </div>
        </div>
      </div>

      <WaveAnimation />
    </div>
  );
}