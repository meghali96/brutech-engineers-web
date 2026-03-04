import { useEffect, useState, useRef } from 'react';
import { Package, Building2, Users } from 'lucide-react';
import slide04 from '@/assets/slide-04.jpg';

const stats = [
  {
    icon: Package,
    value: 10000,
    suffix: '+',
    label: 'Machine Parts Delivered',
  },
  {
    icon: Building2,
    value: 25,
    suffix: '+',
    label: 'Industries Served',
  },
  {
    icon: Users,
    value: 20,
    suffix: '+',
    label: 'Skilled Engineers & Staff',
  },
];

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    stats.forEach((stat, index) => {
      const duration = 2000;
      const steps = 60;
      const stepValue = stat.value / steps;
      let current = 0;
      const interval = duration / steps;

      const timer = setInterval(() => {
        current += stepValue;
        if (current >= stat.value) {
          current = stat.value;
          clearInterval(timer);
        }
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = Math.floor(current);
          return newCounts;
        });
      }, interval);
    });
  }, [isVisible]);

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return num.toLocaleString();
    }
    return num.toString();
  };

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-foreground">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-background mb-4">
            Setting the Standards in{' '}
            <span className="text-primary">Industrial Excellence</span>
          </h2>
          <p className="text-background/70">
            With deep-rooted engineering expertise and reliable product delivery, Brutech powers machines and industries across India with precision-crafted components.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-500 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                <stat.icon className="w-10 h-10 text-primary" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-background mb-2">
                {formatNumber(counts[index])}
                {stat.suffix}
              </div>
              <p className="text-background/70 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
