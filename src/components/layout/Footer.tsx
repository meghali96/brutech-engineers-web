import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Globe, Linkedin, Instagram, Youtube } from 'lucide-react';
import logo from '@/assets/brutech-logo.png';
import slide04 from '@/assets/slide-04.jpg';

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

      <div className="container-custom section-padding relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 relative z-10">
          {/* Column 1: About */}
          <div>
            <Link to="/" className="inline-block mb-6 bg-background rounded-lg px-6 py-5">
              <img src={logo} alt="Brutech Engineers" className="h-20 w-auto" />
            </Link>
            <p className="text-background/80 mb-6 text-sm leading-relaxed">
              Brutech, founded in 2022, delivers reliable, high-quality machine parts for industrial needs. We offer standard and custom solutions focused on precision and performance.
            </p>
            <div className="flex gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors" aria-label="LinkedIn"><Linkedin className="w-5 h-5" /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors" aria-label="YouTube"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Column 2: Get In Touch */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Get In Touch
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary" />
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
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary" />
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-background/80 text-sm hover:text-primary transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-0.5 bg-primary transition-all group-hover:w-3" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Contact Info
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary" />
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
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10 relative z-10">
        <div className="container-custom py-6 text-center">
          <p className="text-background/60 text-sm">
            © {currentYear} Copyright BruTech Engineers. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
