import resoluteLogo from '@/assets/clients/resolute.png';
import mtarLogo from '@/assets/clients/mtar.jpg';
import hblLogo from '@/assets/clients/hbl.png';
import ntpcLogo from '@/assets/clients/ntpc.png';
import tataLogo from '@/assets/clients/tata.jpg';
import scclLogo from '@/assets/clients/sccl.jpg';
import railwaysLogo from '@/assets/clients/indian-railways.png';
import mahindraLogo from '@/assets/clients/mahindra.png';
import { useScrollAnimation, animationClasses } from '@/hooks/useScrollAnimation';

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
  const header = useScrollAnimation();

  return (
    <section className="py-16 md:py-20 bg-muted overflow-hidden">
      <div ref={header.ref} className={`container-custom mb-12 ${animationClasses(header.isVisible, 'fadeUp')}`}>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">
          Our <span className="text-primary">Clients</span>
        </h2>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-muted to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-muted to-transparent z-10" />

        <div className="flex animate-marquee hover:[animation-play-state:paused]">
          {[...clients, ...clients].map((client, index) => (
            <div key={`client-${index}`} className="flex-shrink-0 mx-6">
              <div className="w-52 h-28 bg-background rounded-lg shadow-sm flex items-center justify-center p-4 border border-border hover:border-primary transition-colors">
                <img src={client.logo} alt={client.name} className="max-w-full max-h-full object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsCarousel;
