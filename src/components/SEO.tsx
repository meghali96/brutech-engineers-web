import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords: string;
}

const SEO = ({ title, description, keywords }: SEOProps) => {
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
  }, [title, description, keywords]);

  return null;
};

export default SEO;
