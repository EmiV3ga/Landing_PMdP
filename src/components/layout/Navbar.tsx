
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '../ui/theme-toggle';
import LanguageSelector from '../ui/LanguageSelector';
import { useLanguage } from '@/context/LanguageContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled 
          ? 'py-3 bg-white/80 backdrop-blur-lg shadow-sm dark:bg-black/50 dark:backdrop-blur-lg dark:shadow-md' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <span className="font-display font-bold text-xl md:text-2xl text-foreground">PMDP</span>
              <span className="ml-1 text-xs text-accent font-medium">FUELS</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#services" className="nav-link">{t('nav.services')}</a>
            <a href="#about" className="nav-link">{t('nav.about')}</a>
            <a href="#contact" className="nav-link">{t('nav.contact')}</a>
            <div className="flex items-center space-x-2">
              <LanguageSelector />
              <ThemeToggle />
            </div>
            <a href="#contact" className="button-primary">
              {t('nav.getQuote')}
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <LanguageSelector />
            <ThemeToggle />
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-foreground focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden p-4 bg-white/95 backdrop-blur-lg border-t border-border/10 animate-slide-down dark:bg-black/80 dark:border-border/20">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#services" 
              className="px-3 py-2 rounded-md text-foreground hover:bg-secondary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.services')}
            </a>
            <a 
              href="#about" 
              className="px-3 py-2 rounded-md text-foreground hover:bg-secondary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.about')}
            </a>
            <a 
              href="#contact" 
              className="px-3 py-2 rounded-md text-foreground hover:bg-secondary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.contact')}
            </a>
            <a 
              href="#contact" 
              className="button-primary mt-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.getQuote')}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
