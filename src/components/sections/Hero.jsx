import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Button from '../ui/Button';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=85&fit=crop';

export default function Hero() {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      aria-label="Hero — The Royal Hotel"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="The Royal Hotel — Luxury exterior"
          className="w-full h-full object-cover object-center"
          fetchPriority="high"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f241c]/65 via-[#0f241c]/35 to-[#0f241c]/70" />
      </div>

      {/* Content — vertically and horizontally centred */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-10 text-center flex flex-col items-center gap-6">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.1em' }}
          animate={{ opacity: 1, letterSpacing: '0.35em' }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="font-sans text-[#c9a84c] text-xs tracking-[0.35em] uppercase"
        >
          New Delhi, India
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="font-serif font-light text-white leading-[1.08]"
          style={{ fontSize: 'clamp(2.6rem, 6.5vw, 5.2rem)' }}
        >
          Experience{' '}
          <br />
          <span className="font-serif italic bg-gradient-to-r from-[#c9a84c] via-[#f8f4ee] to-[#c9a84c] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
            True Luxury
          </span>
        </motion.h1>

        {/* Gold divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="gold-divider mx-auto"
        />

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="font-sans text-white/75 font-light text-base md:text-lg max-w-lg leading-relaxed"
        >
          Where timeless Indian hospitality meets contemporary luxury — crafted for those who seek the exceptional.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.05 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full"
        >
          <Button variant="primary" size="lg" onClick={() => scrollTo('#rooms')}>
            Explore Rooms
          </Button>
          <Button variant="outline-white" size="lg" onClick={() => scrollTo('#booking')}>
            Book Your Stay
          </Button>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        onClick={() => scrollTo('#booking')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 hover:text-[#c9a84c] transition-colors group"
        aria-label="Scroll down"
      >
        <span className="font-sans text-[10px] tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.button>
    </section>
  );
}
