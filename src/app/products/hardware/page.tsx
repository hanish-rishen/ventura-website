import React from 'react';
import { client } from '@/lib/sanity';
import { HardwareProductsClient } from './HardwareProductsClient';

async function getHardwareProductsData() {
  const hardwareProductsPage = await client.fetch(`*[_type == "hardwareProductsPage"][0]{
    title,
    products[] {
      name,
      "imageUrl": image.asset->url,
      link
    }
  }`);
  
  return hardwareProductsPage;
}

export const revalidate = 60; // This is a valid non-negative number

export default async function HardwareProducts() {
  const hardwareProductsData = await getHardwareProductsData();

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-blue-50 text-gray-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <HardwareProductsClient hardwareProductsData={hardwareProductsData} />
      </div>
    </div>
  );
}
