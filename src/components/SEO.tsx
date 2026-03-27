import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords: string;
  jsonLd?: Record<string, unknown>;
}

const SEO = ({ title, description, keywords, jsonLd }: SEOProps) => {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, attr = 'name') => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('description', description);
    setMeta('keywords', keywords);
    setMeta('og:title', title, 'property');
    setMeta('og:description', description, 'property');

    // JSON-LD structured data
    const ldId = 'seo-jsonld';
    let script = document.getElementById(ldId) as HTMLScriptElement | null;
    if (jsonLd) {
      if (!script) {
        script = document.createElement('script');
        script.id = ldId;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(jsonLd);
    } else if (script) {
      script.remove();
    }

    return () => {
      const el = document.getElementById(ldId);
      if (el) el.remove();
    };
  }, [title, description, keywords, jsonLd]);

  return null;
};

export default SEO;

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Brutech Engineers',
  description: 'Precision machine parts, assembly solutions, pneumatic lifting, heavy torque tools & customized material handling across India.',
  url: 'https://brutechengineers.com',
  telephone: ['+917702949688', '+917702949690'],
  email: 'sales@brutechengineers.com',
  address: [
    {
      '@type': 'PostalAddress',
      streetAddress: 'H No: 5-36/191 Prashant Nagar',
      addressLocality: 'Kukatpally, Hyderabad',
      addressRegion: 'Telangana',
      addressCountry: 'IN',
    },
    {
      '@type': 'PostalAddress',
      addressLocality: 'Visakapatnam',
      addressRegion: 'Andhra Pradesh',
      addressCountry: 'IN',
    },
  ],
  sameAs: [
    'https://www.linkedin.com/in/brutech-engineers-022000250/',
  ],
  foundingDate: '2022',
  numberOfEmployees: { '@type': 'QuantitativeValue', minValue: 20 },
  areaServed: 'India',
  priceRange: '$$',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '09:00',
    closes: '18:00',
  },
};
