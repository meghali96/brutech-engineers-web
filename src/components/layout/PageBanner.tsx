import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import LetterReveal from '@/components/animations/LetterReveal';

interface PageBannerProps {
  title: string;
  breadcrumbs: { name: string; path?: string }[];
  backgroundImage?: string;
}

const PageBanner = ({ title, breadcrumbs, backgroundImage }: PageBannerProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setOffset(-rect.top * 0.4);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-14 md:py-20 overflow-hidden"
    >
      {backgroundImage && (
        <motion.img
          src={backgroundImage}
          alt=""
          aria-hidden="true"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute inset-0 w-full h-[130%] object-cover will-change-transform"
          style={{ transform: `translateY(${offset}px)` }}
        />
      )}
      <div className="absolute inset-0 bg-foreground/75" />

      <div className="container-custom relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-4">
          <LetterReveal text={title} />
        </h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="w-20 h-1 bg-primary mx-auto mb-6 origin-left"
        />
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center justify-center gap-2 text-background/80"
        >
          {breadcrumbs.map((crumb, index) => (
            <div key={crumb.name} className="flex items-center gap-2">
              {crumb.path ? (
                <Link to={crumb.path} className="hover:text-primary transition-colors">{crumb.name}</Link>
              ) : (
                <span className="text-primary">{crumb.name}</span>
              )}
              {index < breadcrumbs.length - 1 && <ChevronRight className="w-4 h-4" />}
            </div>
          ))}
        </motion.nav>
      </div>
    </section>
  );
};

export default PageBanner;
