import Layout from '@/components/layout/Layout';
import PageBanner from '@/components/layout/PageBanner';
import PageTransition from '@/components/layout/PageTransition';
import { Check, Package, Building2, Users, Target, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import LetterReveal from '@/components/animations/LetterReveal';
import about1 from '@/assets/about-1.jpg';
import about2 from '@/assets/about-2.jpg';
import about3 from '@/assets/about-3.jpg';
import about4 from '@/assets/about-4.jpg';
import about5 from '@/assets/about-image.jpg';
import about6 from '@/assets/about-img.jpg';
import slide01 from '@/assets/slide-01.jpg';
import { useCountUp } from '@/hooks/useCountUp';
import SEO from '@/components/SEO';

const images = [about1, about2, about3, about4, about5, about6];

const features = [
  'Over 4 years of proven excellence in the industrial components industry',
  'Specialists in both standard and custom machine part fabrication for diverse sectors',
  'Skilled team focused on accuracy, durability, and engineering efficiency',
  'Quick turnaround times without compromising on quality',
  'Strong after-sales support and long-term client partnerships',
  'Modern manufacturing processes and strict quality checks at every stage',
];

const stats = [
  { icon: Package, value: 10000, suffix: '+', label: 'Machine Parts Delivered' },
  { icon: Building2, value: 50, suffix: '+', label: 'Industries Served' },
  { icon: Users, value: 20, suffix: '+', label: 'Skilled Engineers & Staff' },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } } as const;
const imgItem = { hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1, transition: { type: 'spring' as const, stiffness: 120, damping: 14 } } };
const featureItem = { hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0, transition: { type: 'spring' as const, stiffness: 100, damping: 12 } } };

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
      <motion.div whileHover={{ scale: 1.15, rotate: 5 }} transition={{ type: 'spring', stiffness: 300 }} className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
        <stat.icon className="w-10 h-10 text-primary" />
      </motion.div>
      <div className="text-4xl md:text-5xl font-bold text-background mb-2">{isInView ? formatNumber(count) : '0'}{stat.suffix}</div>
      <p className="text-background/70 text-lg">{stat.label}</p>
    </motion.div>
  );
};

const AboutPage = () => {
  return (
    <PageTransition>
      <SEO
        title="About Us | Brutech Engineers - Our Story & Mission"
        description="Learn about Brutech Engineers, founded in 2022. We deliver precision machine parts with unmatched quality, serving automotive, railways, pharmaceuticals & more."
        keywords="about Brutech Engineers, company history, mission vision, industrial expertise, precision engineering, Hyderabad manufacturer"
      />
      <Layout>
        <PageBanner title="About Us" breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'About Us' }]} backgroundImage={slide01} />

        {/* Company Story */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="grid grid-cols-3 gap-3 md:gap-4">
                {images.map((image, index) => (
                  <motion.div key={index} variants={imgItem} whileHover={{ scale: 1.05 }} className="img-zoom rounded-lg overflow-hidden aspect-square border border-border bg-muted">
                    <img src={image} alt={`About Brutech ${index + 1}`} className="w-full h-full object-cover" loading="lazy" />
                  </motion.div>
                ))}
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ type: 'spring', stiffness: 60, damping: 16 }}>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6"><LetterReveal text="About BruTech Engineers" highlightWords={['BruTech']} /></h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">Founded in 2022, Brutech has quickly earned the trust of manufacturers by consistently delivering precision parts with unmatched quality and service.</p>
                <p className="text-muted-foreground mb-8 leading-relaxed">Brutech started as an assembly equipment and solution provider to Automotive OEMs. Today we serve leading automotive OEMs, their vendors and other industries including railways, white-goods, pharmaceuticals and food processing.</p>

                <motion.ul variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} className="space-y-4 mb-8">
                  {features.map((feature, index) => (
                    <motion.li key={index} variants={featureItem} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5"><Check className="w-4 h-4 text-primary" /></span>
                      <span className="text-foreground">{feature}</span>
                    </motion.li>
                  ))}
                </motion.ul>
                <p className="text-muted-foreground leading-relaxed">At Brutech, we don't just supply parts — we provide reliability, support, and a promise to keep your business moving.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding bg-muted">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ type: 'spring', stiffness: 60, damping: 16 }} whileHover={{ y: -4 }} className="bg-card rounded-xl p-8 shadow-card border border-border">
                <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }} className="w-16 h-16 mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <Target className="w-8 h-8 text-primary" />
                </motion.div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4"><LetterReveal text="Our Mission" highlightWords={['Mission']} /></h2>
                <p className="text-muted-foreground leading-relaxed mb-4">To substantially improve the productivity of our customers by enhancing efficiency, ergonomics, accuracy and speed in their manufacturing process.</p>
                <p className="text-muted-foreground leading-relaxed">To help our customers to safeguard the safety and health of their employees and to assist them in being environment friendly and green companies.</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ type: 'spring', stiffness: 60, damping: 16 }} whileHover={{ y: -4 }} className="bg-card rounded-xl p-8 shadow-card border border-border">
                <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }} className="w-16 h-16 mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <Eye className="w-8 h-8 text-primary" />
                </motion.div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4"><LetterReveal text="Our Vision" highlightWords={['Vision']} /></h2>
                <p className="text-muted-foreground leading-relaxed mb-4">To be the most trusted and preferred industrial solutions partner across India, known for innovation, quality, and customer-first approach.</p>
                <p className="text-muted-foreground leading-relaxed">With two sales and service locations in Hyderabad and Vizag, we have grown over the years both in terms of our product offerings as well as in our customer base.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <img src={slide01} alt="" className="absolute inset-0 w-full h-full object-cover" aria-hidden="true" />
          <div className="absolute inset-0 bg-foreground/85" />
          <div className="container-custom relative z-10">
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {stats.map((stat, index) => <StatItem key={index} stat={stat} index={index} />)}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-background">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: '-60px' }} transition={{ type: 'spring', stiffness: 80, damping: 16 }} className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Work with Us?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">Let's discuss how Brutech can help improve your manufacturing processes with our precision-crafted components.</p>
            <Link to="/contact">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary-hover font-semibold px-8">Get Quote</Button>
              </motion.div>
            </Link>
          </motion.div>
        </section>
      </Layout>
    </PageTransition>
  );
};

export default AboutPage;
