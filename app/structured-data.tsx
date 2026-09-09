import Script from 'next/script';

export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Loop Platform, Inc.",
    "alternateName": "poolUp",
    "url": "https://looprides.dev",
    "logo": "https://looprides.dev/logo.png",
    "description": "Community rideshare platform connecting verified drivers and riders for safe, affordable transportation.",
    "foundingDate": "2024",
    "industry": "Transportation",
    "sameAs": [
      "https://twitter.com/looprides"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "areaServed": "US",
      "availableLanguage": "English"
    }
  };

  const webApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "name": "poolUp - Community Rideshare",
    "applicationCategory": "Transportation",
    "operatingSystem": ["iOS", "Android"],
    "description": "Safe, affordable rideshare app connecting verified drivers and riders in local communities.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Free to download and join"
    },
    "author": {
      "@type": "Organization",
      "name": "Loop Platform, Inc."
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does poolUp ensure rider and driver safety?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All users verify with their official .edu email address, ensuring a campus-only community of verified students and staff. We provide in-app emergency features, real-time trip tracking, and 24/7 support monitoring all rides."
        }
      },
      {
        "@type": "Question",
        "name": "How much does a ride on poolUp cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "There is no fare. A trip costs what it costs to drive \u2014 its mileage at the IRS standard rate \u2014 and that is divided across everyone in the car, the driver included. So a rider pays a share of a journey, never a price for a service. No surge pricing, and poolUp takes no commission."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if more people join my ride?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Everyone pays less, including the driver. The trip's cost is fixed by its distance, so each rider who joins divides that same figure further, and it recalculates automatically for people who already booked. Nobody is charged more for booking first, and the driver never collects more than the trip cost them."
        }
      },
      {
        "@type": "Question",
        "name": "How do I offer rides on poolUp?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Download the app, verify with your .edu email address, add your vehicle details, and post a trip you were already making. You confirm the journey was happening anyway, and set the most you'll accept per seat \u2014 poolUp caps that at half the trip's cost so a rider never covers more than their share."
        }
      }
    ]
  };

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="web-application-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webApplicationSchema),
        }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  );
}