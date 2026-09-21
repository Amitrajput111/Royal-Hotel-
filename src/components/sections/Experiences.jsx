import RevealBlock from '../ui/RevealBlock';
import SectionHeading from '../ui/SectionHeading';
import { buildWhatsAppUrl } from '../../config/hotel';

const EXPERIENCES = [
  {
    id: 'pool',
    title: 'Pool & Relaxation',
    description:
      'Drift into serenity at our temperature-controlled infinity pool, overlooking the manicured gardens. Lounge in private cabanas with attentive poolside service.',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80&fit=crop',
    tag: 'Leisure',
  },
  {
    id: 'spa',
    title: 'Spa & Wellness',
    description:
      'Indulge in ancient Ayurvedic therapies blended with contemporary wellness rituals at The Royal Spa. Emerge restored, balanced, and deeply at peace.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80&fit=crop',
    tag: 'Wellness',
  },
  {
    id: 'sightseeing',
    title: 'Local Sightseeing',
    description:
      'Explore the majestic heritage and vibrant culture of New Delhi with our curated guided tours, private car transfers, and expert local insights.',
    image: 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=800&q=80&fit=crop',
    tag: 'Culture',
  },
  {
    id: 'occasions',
    title: 'Special Occasions',
    description:
      "Celebrate life's most precious milestones — weddings, anniversaries, private dinners — with bespoke event planning by our experienced occasions team.",
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80&fit=crop',
    tag: 'Events',
  },
];

export default function Experiences() {
  const handleEnquire = (exp) => {
    const msg = `Hello, I'd like to enquire about the "${exp.title}" experience at The Royal Hotel. Please share details and availability.`;
    window.open(buildWhatsAppUrl(msg), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="experiences" className="w-full section-padding bg-[#f8f4ee]">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <RevealBlock className="text-center mb-14">
          <SectionHeading
            center
            eyebrow="Beyond the Room"
            heading="Curated Experiences"
            sub="Each moment at The Royal Hotel is an invitation to explore, discover, and indulge — from poolside repose to cultural adventures."
          />
        </RevealBlock>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXPERIENCES.map((exp, i) => (
            <RevealBlock key={exp.id} delay={i * 80}>
              <div className="group relative overflow-hidden rounded cursor-pointer shadow-md" style={{ height: '400px' }}>
                {/* Image */}
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f241c]/90 via-[#0f241c]/20 to-transparent" />

                {/* Tag */}
                <div className="absolute top-4 left-4 bg-[#c9a84c]/90 backdrop-blur-sm px-3 py-1 rounded">
                  <span className="font-sans text-xs text-[#0f241c] tracking-widest uppercase font-medium">
                    {exp.tag}
                  </span>
                </div>

                {/* Content — always visible title, description reveals on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-serif text-white text-xl font-light mb-2">{exp.title}</h3>
                  <p className="font-sans text-white/75 text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                    {exp.description}
                  </p>
                  <button
                    onClick={() => handleEnquire(exp)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-400 font-sans text-xs tracking-widest uppercase text-[#c9a84c] hover:text-[#e0c070]"
                  >
                    Enquire Now →
                  </button>
                </div>
              </div>
            </RevealBlock>
          ))}
        </div>
      </div>
    </section>
  );
}

