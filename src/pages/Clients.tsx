import Layout from '@/components/layout/Layout';
import PageTransition from '@/components/layout/PageTransition';
import PageBanner from '@/components/layout/PageBanner';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Factory, Car, Building2, Zap, Fuel, Plane, HardHat, UtensilsCrossed } from 'lucide-react';
import { motion } from 'framer-motion';
import LetterReveal from '@/components/animations/LetterReveal';
import slide02 from '@/assets/slide-02.jpg';
import resoluteLogo from '@/assets/client-resolute.png';
import mtarLogo from '@/assets/client-mtar.jpg';
import hblLogo from '@/assets/client-hbl.png';
import ntpcLogo from '@/assets/client-ntpc.png';
import tataLogo from '@/assets/client-tata.jpg';
import scclLogo from '@/assets/client-sccl.jpg';
import railwaysLogo from '@/assets/client-railways.png';
import mahindraLogo from '@/assets/client-mahindra.png';
import { useCountUp } from '@/hooks/useCountUp';

const clients = [
  { name: 'Resolute Group', logo: resoluteLogo },
  { name: 'MTAR Technologies', logo: mtarLogo },
  { name: 'HBL Power Systems', logo: hblLogo },
  { name: 'NTPC', logo: ntpcLogo },
  { name: 'Tata Advanced Systems', logo: tataLogo },
  { name: 'SCCL', logo: scclLogo },
  { name: 'Indian Railways', logo: railwaysLogo },
  { name: 'Mahindra', logo: mahindraLogo },
];

const industries = [
  { icon: Factory, name: 'Manufacturing' },
  { icon: Car, name: 'Automotive' },
  { icon: Building2, name: 'Construction' },
  { icon: Zap, name: 'Energy & Power' },
  { icon: Fuel, name: 'Oil & Gas' },
  { icon: Plane, name: 'Aerospace' },
  { icon: HardHat, name: 'Mining' },
  { icon: UtensilsCrossed, name: 'Food Processing' },
];

const stats = [
  { value: 150, suffix: '+', label: 'Industries Served' },
  { value: 100, suffix: '+', label: 'Satisfied Clients' },
  { value: 10000, suffix: '+', label: 'Parts Delivered' },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } } as const;
const cardVariant = { hidden: { opacity: 0, y: 40, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring' as const, stiffness: 80, damping: 14 } } };

const StatCounter = ({ stat, index }: { stat: typeof stats[0]; index: number }) => {
  const { count, ref, isInView } = useCountUp(stat.value, 2000);
  const formatNumber = (num: number) => num >= 1000 ? num.toLocaleString() : num.toString();
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 80, damping: 14, delay: index * 0.2 }} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{isInView ? formatNumber(count) : '0'}{stat.suffix}</div>
      <p className="text-background/70 text-lg">{stat.label}</p>
    </motion.div>
  );
};

const ClientsPage = () => {
  return (
    <PageTransition>
      <SEO
        title="Our Clients | Brutech Engineers - Trusted by Leading Industries"
        description="Brutech Engineers is trusted by NTPC, MTAR, Tata, Mahindra, Indian Railways & more. Serving 50+ industries across manufacturing, automotive, aerospace & energy."
        keywords="Brutech clients, NTPC, MTAR Technologies, Tata, Mahindra, Indian Railways, industrial clients India, manufacturing partners"
      />
      <Layout>
        <PageBanner title="Our Clients" breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Our Clients' }]} backgroundImage={slide02} />

        <section className="section-padding bg-background">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 80, damping: 16 }} className="container-custom text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4"><LetterReveal text="Trusted by Leading Industries" highlightWords={['Leading', 'Industries']} /></h2>
            <p className="text-muted-foreground">Our components are trusted by clients across India in both heavy and light industries.</p>
          </motion.div>
        </section>

        {/* Brands Carousel */}
        <section className="py-16 bg-muted overflow-hidden">
          <div className="container-custom mb-8">
            <h3 className="text-2xl font-bold text-foreground text-center mb-8"><LetterReveal text="Our Clients" highlightWords={['Clients']} /></h3>
          </div>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-muted to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-muted to-transparent z-10" />
            <div className="flex animate-marquee hover:[animation-play-state:paused]">
              {[...clients, ...clients].map((client, index) => (
                <motion.div key={`client-${index}`} whileHover={{ scale: 1.08, y: -4 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }} className="flex-shrink-0 mx-6">
                  <div className="w-64 h-36 bg-background rounded-lg shadow-sm flex items-center justify-center p-2 border border-border hover:border-primary hover:shadow-md transition-all">
                    <img src={client.logo} alt={client.name} className="max-w-full max-h-full object-contain" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <motion.h3 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 80, damping: 16 }} className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
              <LetterReveal text="Industries We Serve" highlightWords={['We', 'Serve']} />
            </motion.h3>
            <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }} className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <motion.div key={index} variants={cardVariant} whileHover={{ y: -8, scale: 1.03 }} className="bg-card rounded-xl p-6 text-center shadow-card border-2 border-transparent hover:border-primary/30 cursor-pointer">
                  <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }} className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <industry.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  <h4 className="font-semibold text-foreground">{industry.name}</h4>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <img src={slide02} alt="" className="absolute inset-0 w-full h-full object-cover" aria-hidden="true" />
          <div className="absolute inset-0 bg-foreground/85" />
          <div className="container-custom relative z-10">
            <div className="grid md:grid-cols-3 gap-8">
              {stats.map((stat, index) => <StatCounter key={index} stat={stat} index={index} />)}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-muted">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 80, damping: 16 }} className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6"><LetterReveal text="Ready to Work with Us?" /></h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">Join the growing list of satisfied clients who trust Brutech.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact"><motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}><Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary-hover font-semibold px-8">Get Quote</Button></motion.div></Link>
              <Link to="/contact"><motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}><Button size="lg" variant="outline" className="border-2 border-secondary text-foreground hover:bg-secondary hover:text-secondary-foreground font-semibold px-8">Contact Us</Button></motion.div></Link>
            </div>
          </motion.div>
        </section>
      </Layout>
    </PageTransition>
  );
};

export default ClientsPage;
