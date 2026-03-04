import { Link } from 'react-router-dom';
import { Wrench, Container, Wind, Settings, Droplets, Truck, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  { icon: Wrench, title: 'Assembly Solutions', description: 'Expert assembly services ensuring precision and durability', link: '/services#assembly' },
  { icon: Container, title: 'Industry Lifting', description: 'Heavy-duty lifting solutions for industrial and commercial sectors', link: '/services#lifting' },
  { icon: Wind, title: 'Pneumatic Lifting', description: 'Air-powered lifting solutions for efficient and smooth operations', link: '/services#pneumatic' },
  { icon: Settings, title: 'Repairing Services', description: 'Comprehensive repair services for machinery and lifting systems', link: '/services#repair' },
  { icon: Droplets, title: 'Hydraulic Lifting', description: 'Powerful hydraulic lifting solutions for high-capacity operations', link: '/services#hydraulic' },
  { icon: Truck, title: 'Customized Material Handling', description: 'Tailored material handling solutions to streamline logistics', link: '/services#material' },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const card = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 80, damping: 14 } },
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
              className="bg-card rounded-xl p-8 shadow-card border-2 border-transparent group hover:border-primary/30 cursor-pointer"
            >
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
