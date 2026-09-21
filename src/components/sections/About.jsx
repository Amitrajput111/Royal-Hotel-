import { Award, Heart, MapPin, Sparkles } from 'lucide-react';
import RevealBlock from '../ui/RevealBlock';
import SectionHeading from '../ui/SectionHeading';

const ABOUT_IMAGE =
  'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=900&q=80&fit=crop';

const PILLARS = [
  { Icon: Award,    title: 'Award-Winning Hospitality', text: "Recognised among India's finest luxury hotels for our unwavering commitment to personalised service." },
  { Icon: Heart,    title: 'Curated Experiences',       text: 'Every detail of your stay — from arrival to departure — is thoughtfully curated by our dedicated team.' },
  { Icon: MapPin,   title: 'Prime Location',            text: 'Positioned at the heart of New Delhi, with seamless access to cultural landmarks, dining, and business districts.' },
  { Icon: Sparkles, title: 'Timeless Elegance',         text: 'A harmonious blend of classical Indian aesthetics and contemporary luxury in every corner of our property.' },
];

export default function About() {
  return (
    <section id="about" className="w-full section-padding bg-[#f8f4ee]">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">

        {/* Image + text grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center mb-20">

          {/* Image */}
          <RevealBlock>
            <div className="relative">
              {/* Gold frame accent — slightly inset so it's visible */}
              <div className="absolute -top-5 -left-5 w-28 h-28 border border-[#c9a84c]/30 pointer-events-none z-0" />

              <div className="relative overflow-hidden rounded shadow-xl aspect-[4/5]">
                <img
                  src={ABOUT_IMAGE}
                  alt="The Royal Hotel — Elegant lobby interior"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>

              {/* Floating badge — contained within image width */}
              <div className="absolute -bottom-5 right-0 bg-[#1a3c2e] text-white py-5 px-7 shadow-xl z-10">
                <p className="font-serif text-4xl font-light text-[#c9a84c] leading-none">25+</p>
                <p className="font-sans text-xs tracking-widest uppercase text-white/60 mt-1">Years of Excellence</p>
              </div>
            </div>
          </RevealBlock>

          {/* Text */}
          <RevealBlock delay={150}>
            <div className="flex flex-col gap-6 lg:pl-4">
              <SectionHeading
                eyebrow="Welcome to The Royal Hotel"
                heading="A Legacy of Gracious Hospitality"
                sub="Established in the heart of New Delhi, The Royal Hotel has been a benchmark of Indian luxury hospitality for over two decades. We blend the warmth of traditional Indian welcome with the refinement of a world-class hotel."
              />
              <p className="font-sans text-[#4a4a4a] leading-relaxed text-sm">
                Our philosophy is simple: every guest deserves a stay that feels truly personal. From the moment you arrive, our team anticipates your needs, ensuring that each visit — whether for business or leisure — becomes a cherished memory.
              </p>
              <p className="font-sans text-[#4a4a4a] leading-relaxed text-sm">
                Set amidst manicured gardens and featuring world-class dining, a rejuvenating spa, and impeccable meeting facilities, The Royal Hotel is not merely a place to stay — it is an experience to savour.
              </p>
              <div className="flex items-center gap-4 pt-1">
                <div className="gold-divider flex-shrink-0" />
                <span className="font-serif text-sm italic text-[#1a3c2e]">
                  "Atithi Devo Bhava" — The guest is God.
                </span>
              </div>
            </div>
          </RevealBlock>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PILLARS.map(({ Icon, title, text }, i) => (
            <RevealBlock key={title} delay={i * 80}>
              <div className="bg-white border border-[#ede7dc] p-6 rounded hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group flex flex-col gap-4 h-full">
                <div className="w-11 h-11 rounded bg-[#f0f7f3] flex items-center justify-center flex-shrink-0 group-hover:bg-[#c9a84c]/10 transition-colors">
                  <Icon size={20} className="text-[#c9a84c]" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-[#1a3c2e] mb-2 leading-snug">{title}</h3>
                  <p className="font-sans text-sm text-[#4a4a4a] leading-relaxed">{text}</p>
                </div>
              </div>
            </RevealBlock>
          ))}
        </div>

      </div>
    </section>
  );
}

