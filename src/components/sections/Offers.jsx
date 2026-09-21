import RevealBlock from '../ui/RevealBlock';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { HOTEL, buildWhatsAppUrl } from '../../config/hotel';

export default function Offers() {
  const handleEnquire = (offer) => {
    const msg = `Hello, I'd like to enquire about the "${offer.title}" package at The Royal Hotel. Please share details, availability, and pricing.`;
    window.open(buildWhatsAppUrl(msg), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="offers" className="w-full section-padding bg-[#f8f4ee]">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <RevealBlock className="text-center mb-14">
          <SectionHeading
            center
            eyebrow="Exclusive Packages"
            heading="Special Offers"
            sub="Thoughtfully curated packages designed to enrich your stay. All offers are sample packages — enquire for current availability and rates."
          />
        </RevealBlock>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HOTEL.offers.map((offer, i) => (
            <RevealBlock key={offer.id} delay={i * 100}>
              <div className="group relative overflow-hidden rounded shadow-md cursor-pointer" style={{ height: '420px' }}>
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f241c]/90 via-[#0f241c]/30 to-transparent" />

                {/* Sample tag */}
                <div className="absolute top-4 right-4 bg-[#c9a84c]/90 backdrop-blur-sm px-3 py-1 rounded">
                  <span className="font-sans text-[10px] text-[#0f241c] tracking-widest uppercase font-semibold">
                    {offer.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="font-sans text-[#c9a84c] text-xs tracking-widest uppercase mb-1">
                    {offer.subtitle}
                  </p>
                  <h3 className="font-serif text-white text-2xl font-light mb-3">
                    {offer.title}
                  </h3>
                  <p className="font-sans text-white/70 text-sm leading-relaxed mb-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {offer.description}
                  </p>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button variant="primary" size="sm" onClick={() => handleEnquire(offer)}>
                      Enquire Now
                    </Button>
                  </div>
                </div>
              </div>
            </RevealBlock>
          ))}
        </div>

        <RevealBlock delay={300} className="mt-8 text-center">
          <p className="font-sans text-xs text-[#4a4a4a]/50 italic">
            All packages shown are illustrative sample offers. Actual inclusions, availability, and pricing are subject to confirmation by our reservations team.
          </p>
        </RevealBlock>
      </div>
    </section>
  );
}

