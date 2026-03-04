import { Link } from 'react-router-dom';
import { Wrench, Container, Wind, Settings, Droplets, Truck, ArrowRight } from 'lucide-react';
import { useScrollAnimation, animationClasses, staggerDelay } from '@/hooks/useScrollAnimation';

const services = [
  { icon: Wrench, title: 'Assembly Solutions', description: 'Expert assembly services ensuring precision and durability', link: '/services#assembly' },
  { icon: Container, title: 'Industry Lifting', description: 'Heavy-duty lifting solutions for industrial and commercial sectors', link: '/services#lifting' },
  { icon: Wind, title: 'Pneumatic Lifting', description: 'Air-powered lifting solutions for efficient and smooth operations', link: '/services#pneumatic' },
  { icon: Settings, title: 'Repairing Services', description: 'Comprehensive repair services for machinery and lifting systems', link: '/services#repair' },
  { icon: Droplets, title: 'Hydraulic Lifting', description: 'Powerful hydraulic lifting solutions for high-capacity operations', link: '/services#hydraulic' },
  { icon: Truck, title: 'Customized Material Handling', description: 'Tailored material handling solutions to streamline logistics', link: '/services#material' },
];

const ServicesSection = () => {
  const header = useScrollAnimation();
  const grid = useScrollAnimation();

  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        <div ref={header.ref} className={`text-center max-w-3xl mx-auto mb-12 ${animationClasses(header.isVisible, 'fadeUp')}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground">
            Discover our wide range of industrial solutions designed to lift, assemble, repair, and handle your materials with precision and efficiency.
          </p>
        </div>

        <div ref={grid.ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-card rounded-xl p-8 shadow-card card-hover border-2 border-transparent group transition-all duration-700 ${grid.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={staggerDelay(index, 120)}
            >
              <div className="service-icon group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <Link to={service.link} className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
