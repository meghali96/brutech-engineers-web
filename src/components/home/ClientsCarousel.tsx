const brands = [
  'Ingersoll Rand',
  'Dewalt',
  'Stanley Black & Decker',
  'VAC Pneumatics',
  'Ace Pneumatics',
  'Tohnichi',
  'Uryu',
];

const ClientsCarousel = () => {
  return (
    <section className="py-16 md:py-20 bg-muted overflow-hidden">
      <div className="container-custom mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">
          Clients <span className="text-primary">Brands</span>
        </h2>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-muted to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-muted to-transparent z-10" />

        {/* Marquee */}
        <div className="flex animate-marquee hover:[animation-play-state:paused]">
          {/* First set */}
          {brands.map((brand, index) => (
            <div
              key={`brand-1-${index}`}
              className="flex-shrink-0 mx-8 grayscale-hover"
            >
              <div className="w-48 h-24 bg-background rounded-lg shadow-sm flex items-center justify-center px-6 border border-border hover:border-primary transition-colors">
                <span className="font-bold text-foreground text-center text-lg">
                  {brand}
                </span>
              </div>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {brands.map((brand, index) => (
            <div
              key={`brand-2-${index}`}
              className="flex-shrink-0 mx-8 grayscale-hover"
            >
              <div className="w-48 h-24 bg-background rounded-lg shadow-sm flex items-center justify-center px-6 border border-border hover:border-primary transition-colors">
                <span className="font-bold text-foreground text-center text-lg">
                  {brand}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsCarousel;
