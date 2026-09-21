# The Royal Hotel — Premium Hotel Website

A polished, fully responsive luxury hotel website demo built with React + Vite + Tailwind CSS.

---

## 🚀 Quick Start

```bash
# Install dependencies (already done)
npm install

# Start development server
npm run dev
# → Open http://localhost:5173/

# Production build
npm run build
npm run preview
```

---

## 📁 Project Structure

```
src/
├── config/
│   └── hotel.js          ← ⭐ All configurable hotel data (edit this first)
├── components/
│   ├── layout/
│   │   ├── Header.jsx    ← Sticky nav with mobile menu
│   │   └── Footer.jsx    ← Newsletter, social, links
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── BookingPanel.jsx
│   │   ├── About.jsx
│   │   ├── Rooms.jsx
│   │   ├── Experiences.jsx
│   │   ├── Dining.jsx
│   │   ├── Gallery.jsx
│   │   ├── Offers.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Location.jsx
│   │   └── FAQ.jsx
│   └── ui/
│       ├── Button.jsx
│       ├── SectionHeading.jsx
│       ├── RoomModal.jsx       ← Room detail modal
│       └── LightboxModal.jsx   ← Gallery lightbox
├── hooks/
│   ├── useStickyHeader.js
│   └── useScrollReveal.js
└── pages/
    └── Home.jsx
```

---

## ⚙️ Configuration (Before Going Live)

Open `src/config/hotel.js` and update:

| Field | Default | Description |
|---|---|---|
| `phone` | `+91 98765 43210` | Hotel phone number |
| `email` | `reservations@theroyalhotel.com` | Reservations email |
| `whatsappNumber` | `919876543210` | WhatsApp number (digits + country code, no spaces) |
| `address` | New Delhi demo address | Full hotel address |
| `mapEmbed` | Demo Google Maps URL | Replace with your actual Google Maps embed URL |
| `social.*` | Placeholder URLs | Instagram, Facebook, X, YouTube URLs |

---

## ✅ What's Built & Working

| Feature | Status |
|---|---|
| Sticky transparent → solid header on scroll | ✅ |
| Mobile hamburger menu with slide-in animation | ✅ |
| Hero with entrance animation + dual CTA | ✅ |
| Booking panel: date picker, guest/room counters, validation | ✅ |
| Night count display | ✅ |
| WhatsApp enquiry with URL-encoded booking details | ✅ |
| About section with image + floating badge | ✅ |
| 3 room cards with View Details modal | ✅ |
| Room modal: amenities, specs, WhatsApp enquiry | ✅ |
| 4 experience cards with hover reveal | ✅ |
| Dining: 2 outlets + feature cards | ✅ |
| Gallery: 10 images, category filters, lightbox | ✅ |
| Keyboard navigation in lightbox (Arrow + Escape) | ✅ |
| 3 offer cards with hover reveal | ✅ |
| Testimonials carousel with dot pagination | ✅ |
| Location: map embed + 4 info cards | ✅ |
| Contact form with React Hook Form validation + success state | ✅ |
| FAQ accordion (ARIA-compliant, animated) | ✅ |
| Footer: newsletter with validation, social icons, nav | ✅ |
| Scroll reveal animations on all sections | ✅ |
| prefers-reduced-motion respected | ✅ |
| Mobile responsive (320px+) | ✅ |

---

## 📝 Demo Notices

- **Booking panel**: Does not claim live availability. Sends a WhatsApp enquiry.
- **Contact form**: Falls back to WhatsApp if no backend is configured. Shows a clear demo success message.
- **Prices**: Labelled as "illustrative / sample" throughout.
- **Testimonials**: Labelled as "sample/illustrative" — not verified reviews.
- **Offers**: Labelled as "Sample Offer" — not guaranteed availability.
- **Map**: Uses a demo New Delhi location — replace with actual hotel coordinates.
- **WhatsApp number**: Replace before going live.

---

## 🎨 Design Tokens

| Token | Value |
|---|---|
| Forest Green | `#1a3c2e` |
| Gold | `#c9a84c` |
| Ivory | `#f8f4ee` |
| Charcoal | `#2c2c2c` |
| Heading font | Cormorant Garamond (serif) |
| Body font | Inter (sans-serif) |
