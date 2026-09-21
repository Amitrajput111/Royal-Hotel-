/**
 * ============================================================
 *  THE ROYAL HOTEL — Central Configuration
 *  Update this file before going live.
 * ============================================================
 */

export const HOTEL = {
  name: 'The Royal Hotel',
  tagline: 'A Royal Escape. An Unforgettable Stay.',
  description:
    'Where timeless Indian hospitality meets contemporary luxury. Nestled in the heart of New Delhi, The Royal Hotel offers an unrivalled retreat for the discerning traveller.',

  // ── Contact ──────────────────────────────────────────────
  phone: '+91 91092 65673',
  phoneDisplay: '+91 91092 65673',
  email: 'amitrajput98267313@gmail.com',  
  address: {
    line1: '1, Rajpath Marg',
    line2: 'New Delhi — 110001',
    city: 'New Delhi',
    state: 'Delhi',
    country: 'India',
    pin: '110001',
    full: '1, Rajpath Marg, New Delhi — 110001, India',
  },

  // ── WhatsApp ──────────────────────────────────────────────
  whatsappNumber: '919109265673',

  // ── Social ────────────────────────────────────────────────
  social: {
    linkedin:  'https://www.linkedin.com/in/amitrajput111/',   
    instagram: 'https://instagram.com/',   
    facebook:  'https://facebook.com/',    
    twitter:   'https://x.com/',           
  },

  // ── Map ───────────────────────────────────────────────────
  // Google Maps embed src (DEMO — replace with actual embed URL from Google Maps)
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0!2d77.2090!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzUwLjAiTiA3N8KwMTInMzIuNCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',

  // ── Timing ────────────────────────────────────────────────
  checkInTime:  '2:00 PM',
  checkOutTime: '12:00 PM (Noon)',

  // ── Pricing (sample / illustrative only) ─────────────────
  currency: '₹',
  rooms: [
    {
      id: 'deluxe',
      name: 'Deluxe Room',
      slug: 'deluxe-room',
      tagline: 'Refined Comfort, Every Detail Considered',
      description:
        'Our Deluxe Rooms are an elegant sanctuary of calm — thoughtfully designed with warm wooden tones, handcrafted furnishings, and a curated selection of premium amenities. Perfect for the solo traveller or couple seeking a refined retreat.',
      longDescription:
        'Spanning 380 sq. ft., the Deluxe Room seamlessly blends contemporary design with classic Indian craftsmanship. Floor-to-ceiling windows frame city views, while the plush king-size bed, draped in Egyptian cotton linens, promises a restful night. The en-suite marble bathroom features a rain shower and a curated range of luxury bath amenities.',
      size: '380 sq. ft.',
      occupancy: '2 Adults',
      bed: 'King-size Bed',
      view: 'City View',
      price: 1000,
      image:
        'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80&fit=crop',
        'https://images.unsplash.com/photo-1586375300773-8384e3e4916f?w=800&q=80&fit=crop',
        'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80&fit=crop',
      ],
      amenities: [
        'King-size Bed',
        'City View',
        'Free Wi-Fi',
        '42" Smart TV',
        'Mini Bar',
        'In-room Safe',
        'Air Conditioning',
        'Marble Bathroom',
        'Rain Shower',
        'Premium Toiletries',
        'Daily Housekeeping',
        '24hr Room Service',
      ],
    },
    {
      id: 'premium',
      name: 'Premium Room',
      slug: 'premium-room',
      tagline: 'Elevated Luxury, Panoramic Perspectives',
      description:
        'Step into a world of heightened elegance. The Premium Room offers expansive living space, richer finishes, and panoramic views — an ideal choice for guests who desire a little more of everything.',
      longDescription:
        'At 550 sq. ft., the Premium Room is a study in understated opulence. Richly textured fabrics, hand-painted artwork, and a private sitting area create an atmosphere of cultured refinement. The oversized soaking tub and walk-in shower in the marble bathroom complete an experience that feels genuinely special.',
      size: '550 sq. ft.',
      occupancy: '2 Adults + 1 Child',
      bed: 'King-size Bed',
      view: 'Garden / Pool View',
      price: 2000,
      image:
        'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80&fit=crop',
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80&fit=crop',
        'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=800&q=80&fit=crop',
      ],
      amenities: [
        'King-size Bed',
        'Garden / Pool View',
        'Private Sitting Area',
        'Free Wi-Fi',
        '55" Smart TV',
        'Mini Bar & Espresso Machine',
        'In-room Safe',
        'Air Conditioning',
        'Marble Bathroom',
        'Soaking Tub + Rain Shower',
        'Premium Toiletries',
        'Daily Housekeeping',
        '24hr Room Service',
        'Nightly Turndown Service',
      ],
    },
    {
      id: 'suite',
      name: 'Royal Suite',
      slug: 'royal-suite',
      tagline: 'The Pinnacle of Royal Hospitality',
      description:
        'Reserve our flagship Royal Suite for an experience that transcends accommodation. A private living room, dedicated butler service, and breathtaking skyline views make every moment extraordinary.',
      longDescription:
        'The Royal Suite at 1,200 sq. ft. is our most coveted offering — a two-room haven of regal splendour. A grand entrance foyer opens to an expansive living room with hand-knotted Kashmiri carpets, original artwork, and a private dining alcove. The master bedroom features a four-poster bed dressed in 1,000-thread-count linens. A dedicated butler is at your service around the clock.',
      size: '1,200 sq. ft.',
      occupancy: '2 Adults + 2 Children',
      bed: 'Four-poster King Bed',
      view: 'Panoramic Skyline View',
      price: 5000,
      image:
        'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80&fit=crop',
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80&fit=crop',
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80&fit=crop',
      ],
      amenities: [
        'Four-poster King Bed',
        'Panoramic Skyline View',
        'Separate Living Room',
        'Private Dining Alcove',
        'Dedicated Butler Service',
        'Free Wi-Fi',
        '65" Smart TV',
        'Full Bar & Espresso Station',
        'In-room Safe',
        'Air Conditioning',
        'Marble Bathroom Suite',
        'Jacuzzi + Rain Shower',
        'Luxury Toiletries',
        'Daily Housekeeping',
        '24hr Room Service',
        'Nightly Turndown Service',
        'Welcome Amenities',
        'Airport Transfer (on request)',
      ],
    },
  ],

  // ── Offers (sample/illustrative) ─────────────────────────
  offers: [
    {
      id: 'weekend',
      title: 'Weekend Escape',
      subtitle: 'Friday–Sunday',
      description:
        'Unwind with two nights of luxury, complimentary breakfast for two, and a 60-minute spa treatment. The perfect city escape awaits.',
      tag: 'Sample Offer',
      image:
        'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80&fit=crop',
    },
    {
      id: 'romantic',
      title: 'Romantic Getaway',
      subtitle: 'Couples Package',
      description:
        'A curated experience for two — rose-petal turndown, candlelight dinner, couple\'s spa ritual, and late check-out until 2 PM.',
      tag: 'Sample Offer',
      image:
        'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80&fit=crop',
    },
    {
      id: 'celebration',
      title: 'Celebration Stay',
      subtitle: 'Birthdays & Anniversaries',
      description:
        'Mark your milestone with a decorated suite, personalised cake, champagne on arrival, and complimentary room upgrade (subject to availability).',
      tag: 'Sample Offer',
      image:
        'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80&fit=crop',
    },
  ],
};

/**
 * Build a WhatsApp enquiry URL.
 * @param {string} message - Pre-formatted enquiry text
 * @returns {string} WhatsApp deep-link URL
 */
export function buildWhatsAppUrl(message) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${HOTEL.whatsappNumber}?text=${encoded}`;
}

/**
 * Format a booking enquiry message from booking details.
 */
export function buildBookingEnquiryMessage({ checkIn, checkOut, adults, children, rooms, roomName }) {
  const nights =
    checkIn && checkOut
      ? Math.ceil((new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24))
      : null;

  const lines = [
    `Hello, I'd like to enquire about a stay at ${HOTEL.name}.`,
    '',
    roomName ? `Room preference: ${roomName}` : null,
    checkIn  ? `Check-in:  ${new Date(checkIn).toDateString()}` : null,
    checkOut ? `Check-out: ${new Date(checkOut).toDateString()}` : null,
    nights   ? `Duration:  ${nights} night${nights > 1 ? 's' : ''}` : null,
    `Guests:    ${adults} adult${adults > 1 ? 's' : ''}${children > 0 ? `, ${children} child${children > 1 ? 'ren' : ''}` : ''}`,
    rooms    ? `Rooms:     ${rooms}` : null,
    '',
    'Please share availability and pricing at your earliest convenience.',
    'Thank you.',
  ];

  return lines.filter(l => l !== null).join('\n');
}
