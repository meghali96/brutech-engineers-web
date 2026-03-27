import { motion } from 'framer-motion';
import resoluteLogo from '@/assets/client-resolute.png';
import mtarLogo from '@/assets/client-mtar.jpg';
import hblLogo from '@/assets/client-hbl.png';
import ntpcLogo from '@/assets/client-ntpc.png';
import tataLogo from '@/assets/client-tata.jpg';
import scclLogo from '@/assets/client-sccl.jpg';
import railwaysLogo from '@/assets/client-railways.png';
import mahindraLogo from '@/assets/client-mahindra.png';

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

const ClientsCarousel = () => {
  return (
    <section className="py-16 md:py-20 bg-muted overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ type: 'spring', stiffness: 80, damping: 16 }}
        className="container-custom mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">
          Our <span className="text-primary">Clients</span>
        </h2>
      </motion.div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-muted to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-muted to-transparent z-10" />

        <div className="flex animate-marquee hover:[animation-play-state:paused]">
          {[...clients, ...clients].map((client, index) => (
            <motion.div
              key={`client-${index}`}
              whileHover={{ scale: 1.08, y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="flex-shrink-0 mx-6"
            >
              <div className="w-64 h-36 bg-background rounded-lg shadow-sm flex items-center justify-center p-2 border border-border hover:border-primary hover:shadow-md transition-all">
                <img src={client.logo} alt={client.name} className="max-w-full max-h-full object-contain" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsCarousel;
