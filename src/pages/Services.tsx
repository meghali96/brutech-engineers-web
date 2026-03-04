import Layout from '@/components/layout/Layout';
import PageTransition from '@/components/layout/PageTransition';
import PageBanner from '@/components/layout/PageBanner';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Wrench, Container, Wind, Settings, Droplets, Truck, Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import slide03 from '@/assets/slide-03.jpg';
import about1 from '@/assets/about-1.jpg';
import about2 from '@/assets/about-2.jpg';
import about3 from '@/assets/about-3.jpg';
import about4 from '@/assets/about-4.jpg';
import about5 from '@/assets/about-5.jpg';
import about6 from '@/assets/about-6.jpg';

const services = [
  { id: 'assembly', icon: Wrench, title: 'Assembly Solutions', description: 'Expert assembly services ensuring precision and durability', image: about1, features: ['High-precision assembly equipment', 'Automated assembly lines', 'Quality control integration', 'Custom assembly solutions', 'Ergonomic workstation design'] },
  { id: 'lifting', icon: Container, title: 'Industry Lifting', description: 'Heavy-duty lifting solutions for industrial and commercial sectors', image: about5, features: ['Overhead cranes and hoists', 'Chain hoists and trolleys', 'Lifting accessories and attachments', 'Load testing and certification', 'Installation and commissioning'] },
  { id: 'pneumatic', icon: Wind, title: 'Pneumatic Lifting', description: 'Air-powered lifting solutions for efficient and smooth operations', image: about2, features: ['Pneumatic hoists and balancers', 'Air-powered manipulators', 'Vacuum lifting systems', 'Compressed air solutions', 'Energy-efficient designs'] },
  { id: 'repair', icon: Settings, title: 'Repairing Services', description: 'Comprehensive repair services for machinery and lifting systems', image: about4, features: ['Preventive maintenance programs', 'Emergency repair services', 'Spare parts replacement', 'Calibration and testing', 'On-site and off-site repairs'] },
  { id: 'hydraulic', icon: Droplets, title: 'Hydraulic Lifting', description: 'Powerful hydraulic lifting solutions for high-capacity operations', image: about3, features: ['Hydraulic jacks and cylinders', 'Hydraulic power packs', 'Custom hydraulic systems', 'High-tonnage lifting solutions', 'Precision hydraulic controls'] },
  { id: 'material', icon: Truck, title: 'Customized Material Handling', description: 'Tailored material handling solutions to streamline logistics', image: about6, features: ['Conveyor systems', 'Automated guided vehicles', 'Palletizers and depalletizers', 'Custom handling equipment', 'Warehouse optimization'] },
];

const featureContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } } as const;
const featureItem = { hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0, transition: { type: 'spring' as const, stiffness: 100, damping: 12 } } };

const ServiceBlock = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const isEven = index % 2 === 0;
  return (
    <section id={service.id} className={`section-padding ${isEven ? 'bg-muted' : 'bg-background'}`}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: isEven ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ type: 'spring', stiffness: 60, damping: 16 }}
            className={isEven ? '' : 'lg:order-2'}
          >
            <motion.div whileHover={{ scale: 1.02 }} transition={{ type: 'spring', stiffness: 200 }} className="img-zoom rounded-xl overflow-hidden shadow-lg">
              <img src={service.image} alt={service.title} className="w-full h-[400px] object-cover" loading="lazy" />
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: isEven ? 60 : -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ type: 'spring', stiffness: 60, damping: 16 }}
            className={isEven ? '' : 'lg:order-1'}
          >
            <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }} className="service-icon">
              <service.icon className="w-8 h-8" />
            </motion.div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{service.title}</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
            <motion.ul variants={featureContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }} className="space-y-3 mb-8">
              {service.features.map((feature, fi) => (
                <motion.li key={fi} variants={featureItem} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </motion.li>
              ))}
            </motion.ul>
            <Link to="/contact">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                <Button className="bg-primary text-primary-foreground hover:bg-primary-hover font-semibold">Request Quote <ArrowRight className="w-4 h-4 ml-2" /></Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ServicesPage = () => {
  return (
    <PageTransition>
      <Layout>
        <PageBanner title="Services" breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Services' }]} backgroundImage={slide03} />

        <section className="section-padding bg-background">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 80, damping: 16 }} className="container-custom text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our <span className="text-primary">Industrial Solutions</span></h2>
            <p className="text-muted-foreground">Discover our wide range of industrial solutions designed to lift, assemble, repair, and handle your materials with precision and efficiency.</p>
          </motion.div>
        </section>

        {services.map((service, index) => <ServiceBlock key={service.id} service={service} index={index} />)}

        <section className="section-padding bg-foreground">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 80, damping: 16 }} className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-background mb-6">Need a Custom Solution?</h2>
            <p className="text-background/70 mb-8 max-w-2xl mx-auto">We specialize in configuring and tailoring solutions to our customers' needs.</p>
            <Link to="/contact">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary-hover font-semibold px-8">Get in Touch</Button>
              </motion.div>
            </Link>
          </motion.div>
        </section>
      </Layout>
    </PageTransition>
  );
};

export default ServicesPage;
