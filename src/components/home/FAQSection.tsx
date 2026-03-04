import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  { question: 'What types of machine parts does Brutech offer?', answer: 'We supply a wide range of standard and custom machine parts, including gears, shafts, couplings, and high-precision components for various industrial applications.' },
  { question: 'Can Brutech provide custom-made parts based on our requirements?', answer: 'Absolutely. We specialize in designing and manufacturing custom parts based on your specifications, ensuring perfect compatibility and performance.' },
  { question: 'What industries does Brutech serve?', answer: 'We cater to multiple sectors including manufacturing, automotive, energy, construction, and more. Our components are trusted by clients in both heavy and light industries.' },
  { question: 'How long does it take to deliver orders?', answer: 'Delivery time depends on the complexity and volume of the order. Standard parts are dispatched within 3–5 business days, while custom components may take 7–15 days.' },
  { question: 'Does Brutech provide after-sales support?', answer: 'Yes, we offer dedicated after-sales support to ensure product performance, including technical guidance, replacement assistance, and service queries.' },
  { question: 'Where is Brutech located and do you ship nationwide?', answer: 'Brutech is based in India and we ship our products across the country. We also support logistics for bulk orders and urgent deliveries on request.' },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } } as const;
const item = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 100, damping: 14 } } };

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ type: 'spring', stiffness: 80, damping: 16 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-muted-foreground">Answers to common questions about our products, services, and support at Brutech.</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="max-w-3xl mx-auto"
        >
          {faqs.map((faq, index) => (
            <motion.div key={index} variants={item} className="border-b border-border">
              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="flex items-center justify-between w-full py-5 text-left group"
              >
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors pr-4">{faq.question}</span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary"
                >
                  {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </motion.span>
              </motion.button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 16 }}
                    className="overflow-hidden"
                  >
                    <p className="text-muted-foreground leading-relaxed pb-5">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
