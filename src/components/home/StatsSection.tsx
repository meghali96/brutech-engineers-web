import { Package, Building2, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import LetterReveal from '@/components/animations/LetterReveal';
import slide04 from '@/assets/slide-04.jpg';
import { useCountUp } from '@/hooks/useCountUp';

const stats = [
  { icon: Package, value: 10000, suffix: '+', label: 'Machine Parts Delivered' },
  { icon: Building2, value: 150, suffix: '+', label: 'Industries Served' },
  { icon: Users, value: 20, suffix: '+', label: 'Skilled Engineers & Staff' },
];

const StatItem = ({ stat, index }: { stat: typeof stats[0]; index: number }) => {
  const { count, ref, isInView } = useCountUp(stat.value, 2000);
  const formatNumber = (num: number) => num >= 1000 ? num.toLocaleString() : num.toString();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ type: 'spring', stiffness: 80, damping: 14, delay: index * 0.15 }}
      className="text-center"
    >
      <motion.div
        whileHover={{ scale: 1.15, rotate: 5 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center"
      >
        <stat.icon className="w-10 h-10 text-primary" />
      </motion.div>
      <div className="text-4xl md:text-5xl font-bold text-background mb-2">
        {isInView ? formatNumber(count) : '0'}{stat.suffix}
      </div>
      <p className="text-background/70 text-lg">{stat.label}</p>
    </motion.div>
  );
};

const StatsSection = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <img src={slide04} alt="" className="absolute inset-0 w-full h-full object-cover" aria-hidden="true" />
      <div className="absolute inset-0 bg-foreground/85" />
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ type: 'spring', stiffness: 80, damping: 16 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-background mb-4">
            <LetterReveal text="Setting the Standards in Industrial Excellence" highlightWords={['Industrial', 'Excellence']} />
          </h2>
          <p className="text-background/70">
            With deep-rooted engineering expertise and reliable product delivery, Brutech powers machines and industries across India.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <StatItem key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
