import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaUsers, FaListAlt, FaArrowRight } from 'react-icons/fa';

export default function Customers() {
  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-blue-50 text-gray-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-bold mb-16 text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400">
          Our Customers
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: 'Customer Success', icon: FaUsers, href: '/customers/success', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
            { title: 'Customer List', icon: FaListAlt, href: '/customers/list', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80' },
          ].map((card, index) => (
            <Link key={index} href={card.href}>
              <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48">
                  <Image 
                    src={card.image}
                    alt={card.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6 flex flex-col items-center">
                  <card.icon className="text-5xl mb-4 text-blue-600" />
                  <h2 className="text-2xl font-semibold text-center">{card.title}</h2>
                  <p className="mt-2 text-gray-600 text-center">Explore our {card.title.toLowerCase()}</p>
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
