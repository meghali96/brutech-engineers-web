import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import hero1 from '@/assets/hero-1.jpg';
import hero2 from '@/assets/hero-2.jpg';
import hero3 from '@/assets/hero-3.jpg';
import heroUryu1 from '@/assets/hero-uryu-1.jpg';
import heroUryu2 from '@/assets/hero-uryu-2.jpg';
import heroStanley from '@/assets/hero-stanley.jpg';
import heroDewalt1 from '@/assets/hero-dewalt-1.jpg';
import heroIR1 from '@/assets/hero-ir-1.jpg';
import heroIR2 from '@/assets/hero-ir-2.jpg';
import heroIR3 from '@/assets/hero-ir-3.jpg';
import heroIR4 from '@/assets/hero-ir-4.jpg';
import heroIR5 from '@/assets/hero-ir-5.jpg';

const slides = [
  {
    image: hero1,
    heading: 'Suitable Solution for Your Industry',
    subheading: 'Precision Machine Parts & Lifting Solutions',
    buttonText: 'Get Quote',
    buttonLink: '/contact',
  },
  {
    image: heroIR1,
    heading: 'Ingersoll Rand',
    subheading: 'Precision Power. Engineered Future.',
    buttonText: 'Explore Products',
    buttonLink: '/services',
  },
  {
    image: heroIR2,
    heading: 'Ingersoll Rand',
    subheading: 'Complete Industrial Solutions & Accessories',
    buttonText: 'Learn More',
    buttonLink: '/services',
  },
  {
    image: heroIR3,
    heading: 'Ingersoll Rand',
    subheading: 'Power Tools, Lifting & Material Handling',
    buttonText: 'View Solutions',
    buttonLink: '/services',
  },
  {
    image: heroIR4,
    heading: 'Ingersoll Rand',
    subheading: 'Global Leadership Since 1966 — Innovation & Reliability',
    buttonText: 'Discover More',
    buttonLink: '/services',
  },
  {
    image: heroIR5,
    heading: 'Ingersoll Rand',
    subheading: 'Precision Power. Engineered Future.',
    buttonText: 'View Range',
    buttonLink: '/services',
  },
  {
    image: heroUryu1,
    heading: 'URYU - Industrial Fastening Solutions',
    subheading: 'High-Performance Pulse Tools for Every Application',
    buttonText: 'View Products',
    buttonLink: '/services',
  },
  {
    image: heroUryu2,
    heading: 'URYU - Precision Torque Solutions',
    subheading: 'Reliable Fastening Tools Built for Accuracy',
    buttonText: 'Learn More',
    buttonLink: '/services',
  },
  {
    image: heroStanley,
    heading: 'Stanley Black & Decker',
    subheading: 'Professional-Grade Power Tools & Solutions',
    buttonText: 'Explore Range',
    buttonLink: '/services',
  },
  {
    image: heroDewalt1,
    heading: 'DEWALT Power Tools',
    subheading: 'Built Tough for the Toughest Jobs',
    buttonText: 'View Products',
    buttonLink: '/services',
  },
  {
    image: hero2,
    heading: 'Boost Your Productivity',
    subheading: 'Quality Industrial Tools & Equipment',
    buttonText: 'View Services',
    buttonLink: '/services',
  },
  {
    image: hero3,
    heading: 'Reduce Production Cost',
    subheading: 'Boost Operational Efficiency',
    buttonText: 'Contact Us',
    buttonLink: '/contact',
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      className="relative h-[600px] md:h-[700px] lg:h-[90vh] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <img
            src={slide.image}
            alt={slide.heading}
            className="absolute inset-0 w-full h-full object-cover"
            loading={index === 0 ? 'eager' : 'lazy'}
            decoding="async"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-foreground/60" />

          {/* Content */}
          <div className="container-custom h-full flex items-center relative z-10">
            <div className={`max-w-3xl transition-all duration-700 ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-background mb-4 leading-tight">
                {slide.heading}
              </h1>
              <p className="text-xl md:text-2xl text-background/90 mb-8">
                {slide.subheading}
              </p>
              <Link to={slide.buttonLink}>
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary-hover font-semibold px-8 py-6 text-lg">
                  {slide.buttonText}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-secondary/50 text-foreground flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-secondary/50 text-foreground flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors z-20"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'w-7 bg-primary'
                : 'w-2.5 bg-secondary/50 hover:bg-secondary'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
