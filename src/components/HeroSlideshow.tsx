"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { client } from "@/lib/sanity";

interface HeroData {
  title: string;
  subtitle: string;
  images: {
    asset: {
      url: string;
    };
    alt: string;
  }[];
  primaryButton: {
    text: string;
    link: string;
  };
  secondaryButton: {
    text: string;
    link: string;
  };
}

export default function HeroSlideshow() {
  const router = useRouter();
  const [heroData, setHeroData] = useState<HeroData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = 5000;

  useEffect(() => {
    async function fetchHeroData() {
      try {
        const data = await client.fetch(`*[_type == "heroSlideshow"][0]{
          title,
          subtitle,
          "images": images[]{
            "asset": asset->,
            alt
          },
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

  useEffect(() => {
    if (!heroData?.images.length) return;
    
    const intervalId = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % heroData.images.length);
    }, slideInterval);

    return () => clearInterval(intervalId);
  }, [heroData]);

  function nextSlide() {
    console.log('Next clicked');
    if (!heroData) return;
    setCurrentIndex(current => {
      const next = current === heroData.images.length - 1 ? 0 : current + 1;
      console.log('Current:', current, 'Next:', next);
      return next;
    });
  }

  function prevSlide() {
    console.log('Prev clicked');
    if (!heroData) return;
    setCurrentIndex(current => {
      const prev = current === 0 ? heroData.images.length - 1 : current - 1;
      console.log('Current:', current, 'Prev:', prev);
      return prev;
    });
  }

  if (isLoading || !heroData) {
    return <div>Loading...</div>;
  }

  const navigateToPage = (link: string) => {
    router.push(link);
  };

  return (
    <div className="relative w-full min-h-[400px] sm:min-h-[500px] mt-20 sm:mt-24"> {/* Changed mt-16 to mt-20 for mobile */}
      <div className="absolute inset-0">
        {/* Single Image */}
        <div className="relative w-full h-full">
          <Image
            src={heroData.images[currentIndex].asset.url}
            alt={heroData.images[currentIndex].alt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-900/50 to-gray-900/70" />
        </div>

        {/* Navigation Buttons */}
        <button
          type="button"
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white hover:text-white/70 transition-colors z-50 cursor-pointer p-4 sm:p-2"
        >
          <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white hover:text-white/70 transition-colors z-50 cursor-pointer p-4 sm:p-2"
        >
          <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Content Overlay - Centered */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white">
              {heroData.title}
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-8 text-white/90 px-2 sm:px-0">
              {heroData.subtitle}
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0">
              <button
                onClick={() => navigateToPage(heroData.primaryButton.link)}
                className="w-full sm:w-auto min-w-[220px] px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-white text-base sm:text-lg font-medium transition-colors flex items-center justify-center"
              >
                {heroData.primaryButton.text}
              </button>
              <button
                onClick={() => navigateToPage(heroData.secondaryButton.link)}
                className="w-full sm:w-auto min-w-[220px] px-6 sm:px-8 py-3 sm:py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white rounded-lg text-white text-base sm:text-lg font-medium transition-colors flex items-center justify-center"
              >
                {heroData.secondaryButton.text}
              </button>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3 z-20">
          {heroData.images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}