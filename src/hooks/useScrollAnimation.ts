import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const { threshold = 0.15, rootMargin = '0px 0px -50px 0px', triggerOnce = true } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
};

export const animationClasses = (isVisible: boolean, variant: 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scaleIn' = 'fadeUp') => {
  const base = 'transition-all duration-700 ease-out';
  const hidden: Record<string, string> = {
    fadeUp: 'opacity-0 translate-y-10',
    fadeIn: 'opacity-0',
    slideLeft: 'opacity-0 -translate-x-10',
    slideRight: 'opacity-0 translate-x-10',
    scaleIn: 'opacity-0 scale-95',
  };
  const visible = 'opacity-100 translate-y-0 translate-x-0 scale-100';
  return `${base} ${isVisible ? visible : hidden[variant]}`;
};

export const staggerDelay = (index: number, base = 100) => ({
  transitionDelay: `${index * base}ms`,
});
