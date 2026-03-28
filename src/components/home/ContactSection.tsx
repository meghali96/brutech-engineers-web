import { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import LetterReveal from '@/components/animations/LetterReveal';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    { icon: MapPin, title: 'Head Office', content: 'H.NO. 5-36/191, Prashanthi Nagar, Kukatpally, Hyderabad, T.G - 500072' },
    { icon: MapPin, title: 'Branch Office', content: '3-23, Iruvada Village, Near Water Tank, Sabbavaram M, Visakapatnam, A.P - 531035' },
    { icon: Phone, title: 'Call Us', content: '+91 7702949688, 7702949690' },
    { icon: Mail, title: 'Email Us', content: 'sales@brutechengineers.com' },
  ];

  const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } } as const;
  const card = { hidden: { opacity: 0, y: 30, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring' as const, stiffness: 100, damping: 14 } } };

  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ type: 'spring', stiffness: 80, damping: 16 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get in Touch <span className="text-primary">With Us</span>
          </h2>
          <p className="text-muted-foreground">Have questions or need a custom solution? Reach out to the Brutech team — we're here to help you.</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              variants={card}
              whileHover={{ y: -6, scale: 1.03, transition: { type: 'spring', stiffness: 300 } }}
              className="bg-card rounded-xl p-6 text-center shadow-card border border-border hover:border-primary transition-colors"
            >
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center"
              >
                <info.icon className="w-8 h-8 text-primary" />
              </motion.div>
              <h3 className="font-bold text-foreground mb-2">{info.title}</h3>
              <p className="text-muted-foreground text-sm">{info.content}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ type: 'spring', stiffness: 60, damping: 16 }}
            className="bg-card rounded-xl p-8 shadow-card"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-6 p-4 bg-primary/10 border border-primary/30 rounded-lg text-primary"
              >
                Thank you! Your message has been sent successfully.
              </motion.div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" name="name" placeholder="Your Name *" required value={formData.name} onChange={handleChange} className="form-input" />
                <input type="email" name="email" placeholder="Your Email *" required value={formData.email} onChange={handleChange} className="form-input" />
              </div>
              <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} className="form-input" />
              <textarea name="message" placeholder="Your Message *" rows={5} required value={formData.message} onChange={handleChange} className="form-input resize-none" />
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button type="submit" disabled={isSubmitting} className="w-full bg-primary text-primary-foreground hover:bg-primary-hover font-semibold py-6">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </motion.div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ type: 'spring', stiffness: 60, damping: 16 }}
            className="rounded-xl overflow-hidden shadow-card h-[400px] lg:h-auto min-h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.4776458374!2d78.39849!3d17.49347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91f0a69767e7%3A0x8f8bfc7b8b5d8f8b!2sPrashant%20Nagar%2C%20Kukatpally%2C%20Hyderabad%2C%20Telangana%20500072!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Brutech Engineers Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
