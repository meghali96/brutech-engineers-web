import Layout from '@/components/layout/Layout';
import PageBanner from '@/components/layout/PageBanner';
import { Check, Package, Building2, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import about1 from '@/assets/about-1.jpg';
import about2 from '@/assets/about-2.jpg';
import about3 from '@/assets/about-3.jpg';
import about4 from '@/assets/about-4.jpg';
import about5 from '@/assets/about-5.jpg';
import about6 from '@/assets/about-6.jpg';
import slide01 from '@/assets/slide-01.jpg';

const images = [about1, about2, about3, about4, about5, about6];

const features = [
  'Over 3 years of proven excellence in the industrial components industry',
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
  return (
    <Layout>
      <PageBanner
        title="About Us"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'About Us' },
        ]}
        backgroundImage={slide04}
      />

      {/* Company Story */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Grid */}
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="img-zoom rounded-lg overflow-hidden aspect-square border border-border bg-muted"
                >
                  <img
                    src={image}
                    alt={`About Brutech ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* Content */}
            <div>
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
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </span>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <p className="text-muted-foreground leading-relaxed">
                At Brutech, we don't just supply parts — we provide reliability, support, and a promise to keep your business moving. Our commitment to precision, innovation, and customer satisfaction has made us a preferred partner for industries seeking lasting performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Mission</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              To substantially improve the productivity of our customers by enhancing efficiency, ergonomics, accuracy and speed in their manufacturing process. To help our customers to safeguard the safety and health of their employees and to assist them in being environment friendly and green companies.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With two sales and service locations in Hyderabad and Vizag, we have grown over the years both in terms of our product offerings as well as in our customer base. We represent brands which are known all over the world for their quality and are market leaders in their respective fields.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-foreground">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <stat.icon className="w-10 h-10 text-primary" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-background mb-2">
                  {stat.value}
                </div>
                <p className="text-background/70 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Work with Us?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how Brutech can help improve your manufacturing processes with our precision-crafted components.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary-hover font-semibold px-8">
              Get Quote
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
