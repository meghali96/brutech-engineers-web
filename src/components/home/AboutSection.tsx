import { Check } from 'lucide-react';
import about1 from '@/assets/about-1.jpg';
import about2 from '@/assets/about-2.jpg';
import about3 from '@/assets/about-3.jpg';
import about4 from '@/assets/about-4.jpg';
import about5 from '@/assets/about-5.jpg';
import about6 from '@/assets/about-6.jpg';

const images = [about1, about2, about3, about4, about5, about6];

const features = [
  'Over 3 years of proven excellence in the industrial components industry',
  'Specialists in both standard and custom machine part fabrication for diverse sectors',
  'Skilled team focused on accuracy, durability, and engineering efficiency',
  'Quick turnaround times without compromising on quality',
  'Strong after-sales support and long-term client partnerships',
  'Modern manufacturing processes and strict quality checks at every stage',
];

const AboutSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Grid */}
          <div className="grid grid-cols-3 gap-3 md:gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="img-zoom rounded-lg overflow-hidden aspect-square"
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
            <p className="text-muted-foreground mb-4 leading-relaxed">
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
  );
};

export default AboutSection;
