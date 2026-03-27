import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import slide01 from '@/assets/slide-01.jpg';
import slide04 from '@/assets/slide-04.jpg';
import slide06 from '@/assets/slide-06.jpg';
import slide07 from '@/assets/slide-07.jpg';
import slide08 from '@/assets/slide-08.jpg';

const slides = [
  { image: slide04, heading: 'Suitable Solution for Your Industry', subheading: 'Precision Machine Parts & Industrial Equipment', buttonText: 'Get Quote', buttonLink: '/contact' },
  { image: slide01, heading: 'Ingersoll Rand', subheading: 'Precision Power Tools & Complete Industrial Solutions', buttonText: 'Explore Products', buttonLink: '/services' },
  { image: slide06, heading: 'DEWALT Power Tools', subheading: 'Built Tough for the Toughest Jobs', buttonText: 'View Products', buttonLink: '/services' },
  { image: slide07, heading: 'Stanley Black & Decker', subheading: 'Professional-Grade Power Tools & Solutions', buttonText: 'Explore Range', buttonLink: '/services' },
  { image: slide08, heading: 'URYU - Precision Torque Solutions', subheading: 'Reliable Fastening Tools Built for Accuracy', buttonText: 'Learn More', buttonLink: '/services' },
];

const textVariants = {
  hidden: { opacity: 0, y: 60, filter: 'blur(8px)' },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { delay: i * 0.2, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
  exit: { opacity: 0, y: -30, filter: 'blur(4px)', transition: { duration: 0.3 } },
};

const imageVariants = {
  enter: { scale: 1.15, opacity: 0 },
  center: { scale: 1, opacity: 1, transition: { duration: 1.2, ease: 'easeOut' } },
  exit: { scale: 0.95, opacity: 0, transition: { duration: 0.6 } },
};

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

  const goToSlide = (index: number) => setCurrentSlide(index);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section
      className="relative h-[85vh] md:h-[90vh] lg:h-[95vh] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides with AnimatePresence for smooth crossfade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0"
          variants={imageVariants}
          initial="enter"
          animate="center"
          exit="exit"
        >
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].heading}
            className="absolute inset-0 w-full h-full object-cover"
            loading={currentSlide === 0 ? 'eager' : 'lazy'}
            decoding="async"
          />
          <div className="absolute inset-0 bg-foreground/80" />

          <div className="container-custom h-full flex items-center relative z-10">
            <div className="max-w-3xl">
              <motion.h1
                custom={0}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight hero-animated-text"
              >
                {slides[currentSlide].heading}
              </motion.h1>
              <motion.p
                custom={1}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="text-xl md:text-2xl text-background/90 mb-8"
              >
                {slides[currentSlide].subheading}
              </motion.p>
              <motion.div
                custom={2}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <Link to={slides[currentSlide].buttonLink}>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary-hover font-semibold px-8 py-6 text-lg">
                      {slides[currentSlide].buttonText}
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <motion.button
        onClick={prevSlide}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-secondary/50 text-foreground flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </motion.button>
      <motion.button
        onClick={nextSlide}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-secondary/50 text-foreground flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors z-20"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </motion.button>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            whileHover={{ scale: 1.3 }}
            animate={{
              width: index === currentSlide ? 28 : 10,
              backgroundColor: index === currentSlide ? 'hsl(37 99% 53%)' : 'rgba(163,165,166,0.5)',
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="h-2.5 rounded-full"
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
