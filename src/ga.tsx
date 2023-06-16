import Script from 'next/script';
import React from 'react';
import Head from 'next/head';

function GoogleAnalytics({ trackingId }: { trackingId: string }) {
  return (
    <>
      <Head>
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="preconnect" href="//www.googletagmanager.com" />
      </Head>
      <Script
        data-testid={'gtag'}
        src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}
        strategy="afterInteractive"
      />
      <Script data-testid={'gtagSetup'} strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${trackingId}');
        `}</Script>
    </>
  );
}
export default GoogleAnalytics;
