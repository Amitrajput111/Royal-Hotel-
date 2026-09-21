import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin, Phone, Mail, Send, CheckCircle,
} from 'lucide-react';

// Inline SVG social icons (lucide-react dropped social brand icons)
function SocialIcon({ type }) {
  const paths = {
    linkedin:
      'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
    instagram:
      'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
    facebook:
      'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
    twitter:
      'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.736-8.849L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
    youtube:
      'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
  };
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
      <path d={paths[type]} />
    </svg>
  );
}
import { HOTEL } from '../../config/hotel';
import Button from '../ui/Button';

const FOOTER_NAV = [
  { label: 'Home',           href: '#home' },
  { label: 'Rooms & Suites', href: '#rooms' },
  { label: 'Experiences',    href: '#experiences' },
  { label: 'Dining',         href: '#dining' },
  { label: 'Gallery',        href: '#gallery' },
  { label: 'Special Offers', href: '#offers' },
  { label: 'Testimonials',   href: '#testimonials' },
  { label: 'FAQ',            href: '#faq' },
  { label: 'Contact',        href: '#contact' },
];

const SOCIAL = [
  { type: 'linkedin',  href: HOTEL.social.linkedin,  label: 'LinkedIn' },
  { type: 'instagram', href: HOTEL.social.instagram, label: 'Instagram' },
  { type: 'facebook',  href: HOTEL.social.facebook,  label: 'Facebook' },
  { type: 'twitter',   href: HOTEL.social.twitter,   label: 'X (Twitter)' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!valid) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubscribed(true);
    setEmail('');
    // In production: POST to /api/newsletter
  };

  return (
    <footer className="w-full bg-[#0f241c] text-[#f8f4ee] flex flex-col items-center">
      {/* Top band */}
      <div className="w-full border-b border-white/10 flex justify-center">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <span className="font-serif text-[#c9a84c] text-xs tracking-[0.3em] uppercase block">The</span>
              <span className="font-serif text-white text-2xl font-light tracking-[0.12em]">Royal Hotel</span>
            </div>
            <p className="font-sans text-sm text-white/60 leading-relaxed mb-6">
              Where timeless Indian hospitality meets contemporary luxury. A sanctuary for the discerning traveller in the heart of New Delhi.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {SOCIAL.map(({ type, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-[#c9a84c] hover:border-[#c9a84c] hover:text-[#0f241c] transition-all duration-300"
                >
                  <SocialIcon type={type} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-[#c9a84c] text-sm tracking-widest uppercase mb-5">Navigation</h4>
            <ul className="flex flex-col gap-2">
              {FOOTER_NAV.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={(e) => { e.preventDefault(); scrollTo(href); }}
                    className="font-sans text-sm text-white/60 hover:text-[#c9a84c] transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-[#c9a84c] text-sm tracking-widest uppercase mb-5">Contact</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3">
                <MapPin size={16} className="text-[#c9a84c] flex-shrink-0 mt-0.5" />
                <span className="font-sans text-sm text-white/60 leading-relaxed">
                  {HOTEL.address.line1},<br />
                  {HOTEL.address.line2}
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={16} className="text-[#c9a84c] flex-shrink-0" />
                <a href={`tel:${HOTEL.phone}`} className="font-sans text-sm text-white/60 hover:text-[#c9a84c] transition-colors">
                  {HOTEL.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={16} className="text-[#c9a84c] flex-shrink-0" />
                <a href={`mailto:${HOTEL.email}`} className="font-sans text-sm text-white/60 hover:text-[#c9a84c] transition-colors break-all">
                  {HOTEL.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-[#c9a84c] text-sm tracking-widest uppercase mb-3">Newsletter</h4>
            <p className="font-sans text-sm text-white/60 mb-4 leading-relaxed">
              Receive exclusive offers and curated travel inspiration from The Royal Hotel.
            </p>
            {subscribed ? (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-[#c9a84c] font-sans text-sm"
              >
                <CheckCircle size={18} />
                <span>Thank you for subscribing!</span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} noValidate>
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setError(''); }}
                    placeholder="Your email address"
                    aria-label="Email address for newsletter"
                    className="flex-1 bg-white/10 border border-white/20 rounded px-3 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#c9a84c] transition-colors font-sans min-w-0"
                  />
                  <button
                    type="submit"
                    className="w-10 h-10 rounded bg-[#c9a84c] hover:bg-[#e0c070] text-[#0f241c] flex items-center justify-center transition-colors flex-shrink-0"
                    aria-label="Subscribe"
                  >
                    <Send size={15} />
                  </button>
                </div>
                {error && (
                  <p className="text-red-400 text-xs mt-1.5 font-sans">{error}</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-sans text-xs text-white/50">
          © {new Date().getFullYear()} The Royal Hotel. All rights reserved. | Developed by Amit Singh Rajput
        </p>
        <div className="flex gap-5">
          {['Privacy Policy', 'Terms of Service'].map((item) => (
            <span key={item} className="font-sans text-xs text-white/40 hover:text-white/60 cursor-default transition-colors">
              {item}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}

