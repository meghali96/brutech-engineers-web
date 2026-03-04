import Layout from '@/components/layout/Layout';
import PageBanner from '@/components/layout/PageBanner';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Wrench, Container, Wind, Settings, Droplets, Truck, Check, ArrowRight } from 'lucide-react';
import slide03 from '@/assets/slide-03.jpg';
import about1 from '@/assets/about-1.jpg';
import about2 from '@/assets/about-2.jpg';
import about3 from '@/assets/about-3.jpg';
import about4 from '@/assets/about-4.jpg';
import about5 from '@/assets/about-5.jpg';
import about6 from '@/assets/about-6.jpg';
import { useScrollAnimation, animationClasses, staggerDelay } from '@/hooks/useScrollAnimation';

const services = [
  { id: 'assembly', icon: Wrench, title: 'Assembly Solutions', description: 'Expert assembly services ensuring precision and durability', image: about1, features: ['High-precision assembly equipment', 'Automated assembly lines', 'Quality control integration', 'Custom assembly solutions', 'Ergonomic workstation design'] },
  { id: 'lifting', icon: Container, title: 'Industry Lifting', description: 'Heavy-duty lifting solutions for industrial and commercial sectors', image: about5, features: ['Overhead cranes and hoists', 'Chain hoists and trolleys', 'Lifting accessories and attachments', 'Load testing and certification', 'Installation and commissioning'] },
  { id: 'pneumatic', icon: Wind, title: 'Pneumatic Lifting', description: 'Air-powered lifting solutions for efficient and smooth operations', image: about2, features: ['Pneumatic hoists and balancers', 'Air-powered manipulators', 'Vacuum lifting systems', 'Compressed air solutions', 'Energy-efficient designs'] },
  { id: 'repair', icon: Settings, title: 'Repairing Services', description: 'Comprehensive repair services for machinery and lifting systems', image: about4, features: ['Preventive maintenance programs', 'Emergency repair services', 'Spare parts replacement', 'Calibration and testing', 'On-site and off-site repairs'] },
  { id: 'hydraulic', icon: Droplets, title: 'Hydraulic Lifting', description: 'Powerful hydraulic lifting solutions for high-capacity operations', image: about3, features: ['Hydraulic jacks and cylinders', 'Hydraulic power packs', 'Custom hydraulic systems', 'High-tonnage lifting solutions', 'Precision hydraulic controls'] },
  { id: 'material', icon: Truck, title: 'Customized Material Handling', description: 'Tailored material handling solutions to streamline logistics', image: about6, features: ['Conveyor systems', 'Automated guided vehicles', 'Palletizers and depalletizers', 'Custom handling equipment', 'Warehouse optimization'] },
];

const ServiceBlock = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const imgAnim = useScrollAnimation();
  const contentAnim = useScrollAnimation();

  return (
    <section id={service.id} className={`section-padding ${index % 2 === 0 ? 'bg-muted' : 'bg-background'}`}>
      <div className="container-custom">
        <div className={`grid lg:grid-cols-2 gap-12 items-center`}>
          <div ref={imgAnim.ref} className={`${index % 2 === 1 ? 'lg:order-2' : ''} ${animationClasses(imgAnim.isVisible, index % 2 === 0 ? 'slideLeft' : 'slideRight')}`}>
            <div className="img-zoom rounded-xl overflow-hidden shadow-lg">
              <img src={service.image} alt={service.title} className="w-full h-[400px] object-cover" loading="lazy" />
            </div>
          </div>
          <div ref={contentAnim.ref} className={`${index % 2 === 1 ? 'lg:order-1' : ''} ${animationClasses(contentAnim.isVisible, index % 2 === 0 ? 'slideRight' : 'slideLeft')}`}>
            <div className="service-icon"><service.icon className="w-8 h-8" /></div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{service.title}</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
            <ul className="space-y-3 mb-8">
              {service.features.map((feature, fi) => (
                <li
                  key={fi}
                  className={`flex items-center gap-3 transition-all duration-500 ${contentAnim.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
                  style={staggerDelay(fi, 100)}
                >
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            <Link to="/contact">
              <Button className="bg-primary text-primary-foreground hover:bg-primary-hover font-semibold">
                Request Quote <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesPage = () => {
  const introAnim = useScrollAnimation();
  const ctaAnim = useScrollAnimation();

  return (
    <Layout>
      <PageBanner title="Services" breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Services' }]} backgroundImage={slide03} />

      <section className="section-padding bg-background">
        <div ref={introAnim.ref} className={`container-custom text-center max-w-3xl mx-auto ${animationClasses(introAnim.isVisible, 'fadeUp')}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our <span className="text-primary">Industrial Solutions</span></h2>
          <p className="text-muted-foreground">Discover our wide range of industrial solutions designed to lift, assemble, repair, and handle your materials with precision and efficiency.</p>
        </div>
      </section>

      {services.map((service, index) => (
        <ServiceBlock key={service.id} service={service} index={index} />
      ))}

      <section className="section-padding bg-foreground">
        <div ref={ctaAnim.ref} className={`container-custom text-center ${animationClasses(ctaAnim.isVisible, 'scaleIn')}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-background mb-6">Need a Custom Solution?</h2>
          <p className="text-background/70 mb-8 max-w-2xl mx-auto">We specialize in configuring and tailoring solutions to our customers' needs.</p>
          <Link to="/contact">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary-hover font-semibold px-8">Get in Touch</Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
