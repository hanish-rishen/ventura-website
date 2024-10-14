import React from 'react';
import { client } from '@/lib/sanity';
import GsmCapturingClient from './GsmCapturingClient';

async function getGSMCapturingData() {
  const gsmCapturingPage = await client.fetch(`*[_type == "gsmCapturingPage"][0]{
    title,
    description,
    "mainImageUrl": mainImage.asset->url,
    keyFeatures,
    howItWorksSteps
  }`);
  
  return gsmCapturingPage;
}

export const revalidate = 60;

export default async function GSMCapturing() {
  const gsmCapturingData = await getGSMCapturingData();

  return (
    <div className="w-full bg-gray-50 text-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <GsmCapturingClient pageData={gsmCapturingData} />
      </div>
    </div>
  );
}
