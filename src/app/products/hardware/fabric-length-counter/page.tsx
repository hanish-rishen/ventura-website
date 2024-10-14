import React from 'react';
import { client } from '@/lib/sanity';
import { FabricLengthCounterClient } from './FabricLengthCounterClient';

async function getFabricLengthCounterData() {
  const fabricLengthCounterPage = await client.fetch(`*[_type == "fabricLengthCounterPage"][0]{
    title,
    description,
    "mainImageUrl": mainImage.asset->url,
    keyFeatures,
    howItWorksSteps,
    benefitsCards
  }`);
  
  return fabricLengthCounterPage;
}

export const revalidate = 60;

export default async function FabricLengthCounter() {
  const fabricLengthCounterData = await getFabricLengthCounterData();

  return (
    <div className="w-full bg-gray-50 text-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <FabricLengthCounterClient fabricLengthCounterData={fabricLengthCounterData} />
      </div>
    </div>
  );
}
