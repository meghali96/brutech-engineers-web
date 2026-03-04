import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import slide01 from '@/assets/slide-01.jpg';
import slide04 from '@/assets/slide-04.jpg';
import slide06 from '@/assets/slide-06.jpg';
import slide07 from '@/assets/slide-07.jpg';

const slides = [
  {
    image: slide06,
    heading: 'DEWALT Power Tools',
    subheading: 'Built Tough for the Toughest Jobs',
    buttonText: 'View Products',
    buttonLink: '/services',
  },
  {
    image: slide04,
    heading: 'Suitable Solution for Your Industry',
    subheading: 'Precision Machine Parts & Industrial Equipment',
    buttonText: 'Get Quote',
    buttonLink: '/contact',
  },
  {
    image: slide01,
    heading: 'Ingersoll Rand',
    subheading: 'Precision Power Tools & Complete Industrial Solutions',
    buttonText: 'Explore Products',
    buttonLink: '/services',
  },
  {
    image: slide07,
    heading: 'Stanley Black & Decker',
    subheading: 'Professional-Grade Power Tools & Solutions',
    buttonText: 'Explore Range',
    buttonLink: '/services',
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
      className="relative h-[85vh] md:h-[90vh] lg:h-[95vh] overflow-hidden"
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
          {/* Darker Overlay for better text visibility */}
          <div className="absolute inset-0 bg-foreground/80" />

          {/* Content */}
          <div className="container-custom h-full flex items-center relative z-10">
            <div className={`max-w-3xl transition-all duration-700 ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight hero-animated-text">
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
