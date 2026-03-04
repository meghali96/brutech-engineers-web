import Layout from '@/components/layout/Layout';
import PageBanner from '@/components/layout/PageBanner';
import { Check, Package, Building2, Users, Target, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import about1 from '@/assets/about-1.jpg';
import about2 from '@/assets/about-2.jpg';
import about3 from '@/assets/about-3.jpg';
import about4 from '@/assets/about-4.jpg';
import about5 from '@/assets/about-5.jpg';
import about6 from '@/assets/about-6.jpg';
import slide01 from '@/assets/slide-01.jpg';
import { useScrollAnimation, animationClasses, staggerDelay } from '@/hooks/useScrollAnimation';

const images = [about1, about2, about3, about4, about5, about6];

const features = [
  'Over 4 years of proven excellence in the industrial components industry',
  'Specialists in both standard and custom machine part fabrication for diverse sectors',
  'Skilled team focused on accuracy, durability, and engineering efficiency',
  'Quick turnaround times without compromising on quality',
  'Strong after-sales support and long-term client partnerships',
  'Modern manufacturing processes and strict quality checks at every stage',
];

const stats = [
  { icon: Package, value: '10,000+', label: 'Machine Parts Delivered' },
  { icon: Building2, value: '25+', label: 'Industries Served' },
  { icon: Users, value: '20+', label: 'Skilled Engineers & Staff' },
];

const AboutPage = () => {
  const imgAnim = useScrollAnimation();
  const contentAnim = useScrollAnimation();
  const missionAnim = useScrollAnimation();
  const visionAnim = useScrollAnimation();
  const statsAnim = useScrollAnimation();
  const ctaAnim = useScrollAnimation();

  return (
    <Layout>
      <PageBanner title="About Us" breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'About Us' }]} backgroundImage={slide01} />

      {/* Company Story */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div ref={imgAnim.ref} className={`grid grid-cols-3 gap-3 md:gap-4 ${animationClasses(imgAnim.isVisible, 'slideLeft')}`}>
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`img-zoom rounded-lg overflow-hidden aspect-square border border-border bg-muted transition-all duration-500 ${imgAnim.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                  style={staggerDelay(index, 80)}
                >
                  <img src={image} alt={`About Brutech ${index + 1}`} className="w-full h-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>

            <div ref={contentAnim.ref} className={animationClasses(contentAnim.isVisible, 'slideRight')}>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                About <span className="text-primary">BruTech</span> Engineers
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Founded in 2022, Brutech has quickly earned the trust of manufacturers by consistently delivering precision parts with unmatched quality and service.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Brutech started as an assembly equipment and solution provider to Automotive OEMs. Today we serve leading automotive OEMs, their vendors and other industries including railways, white-goods, pharmaceuticals and food processing.
              </p>

              <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className={`flex items-start gap-3 transition-all duration-500 ${contentAnim.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
                    style={staggerDelay(index, 100)}
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </span>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <p className="text-muted-foreground leading-relaxed">
                At Brutech, we don't just supply parts — we provide reliability, support, and a promise to keep your business moving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div ref={missionAnim.ref} className={`bg-card rounded-xl p-8 shadow-card border border-border ${animationClasses(missionAnim.isVisible, 'slideLeft')}`}>
              <div className="w-16 h-16 mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Our <span className="text-primary">Mission</span></h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To substantially improve the productivity of our customers by enhancing efficiency, ergonomics, accuracy and speed in their manufacturing process.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                To help our customers to safeguard the safety and health of their employees and to assist them in being environment friendly and green companies.
              </p>
            </div>

            <div ref={visionAnim.ref} className={`bg-card rounded-xl p-8 shadow-card border border-border ${animationClasses(visionAnim.isVisible, 'slideRight')}`}>
              <div className="w-16 h-16 mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Our <span className="text-primary">Vision</span></h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To be the most trusted and preferred industrial solutions partner across India, known for innovation, quality, and customer-first approach.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With two sales and service locations in Hyderabad and Vizag, we have grown over the years both in terms of our product offerings as well as in our customer base.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <img src={slide01} alt="" className="absolute inset-0 w-full h-full object-cover" aria-hidden="true" />
        <div className="absolute inset-0 bg-foreground/85" />
        <div ref={statsAnim.ref} className="container-custom relative z-10">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-700 ${statsAnim.isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}
                style={staggerDelay(index, 200)}
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <stat.icon className="w-10 h-10 text-primary" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-background mb-2">{stat.value}</div>
                <p className="text-background/70 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div ref={ctaAnim.ref} className={`container-custom text-center ${animationClasses(ctaAnim.isVisible, 'scaleIn')}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Work with Us?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how Brutech can help improve your manufacturing processes with our precision-crafted components.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary-hover font-semibold px-8">Get Quote</Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
