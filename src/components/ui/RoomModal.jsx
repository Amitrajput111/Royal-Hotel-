import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Wifi, Coffee, Tv, Shield, Wind, Bath, ShowerHead, Star } from 'lucide-react';
import { HOTEL, buildBookingEnquiryMessage, buildWhatsAppUrl } from '../../config/hotel';
import Button from './Button';

const ICON_MAP = {
  'Free Wi-Fi': Wifi,
  'Mini Bar': Coffee,
  'Smart TV': Tv,
  '42" Smart TV': Tv,
  '55" Smart TV': Tv,
  '65" Smart TV': Tv,
  'In-room Safe': Shield,
  'Air Conditioning': Wind,
  'Marble Bathroom': Bath,
  'Rain Shower': ShowerHead,
  default: Check,
};

function getIcon(amenity) {
  for (const [key, Icon] of Object.entries(ICON_MAP)) {
    if (amenity.includes(key)) return Icon;
  }
  return ICON_MAP.default;
}

export default function RoomModal({ room, onClose }) {
  // Close on Escape
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const handleEnquire = useCallback(() => {
    const msg = buildBookingEnquiryMessage({
      adults: 2,
      children: 0,
      rooms: 1,
      roomName: room.name,
    });
    window.open(buildWhatsAppUrl(msg), '_blank', 'noopener,noreferrer');
  }, [room]);

  if (!room) return null;

  return (
    <AnimatePresence>
      <div
        className="modal-backdrop"
        role="dialog"
        aria-modal="true"
        aria-label={`${room.name} details`}
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded shadow-2xl"
        >
          {/* Image */}
          <div className="relative h-64 md:h-80 overflow-hidden">
            <img
              src={room.image}
              alt={room.name}
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f241c]/70 to-transparent" />
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors flex items-center justify-center"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
            {/* Pricing badge */}
            <div className="absolute bottom-4 left-6 text-white">
              <p className="font-sans text-xs tracking-widest uppercase text-[#c9a84c] mb-1">
                Starting From (Illustrative)
              </p>
              <p className="font-serif text-3xl font-light">
                {HOTEL.currency}{room.price.toLocaleString('en-IN')}
                <span className="text-sm font-sans font-light ml-1">/ night</span>
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            <div className="mb-6">
              <p className="font-sans text-xs tracking-[0.18em] uppercase text-[#c9a84c] mb-2">
                {room.tagline}
              </p>
              <h3 className="font-serif text-3xl font-light text-[#1a3c2e] mb-4">
                {room.name}
              </h3>
              <p className="font-sans text-[#4a4a4a] leading-relaxed">
                {room.longDescription}
              </p>
            </div>

            {/* Quick specs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6 p-4 bg-[#f8f4ee] rounded">
              {[
                { label: 'Room Size', value: room.size },
                { label: 'Occupancy', value: room.occupancy },
                { label: 'Bed Type', value: room.bed },
                { label: 'View', value: room.view },
              ].map(({ label, value }) => (
                <div key={label} className="text-center">
                  <p className="font-sans text-xs tracking-widest uppercase text-[#c9a84c] mb-1">
                    {label}
                  </p>
                  <p className="font-sans text-sm font-medium text-[#2c2c2c]">{value}</p>
                </div>
              ))}
            </div>

            {/* Amenities */}
            <div className="mb-8">
              <h4 className="font-serif text-xl text-[#1a3c2e] mb-4">Room Amenities</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {room.amenities.map((amenity) => {
                  const Icon = getIcon(amenity);
                  return (
                    <div key={amenity} className="flex items-center gap-3 py-1">
                      <Icon size={15} className="text-[#c9a84c] flex-shrink-0" />
                      <span className="font-sans text-sm text-[#4a4a4a]">{amenity}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Sample price notice */}
            <p className="font-sans text-xs text-[#4a4a4a]/70 mb-6 italic">
              * Prices shown are illustrative sample rates for demo purposes only. Actual rates are subject to availability, season, and applicable taxes. Please enquire for current pricing.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="primary"
                size="lg"
                onClick={handleEnquire}
                className="flex-1"
              >
                Enquire via WhatsApp
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={onClose}
                className="flex-1"
              >
                Close
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
