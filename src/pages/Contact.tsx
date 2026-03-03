import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import PageBanner from '@/components/layout/PageBanner';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import about3 from '@/assets/about-3.jpg';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Address',
    content: 'H No: 5-36/191 Prashant Nagar, Kukatpally, Hyderabad-500072',
  },
  {
    icon: Phone,
    title: 'Phone',
    content: ['+91 7702949688', '+91 7702949690', '+91 8919333433'],
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'sales@brutechengineers.com',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    content: ['Monday - Saturday: 9:00 AM - 6:00 PM', 'Sunday: Closed'],
  },
];

const serviceOptions = [
  'Assembly Solutions',
  'Industry Lifting',
  'Pneumatic Lifting',
  'Repairing Services',
  'Hydraulic Lifting',
  'Material Handling',
  'Other',
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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

  return (
    <Layout>
      <PageBanner
        title="Contact"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Contact' },
        ]}
        backgroundImage={about3}
      />

      {/* Intro */}
      <section className="section-padding bg-background">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get in Touch <span className="text-primary">With Us</span>
          </h2>
          <p className="text-muted-foreground">
            Have questions or need a custom solution? Reach out to the Brutech team — we're here to help you.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="pb-16 bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 text-center shadow-card border border-border hover:border-primary transition-colors"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <info.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{info.title}</h3>
                {Array.isArray(info.content) ? (
                  info.content.map((line, i) => (
                    <p key={i} className="text-muted-foreground text-sm">{line}</p>
                  ))
                ) : (
                  <p className="text-muted-foreground text-sm">{info.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form and Map */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-card rounded-xl p-8 shadow-card">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
              
              {isSubmitted && (
                <div className="mb-6 p-4 bg-primary/10 border border-primary/30 rounded-lg text-primary">
                  Thank you! Your message has been sent successfully. We'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email *"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="form-input text-muted-foreground"
                >
                  <option value="">Service Interested In</option>
                  {serviceOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
                <textarea
                  name="message"
                  placeholder="Your Message *"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="form-input resize-none"
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary-hover font-semibold py-6"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>

            {/* Google Map */}
            <div className="rounded-xl overflow-hidden shadow-card h-[500px] lg:h-auto min-h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.4776458374!2d78.39849!3d17.49347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91f0a69767e7%3A0x8f8bfc7b8b5d8f8b!2sPrashant%20Nagar%2C%20Kukatpally%2C%20Hyderabad%2C%20Telangana%20500072!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Brutech Engineers Location"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
