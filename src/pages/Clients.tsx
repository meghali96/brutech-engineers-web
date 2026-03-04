import Layout from '@/components/layout/Layout';
import PageBanner from '@/components/layout/PageBanner';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Factory, Car, Building2, Zap, Fuel, Plane, HardHat, UtensilsCrossed } from 'lucide-react';
import slide02 from '@/assets/slide-02.jpg';
import resoluteLogo from '@/assets/clients/resolute.png';
import mtarLogo from '@/assets/clients/mtar.jpg';
import hblLogo from '@/assets/clients/hbl.png';
import ntpcLogo from '@/assets/clients/ntpc.png';
import tataLogo from '@/assets/clients/tata.jpg';
import scclLogo from '@/assets/clients/sccl.jpg';
import railwaysLogo from '@/assets/clients/indian-railways.png';
import mahindraLogo from '@/assets/clients/mahindra.png';
import { useScrollAnimation, animationClasses, staggerDelay } from '@/hooks/useScrollAnimation';

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
  { value: '25+', label: 'Industries Served' },
  { value: '100+', label: 'Satisfied Clients' },
  { value: '10,000+', label: 'Parts Delivered' },
];

const ClientsPage = () => {
  const introAnim = useScrollAnimation();
  const industryAnim = useScrollAnimation();
  const statsAnim = useScrollAnimation();
  const ctaAnim = useScrollAnimation();

  return (
    <Layout>
      <PageBanner title="Our Clients" breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Our Clients' }]} backgroundImage={slide02} />

      <section className="section-padding bg-background">
        <div ref={introAnim.ref} className={`container-custom text-center max-w-3xl mx-auto ${animationClasses(introAnim.isVisible, 'fadeUp')}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Trusted by <span className="text-primary">Leading Industries</span></h2>
          <p className="text-muted-foreground">Our components are trusted by clients across India in both heavy and light industries.</p>
        </div>
      </section>

      {/* Brands Carousel */}
      <section className="py-16 bg-muted overflow-hidden">
        <div className="container-custom mb-8">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">Our Clients</h3>
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

      {/* Industries */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div ref={industryAnim.ref}>
            <h3 className={`text-2xl md:text-3xl font-bold text-foreground text-center mb-12 ${animationClasses(industryAnim.isVisible, 'fadeUp')}`}>
              Industries <span className="text-primary">We Serve</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className={`bg-card rounded-xl p-6 text-center shadow-card card-hover border-2 border-transparent transition-all duration-600 ${industryAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                  style={staggerDelay(index, 100)}
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <industry.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground">{industry.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <img src={slide02} alt="" className="absolute inset-0 w-full h-full object-cover" aria-hidden="true" />
        <div className="absolute inset-0 bg-foreground/85" />
        <div ref={statsAnim.ref} className="container-custom relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-700 ${statsAnim.isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}
                style={staggerDelay(index, 200)}
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <p className="text-background/70 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted">
        <div ref={ctaAnim.ref} className={`container-custom text-center ${animationClasses(ctaAnim.isVisible, 'scaleIn')}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Work with Us?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">Join the growing list of satisfied clients who trust Brutech.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact"><Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary-hover font-semibold px-8">Get Quote</Button></Link>
            <Link to="/contact"><Button size="lg" variant="outline" className="border-2 border-secondary text-foreground hover:bg-secondary hover:text-secondary-foreground font-semibold px-8">Contact Us</Button></Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ClientsPage;
