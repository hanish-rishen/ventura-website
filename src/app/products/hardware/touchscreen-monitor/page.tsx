import React from 'react';
import { client } from '@/lib/sanity';
import TouchscreenMonitorClient from './TouchScreenMonitorClient';

async function getTouchscreenMonitorData() {
  const touchscreenMonitorPage = await client.fetch(`*[_type == "touchscreenMonitorPage"][0]{
    title,
    description,
    "mainImageUrl": mainImage.asset->url,
    keyFeatures,
    howItWorksSteps
  }`);
  
  return touchscreenMonitorPage;
}

export const revalidate = 60;

export default async function TouchscreenMonitor() {
  const touchscreenMonitorData = await getTouchscreenMonitorData();

  return (
    <div className="w-full bg-gray-50 text-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <TouchscreenMonitorClient pageData={touchscreenMonitorData} />
      </div>
    </div>
  );
}
