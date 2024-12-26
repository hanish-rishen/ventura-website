import React from 'react';
import { client } from '@/lib/sanity';
import { ContactUsClient } from './ContactUsClient';

async function getContactUsData() {
  const contactUsPage = await client.fetch(`*[_type == "contactUsPage"][0]{
    address,
    phone,
    email
    // remove mapUrl from query
  }`);
  
  return contactUsPage;
}

export const revalidate = 60;

export default async function ContactUs() {
  const contactUsData = await getContactUsData();

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-blue-50 text-gray-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <ContactUsClient contactUsData={contactUsData} />
      </div>
    </div>
  );
}
