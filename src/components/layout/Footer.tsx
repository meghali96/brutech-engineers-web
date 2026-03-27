import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Globe, Linkedin, Instagram, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '@/assets/brutech-logo.png';
import slide04 from '@/assets/slide-04.jpg';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const columnVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 16 } },
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Our Clients', path: '/clients' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="relative text-background border-t-4 border-primary">
      <img src={slide04} alt="" className="absolute inset-0 w-full h-full object-cover" aria-hidden="true" />
      <div className="absolute inset-0 bg-foreground/90" />

      <div className="container-custom py-10 md:py-12 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 relative z-10"
        >
          {/* Column 1: About */}
          <motion.div variants={columnVariants}>
            <Link to="/" className="inline-block mb-6 bg-background rounded-lg px-6 py-5">
              <img src={logo} alt="Brutech Engineers" className="h-20 w-auto" />
            </Link>
            <p className="text-background/80 mb-6 text-sm leading-relaxed">
              Brutech, founded in 2022, delivers reliable, high-quality machine parts for industrial needs. We offer standard and custom solutions focused on precision and performance.
            </p>
            <div className="flex gap-4">
              {[
                { href: 'https://www.linkedin.com/in/brutech-engineers-022000250/', icon: Linkedin, label: 'LinkedIn' },
                { href: 'https://instagram.com', icon: Instagram, label: 'Instagram' },
                { href: 'https://youtube.com', icon: Youtube, label: 'YouTube' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Get In Touch */}
          <motion.div variants={columnVariants}>
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Get In Touch
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary origin-left"
              />
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-background/80 text-sm">
                  <p className="font-semibold text-background mb-1">Head Office:</p>
                  <p>H.NO. 5-36/191, Prashanthi Nagar, Kukatpally, Hyderabad, T.G - 500072</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-background/80 text-sm">
                  <p className="font-semibold text-background mb-1">Branch Office:</p>
                  <p>3-23, Iruvada Village, Near Water Tank, Sabbavaram M, Visakapatnam, A.P - 531035</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Column 3: Quick Links */}
          <motion.div variants={columnVariants}>
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Quick Links
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary origin-left"
              />
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                >
                  <Link to={link.path} className="text-background/80 text-sm hover:text-primary transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-0.5 bg-primary transition-all group-hover:w-3" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Contact Info */}
          <motion.div variants={columnVariants}>
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Contact Info
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary origin-left"
              />
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-background/80 text-sm">
                  <a href="tel:+917702949688" className="hover:text-primary transition-colors block">+91 7702949688</a>
                  <a href="tel:+917702949690" className="hover:text-primary transition-colors block">+91 7702949690</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <a href="mailto:sales@brutechengineers.com" className="text-background/80 text-sm hover:text-primary transition-colors">
                  sales@brutechengineers.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-background/80 text-sm">
                  <a href="https://brutech.in" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors block">brutech.in</a>
                  <a href="https://brutechengineers.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors block">brutechengineers.com</a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="border-t border-background/10 relative z-10"
      >
        <div className="container-custom py-6 text-center">
          <p className="text-background/60 text-sm">
            © {currentYear} Copyright <span className="text-primary">BruTech Engineers</span>. All Rights Reserved
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
