import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import RevealBlock from '../ui/RevealBlock';
import SectionHeading from '../ui/SectionHeading';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Vikram Singh',
    role: 'Mumbai',
    text: 'An absolutely unforgettable stay. The attention to detail was extraordinary — from the rose petal welcome to the personalised pillow menu. The Royal Suite truly felt like royalty.',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&q=80&fit=crop&crop=face',
  },
  {
    id: 2,
    name: 'Rajiv Kapoor',
    role: 'Bengaluru',
    text: 'We celebrated our anniversary at The Royal Hotel and it exceeded every expectation. The spa ritual, the candlelight dinner — our hosts thought of everything. We will be back.',
    avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=80&q=80&fit=crop&crop=face',
  },
  {
    id: 3,
    name: 'Amit Patel',
    role: 'Ahmedabad',
    text: "The best business hotel experience I've had in Delhi. Exceptional Wi-Fi, impeccable meeting support, and the most comfortable bed I've slept in on a business trip.",
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80&fit=crop&crop=face',
  },
  {
    id: 4,
    name: 'Suresh Menon',
    role: 'Chennai',
    text: "Durbar Restaurant alone is worth the trip — I've dined at many five-star hotels and rarely do I find food this soulful and beautifully presented. Remarkable service, always.",
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80&fit=crop&crop=face',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setCurrent((i) => (i + 1) % TESTIMONIALS.length);
  const t = TESTIMONIALS[current];

  return (
    <section id="testimonials" className="w-full section-padding bg-[#1a3c2e] relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#c9a84c]/5 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#c9a84c]/5 translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        <RevealBlock className="text-center mb-14">
          <SectionHeading
            center
            eyebrow="Guest Stories"
            heading="What Our Guests Say"
            light
          />
          <p className="font-sans text-xs text-white/40 italic mt-3">
            Sample / illustrative guest reviews — not verified third-party testimonials.
          </p>
        </RevealBlock>

        <RevealBlock delay={150} className="w-full">
          <div className="bg-white/5 border border-white/10 rounded-lg p-8 md:p-12 text-center">
            <Quote size={40} className="text-[#c9a84c]/40 mx-auto mb-6" />

            <p className="font-serif text-white text-xl md:text-2xl font-light leading-relaxed italic mb-8">
              "{t.text}"
            </p>

            <div className="flex flex-col items-center gap-3">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-[#c9a84c]/40"
                loading="lazy"
              />
              <div>
                <p className="font-serif text-white text-base">{t.name}</p>
                <p className="font-sans text-[#c9a84c]/70 text-xs tracking-wide">{t.role}</p>
              </div>
            </div>
          </div>

          {/* Nav */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white/20 text-white/60 hover:bg-[#c9a84c] hover:border-[#c9a84c] hover:text-[#0f241c] transition-all flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? 'w-6 h-2 bg-[#c9a84c]'
                      : 'w-2 h-2 bg-white/30 hover:bg-white/60'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-white/20 text-white/60 hover:bg-[#c9a84c] hover:border-[#c9a84c] hover:text-[#0f241c] transition-all flex items-center justify-center"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </RevealBlock>
      </div>
    </section>
  );
}
