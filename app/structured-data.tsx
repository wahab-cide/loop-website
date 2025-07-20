import Script from 'next/script';

export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Loop Platform, Inc.",
    "alternateName": "Loop",
    "url": "https://looprides.dev",
    "logo": "https://looprides.dev/logo.png",
    "description": "Student rideshare platform connecting verified drivers and riders in campus communities for safe, affordable transportation.",
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
    "name": "Loop - Student Rideshare",
    "applicationCategory": "Transportation",
    "operatingSystem": ["iOS", "Android"],
    "description": "Safe, affordable rideshare app built by students, for students. Connect with verified drivers in your campus community.",
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
        "name": "How does Loop ensure rider and driver safety?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All users must verify their student status and identity. We conduct background checks for drivers, provide in-app emergency features, and have 24/7 support monitoring all rides."
        }
      },
      {
        "@type": "Question",
        "name": "How much does Loop cost compared to other rideshare apps?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Loop is designed to be more affordable than traditional rideshare services. We don't use surge pricing and focus on connecting students within the same community for cost-effective transportation."
        }
      },
      {
        "@type": "Question",
        "name": "Can I split the cost of a ride with friends?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Loop has built-in fare splitting features that make it easy to share ride costs with friends. Simply add riders to your trip and the cost will be automatically divided."
        }
      },
      {
        "@type": "Question",
        "name": "How do I become a Loop driver?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Download the app, verify your student status, submit your driver's license and insurance, pass a background check, and you're ready to start earning money helping fellow students get around safely."
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