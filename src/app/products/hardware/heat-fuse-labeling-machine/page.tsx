import React from 'react';
import { client } from '@/lib/sanity';
import HeatFuseLabellingMachineClient from './HeatFuseLabelingMachineClient';

async function getHeatFuseLabellingMachineData() {
  const heatFuseLabellingMachinePage = await client.fetch(`*[_type == "heatFuseLabellingMachinePage"][0]{
    title,
    description,
    "mainImageUrl": mainImage.asset->url,
    keyFeatures,
    howItWorksSteps
  }`);
  
  return heatFuseLabellingMachinePage;
}

export const revalidate = 60;

export default async function HeatFuseLabellingMachine() {
  const heatFuseLabellingMachineData = await getHeatFuseLabellingMachineData();

  return (
    <div className="w-full bg-gray-50 text-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <HeatFuseLabellingMachineClient pageData={heatFuseLabellingMachineData} />
      </div>
    </div>
  );
}