import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Globe, Facebook, Linkedin, Twitter } from 'lucide-react';
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

  const blogPosts = [
    { title: 'Pneumatic Lifting', date: 'Feb 28, 2025', path: '/blog/pneumatic-lifting' },
    { title: 'Repairing Services', date: 'Feb 28, 2025', path: '/blog/repairing-services' },
  ];

  return (
    <footer className="relative text-background border-t-4 border-primary">
      <img src={slide04} alt="" className="absolute inset-0 w-full h-full object-cover" aria-hidden="true" />
      <div className="absolute inset-0 bg-foreground/90" />

      <div className="container-custom section-padding relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative z-10">
          {/* Column 1: About */}
          <div>
            <Link to="/" className="inline-block mb-6 bg-background rounded-lg px-6 py-5">
              <img src={logo} alt="Brutech Engineers" className="h-20 w-auto" />
            </Link>
            <p className="text-background/80 mb-6 text-sm leading-relaxed">
              Brutech, founded in 2022, delivers reliable, high-quality machine parts for industrial needs. We offer standard and custom solutions focused on precision and performance.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors" aria-label="Facebook"><Facebook className="w-5 h-5" /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors" aria-label="LinkedIn"><Linkedin className="w-5 h-5" /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors" aria-label="Twitter"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Column 2: Get In Touch */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Get In Touch
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary" />
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-background/80 text-sm">
                  <p className="font-semibold text-background mb-1">Head Office:</p>
                  <p>H.NO. 5-36/191, Prashanthi Nagar, Kukatpally, Hyderabad, T.G - 500072</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-background/80 text-sm">
                  <p className="font-semibold text-background mb-1">Branch Office:</p>
                  <p>3-23, Iruvada Village, Near Water Tank, Sabbavaram M, Visakapatnam, A.P - 531035</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-background/80 text-sm">
                  <a href="tel:+917702949688" className="hover:text-primary transition-colors block">+91 7702949688</a>
                  <a href="tel:+917702949690" className="hover:text-primary transition-colors block">+91 7702949690</a>
                  <a href="tel:+919381755470" className="hover:text-primary transition-colors block">+91 9381755470</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <a href="mailto:sales@brutechengineers.com" className="text-background/80 text-sm hover:text-primary transition-colors">
                  sales@brutechengineers.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-background/80 text-sm">
                  <a href="https://brutech.in" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors block">brutech.in</a>
                  <a href="https://brutechengineers.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors block">brutechengineers.com</a>
                </div>
              </li>
            </ul>
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

          {/* Column 4: Our Blogs */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Our Blogs
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary" />
            </h3>
            <ul className="space-y-4">
              {blogPosts.map((post) => (
                <li key={post.title}>
                  <Link to={post.path} className="group flex gap-4">
                    <div className="w-16 h-16 bg-primary/20 rounded-lg flex-shrink-0 flex items-center justify-center">
                      <span className="text-primary font-bold text-xl">B</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold group-hover:text-primary transition-colors">{post.title}</h4>
                      <p className="text-background/60 text-xs mt-1">{post.date}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
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
