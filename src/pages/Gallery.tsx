import { useState, useRef, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import PageTransition from '@/components/layout/PageTransition';
import PageBanner from '@/components/layout/PageBanner';
import SEO from '@/components/SEO';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import slide01 from '@/assets/slide-01.jpg';
import slide02 from '@/assets/slide-02.jpg';
import slide03 from '@/assets/slide-03.jpg';
import slide04 from '@/assets/slide-04.jpg';
import slide05 from '@/assets/slide-05.jpg';
import slide06 from '@/assets/slide-06.jpg';
import slide07 from '@/assets/slide-07.jpg';
import slide08 from '@/assets/slide-08.jpg';
import slide09 from '@/assets/slide-09.jpg';
import about1 from '@/assets/about-1.jpg';
import about2 from '@/assets/about-2.jpg';

const galleryImages = [
  { src: slide01, title: 'Ingersoll Rand - Precision Power Tools', category: 'Products' },
  { src: slide02, title: 'Ingersoll Rand - Industrial Solutions', category: 'Products' },
  { src: slide03, title: 'Ingersoll Rand - Power Tools & Lifting', category: 'Products' },
  { src: slide04, title: 'Industrial Equipment Solutions', category: 'Workshop' },
  { src: slide05, title: 'Ingersoll Rand - Impact Tools', category: 'Products' },
  { src: slide06, title: 'DEWALT Power Tools', category: 'Products' },
  { src: slide07, title: 'Stanley - Professional Tools', category: 'Products' },
  { src: slide08, title: 'URYU - Precision Torque Solutions', category: 'Products' },
  { src: slide09, title: 'URYU - Fastening Tools', category: 'Products' },
  { src: about1, title: 'Brutech Workshop', category: 'Workshop' },
  { src: about2, title: 'Precision Equipment', category: 'Workshop' },
];

const categories = ['All', 'Products', 'Workshop'];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.06 } } } as const;
const imgCard = { hidden: { opacity: 0, y: 30, scale: 0.9 }, visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring' as const, stiffness: 100, damping: 14 } } };

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);

  const filteredImages = selectedCategory === 'All' ? galleryImages : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  // Scroll lightbox into view when it opens or changes
  useEffect(() => {
    if (lightboxIndex !== null && lightboxRef.current) {
      setTimeout(() => {
        lightboxRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
  }, [lightboxIndex]);

  const closeLightbox = () => setLightboxIndex(null);
  const goNext = () => { if (lightboxIndex !== null) setLightboxIndex((lightboxIndex + 1) % filteredImages.length); };
  const goPrev = () => { if (lightboxIndex !== null) setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length); };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') goNext();
    if (e.key === 'ArrowLeft') goPrev();
  };

  // Determine the row where the lightbox should appear (after the clicked image's row)
  const getInsertIndex = () => {
    if (lightboxIndex === null) return -1;
    // Estimate columns: 3 on lg, 2 on sm, 1 on xs
    // We'll insert after the full grid and show it there — simpler and consistent
    return lightboxIndex;
  };

  return (
    <PageTransition>
      <SEO
        title="Gallery | Brutech Engineers - Our Work & Facilities"
        description="Browse Brutech Engineers' gallery showcasing our manufacturing facility, precision machine parts, industrial equipment and project installations."
        keywords="Brutech gallery, manufacturing facility, machine parts photos, industrial equipment images, project installations"
      />
      <Layout>
        <PageBanner title="Gallery" breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Gallery' }]} backgroundImage={slide04} />

        <section className="section-padding bg-background">
          <div className="container-custom">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 80, damping: 16 }} className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${selectedCategory === cat ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'}`}
                >
                  {cat}
                </motion.button>
              ))}
            </motion.div>

            <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={index}
                  variants={imgCard}
                  whileHover={{ scale: 1.03, y: -4 }}
                  className={`group relative overflow-hidden rounded-xl border bg-muted cursor-pointer aspect-video ${lightboxIndex === index ? 'border-primary ring-2 ring-primary' : 'border-border'}`}
                  onClick={() => openLightbox(index)}
                >
                  <img src={image.src} alt={image.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-all duration-300 flex items-end">
                    <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-background font-semibold text-sm">{image.title}</p>
                      <span className="text-primary text-xs font-medium">{image.category}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Inline lightbox - appears below the grid near the clicked image */}
            <AnimatePresence>
              {lightboxIndex !== null && (
                <motion.div
                  ref={lightboxRef}
                  initial={{ opacity: 0, y: 30, scaleY: 0.9 }}
                  animate={{ opacity: 1, y: 0, scaleY: 1 }}
                  exit={{ opacity: 0, y: 20, scaleY: 0.9 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 24 }}
                  className="mt-6 relative rounded-2xl bg-foreground/95 p-4 md:p-8 origin-top"
                  onKeyDown={handleKeyDown}
                  tabIndex={0}
                  role="dialog"
                  aria-label="Image lightbox"
                >
                  <button onClick={closeLightbox} className="absolute top-3 right-3 w-10 h-10 rounded-full bg-background/10 text-background flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors z-50" aria-label="Close lightbox"><X className="w-5 h-5" /></button>

                  <div className="flex items-center justify-center gap-4">
                    <button onClick={goPrev} className="flex-shrink-0 w-10 h-10 rounded-full bg-background/10 text-background flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Previous image"><ChevronLeft className="w-5 h-5" /></button>

                    <div className="flex-1 flex flex-col items-center max-w-4xl">
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={lightboxIndex}
                          src={filteredImages[lightboxIndex].src}
                          alt={filteredImages[lightboxIndex].title}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="max-w-full max-h-[60vh] md:max-h-[70vh] object-contain rounded-lg"
                        />
                      </AnimatePresence>
                      <p className="text-center text-background mt-4 font-semibold">{filteredImages[lightboxIndex].title}</p>
                      <p className="text-center text-primary text-sm mt-1">{lightboxIndex + 1} / {filteredImages.length}</p>
                    </div>

                    <button onClick={goNext} className="flex-shrink-0 w-10 h-10 rounded-full bg-background/10 text-background flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Next image"><ChevronRight className="w-5 h-5" /></button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </Layout>
    </PageTransition>
  );
};

export default GalleryPage;
