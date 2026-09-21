import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import RevealBlock from '../ui/RevealBlock';
import SectionHeading from '../ui/SectionHeading';

const FAQS = [
  {
    q: 'What are the check-in and check-out times?',
    a: 'Standard check-in is from 2:00 PM. Check-out is by 12:00 PM (Noon). Early check-in and late check-out may be arranged subject to availability — please contact our reservations team in advance. (Sample policy — confirm with the hotel before booking.)',
  },
  {
    q: 'What is the maximum room occupancy?',
    a: 'Deluxe Rooms accommodate up to 2 adults. Premium Rooms can host 2 adults and 1 child. Our Royal Suite accommodates up to 2 adults and 2 children. Additional bed arrangements may be available upon request at an extra charge. (Sample policy.)',
  },
  {
    q: 'How do I make a booking enquiry?',
    a: 'You can enquire via the booking panel on this page, our contact form, by calling us directly, or by sending a WhatsApp message to our reservations team. We will confirm availability and pricing within one business day. Note: This website is a demo — no live reservations are accepted here.',
  },
  {
    q: 'What is the cancellation policy?',
    a: 'For standard bookings, cancellations made 48 hours or more before the check-in date incur no charge. Cancellations within 48 hours may attract a one-night retention charge. Special packages and promotional rates may have different terms. (Sample policy — actual policy will be communicated at time of booking.)',
  },
  {
    q: 'Is parking available at the hotel?',
    a: 'Yes, complimentary valet parking is available for all in-house guests. Self-parking is also available. Electric vehicle charging points are available on request. (Sample information — confirm with hotel.)',
  },
  {
    q: 'What amenities are included with the room rate?',
    a: 'All room rates include complimentary high-speed Wi-Fi, daily housekeeping, and access to the swimming pool and fitness centre. Breakfast inclusions vary by room category and booking package. (Sample information.)',
  },
  {
    q: 'Does the hotel offer airport transfers?',
    a: 'Yes, we offer private luxury airport transfers to and from Indira Gandhi International Airport. Please contact our concierge team at least 24 hours in advance to arrange your transfer. (Sample service — confirm availability and rates with the hotel.)',
  },
  {
    q: 'Are pets allowed at The Royal Hotel?',
    a: 'We regret that The Royal Hotel is not pet-friendly at this time. We apologise for any inconvenience. (Sample policy.)',
  },
];

function FAQItem({ faq, isOpen, onToggle, index }) {
  return (
    <div className="border border-[#ede7dc] rounded overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 p-5 text-left bg-white hover:bg-[#f8f4ee] transition-colors"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        id={`faq-question-${index}`}
      >
        <span className="font-serif text-[#1a3c2e] text-base leading-snug">{faq.q}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 text-[#c9a84c] mt-0.5"
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${index}`}
            role="region"
            aria-labelledby={`faq-question-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <p className="font-sans text-sm text-[#4a4a4a] leading-relaxed p-5 pt-0 border-t border-[#ede7dc]">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="w-full section-padding bg-white">
      <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <RevealBlock className="w-full text-center mb-14">
          <SectionHeading
            center
            eyebrow="Common Questions"
            heading="Frequently Asked Questions"
            sub="Everything you need to know before your stay. Policies shown are sample and illustrative — final terms will be confirmed at booking."
          />
        </RevealBlock>

        <div className="w-full flex flex-col gap-3">
          {FAQS.map((faq, i) => (
            <RevealBlock key={i} delay={i * 40} className="w-full">
              <FAQItem
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                index={i}
              />
            </RevealBlock>
          ))}
        </div>
      </div>
    </section>
  );
}
