import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import about1 from '@/assets/about-1.jpg';
import about2 from '@/assets/about-2.jpg';
import about3 from '@/assets/about-3.jpg';
import about4 from '@/assets/about-4.jpg';
import about5 from '@/assets/about-image.jpg';
import about6 from '@/assets/about-img.jpg';

const images = [about1, about2, about3, about4, about5, about6];

const features = [
  'Over 4 years of proven excellence in the industrial components industry',
  'Specialists in both standard and custom machine part fabrication for diverse sectors',
  'Skilled team focused on accuracy, durability, and engineering efficiency',
  'Quick turnaround times without compromising on quality',
  'Strong after-sales support and long-term client partnerships',
  'Modern manufacturing processes and strict quality checks at every stage',
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } } as const;
const imgItem = { hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1, transition: { type: 'spring' as const, stiffness: 120, damping: 14 } } };
const featureItem = { hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0, transition: { type: 'spring' as const, stiffness: 100, damping: 12 } } };

const AboutSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-3 gap-3 md:gap-4"
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                variants={imgItem}
                whileHover={{ scale: 1.05, transition: { type: 'spring', stiffness: 300 } }}
                className="img-zoom rounded-lg overflow-hidden aspect-square border border-border bg-muted"
              >
                <img src={image} alt={`About Brutech ${index + 1}`} className="w-full h-full object-cover" loading="lazy" />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ type: 'spring', stiffness: 60, damping: 16 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              About <span className="text-primary">BruTech</span> Engineers
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Founded in 2022, Brutech has quickly earned the trust of manufacturers by consistently delivering precision parts with unmatched quality and service.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Brutech started as an assembly equipment and solution provider to Automotive OEMs. Today we serve leading automotive OEMs, their vendors and other industries including railways, white-goods, pharmaceuticals and food processing.
            </p>

            <motion.ul
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="space-y-4 mb-8"
            >
              {features.map((feature, index) => (
                <motion.li key={index} variants={featureItem} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </span>
                  <span className="text-foreground">{feature}</span>
                </motion.li>
              ))}
            </motion.ul>

            <p className="text-muted-foreground leading-relaxed">
              At Brutech, we don't just supply parts — we provide reliability, support, and a promise to keep your business moving.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
