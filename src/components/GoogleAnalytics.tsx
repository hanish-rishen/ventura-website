'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function GoogleAnalytics({ GA_MEASUREMENT_ID }: { GA_MEASUREMENT_ID: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + searchParams.toString();
    console.log('Google Analytics: Attempting to send pageview', { url, GA_MEASUREMENT_ID });
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('config', GA_MEASUREMENT_ID, {
        page_path: url,
      });
      console.log('Google Analytics: Pageview sent');
    } else {
      console.log('Google Analytics: gtag not available');
    }
  }, [pathname, searchParams, GA_MEASUREMENT_ID]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        onLoad={() => console.log('Google Analytics: Script loaded')}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
            console.log('Google Analytics: Initialization script executed');
          `,
        }}
      />
    </>
  );
}