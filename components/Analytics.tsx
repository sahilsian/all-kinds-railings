import Script from 'next/script';
import { siteConfig } from '@/lib/siteConfig';

/**
 * Loads Google Ads / GA4 / Meta Pixel only when IDs are configured.
 * Conversion events fire from QuoteForm.tsx via window.gtag / window.fbq.
 *
 * To enable:
 *   - Fill in siteConfig.analytics IDs
 *   - For Google Ads conversion, also set googleConversionLabel
 */
export function Analytics() {
  const { googleAdsId, googleAnalyticsId, metaPixelId } = siteConfig.analytics;
  const hasGtag = Boolean(googleAdsId || googleAnalyticsId);
  const gtagMeasurementId = googleAdsId || googleAnalyticsId;

  return (
    <>
      {hasGtag && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gtagMeasurementId}`}
            strategy="afterInteractive"
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              ${googleAdsId ? `gtag('config', '${googleAdsId}');` : ''}
              ${googleAnalyticsId ? `gtag('config', '${googleAnalyticsId}');` : ''}
            `}
          </Script>
        </>
      )}

      {metaPixelId && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
              n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
              document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${metaPixelId}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}
    </>
  );
}

/**
 * Client-side helper to fire conversion events from the quote form.
 * Safe to call even when no IDs are configured — it no-ops.
 */
export function trackLeadConversion(value: number = 0) {
  if (typeof window === 'undefined') return;
  const { googleAdsId, googleConversionLabel, metaPixelId } = siteConfig.analytics;

  // Google Ads conversion
  if ((window as any).gtag && googleAdsId && googleConversionLabel) {
    (window as any).gtag('event', 'conversion', {
      send_to: `${googleAdsId}/${googleConversionLabel}`,
      value,
      currency: 'CAD'
    });
  }
  // Generic GA4 event
  if ((window as any).gtag) {
    (window as any).gtag('event', 'generate_lead', { value, currency: 'CAD' });
  }
  // Meta Pixel
  if ((window as any).fbq && metaPixelId) {
    (window as any).fbq('track', 'Lead', { value, currency: 'CAD' });
  }
}
