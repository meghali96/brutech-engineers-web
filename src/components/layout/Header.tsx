import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/brutech-logo.png';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  {
    name: 'Brands',
    path: '/brands',
    dropdown: [
      {
        name: 'Ingersoll Rand',
        href: 'https://www.ingersollrand.com/en-in/',
        submenu: [
          { name: 'Power Tools', href: 'https://powertools.ingersollrand.com/en-gb/' },
          { name: 'Lifting & Materials', href: 'https://liftingsolutions.ingersollrand.com/en/' },
        ],
      },
      { name: 'Ace Pneumatics', href: 'https://acepneumatics.com/' },
      { name: 'Tohnichi', href: 'https://en.global-tohnichi.com/' },
      { name: 'Uryu', href: 'https://uryu.es/en/productos/' },
      { name: 'Stanley', href: 'https://www.stanleyblackanddecker.com/' },
      { name: 'Dewalt', href: 'https://www.dewalt.com/' },
      { name: 'VAC Pneumatics', href: 'https://www.vacpneumatic.com/' },
    ],
  },
  { name: 'Our Clients', path: '/clients' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    setActiveSubmenu(null);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
        setActiveSubmenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background shadow-lg' : 'bg-background/95'}`}>
      {/* Top Bar */}
      <div className="bg-foreground text-background py-2 hidden lg:block">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>H No: 5-36/191, Prashant Nagar, Kukatpally, Hyderabad-500072</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <a href="tel:+917702949688" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4 text-primary" />
              <span>+91 7702949688 / 7702949690</span>
            </a>
            <a href="mailto:sales@brutechengineers.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4 text-primary" />
              <span>sales@brutechengineers.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="Brutech Engineers" className="h-14 md:h-20 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <button
                    className={`flex items-center gap-1 px-4 py-2 font-medium transition-colors hover:text-primary ${isActive(item.path) ? 'text-primary' : 'text-foreground'}`}
                    onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                    onMouseEnter={() => setActiveDropdown(item.name)}
                  >
                    {item.name}
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-4 py-2 font-medium transition-colors hover:text-primary relative ${isActive(item.path) ? 'text-primary' : 'text-foreground'}`}
                  >
                    {item.name}
                    {isActive(item.path) && <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary" />}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <div
                    className="absolute top-full left-0 mt-2 w-64 bg-background rounded-lg shadow-lg border border-border py-2 animate-fade-in z-50"
                    onMouseLeave={() => {
                      setActiveDropdown(null);
                      setActiveSubmenu(null);
                    }}
                  >
                    {item.dropdown.map((subItem) => (
                      <div key={subItem.name} className="relative">
                        {subItem.submenu ? (
                          <button
                            className="flex items-center justify-between w-full px-4 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                            onMouseEnter={() => setActiveSubmenu(subItem.name)}
                          >
                            {subItem.name}
                            <ChevronDown className="w-4 h-4 -rotate-90" />
                          </button>
                        ) : (
                          <a
                            href={subItem.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                          >
                            {subItem.name}
                          </a>
                        )}

                        {/* Submenu */}
                        {subItem.submenu && activeSubmenu === subItem.name && (
                          <div className="absolute left-full top-0 w-64 bg-background rounded-lg shadow-lg border border-border py-2 ml-1">
                            {subItem.submenu.map((subSubItem) => (
                              <a
                                key={subSubItem.name}
                                href={subSubItem.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block px-4 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                              >
                                {subSubItem.name}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/contact">
              <Button className="bg-primary text-primary-foreground hover:bg-primary-hover font-semibold px-6">
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[72px] bg-background z-40 animate-slide-in-right overflow-y-auto">
          <div className="p-4">
            {navItems.map((item) => (
              <div key={item.name} className="border-b border-border">
                {item.dropdown ? (
                  <div>
                    <button
                      className="flex items-center justify-between w-full py-4 font-medium text-foreground"
                      onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                    >
                      {item.name}
                      <ChevronDown className={`w-5 h-5 text-primary transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>
                    {activeDropdown === item.name && (
                      <div className="pl-4 pb-4 space-y-2 animate-fade-in">
                        {item.dropdown.map((subItem) => (
                          <div key={subItem.name}>
                            {subItem.submenu ? (
                              <div>
                                <button
                                  className="flex items-center justify-between w-full py-2 text-sm text-muted-foreground"
                                  onClick={() => setActiveSubmenu(activeSubmenu === subItem.name ? null : subItem.name)}
                                >
                                  {subItem.name}
                                  <ChevronDown className={`w-4 h-4 text-primary transition-transform ${activeSubmenu === subItem.name ? 'rotate-180' : ''}`} />
                                </button>
                                {activeSubmenu === subItem.name && (
                                  <div className="pl-4 space-y-2 animate-fade-in">
                                    {subItem.submenu.map((subSubItem) => (
                                      <a
                                        key={subSubItem.name}
                                        href={subSubItem.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block py-2 text-sm text-muted-foreground hover:text-primary"
                                      >
                                        {subSubItem.name}
                                      </a>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ) : (
                              <a
                                href={subItem.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block py-2 text-sm text-muted-foreground hover:text-primary"
                              >
                                {subItem.name}
                              </a>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`block py-4 font-medium ${isActive(item.path) ? 'text-primary' : 'text-foreground'}`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-6">
              <Link to="/contact" className="block">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary-hover font-semibold">
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
