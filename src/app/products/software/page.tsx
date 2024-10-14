import React from 'react';
import { client } from '@/lib/sanity';
import { SoftwareProductsClient } from './SoftwareProductsClient';

async function getSoftwareProducts() {
  const products = await client.fetch(`*[_type == "softwareProduct"] {
    _id,
    name,
    description,
    features,
    "imageUrl": image.asset->url
  }`, {}, { next: { revalidate: 60 } });
  
  return products;
}

export const revalidate = 60; // Revalidate every 60 seconds

export default async function SoftwareProducts() {
  const products = await getSoftwareProducts();

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-blue-50 text-gray-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-bold mb-16 text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400">
          Associated Software Products
        </h1>
        <SoftwareProductsClient products={products} />
      </div>
    </div>
  );
}