"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ScrollAnimationWrapper } from '@/components/ScrollAnimationWrapper';
import { FaCheckCircle } from 'react-icons/fa';

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

interface SoftwareProduct {
  _id: string;
  name: string;
  description: string;
  features: string[];
  imageUrl: string;
}

export function SoftwareProductsClient({ products }: { products: SoftwareProduct[] }) {
  return (
    <div className="space-y-12">
      {products.map((product, index) => (
        <ScrollAnimationWrapper key={product._id}>
          <motion.div
            variants={fadeInUp}
            className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg p-8 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            {index === 0 ? (
              <div className="flex flex-col">
                <div className="mb-6">
                  <div className="relative w-full h-64">
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                      quality={100}
                    />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-blue-600">{product.name}</h2>
                  <p className="text-lg mb-6 text-gray-600">{product.description}</p>
                  <ul className="space-y-3">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <FaCheckCircle className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div className="flex flex-col md:flex-row">
                <div className="mb-6 md:mb-0 md:mr-8 md:w-1/3">
                  <div className="relative w-full h-64 md:h-full">
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                      quality={100}
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-semibold mb-4 text-blue-600">{product.name}</h2>
                  <p className="text-lg mb-6 text-gray-600">{product.description}</p>
                  <ul className="space-y-3">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <FaCheckCircle className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </motion.div>
        </ScrollAnimationWrapper>
      ))}
    </div>
  );
}