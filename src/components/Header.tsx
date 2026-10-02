import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import { WaitlistModal } from './WaitlistModal';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    const q = searchQuery.toLowerCase();
    if (q.includes('fire') || q.includes('retire')) {
      navigate('/fire-calculator-india');
    } else if (q.includes('expense') || q.includes('track') || q.includes('upi')) {
      navigate('/expense-tracker-india');
    } else if (q.includes('worth') || q.includes('asset') || q.includes('stock')) {
      navigate('/net-worth-tracker-india');
    } else if (q.includes('calc')) {
      navigate('/calculators');
    } else if (q.includes('compare')) {
      navigate('/compare');
    } else if (q.includes('faq')) {
      navigate('/faq');
    } else {
      navigate('/blog');
    }
    setIsMobileMenuOpen(false);
  };

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
          ? 'py-4 bg-[var(--color-bg-base)]/80 backdrop-blur-xl shadow-[var(--shadow-neo-sm)]' 
          : 'py-6 bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link 
          to="/" 
          className="text-2xl font-bold font-display tracking-tight text-[var(--color-fg-primary)] hover:text-[var(--color-accent)] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 focus:ring-offset-[var(--color-bg-base)] rounded-xl px-2 py-1 -ml-2"
        >
          TLDR<span className="text-[var(--color-fg-muted)]">MONEY</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="px-4 py-2 text-sm font-medium text-[var(--color-fg-muted)] rounded-2xl hover:text-[var(--color-accent)] hover:shadow-[var(--shadow-neo-hover)] hover:-translate-y-[1px] transition-all duration-300 active:shadow-[var(--shadow-neo-inset-sm)] active:translate-y-[0.5px] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 focus:ring-offset-[var(--color-bg-base)]"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center space-x-6">
          {/* Search */}
          <form onSubmit={handleSearch} className="relative group">
            <div className={`flex items-center rounded-2xl px-4 py-2.5 transition-all duration-300 ${
              isSearchFocused 
                ? 'shadow-[var(--shadow-neo-inset-deep)] ring-2 ring-[var(--color-accent)] ring-offset-2 ring-offset-[var(--color-bg-base)] bg-[var(--color-bg-base)]' 
                : 'shadow-[var(--shadow-neo-inset)] bg-[var(--color-bg-base)] hover:shadow-[var(--shadow-neo-inset-deep)]'
            }`}>
              <Search className={`w-4 h-4 mr-3 transition-colors duration-300 ${isSearchFocused ? 'text-[var(--color-accent)]' : 'text-[var(--color-fg-muted)]'}`} />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..." 
                className="bg-transparent border-none outline-none text-sm w-32 focus:w-48 transition-all duration-300 text-[var(--color-fg-primary)] placeholder-[var(--color-fg-muted)]"
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
            </div>
          </form>

          <button 
            type="button"
            onClick={() => setIsWaitlistOpen(true)}
            className="px-6 py-3 bg-[var(--color-accent)] text-white rounded-2xl text-sm font-medium shadow-[var(--shadow-neo-base)] hover:shadow-[var(--shadow-neo-hover)] hover:-translate-y-[1px] hover:bg-[var(--color-accent-light)] transition-all duration-300 active:shadow-[var(--shadow-neo-inset)] active:translate-y-[0.5px] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 focus:ring-offset-[var(--color-bg-base)] cursor-pointer"
          >
            Join waitlist
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-3 rounded-2xl text-[var(--color-fg-primary)] shadow-[var(--shadow-neo-base)] hover:shadow-[var(--shadow-neo-hover)] hover:-translate-y-[1px] hover:text-[var(--color-accent)] active:shadow-[var(--shadow-neo-inset)] active:translate-y-[0.5px] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 focus:ring-offset-[var(--color-bg-base)]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[var(--color-bg-base)] overflow-hidden shadow-[var(--shadow-neo-base)] mt-2 mx-4 rounded-[32px]"
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              <form onSubmit={handleSearch} className="relative">
                <div className="flex items-center shadow-[var(--shadow-neo-inset-deep)] rounded-2xl px-5 py-3 bg-[var(--color-bg-base)] focus-within:ring-2 focus-within:ring-[var(--color-accent)] focus-within:ring-offset-2 focus-within:ring-offset-[var(--color-bg-base)]">
                  <Search className="w-5 h-5 mr-3 text-[var(--color-accent)]" />
                  <input 
                    type="text" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search TLDR Money..." 
                    className="bg-transparent border-none outline-none text-base w-full text-[var(--color-fg-primary)]"
                  />
                </div>
              </form>
              
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    to={link.path}
                    className="text-lg font-medium text-[var(--color-fg-muted)] py-3 px-5 rounded-2xl shadow-[var(--shadow-neo-base)] hover:text-[var(--color-accent)] hover:shadow-[var(--shadow-neo-inset)] active:shadow-[var(--shadow-neo-inset-deep)] transition-all duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              
              <button 
                type="button"
                className="mt-6 px-6 py-4 bg-[var(--color-accent)] text-white rounded-2xl text-center font-medium shadow-[var(--shadow-neo-base)] hover:shadow-[var(--shadow-neo-hover)] active:shadow-[var(--shadow-neo-inset)] transition-all duration-300 cursor-pointer"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsWaitlistOpen(true);
                }}
              >
                Join the waitlist
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
    </motion.header>
  );
};

export default Header;
