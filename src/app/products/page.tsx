import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaLaptopCode, FaMicrochip, FaServer, FaNetworkWired, FaArrowRight } from 'react-icons/fa';

export default function Products() {
  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-blue-50 text-gray-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-bold mb-16 text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400">
          Our Products
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: 'Software', icon: FaLaptopCode, href: '/products/software', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
            { title: 'Technologies', icon: FaMicrochip, href: '/products/technologies', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
            { title: 'Hardware', icon: FaServer, href: '/products/hardware', image: 'https://images.unsplash.com/photo-1601737487795-dab272f52420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
            { title: 'SAP Integration', icon: FaNetworkWired, href: '/products/sap-integration', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
          ].map((card, index) => (
            <Link key={index} href={card.href}>
              <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
                <div className="relative h-48">
                  <Image 
                    src={card.image}
                    alt={card.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6 flex flex-col items-center flex-grow">
                  <card.icon className="text-5xl mb-4 text-blue-600" />
                  <h2 className="text-2xl font-semibold text-center">{card.title}</h2>
                  <p className="mt-2 text-gray-600 text-center flex-grow">Explore our {card.title.toLowerCase()} offerings</p>
                  <FaArrowRight className="mt-4 text-blue-600" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
