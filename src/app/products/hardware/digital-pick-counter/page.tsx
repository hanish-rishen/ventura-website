import React from 'react';
import { client } from '@/lib/sanity';
import DigitalPickCounterClient from './DigitalPickCounterClient';

async function getDigitalPickCounterData() {
  const digitalPickCounterPage = await client.fetch(`*[_type == "digitalPickCounterPage"][0]{
    title,
    description,
    "mainImageUrl": mainImage.asset->url,
    keyFeatures,
    howItWorksSteps
  }`);
  
  return digitalPickCounterPage;
}

export const revalidate = 60;

export default async function DigitalPickCounter() {
  const digitalPickCounterData = await getDigitalPickCounterData();

  return (
    <div className="w-full bg-gray-50 text-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <DigitalPickCounterClient pageData={digitalPickCounterData} />
      </div>
    </div>
  );
}
