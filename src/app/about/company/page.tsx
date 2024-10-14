import React from 'react';
import { client } from '@/lib/sanity';
import { CompanyClient } from './CompanyClient';

async function getCompanyData() {
  const companyPage = await client.fetch(`*[_type == "companyPage"][0]{
    introduction,
    "routineWorksImage": routineWorksImage.asset->url,
    companyValues,
    achievements,
    sapIntegration,
    futureIntegration,
    contactUs,
    whyChooseVentura,
    fidasBenefits
  }`);
  
  return companyPage;
}

export const revalidate = 60;

export default async function AboutUs() {
  const companyData = await getCompanyData();

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-blue-50 text-gray-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <CompanyClient companyData={companyData} />
      </div>
    </div>
  );
}

