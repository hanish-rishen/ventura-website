import React from 'react';
import { client } from '@/lib/sanity';
import WidthMeasurementSystemClient from './WidthMeasurementSystemClient';

async function getWidthMeasurementSystemData() {
  const widthMeasurementSystemPage = await client.fetch(`*[_type == "widthMeasurementSystemPage"][0]{
    title,
    description,
    "mainImageUrl": mainImage.asset->url,
    keyFeatures,
    howItWorksSteps
  }`);
  
  return widthMeasurementSystemPage;
}

export const revalidate = 60;

export default async function WidthMeasurementSystem() {
  const widthMeasurementSystemData = await getWidthMeasurementSystemData();

  return (
    <div className="w-full bg-gray-50 text-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <WidthMeasurementSystemClient pageData={widthMeasurementSystemData} />
      </div>
    </div>
  );
}
