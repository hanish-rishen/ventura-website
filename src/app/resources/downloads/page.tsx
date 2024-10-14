import React from 'react';
import { client } from '@/lib/sanity';
import { DownloadsClient } from './DownloadsClient';

async function getDownloadsData() {
  const downloadsPage = await client.fetch(`*[_type == "downloadsPage"][0]{
    title,
    downloads[]{
      name,
      "fileUrl": file.asset->url,
      "fileType": file.asset->mimeType
    }
  }`, {}, { next: { revalidate: 60 } });
  
  return downloadsPage;
}

export default async function Downloads() {
  const downloadsData = await getDownloadsData();

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-blue-50 text-gray-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <DownloadsClient downloadsData={downloadsData} />
      </div>
    </div>
  );
}
