import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useScrollAnimation, animationClasses, staggerDelay } from '@/hooks/useScrollAnimation';

const faqs = [
  { question: 'What types of machine parts does Brutech offer?', answer: 'We supply a wide range of standard and custom machine parts, including gears, shafts, couplings, and high-precision components for various industrial applications.' },
  { question: 'Can Brutech provide custom-made parts based on our requirements?', answer: 'Absolutely. We specialize in designing and manufacturing custom parts based on your specifications, ensuring perfect compatibility and performance.' },
  { question: 'What industries does Brutech serve?', answer: 'We cater to multiple sectors including manufacturing, automotive, energy, construction, and more. Our components are trusted by clients in both heavy and light industries.' },
  { question: 'How long does it take to deliver orders?', answer: 'Delivery time depends on the complexity and volume of the order. Standard parts are dispatched within 3–5 business days, while custom components may take 7–15 days.' },
  { question: 'Does Brutech provide after-sales support?', answer: 'Yes, we offer dedicated after-sales support to ensure product performance, including technical guidance, replacement assistance, and service queries.' },
  { question: 'Where is Brutech located and do you ship nationwide?', answer: 'Brutech is based in India and we ship our products across the country. We also support logistics for bulk orders and urgent deliveries on request.' },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const header = useScrollAnimation();
  const list = useScrollAnimation();

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div ref={header.ref} className={`text-center max-w-3xl mx-auto mb-12 ${animationClasses(header.isVisible, 'fadeUp')}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-muted-foreground">Answers to common questions about our products, services, and support at Brutech.</p>
        </div>

        <div ref={list.ref} className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border-b border-border transition-all duration-500 ${list.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={staggerDelay(index, 80)}
            >
              <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="flex items-center justify-between w-full py-5 text-left group">
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors pr-4">{faq.question}</span>
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 pb-5' : 'max-h-0'}`}>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
