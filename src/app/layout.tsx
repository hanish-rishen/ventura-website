import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MainContentWrapper from "@/components/MainContentWrapper";
import { Suspense } from 'react';
import dynamic from 'next/dynamic';

const GoogleAnalytics = dynamic(() => import('@/components/GoogleAnalytics'), { ssr: false });

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FIDAS",
  description: "Empowering financial decisions with AI-driven insights",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 min-h-screen flex flex-col`}>
        <Navbar />
        <MainContentWrapper>{children}</MainContentWrapper>
        <Footer />
        <Suspense fallback={null}>
          <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!} />
        </Suspense>
      </body>
    </html>
  );
}