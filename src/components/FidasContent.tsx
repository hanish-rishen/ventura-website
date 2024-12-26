"use client";

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion';
import { useSpring, animated, config } from 'react-spring';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { CheckCircle, Search, Users, Sparkles, History, CircuitBoard, ArrowRight, Plus, Minus, Star } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent, TimedAccordion } from "@/components/ui/accordion"; // Add Accordion imports
import confetti from 'canvas-confetti';

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const floatingAnimation = {
  y: [0, -10, 0],
  transition: {
    y: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const numberAnimation = {
  scale: [1, 1.2, 1],
  color: ['#3B82F6', '#60A5FA', '#3B82F6'],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

const marqueeAnimation = {
  animate: {
    x: [0, -1920],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 50,
        ease: "linear",
      },
    },
  },
};

const confettiConfig = {
  particleCount: 100,
  spread: 70,
  origin: { y: 0 }
};

const starAnimation = {
  rotate: 360,
  scale: [1, 1.2, 1],
  transition: {
    rotate: {
      duration: 4,
      repeat: Infinity,
      ease: "linear"
    },
    scale: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const ScrollAnimationWrapper = ({ children }: { children: React.ReactNode }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    } else {
      controls.start("initial");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={controls}
      variants={fadeInUp}
    >
      {children}
    </motion.div>
  );
};

// Update the Celebration component
function Celebration({ children }: { children: React.ReactNode }) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [hasTriggered, setHasTriggered] = useState(false);

  const triggerConfetti = useCallback(() => {
    if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect();
      confetti({
        particleCount: 100,
        spread: 70,
        origin: {
          x: (rect.left + rect.width / 2) / window.innerWidth,
          y: rect.top / window.innerHeight
        },
        colors: ['#FFD700', '#FFA500', '#FF6347', '#4169E1', '#32CD32']
      });
    }
  }, []);

  useEffect(() => {
    if (!hasTriggered) {
      // Initial burst when component comes into view
      triggerConfetti();
      setHasTriggered(true);

      // Set up interval for repeated confetti
      const interval = setInterval(triggerConfetti, 1500);
      return () => clearInterval(interval);
    }
  }, [hasTriggered, triggerConfetti]);

  return (
    <motion.div
      ref={elementRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      onViewportEnter={() => setHasTriggered(true)}
      onViewportLeave={() => setHasTriggered(false)}
      viewport={{ once: false }}
    >
      {children}
    </motion.div>
  );
}

// Update the NumberCounter component
function NumberCounter({ n, suffix = '', duration = 3000 }: { n: string | number; suffix?: string; duration?: number }) {
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const targetNumber = typeof n === 'string' ? parseInt(n.replace(/,/g, '')) : n;
  
  const { number } = useSpring({
    from: { number: 0 },
    to: { number: isInView ? targetNumber : 0 },
    config: {
      duration: duration
    },
    reset: false // Prevent reset on re-render
  });

  return (
    <motion.div
      onViewportEnter={() => {
        if (!hasAnimated) {
          setIsInView(true);
          setHasAnimated(true);
        }
      }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <animated.span>
        {number.to((n) => `${Math.floor(n)}${suffix}`)}
      </animated.span>
    </motion.div>
  );
}

interface FidasContentData {
  trustedByTitle: string;
  trustedCompanies: Array<{
    asset: { url: string };
    alt: string;
  }>;
  expertiseTitle: string;
  videoUrl: string;
  features: Array<{
    title: string;
    description: string;
  }>;
  testimonial: {
    quote: string;
    name: string;
    position: string;
    company: string;
  };
  whyChooseTitle: string;
  whyChoosePoints: Array<{
    title: string;
    description: string;
  }>;
  industryVerticalsTitle: string;
  industryVerticals: Array<{
    icon: string;
    name: string;
    description: string;
  }>;
  industryVerticalsIframeSrc: string;
  whyChooseFidas: Array<{
    title: string;
    description: string;
  }>;
  aboutFidas: {
    title: string;
    video: {
      asset: {
        url: string;
      };
    };
    points: Array<{
      pointTitle: string;
      description: string;
    }>;
  };
  twentyReasons: {
    sectionTitle: string;
    reasons: Array<{
      title: string;
      points: string[];
      image: {
        asset: {
          url: string;
        };
        alt: string;
      };
    }>;
  };
  optimizeSection: {
    title: string;
    subtitle: string;
    features: Array<{
      title: string;
      image: {
        asset: {
          _ref: string;
        };
        alt: string;
      };
    }>;
  };
  learnSection: {
    title: string;
    image: {
      asset: {
        _ref: string;
      };
      alt: string;
    };
    steps: string[];
  };
  interfaceSection: {
    title: string;
    devices: Array<{
      title: string;
      description: string;
      image: {
        asset: {
          _ref: string;
        };
        alt: string;
      };
      link: string;
    }>;
  };
  softwareProducts: {
    title: string;
    products: Array<{
      title: string;
      description: string;
      image: {
        asset: {
          _ref: string;
        };
        alt: string;
      };
      link: string;
    }>;
  };
  customerList: {
    sectionTitle: string;
    customers: Array<{
      name: string;
      logo: {
        asset: {
          _ref: string;
        };
        alt: string;
      };
    }>;
  };
}

async function getFidasContentData(): Promise<FidasContentData> {
  const fidasContentData = await client.fetch(`*[_type == "fidasContentPage"][0]{
    trustedByTitle,
    trustedCompanies,
    aboutFidas{
      title,
      video{
        asset->{
          url
        }
      },
      points
    },
    expertiseTitle,
    videoUrl,
    features,
    testimonial,
    whyChooseFidas,
    whyChoosePoints,
    industryVerticalsTitle,
    industryVerticals,
    industryVerticalsIframeSrc,
    twentyReasons{
      sectionTitle,
      reasons[]{
        title,
        points,
        image{
          asset->{
            url
          },
          alt
        }
      }
    },
    optimizeSection{
      title,
      subtitle,
      features[]{
        title,
        image{
          asset->,
          alt
        }
      }
    },
    learnSection{
      title,
      image{
        asset->,
        alt
      },
      steps
    },
    interfaceSection{
      title,
      devices[]{
        title,
        description,
        image{
          asset->,
          alt
        },
        link
      }
    },
    softwareProducts{
      title,
      products[]{
        title,
        description,
        image{
          asset->,
          alt
        },
        link
      }
    },
    customerList{
      sectionTitle,
      customers[]{
        name,
        logo{
          asset->,
          alt
        }
      }
    }
  }`);
  
  return fidasContentData;
}

const colorClasses = [
  'bg-blue-500',
  'bg-green-500',
  'bg-red-500',
  'bg-yellow-500',
  'bg-purple-500',
  'bg-indigo-500',
  'bg-pink-500',
  'bg-teal-500'
];

export default function FidasContent() {
  const [pageData, setPageData] = React.useState<FidasContentData | null>(null);

  React.useEffect(() => {
    getFidasContentData().then(data => setPageData(data));
  }, []);

  // Simplify video logic
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Simple autoplay when video is ready
    video.play().catch((error) => {
      console.log("Video autoplay failed:", error);
    });
  }, []);

  if (!pageData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-blue-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-0">
        

        {/* Trusted By Section */}
        <section className="py-16">
          <ScrollAnimationWrapper>
            <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400">
              {pageData.trustedByTitle}
            </h2>
          </ScrollAnimationWrapper>
          
          <div className="relative overflow-hidden">
            <div className="flex">
              <motion.div 
                className="flex space-x-12 whitespace-nowrap"
                animate="animate"
                variants={marqueeAnimation}
              >
                {/* First set of images */}
                {pageData.trustedCompanies.map((company, index) => (
                  <div 
                    key={`first-${index}`} 
                    className="flex-shrink-0 flex items-center justify-center min-w-[200px]"
                  >
                    <Image
                      src={urlForImage(company.asset)?.url() || ''}
                      alt={company.alt || 'Trusted Company'}
                      width={150}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {pageData.trustedCompanies.map((company, index) => (
                  <div 
                    key={`second-${index}`} 
                    className="flex-shrink-0 flex items-center justify-center min-w-[200px]"
                  >
                    <Image
                      src={urlForImage(company.asset)?.url() || ''}
                      alt={company.alt || 'Trusted Company'}
                      width={150}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <ScrollAnimationWrapper>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400">
                FIDAS
              </h2>
            </ScrollAnimationWrapper>
            <div className="flex flex-col items-center space-y-8 md:space-y-12">
              {/* First Row - 1 item */}
              <div className="grid grid-cols-1 gap-8 w-full max-w-xs">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  className="flex flex-col items-center justify-center text-center p-6 md:p-8 bg-white/50 backdrop-blur-sm rounded-xl shadow-sm"
                >
                  <motion.div className="text-4xl md:text-6xl font-bold text-blue-600">
                    <NumberCounter n={1} duration={3000} />
                  </motion.div>
                  <span className="text-lg md:text-xl text-gray-600 mt-2 font-medium">
                    Data Collection
                  </span>
                </motion.div>
              </div>

              {/* Second Row - 2 items */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full max-w-2xl">
                {[
                  { value: '5', label: 'Physical Connections' },
                  { value: '16', label: 'Products' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ delay: 0.1 * (index + 1) }}
                    className="flex flex-col items-center justify-center text-center p-6 md:p-8 bg-white/50 backdrop-blur-sm rounded-xl shadow-sm"
                  >
                    <motion.div className="text-4xl md:text-5xl font-bold text-blue-600">
                      <NumberCounter n={stat.value} duration={3000} />
                    </motion.div>
                    <span className="text-lg md:text-xl text-gray-600 mt-2 font-medium">
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Third Row - 3 items */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 w-full max-w-4xl">
                {[
                  { value: '130', label: 'Customers' },
                  { value: '5170', label: 'Inspection Machines' },
                  { value: '11632500', label: 'Meters/Day', suffix: '+' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ delay: 0.1 * (index + 3) }}
                    className="flex flex-col items-center justify-center text-center p-6 md:p-8 bg-white/50 backdrop-blur-sm rounded-xl shadow-sm"
                  >
                    <motion.div className="text-3xl md:text-4xl font-bold text-blue-600">
                      <NumberCounter n={stat.value} suffix={stat.suffix} duration={3000} />
                    </motion.div>
                    <span className="text-lg md:text-xl text-gray-600 mt-2 font-medium">
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Row - Years of Expertise */}
              <Celebration>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-row items-center justify-center gap-3 text-center p-6 md:p-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl shadow-lg w-full max-w-5xl relative overflow-hidden"
                >
                  <div className="flex items-center gap-6 relative z-10">
                    <div className="relative">
                      <motion.div
                        className="absolute -left-12 -top-12"
                        animate={starAnimation}
                      >
                        <Star className="w-12 h-12 text-yellow-400 opacity-75" fill="currentColor" />
                      </motion.div>
                      <motion.div className="text-4xl md:text-6xl font-bold inline-flex items-center bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent px-4">
                        <NumberCounter n={20} duration={3000} />
                      </motion.div>
                      <motion.div
                        className="absolute -right-12 -bottom-12"
                        animate={starAnimation}
                      >
                        <Star className="w-12 h-12 text-yellow-400 opacity-75" fill="currentColor" />
                      </motion.div>
                    </div>
                    <span className="text-2xl md:text-4xl font-medium whitespace-nowrap">
                      Years of Expertise
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-blue-800/50 backdrop-blur-sm" />
                </motion.div>
              </Celebration>
            </div>
          </div>
        </section>

        {/* About Section with Fixed Video */}
        <section className="relative py-16">
          {/* Title wrapper with padding */}
          <div className="mb-16 pt-8">
            <ScrollAnimationWrapper>
              <h2 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400">
                {pageData.aboutFidas.title}
              </h2>
            </ScrollAnimationWrapper>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Video Column */}
            <div className="relative lg:sticky lg:top-[120px] self-start h-[300px] lg:h-[calc(100vh-180px)] rounded-2xl overflow-hidden mb-8 lg:mb-0">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                src={pageData.aboutFidas.video.asset.url}
                autoPlay
                muted
                loop
                playsInline
              />
            </div>

            {/* Points Column */}
            <div className="space-y-8 pt-4">
              {/* Desktop Points */}
              <div className="hidden lg:block space-y-8">
                {pageData.aboutFidas.points.map((point, index) => (
                  <ScrollAnimationWrapper key={index}>
                    <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8 transform transition-all duration-300 hover:bg-white/70">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 p-2 bg-blue-50 rounded-lg">
                          {getIconForIndex(index)} {/* You'll need to create this helper function */}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400">
                            {point.pointTitle}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">{point.description}</p>
                        </div>
                      </div>
                    </div>
                  </ScrollAnimationWrapper>
                ))}
              </div>

              {/* Mobile Points */}
              <div className="lg:hidden">
                <div className="overflow-x-auto pb-4 -mx-4">
                  <div className="flex space-x-4 px-4 min-w-max">
                    {pageData.aboutFidas.points.map((point, index) => (
                      <div key={index} className="bg-white/50 backdrop-blur-sm rounded-xl p-6 w-[300px] flex-shrink-0">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 p-2 bg-blue-50 rounded-lg">
                            {getIconForIndex(index)} {/* You'll need to create this helper function */}
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400">
                              {point.pointTitle}
                            </h3>
                            <p className="text-sm text-gray-600">{point.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Row */}
          <div className="mt-16 flex justify-center items-center">
            <Link href="/about/fidas">
              <button className="inline-flex h-14 items-center justify-center gap-4 rounded-full border border-blue-600 bg-blue-500 px-8 font-semibold text-white hover:bg-blue-600 transition-colors">
                <span>Discover More About FIDAS</span>
                <ArrowRight className="w-5 h-5 flex-shrink-0" />
              </button>
            </Link>
          </div>
        </section>

        {/* Features Grid Section */}
        <section className="py-16">
          <ScrollAnimationWrapper>
            <h2 className="text-3xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400">
              {pageData.twentyReasons?.sectionTitle || "FIDAS is the right choice for computerization of Fabric Inspection: 20 Reasons"}
            </h2>
          </ScrollAnimationWrapper>

          {pageData.twentyReasons?.reasons?.map((reason, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24 ${
              index % 2 === 1 ? 'lg:grid-flow-col' : ''
            }`}>
              <div className={`relative h-[400px] rounded-2xl overflow-hidden shadow-lg ${
                index % 2 === 1 ? 'order-1 lg:order-2' : ''
              }`}>
                <Image
                  src={urlForImage(reason.image)?.url() || '/fallback-image.jpg'}
                  alt={reason.image?.alt || 'Feature image'}
                  fill
                  className="object-cover"
                />
              </div>
              <div className={`space-y-6 flex flex-col justify-center ${
                index % 2 === 1 ? 'order-2 lg:order-1' : ''
              }`}>
                <h3 className="text-2xl font-bold text-blue-600">{reason.title}</h3>
                <div className="grid grid-cols-1 gap-4">
                  {reason.points?.map((point, pointIndex) => (
                    <div key={pointIndex} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 mt-1 rounded-full bg-blue-100 flex items-center justify-center">
                        <CheckCircle className="w-3 h-3 text-blue-600" />
                      </div>
                      <p className="text-gray-700">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* New Optimization Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400"
            >
              {pageData.optimizeSection.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600"
            >
              {pageData.optimizeSection.subtitle}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
            {pageData.optimizeSection.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="group relative"
              >
                <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={urlForImage(feature.image.asset)?.url() || '/fallback-image.jpg'}
                    alt={feature.image.alt || 'Feature image'}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-white font-medium">
                    {feature.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Learn How FIDAS Section */}
        <section className="py-16 bg-white/50 backdrop-blur-sm">
          <div className="container mx-auto max-w-6xl px-4">
            <ScrollAnimationWrapper>
              <h2 className="text-3xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400">
                {pageData.learnSection.title}
              </h2>
            </ScrollAnimationWrapper>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Image */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl"
              >
                <Image
                  src={urlForImage(pageData.learnSection.image)?.url() || '/fallback-image.jpg'}
                  alt={pageData.learnSection.image.alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent" />
              </motion.div>

              {/* Right side - Points */}
              <div className="space-y-6">
                {pageData.learnSection.steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-xl p-6 hover:bg-white/90 transition-all duration-300 shadow-sm"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-xl font-bold text-blue-600">{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-blue-600">
                      {step}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-16">
          <ScrollAnimationWrapper>
            <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400">
              {pageData.expertiseTitle}
            </h2>
          </ScrollAnimationWrapper>

          <div className="relative bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl p-4 md:p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left Column */}
              <div className="lg:w-1/2 space-y-8">
                {/* Video Section */}
                <div className="relative w-full rounded-lg overflow-hidden shadow-lg bg-white h-[400px] md:h-[500px]">
                  <iframe
                    src={pageData.videoUrl}
                    title="Fabric Inspection Process"
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {pageData.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3 bg-white bg-opacity-70 p-4 rounded-lg shadow-sm">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex-shrink-0 flex items-center justify-center">
                        <span className="text-blue-600">✓</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">{feature.title}</h4>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column */}
              <div className="lg:w-1/2 space-y-6">
                <h3 className="text-2xl font-semibold text-blue-600">
                  Your Trusted Partner for Accurate Fabric Insights
                </h3>
                              
                {/* Testimonial */}
                <div className="bg-white bg-opacity-70 rounded-lg p-6 shadow-sm">
                  <p className="mb-4 italic text-gray-700">
                    &ldquo;{pageData.testimonial.quote}&rdquo;
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between">
                    <div>
                      <p className="font-semibold text-blue-600">{pageData.testimonial.name}</p>
                      <p className="text-sm text-gray-500">{pageData.testimonial.position} – {pageData.testimonial.company}</p>
                    </div>
                    <Link href="/customers/success" className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors">
                      <span className="mr-2">More Testimonials</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Unique Selling Points */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-blue-600">{pageData.whyChooseTitle}</h4>
                  <div className="space-y-3">
                    {pageData.whyChooseFidas.map((point, index) => (
                      <div key={index} className="flex items-start space-x-3 bg-white bg-opacity-60 p-4 rounded-lg">
                        <div className="flex-shrink-0 mt-1">
                          <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-800">{point.title}</h5>
                          <p className="text-sm text-gray-600">{point.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end mb-6">
                  <Link href="/resources/blogs" className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors group">
                    <span className="mr-2">Explore Blogs</span>
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Interface Section */}
        <section className="py-16">
          <div className="container mx-auto max-w-6xl px-4">
            <ScrollAnimationWrapper>
              <h2 className="text-3xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400">
                {pageData.interfaceSection.title}
              </h2>
            </ScrollAnimationWrapper>

            <div className="space-y-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {pageData.interfaceSection.devices.map((device, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 * index }}
                    className="flex gap-6 bg-white/80 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-32 h-32 flex-shrink-0">
                      <div className="relative w-full h-full rounded-lg overflow-hidden">
                        <Image
                          src={urlForImage(device.image)?.url() || '/fallback-image.jpg'}
                          alt={device.image.alt}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-blue-600">{device.title}</h3>
                        <p className="text-gray-600 line-clamp-3">
                          {device.description}
                        </p>
                      </div>
                      <Link href={device.link}>
                        <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors font-medium">
                          Read More <ArrowRight className="w-4 h-4" />
                        </button>
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <Link
                href="/products/hardware"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
              >
                See More Products
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Associated Software Products Section */}
        <section className="py-16">
          <div className="container mx-auto max-w-6xl px-4">
            <ScrollAnimationWrapper>
              <h2 className="text-3xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400">
                {pageData.softwareProducts.title}
              </h2>
            </ScrollAnimationWrapper>

            <div className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pageData.softwareProducts.products.map((product, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 * index }}
                    className="bg-white/80 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
                  >
                    <div className="relative w-full h-48 rounded-t-xl overflow-hidden">
                      <Image
                        src={urlForImage(product.image)?.url() || '/fallback-image.jpg'}
                        alt={product.image.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col space-y-2">
                      <h3 className="text-lg font-bold">{product.title}</h3>
                      <p className="text-sm text-gray-600">{product.description}</p>
                      <div className="mt-auto">
                        <Link
                          href={product.link}
                          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          <span>Read More</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-4">
          <ScrollAnimationWrapper>
            <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400">
              {pageData.industryVerticalsTitle}
            </h2>
          </ScrollAnimationWrapper>

          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div 
              className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 order-2 md:order-1"
              variants={staggerChildren}
            >
              {pageData.industryVerticals.map((industry, index) => (
                <ScrollAnimationWrapper key={index}>
                  <motion.div 
                    className="bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:bg-opacity-70 h-full"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="p-4 h-full flex flex-col justify-between">
                      <motion.div 
                        className="text-4xl mb-2"
                        animate={floatingAnimation}
                      >
                        {industry.icon}
                      </motion.div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400">
                          {industry.name}
                        </h4>
                        <p className="text-sm text-gray-600">{industry.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </ScrollAnimationWrapper>
              ))}
            </motion.div>
            <div className="w-full md:w-1/3 h-full relative mb-8 md:mb-0 order-1 md:order-2">
              <iframe 
                src={pageData.industryVerticalsIframeSrc}
                className="w-full h-[400px] md:h-[600px]"
                style={{ border: 'none' }}
              ></iframe>
            </div>
          </div>
        </section>        

        {/* Customer List Section */}
        <section className="py-16 bg-white/50 backdrop-blur-sm">
          <div className="container mx-auto max-w-6xl px-4">
            <ScrollAnimationWrapper>
              <h2 className="text-3xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400">
                {pageData.customerList?.sectionTitle || "Our Customers"}
              </h2>
            </ScrollAnimationWrapper>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {pageData.customerList?.customers?.map((customer, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative aspect-[4/3] group"
                >
                  <div className="absolute inset-4 bg-white rounded-lg shadow-sm p-4 transition-all duration-300 group-hover:shadow-md group-hover:scale-105">
                    <div className="relative w-full h-full">
                      <Image
                        src={urlForImage(customer.logo)?.url() || '/fallback-image.jpg'}
                        alt={customer.logo.alt}
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* View All Button */}
            <div className="mt-12 text-center">
              <Link href="/customers/list">
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                  <span>View All Customers</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

function getIconForIndex(index: number) {
  const icons = [
    <Search className="w-8 h-8 text-blue-500" key="search" />,
    <Users className="w-8 h-8 text-blue-500" key="users" />,
    <Sparkles className="w-8 h-8 text-blue-500" key="sparkles" />,
    <History className="w-8 h-8 text-blue-500" key="history" />,
    <CircuitBoard className="w-8 h-8 text-blue-500" key="circuit" />
  ];
  return icons[index % icons.length];
}