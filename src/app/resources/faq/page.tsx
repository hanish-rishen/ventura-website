import React from 'react';
import { client } from '@/lib/sanity';
import { FAQClient } from './FAQClient';

async function getFAQs() {
  const faqs = await client.fetch(`*[_type == "faq"] {
    _id,
    question,
    answer
  }`, {}, { next: { revalidate: 60 } });
  
  return faqs;
}

export const revalidate = 60; // Revalidate every 60 seconds

export default async function FAQ() {
  const faqs = await getFAQs();

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-blue-50 text-gray-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <h1 className="text-5xl font-bold mb-16 text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400">
          Frequently Asked Questions
        </h1>
        <FAQClient faqs={faqs} />
      </div>
    </div>
  );
}
