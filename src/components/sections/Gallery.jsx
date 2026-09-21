import { useState } from 'react';
import RevealBlock from '../ui/RevealBlock';
import SectionHeading from '../ui/SectionHeading';
import LightboxModal from '../ui/LightboxModal';

const GALLERY_IMAGES = [
  { src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&q=80&fit=crop', alt: 'The Royal Hotel exterior at dusk', caption: 'Hotel Exterior', category: 'Architecture', cols: 2 },
  { src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80&fit=crop', alt: 'Deluxe Room interior', caption: 'Deluxe Room', category: 'Rooms', cols: 1 },
  { src: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80&fit=crop', alt: 'Premium Room', caption: 'Premium Room', category: 'Rooms', cols: 1 },
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80&fit=crop', alt: 'Durbar Restaurant dining', caption: 'Durbar Restaurant', category: 'Dining', cols: 1 },
  { src: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80&fit=crop', alt: 'Infinity pool at sunset', caption: 'Infinity Pool', category: 'Amenities', cols: 1 },
  { src: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=900&q=80&fit=crop', alt: 'Royal Suite living room', caption: 'Royal Suite', category: 'Rooms', cols: 2 },
  { src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80&fit=crop', alt: 'Spa treatment room', caption: 'Royal Spa', category: 'Spa', cols: 1 },
  { src: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&q=80&fit=crop', alt: 'Banquet and events hall', caption: 'Events & Banquets', category: 'Events', cols: 1 },
  { src: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&q=80&fit=crop', alt: 'Elegant hotel lobby', caption: 'Grand Lobby', category: 'Architecture', cols: 1 },
  { src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80&fit=crop', alt: 'Amber rooftop bar', caption: 'Amber Rooftop Bar', category: 'Dining', cols: 1 },
];

const CATEGORIES = ['All', ...new Set(GALLERY_IMAGES.map((i) => i.category))];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered =
    activeCategory === 'All'
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  const handleNext = () => setLightboxIndex((i) => (i + 1) % filtered.length);
  const handlePrev = () => setLightboxIndex((i) => (i - 1 + filtered.length) % filtered.length);

  return (
    <section id="gallery" className="w-full section-padding bg-white">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <RevealBlock className="text-center mb-10">
          <SectionHeading
            center
            eyebrow="Visual Story"
            heading="Gallery"
            sub="A glimpse into the spaces, flavours, and moments that define The Royal Hotel experience."
          />
        </RevealBlock>

        {/* Filter tabs */}
        <RevealBlock delay={100} className="flex flex-wrap gap-2 justify-center mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-sans text-sm px-5 py-2 rounded-full border transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#1a3c2e] text-white border-[#1a3c2e]'
                  : 'bg-white text-[#4a4a4a] border-[#ede7dc] hover:border-[#c9a84c] hover:text-[#c9a84c]'
              }`}
            >
              {cat}
            </button>
          ))}
        </RevealBlock>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((img, i) => (
            <div key={img.src + activeCategory} className="break-inside-avoid">
              <RevealBlock delay={i * 40}>
                <button
                  onClick={() => setLightboxIndex(i)}
                  className="w-full group relative overflow-hidden rounded focus-visible:ring-2 focus-visible:ring-[#c9a84c] focus-visible:ring-offset-2 block"
                  aria-label={`View ${img.caption}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#0f241c]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="text-left">
                      <span className="font-sans text-xs tracking-widest uppercase text-[#c9a84c] block">
                        {img.category}
                      </span>
                      <p className="font-serif text-white text-base font-light">{img.caption}</p>
                    </div>
                  </div>
                </button>
              </RevealBlock>
            </div>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <LightboxModal
          images={filtered}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </section>
  );
}

