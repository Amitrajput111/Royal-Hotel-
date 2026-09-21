import { useState } from 'react';
import { Users, Maximize2, Eye } from 'lucide-react';
import RevealBlock from '../ui/RevealBlock';
import SectionHeading from '../ui/SectionHeading';
import RoomModal from '../ui/RoomModal';
import Button from '../ui/Button';
import { HOTEL, buildBookingEnquiryMessage, buildWhatsAppUrl } from '../../config/hotel';

function RoomCard({ room, onViewDetails }) {
  const handleEnquire = () => {
    const msg = buildBookingEnquiryMessage({
      adults: 2, children: 0, rooms: 1, roomName: room.name,
    });
    window.open(buildWhatsAppUrl(msg), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="luxury-card group flex flex-col h-full">
      {/* Image */}
      <div className="relative overflow-hidden aspect-[3/2]">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f241c]/60 via-transparent to-transparent" />
        {/* Price tag */}
        <div className="absolute top-4 right-4 bg-[#1a3c2e]/90 backdrop-blur-sm px-3 py-1.5 rounded">
          <p className="font-serif text-[#c9a84c] text-xs">From</p>
          <p className="font-serif text-white text-lg font-light leading-tight">
            {HOTEL.currency}{room.price.toLocaleString('en-IN')}
            <span className="text-xs font-sans text-white/60">/night</span>
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 gap-4">
        <div>
          <p className="font-sans text-xs tracking-[0.18em] uppercase text-[#c9a84c] mb-1">
            {room.tagline}
          </p>
          <h3 className="font-serif text-2xl font-light text-[#1a3c2e] mb-2">{room.name}</h3>
          <p className="font-sans text-sm text-[#4a4a4a] leading-relaxed">{room.description}</p>
        </div>

        {/* Quick specs */}
        <div className="flex flex-wrap gap-3 text-xs font-sans text-[#4a4a4a]">
          <span className="flex items-center gap-1.5">
            <Users size={13} className="text-[#c9a84c]" /> {room.occupancy}
          </span>
          <span className="flex items-center gap-1.5">
            <Maximize2 size={13} className="text-[#c9a84c]" /> {room.size}
          </span>
          <span className="flex items-center gap-1.5">
            <Eye size={13} className="text-[#c9a84c]" /> {room.view}
          </span>
        </div>

        {/* Top amenities */}
        <div className="flex flex-wrap gap-2">
          {room.amenities.slice(0, 4).map((a) => (
            <span
              key={a}
              className="font-sans text-xs bg-[#f0f7f3] text-[#1a3c2e] px-2.5 py-1 rounded-full"
            >
              {a}
            </span>
          ))}
          {room.amenities.length > 4 && (
            <span className="font-sans text-xs text-[#c9a84c] px-2.5 py-1">
              +{room.amenities.length - 4} more
            </span>
          )}
        </div>

        <p className="font-sans text-[10px] text-[#4a4a4a]/50 italic mt-auto">
          *Illustrative price for demo purposes only
        </p>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-3 mt-2">
          <Button variant="secondary" size="sm" onClick={() => onViewDetails(room)} className="w-full">
            View Details
          </Button>
          <Button variant="primary" size="sm" onClick={handleEnquire} className="w-full">
            Enquire Now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function Rooms() {
  const [selectedRoom, setSelectedRoom] = useState(null);

  return (
    <section id="rooms" className="w-full section-padding bg-white">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <RevealBlock className="text-center mb-14">
          <SectionHeading
            center
            eyebrow="Accommodation"
            heading="Rooms & Suites"
            sub="From intimate Deluxe Rooms to our magnificent Royal Suite, each space is a bespoke sanctuary of comfort, elegance, and impeccable service."
          />
        </RevealBlock>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {HOTEL.rooms.map((room, i) => (
            <RevealBlock key={room.id} delay={i * 100}>
              <RoomCard room={room} onViewDetails={setSelectedRoom} />
            </RevealBlock>
          ))}
        </div>

        <RevealBlock delay={300} className="mt-14 text-center">
          <p className="font-sans text-sm text-[#4a4a4a]/70 mb-4">
            Looking for a special configuration or a long stay?
          </p>
          <Button
            variant="outline"
            size="md"
            onClick={() => {
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Contact Our Reservations Team
          </Button>
        </RevealBlock>
      </div>

      {selectedRoom && (
        <RoomModal room={selectedRoom} onClose={() => setSelectedRoom(null)} />
      )}
    </section>
  );
}

