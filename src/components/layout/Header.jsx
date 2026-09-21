import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Moon, Sun } from 'lucide-react';
import { useStickyHeader } from '../../hooks/useStickyHeader';
import { HOTEL } from '../../config/hotel';
import Button from '../ui/Button';

const NAV_LINKS = [
  { label: 'Home',           href: '#home' },
  { label: 'Rooms & Suites', href: '#rooms' },
  { label: 'Experiences',    href: '#experiences' },
  { label: 'Dining',         href: '#dining' },
  { label: 'Gallery',        href: '#gallery' },
  { label: 'Contact',        href: '#contact' },
];

export default function Header() {
  const isSticky = useStickyHeader(80);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark-theme');
    } else {
      document.documentElement.classList.remove('dark-theme');
    }
  }, [isDarkMode]);

  const scrollTo = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isSticky
            ? 'bg-[#0f241c]/97 backdrop-blur-md shadow-lg py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6 xl:gap-8">

          {/* Logo - Fixed leading and added a colorful gradient */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}
            className="flex flex-col flex-shrink-0 gap-1 justify-center pb-1 group"
            aria-label="The Royal Hotel — Home"
          >
            <span
              className="font-serif text-[#c9a84c] text-[12px] md:text-sm tracking-[0.3em] uppercase leading-tight"
              style={{ textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}
            >The</span>
            <span
              className="font-serif text-2xl md:text-3xl font-light tracking-[0.1em] transition-all duration-500 leading-tight bg-gradient-to-r from-white via-[#f8f4ee] to-[#c9a84c] bg-clip-text text-transparent group-hover:scale-105 origin-left"
              style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.9))' }}
            >
              Royal Hotel
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 flex-1 justify-center" aria-label="Main navigation">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={(e) => { e.preventDefault(); scrollTo(href); }}
                className="font-sans text-sm tracking-wide text-white/80 hover:text-[#c9a84c] transition-colors duration-300 relative group whitespace-nowrap"
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#c9a84c] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Desktop right CTAs */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            {/* Day/Night Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="w-9 h-9 rounded-full border border-white/20 text-white/70 hover:bg-[#c9a84c] hover:text-[#0f241c] hover:border-[#c9a84c] transition-all flex items-center justify-center"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <a
              href={`tel:${HOTEL.phone}`}
              className="flex items-center gap-1.5 text-white/70 hover:text-[#c9a84c] transition-colors text-sm whitespace-nowrap"
            >
              <Phone size={13} />
              <span className="font-sans tracking-wide">{HOTEL.phoneDisplay}</span>
            </a>
            <Button variant="primary" size="md" onClick={() => scrollTo('#booking')}>
              Book Your Stay
            </Button>
          </div>

          {/* Mobile right icons */}
          <div className="lg:hidden flex items-center gap-3 flex-shrink-0">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="w-9 h-9 rounded-full border border-white/20 text-white/70 hover:bg-[#c9a84c] hover:text-[#0f241c] transition-all flex items-center justify-center"
            >
              {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              className="w-10 h-10 flex items-center justify-center text-white hover:text-[#c9a84c] transition-colors"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-40 bg-[#0f241c] flex flex-col px-8 pb-10 overflow-y-auto"
            style={{ paddingTop: '6rem' }}
          >
            <div className="absolute top-28 right-8 w-40 h-40 rounded-full bg-[#c9a84c]/5 pointer-events-none" />

            <nav className="flex flex-col gap-1 mb-10" aria-label="Mobile navigation">
              {NAV_LINKS.map(({ label, href }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  onClick={(e) => { e.preventDefault(); scrollTo(href); }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="font-serif text-3xl font-light text-[#f8f4ee] hover:text-[#c9a84c] transition-colors py-3.5 border-b border-white/10"
                >
                  {label}
                </motion.a>
              ))}
            </nav>

            <div className="flex flex-col gap-4 mt-auto">
              <Button variant="primary" size="lg" className="w-full" onClick={() => scrollTo('#booking')}>
                Book Your Stay
              </Button>
              <a
                href={`tel:${HOTEL.phone}`}
                className="flex items-center justify-center gap-2 text-white/60 hover:text-[#c9a84c] transition-colors py-3"
              >
                <Phone size={16} />
                <span className="font-sans text-sm">{HOTEL.phoneDisplay}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
