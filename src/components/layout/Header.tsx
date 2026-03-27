import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
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
  { name: 'Contact', path: '/contact' },
];

const navItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.05, type: 'spring', stiffness: 120, damping: 14 },
  }),
};

const dropdownVariants = {
  hidden: { opacity: 0, y: -8, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 200, damping: 20 } },
  exit: { opacity: 0, y: -8, scale: 0.95, transition: { duration: 0.15 } },
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
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
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 80, damping: 18, delay: 0.1 }}
      className={`fixed top-[30px] left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background shadow-lg' : 'bg-background/95'}`}
    >
      <div className="container-custom py-1.5">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex-shrink-0">
            <motion.img
              src={logo}
              alt="Brutech Engineers"
              className="h-12 md:h-16 w-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                custom={index}
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
                className="relative"
              >
                {item.dropdown ? (
                  <button
                    className={`flex items-center gap-1 px-4 py-2 font-medium transition-colors hover:text-primary ${isActive(item.path) ? 'text-primary' : 'text-foreground'}`}
                    onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                    onMouseEnter={() => setActiveDropdown(item.name)}
                  >
                    {item.name}
                    <motion.span animate={{ rotate: activeDropdown === item.name ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <ChevronDown className="w-4 h-4" />
                    </motion.span>
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-4 py-2 font-medium transition-colors hover:text-primary relative ${isActive(item.path) ? 'text-primary' : 'text-foreground'}`}
                  >
                    {item.name}
                    {isActive(item.path) && (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary"
                        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                      />
                    )}
                  </Link>
                )}

                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.name && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute top-full left-0 mt-2 w-64 bg-background rounded-lg shadow-lg border border-border py-2 z-50"
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

                          <AnimatePresence>
                            {subItem.submenu && activeSubmenu === subItem.name && (
                              <motion.div
                                variants={dropdownVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="absolute left-full top-0 w-64 bg-background rounded-lg shadow-lg border border-border py-2 ml-1"
                              >
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
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </nav>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
            className="hidden lg:block"
          >
            <a href="/brutech-brochure.pdf" download="Brutech-Brochure.pdf">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-primary text-primary-foreground hover:bg-primary-hover font-semibold px-6">
                  <Download className="w-4 h-4 mr-2" />
                  Download Brochure
                </Button>
              </motion.div>
            </a>
          </motion.div>

          <button
            className="lg:hidden p-2 text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            className="lg:hidden fixed inset-0 top-[72px] bg-background z-40 overflow-y-auto"
          >
            <div className="p-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, type: 'spring', stiffness: 120 }}
                  className="border-b border-border"
                >
                  {item.dropdown ? (
                    <div>
                      <button
                        className="flex items-center justify-between w-full py-4 font-medium text-foreground"
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                      >
                        {item.name}
                        <motion.span animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}>
                          <ChevronDown className="w-5 h-5 text-primary" />
                        </motion.span>
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ type: 'spring', stiffness: 100, damping: 16 }}
                            className="overflow-hidden pl-4 pb-4 space-y-2"
                          >
                            {item.dropdown.map((subItem) => (
                              <div key={subItem.name}>
                                {subItem.submenu ? (
                                  <div>
                                    <button
                                      className="flex items-center justify-between w-full py-2 text-sm text-muted-foreground"
                                      onClick={() => setActiveSubmenu(activeSubmenu === subItem.name ? null : subItem.name)}
                                    >
                                      {subItem.name}
                                      <motion.span animate={{ rotate: activeSubmenu === subItem.name ? 180 : 0 }}>
                                        <ChevronDown className="w-4 h-4 text-primary" />
                                      </motion.span>
                                    </button>
                                    <AnimatePresence>
                                      {activeSubmenu === subItem.name && (
                                        <motion.div
                                          initial={{ height: 0, opacity: 0 }}
                                          animate={{ height: 'auto', opacity: 1 }}
                                          exit={{ height: 0, opacity: 0 }}
                                          className="overflow-hidden pl-4 space-y-2"
                                        >
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
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
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
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`block py-4 font-medium ${isActive(item.path) ? 'text-primary' : 'text-foreground'}`}
                    >
                      {item.name}
                    </Link>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-6"
              >
                <a href="/brutech-brochure.pdf" download="Brutech-Brochure.pdf" className="block">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary-hover font-semibold">
                    <Download className="w-4 h-4 mr-2" />
                    Download Brochure
                  </Button>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
