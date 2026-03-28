import { motion } from 'framer-motion';
import LetterReveal from '@/components/animations/LetterReveal';
import serviceAssembly from '@/assets/service-assembly-new.png';
import servicePneumatic from '@/assets/service-pneumatic-new.png';
import serviceRailing from '@/assets/service-railing-new.png';
import serviceRepairing from '@/assets/service-repairing-new.png';
import serviceHeavyTorque from '@/assets/service-heavy-torque-new.png';
import serviceCustomized from '@/assets/service-customized-new.png';

const services = [
  { title: 'Assembly Solutions', description: 'Expert assembly services ensuring precision and durability', image: serviceAssembly },
  { title: 'Pneumatic Lifting', description: 'Air-powered lifting solutions for efficient and smooth operations', image: servicePneumatic },
  { title: 'Railing Systems', description: 'Industrial railing and overhead rail systems for streamlined workflows', image: serviceRailing },
  { title: 'Repairing Services', description: 'Comprehensive repair services for machinery and lifting systems', image: serviceRepairing },
  { title: 'Heavy Torque Tools', description: 'High-performance torque tools for heavy-duty industrial applications', image: serviceHeavyTorque },
  { title: 'Customized Material Handling', description: 'Tailored material handling solutions to streamline logistics', image: serviceCustomized },
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
            <LetterReveal text="Our Services" highlightWords={['Services']} />
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
              <div className="overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
