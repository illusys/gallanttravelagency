// Public tracking IDs provided by Gallant Travel Agency.
// Override these by setting NEXT_PUBLIC_GA_ID or NEXT_PUBLIC_META_PIXEL_ID in your deployment environment.
const DEFAULT_GA_MEASUREMENT_ID = 'G-8MZD5NT84G';
const DEFAULT_META_PIXEL_ID = '27257858243820733';

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || DEFAULT_GA_MEASUREMENT_ID;
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || DEFAULT_META_PIXEL_ID;

export function isAnalyticsEnabled() {
  return process.env.NODE_ENV === 'production';
}

export function pageview(url) {
  if (!isAnalyticsEnabled() || !GA_MEASUREMENT_ID || typeof window === 'undefined' || !window.gtag) {
    return;
  }

  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
}

export function metaPageview() {
  if (!isAnalyticsEnabled() || !META_PIXEL_ID || typeof window === 'undefined' || !window.fbq) {
    return;
  }

  window.fbq('track', 'PageView');
}
