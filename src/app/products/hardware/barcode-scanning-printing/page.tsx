import React from 'react';
import { client } from '@/lib/sanity';
import { BarcodeScanningPrintingClient } from './BarcodeScanningPrintingClient';

async function getBarcodeScanningPrintingData() {
  const barcodeScanningPrintingPage = await client.fetch(`*[_type == "barcodeScanningPrintingPage"][0]{
    title,
    description,
    "mainImageUrl": mainImage.asset->url,
    keyFeatures,
    howItWorksSteps
  }`);
  
  return barcodeScanningPrintingPage;
}

export const revalidate = 60;

export default async function BarcodeScanningPrinting() {
  const barcodeScanningPrintingData = await getBarcodeScanningPrintingData();

  return (
    <div className="w-full bg-gray-50 text-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <BarcodeScanningPrintingClient barcodeScanningPrintingData={barcodeScanningPrintingData} />
      </div>
    </div>
  );
}