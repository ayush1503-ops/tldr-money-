import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Expenses', path: '/expense-tracker-india' },
    { name: 'Net worth', path: '/net-worth-tracker-india' },
    { name: 'FIRE', path: '/fire-calculator-india' },
    { name: 'Calculators', path: '/calculators' },
    { name: 'Blog', path: '/blog' },
    { name: 'FAQ', path: '/faq' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-[var(--color-bg-primary)]/80 backdrop-blur-md border-b border-[var(--color-border-main)]' 
          : 'py-5 bg-transparent border-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold font-['Fraunces'] tracking-tight group">
          TLDR<span className="text-[var(--color-text-secondary)]">MONEY</span>
          <motion.div 
            className="h-0.5 bg-[var(--color-accent)] w-0 group-hover:w-full transition-all duration-300 mt-0.5" 
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--color-accent)] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center space-x-6">
          {/* Search */}
          <div className="relative group">
            <div className={`flex items-center border rounded-full px-4 py-1.5 transition-all duration-300 ${
              isSearchFocused 
                ? 'border-[var(--color-accent)] bg-white ring-2 ring-[var(--color-accent)]/20 shadow-sm' 
                : 'border-[var(--color-border-main)] bg-[var(--color-bg-secondary)] hover:border-[var(--color-text-tertiary)]'
            }`}>
              <Search className={`w-4 h-4 mr-2 transition-colors ${isSearchFocused ? 'text-[var(--color-accent)]' : 'text-[var(--color-text-tertiary)]'}`} />
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-transparent border-none outline-none text-sm w-32 focus:w-48 transition-all duration-300 text-[var(--color-text-primary)] placeholder-[var(--color-text-tertiary)]"
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
            </div>
          </div>

          <Link 
            to="/#waitlist" 
            className="px-5 py-2 bg-[var(--color-text-primary)] text-[var(--color-bg-primary)] rounded-full text-sm font-medium hover:bg-[var(--color-accent)] hover:text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            Join waitlist
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2 text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[var(--color-bg-primary)] border-b border-[var(--color-border-main)] overflow-hidden"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col space-y-4">
              <div className="relative mb-4">
                <div className="flex items-center border border-[var(--color-accent)] rounded-full px-4 py-2 bg-white">
                  <Search className="w-5 h-5 mr-3 text-[var(--color-accent)]" />
                  <input 
                    type="text" 
                    placeholder="Search TLDR Money..." 
                    className="bg-transparent border-none outline-none text-base w-full text-[var(--color-text-primary)]"
                  />
                </div>
              </div>
              
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className="text-lg font-medium text-[var(--color-text-secondary)] py-2 border-b border-[var(--color-border-main)]/50 hover:text-[var(--color-accent)] hover:pl-2 transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              
              <Link 
                to="/#waitlist" 
                className="mt-4 px-6 py-3 bg-[var(--color-text-primary)] text-[var(--color-bg-primary)] rounded-full text-center font-medium active:bg-[var(--color-accent)] active:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Join the waitlist
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
