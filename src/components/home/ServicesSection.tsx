import { Link } from 'react-router-dom';
import { Wrench, Wind, Train, Settings, Hammer, Truck, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import serviceAssembly from '@/assets/service-assembly.jpg';
import serviceRailing from '@/assets/service-railing.jpeg';
import serviceRepairing from '@/assets/service-repairing.jpeg';
import serviceHeavyTorque from '@/assets/service-heavy-torque.png';
import serviceCustomized from '@/assets/service-customized.jpeg';
import about2 from '@/assets/about-2.jpg';

const services = [
  { icon: Wrench, title: 'Assembly Solutions', description: 'Expert assembly services ensuring precision and durability', link: '/services#assembly', image: serviceAssembly },
  { icon: Wind, title: 'Pneumatic Lifting', description: 'Air-powered lifting solutions for efficient and smooth operations', link: '/services#pneumatic', image: about2 },
  { icon: Train, title: 'Railing Systems', description: 'Industrial railing and overhead rail systems for streamlined workflows', link: '/services#railing', image: serviceRailing },
  { icon: Settings, title: 'Repairing Services', description: 'Comprehensive repair services for machinery and lifting systems', link: '/services#repair', image: serviceRepairing },
  { icon: Hammer, title: 'Heavy Torque Tools', description: 'High-performance torque tools for heavy-duty industrial applications', link: '/services#torque', image: serviceHeavyTorque },
  { icon: Truck, title: 'Customized Material Handling', description: 'Tailored material handling solutions to streamline logistics', link: '/services#material', image: serviceCustomized },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } } as const;
const card = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring' as const, stiffness: 80, damping: 14 } },
};

const ServicesSection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ type: 'spring', stiffness: 80, damping: 16 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground">
            Discover our wide range of industrial solutions designed to lift, assemble, repair, and handle your materials with precision and efficiency.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={card}
              whileHover={{ y: -8, scale: 1.02, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
              className="bg-card rounded-xl overflow-hidden shadow-card border-2 border-transparent group hover:border-primary/30 cursor-pointer"
            >
              <div className="h-48 overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-6">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="service-icon group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  <service.icon className="w-8 h-8" />
                </motion.div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Link to={service.link} className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
