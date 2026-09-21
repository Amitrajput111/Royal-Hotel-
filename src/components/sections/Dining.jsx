import { Clock, ChefHat, Wine } from 'lucide-react';
import RevealBlock from '../ui/RevealBlock';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { buildWhatsAppUrl } from '../../config/hotel';

const OUTLETS = [
  {
    name: 'Durbar — The Grand Restaurant',
    cuisine: 'Pan-Indian & Continental',
    desc: "An all-day dining destination celebrating India's rich culinary heritage, from coastal seafood to Mughal-inspired slow-cooked delicacies, complemented by international favourites.",
    hours: 'Breakfast 7:00–10:30 AM | Lunch 12:30–3:00 PM | Dinner 7:00–11:00 PM',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1000&q=80&fit=crop',
    reverse: false,
  },
  {
    name: 'Amber — Rooftop Lounge & Bar',
    cuisine: 'Cocktails, Mezze & Light Bites',
    desc: 'Perched atop The Royal Hotel with panoramic city views, Amber is the perfect setting for sundowners, signature cocktails, and sophisticated bar bites under the stars.',
    hours: 'Daily 5:00 PM – 1:00 AM',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80&fit=crop',
    reverse: true,
  },
];

export default function Dining() {
  const handleEnquire = () => {
    const msg = "Hello, I'd like to enquire about dining reservations at The Royal Hotel. Please share details about availability and the menu.";
    window.open(buildWhatsAppUrl(msg), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="dining" className="w-full section-padding bg-[#1a3c2e] overflow-hidden">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <RevealBlock className="text-center mb-14">
          <SectionHeading
            center
            eyebrow="Gastronomy"
            heading="Dining at The Royal Hotel"
            sub="A culinary journey that reflects the soul of India and the breadth of the world — served with warmth in exceptional surroundings."
            light
          />
        </RevealBlock>

        <div className="flex flex-col gap-10 mb-14">
          {OUTLETS.map((outlet, i) => (
            <RevealBlock key={outlet.name} delay={i * 120}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 rounded overflow-hidden shadow-2xl`}>
                {/* Conditionally reverse image/text order on desktop */}
                {outlet.reverse ? (
                  <>
                    <div className="bg-[#0f241c] p-8 lg:p-10 flex flex-col justify-center gap-4">
                      <p className="font-sans text-xs tracking-widest uppercase text-[#c9a84c]">{outlet.cuisine}</p>
                      <h3 className="font-serif text-2xl md:text-3xl font-light text-white">{outlet.name}</h3>
                      <p className="font-sans text-white/65 leading-relaxed text-sm">{outlet.desc}</p>
                      <div className="flex items-start gap-3 text-white/50 text-sm">
                        <Clock size={15} className="text-[#c9a84c] flex-shrink-0 mt-0.5" />
                        <span className="font-sans">{outlet.hours}</span>
                      </div>
                    </div>
                    <div className="relative h-64 lg:h-80 overflow-hidden order-first lg:order-last">
                      <img src={outlet.image} alt={outlet.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out" loading="lazy" />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="relative h-64 lg:h-80 overflow-hidden">
                      <img src={outlet.image} alt={outlet.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out" loading="lazy" />
                    </div>
                    <div className="bg-[#0f241c] p-8 lg:p-10 flex flex-col justify-center gap-4">
                      <p className="font-sans text-xs tracking-widest uppercase text-[#c9a84c]">{outlet.cuisine}</p>
                      <h3 className="font-serif text-2xl md:text-3xl font-light text-white">{outlet.name}</h3>
                      <p className="font-sans text-white/65 leading-relaxed text-sm">{outlet.desc}</p>
                      <div className="flex items-start gap-3 text-white/50 text-sm">
                        <Clock size={15} className="text-[#c9a84c] flex-shrink-0 mt-0.5" />
                        <span className="font-sans">{outlet.hours}</span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </RevealBlock>
          ))}
        </div>

        <RevealBlock delay={240}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            {[
              { Icon: ChefHat, title: "Chef's Table", text: 'Private dining with a bespoke menu crafted exclusively for you by our Executive Chef.' },
              { Icon: Wine,    title: 'Curated Cellar', text: 'An extensive selection of Old World wines, premium spirits, and house-crafted cocktails.' },
              { Icon: Clock,   title: 'In-Room Dining', text: '24-hour room service delivering the full restaurant menu to the comfort of your suite.' },
            ].map(({ Icon, title, text }) => (
              <div key={title} className="bg-white/5 border border-white/10 rounded p-6 text-center hover:bg-white/10 transition-colors">
                <Icon size={28} className="text-[#c9a84c] mx-auto mb-3" />
                <h4 className="font-serif text-white text-lg mb-2">{title}</h4>
                <p className="font-sans text-white/55 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button variant="primary" size="lg" onClick={handleEnquire}>
              Reserve a Table
            </Button>
          </div>
        </RevealBlock>
      </div>
    </section>
  );
}

