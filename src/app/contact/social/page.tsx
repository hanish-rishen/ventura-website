import React from 'react';
import { client } from '@/lib/sanity';
import { SocialMediaClient } from './SocialMediaClient';

async function getSocialMediaData() {
  const socialMediaPage = await client.fetch(`*[_type == "socialMediaPage"][0]{
    title,
    socialPlatforms
  }`);
  
  return socialMediaPage;
}

export const revalidate = 60; // This is a valid non-negative number

export default async function SocialMedia() {
  const socialMediaData = await getSocialMediaData();

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-blue-50 text-gray-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <SocialMediaClient socialMediaData={socialMediaData} />
      </div>
    </div>
  );
}
