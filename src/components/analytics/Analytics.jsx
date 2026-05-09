'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useRef } from 'react';
import { GA_MEASUREMENT_ID, META_PIXEL_ID, isAnalyticsEnabled, metaPageview, pageview } from '@/lib/analytics';

function RouteAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const hasTrackedInitialView = useRef(false);

  useEffect(() => {
    if (!isAnalyticsEnabled()) {
      return;
    }

    if (!hasTrackedInitialView.current) {
      hasTrackedInitialView.current = true;
      return;
    }

    const queryString = searchParams.toString();
    const url = queryString ? `${pathname}?${queryString}` : pathname;

    pageview(url);
    metaPageview();
  }, [pathname, searchParams]);

  return null;
}

export function Analytics() {
  if (!isAnalyticsEnabled()) {
    return null;
  }

  return (
    <>
      {GA_MEASUREMENT_ID ? (
        <>
          {/* Add your GA4 Measurement ID to NEXT_PUBLIC_GA_ID in the production environment. */}
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = window.gtag || gtag;
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `}
          </Script>
        </>
      ) : null}

      {META_PIXEL_ID ? (
        <>
          {/* Add your Meta Pixel ID to NEXT_PUBLIC_META_PIXEL_ID in the production environment. */}
          <Script id="meta-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${META_PIXEL_ID}');
              fbq('track', 'PageView');
            `}
          </Script>
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        </>
      ) : null}

      <Suspense fallback={null}>
        <RouteAnalytics />
      </Suspense>
    </>
  );
}
