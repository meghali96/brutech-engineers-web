import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import PageBanner from '@/components/layout/PageBanner';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import slide01 from '@/assets/slide-01.jpg';
import { useScrollAnimation, animationClasses, staggerDelay } from '@/hooks/useScrollAnimation';

const contactInfo = [
  { icon: MapPin, title: 'Head Office', content: 'H.NO. 5-36/191, Prashanthi Nagar, Kukatpally, Hyderabad, T.G - 500072' },
  { icon: MapPin, title: 'Branch Office', content: '3-23, Iruvada Village, Near Water Tank, Sabbavaram M, Visakapatnam, A.P - 531035' },
  { icon: Phone, title: 'Phone', content: ['+91 7702949688', '+91 7702949690', '+91 9381755470'] },
  { icon: Mail, title: 'Email', content: 'sales@brutechengineers.com' },
  { icon: Clock, title: 'Business Hours', content: ['Monday - Saturday: 9:00 AM - 6:00 PM', 'Sunday: Closed'] },
];

const serviceOptions = ['Assembly Solutions', 'Industry Lifting', 'Pneumatic Lifting', 'Repairing Services', 'Hydraulic Lifting', 'Material Handling', 'Other'];

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', service: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', service: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const introAnim = useScrollAnimation();
  const cardsAnim = useScrollAnimation();
  const formAnim = useScrollAnimation();
  const mapsAnim = useScrollAnimation();

  return (
    <Layout>
      <PageBanner title="Contact" breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Contact' }]} backgroundImage={slide01} />

      <section className="section-padding bg-background">
        <div ref={introAnim.ref} className={`container-custom text-center max-w-3xl mx-auto ${animationClasses(introAnim.isVisible, 'fadeUp')}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get in Touch <span className="text-primary">With Us</span></h2>
          <p className="text-muted-foreground">Have questions or need a custom solution? Reach out to the Brutech team — we're here to help you.</p>
        </div>
      </section>

      <section className="pb-16 bg-background">
        <div ref={cardsAnim.ref} className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className={`bg-card rounded-xl p-6 text-center shadow-card border border-border hover:border-primary transition-all duration-500 ${cardsAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={staggerDelay(index, 100)}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <info.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{info.title}</h3>
                {Array.isArray(info.content) ? info.content.map((line, i) => <p key={i} className="text-muted-foreground text-sm">{line}</p>) : <p className="text-muted-foreground text-sm">{info.content}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8">
            <div ref={formAnim.ref} className={`bg-card rounded-xl p-8 shadow-card ${animationClasses(formAnim.isVisible, 'slideLeft')}`}>
              <h3 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
              {isSubmitted && <div className="mb-6 p-4 bg-primary/10 border border-primary/30 rounded-lg text-primary">Thank you! Your message has been sent successfully.</div>}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input type="text" name="name" placeholder="Your Name *" required value={formData.name} onChange={handleChange} className="form-input" />
                  <input type="email" name="email" placeholder="Your Email *" required value={formData.email} onChange={handleChange} className="form-input" />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="form-input" />
                  <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} className="form-input" />
                </div>
                <select name="service" value={formData.service} onChange={handleChange} className="form-input text-muted-foreground">
                  <option value="">Service Interested In</option>
                  {serviceOptions.map((option) => <option key={option} value={option}>{option}</option>)}
                </select>
                <textarea name="message" placeholder="Your Message *" rows={6} required value={formData.message} onChange={handleChange} className="form-input resize-none" />
                <Button type="submit" disabled={isSubmitting} className="w-full bg-primary text-primary-foreground hover:bg-primary-hover font-semibold py-6">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>

            <div ref={mapsAnim.ref} className={`space-y-6 ${animationClasses(mapsAnim.isVisible, 'slideRight')}`}>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" /> Head Office — Hyderabad
                </h3>
                <div className="rounded-xl overflow-hidden shadow-card h-[280px]">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.4776458374!2d78.39849!3d17.49347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91f0a69767e7%3A0x8f8bfc7b8b5d8f8b!2sPrashant%20Nagar%2C%20Kukatpally%2C%20Hyderabad%2C%20Telangana%20500072!5e0!3m2!1sen!2sin!4v1234567890" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Head Office - Hyderabad" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" /> Branch Office — Visakapatnam
                </h3>
                <div className="rounded-xl overflow-hidden shadow-card h-[280px]">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.123456789!2d83.2!3d17.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSabbavaram%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20531035!5e0!3m2!1sen!2sin!4v1234567890" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Branch Office - Visakapatnam" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
