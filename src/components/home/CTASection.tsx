import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import slide04 from '@/assets/slide-04.jpg';

const CTASection = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <img src={slide04} alt="" className="absolute inset-0 w-full h-full object-cover" aria-hidden="true" />
      <div className="absolute inset-0 bg-foreground/85" />
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ type: 'spring', stiffness: 80, damping: 16 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-6">
            Ready to Power Your <span className="text-primary">Industry?</span>
          </h2>
          <p className="text-background/70 text-lg mb-10 leading-relaxed">
            From precision machine parts to complete industrial solutions — let Brutech Engineers be your trusted partner in growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary-hover font-semibold px-8 py-6 text-lg">
                  Get a Free Quote <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>
            </Link>
            <a href="tel:+917702949688">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="border-2 border-background/30 text-background hover:bg-background/10 font-semibold px-8 py-6 text-lg">
                  <Phone className="w-5 h-5 mr-2" /> Call Us Now
                </Button>
              </motion.div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
