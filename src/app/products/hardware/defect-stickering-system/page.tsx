import React from 'react';
import { client } from '@/lib/sanity';
import DefectStickeringSystemClient from './DefectStickeringSystemClient';

async function getDefectStickeringSystemData() {
  const defectStickeringSystemPage = await client.fetch(`*[_type == "defectStickeringSystemPage"][0]{
    title,
    description,
    "mainImageUrl": mainImage.asset->url,
    keyFeatures,
    howItWorksSteps
  }`);
  
  return defectStickeringSystemPage;
}

export const revalidate = 60;

export default async function DefectStickeringSystem() {
  const defectStickeringSystemData = await getDefectStickeringSystemData();

  return (
    <div className="w-full bg-gray-50 text-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <DefectStickeringSystemClient pageData={defectStickeringSystemData} />
      </div>
    </div>
  );
}
