import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { MapPin, Phone, Mail, Clock, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';
import RevealBlock from '../ui/RevealBlock';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { HOTEL, buildWhatsAppUrl } from '../../config/hotel';

export default function Location() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  const onSubmit = async (data) => {
    setSubmitting(true);
    setServerError('');
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }).catch(() => null);

      if (!res || !res.ok) {
        // Fallback: WhatsApp
        const msg = `Hello, I'd like to get in touch.\n\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || 'N/A'}\nMessage: ${data.message}`;
        window.open(buildWhatsAppUrl(msg), '_blank', 'noopener,noreferrer');
      }

      setSubmitted(true);
      reset();
    } catch {
      setServerError('Something went wrong. Please try again or contact us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  const INFO = [
    {
      Icon: MapPin,
      title: 'Address',
      content: HOTEL.address.full,
      link: `https://maps.google.com/?q=${encodeURIComponent(HOTEL.address.full)}`,
      linkLabel: 'Get Directions',
    },
    {
      Icon: Phone,
      title: 'Phone',
      content: HOTEL.phoneDisplay,
      link: `tel:${HOTEL.phone}`,
      linkLabel: 'Call Now',
    },
    {
      Icon: Mail,
      title: 'Email',
      content: HOTEL.email,
      link: `mailto:${HOTEL.email}`,
      linkLabel: 'Send Email',
    },
    {
      Icon: Clock,
      title: 'Check-in / Check-out',
      content: `Check-in: ${HOTEL.checkInTime}\nCheck-out: ${HOTEL.checkOutTime}`,
    },
  ];

  const inputClass = (hasError) =>
    `w-full border rounded px-4 py-3 font-sans text-sm text-[#2c2c2c] placeholder-[#4a4a4a]/40 outline-none transition-colors ${
      hasError
        ? 'border-red-400 focus:border-red-400'
        : 'border-[#ede7dc] focus:border-[#c9a84c]'
    }`;

  return (
    <section id="contact" className="w-full section-padding bg-[#f8f4ee]">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <RevealBlock className="w-full text-center mb-14">
          <SectionHeading
            center
            eyebrow="Find Us"
            heading="Location & Contact"
            sub="We'd love to hear from you. Reach out to our reservations team and we will respond within one business day."
          />
        </RevealBlock>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {/* Left: map + info cards */}
          <RevealBlock className="w-full h-full">
            <div className="flex flex-col gap-6 h-full">
              {/* Map */}
              <div className="relative rounded-lg overflow-hidden shadow-lg w-full bg-[#ede7dc] flex-grow min-h-[250px] md:min-h-[350px]">
                <iframe
                  src={HOTEL.mapEmbed}
                  title="The Royal Hotel — Location Map"
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Info cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {INFO.map(({ Icon, title, content, link, linkLabel }) => (
                  <div key={title} className="bg-white border border-[#ede7dc] rounded p-4 flex gap-3">
                    <div className="w-9 h-9 rounded bg-[#f0f7f3] flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-[#c9a84c]" />
                    </div>
                    <div>
                      <p className="font-sans text-xs tracking-widest uppercase text-[#c9a84c] mb-1">{title}</p>
                      <p className="font-sans text-sm text-[#2c2c2c] leading-relaxed whitespace-pre-line">{content}</p>
                      {link && (
                        <a
                          href={link}
                          target={link.startsWith('http') ? '_blank' : undefined}
                          rel={link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="font-sans text-xs text-[#c9a84c] hover:underline mt-1 inline-block"
                        >
                          {linkLabel} →
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealBlock>

          {/* Right: contact form */}
          <RevealBlock delay={150} className="w-full">
            <div className="bg-white border border-[#ede7dc] rounded shadow-sm p-7 md:p-9">
              <h3 className="font-serif text-2xl text-[#1a3c2e] mb-2">Send an Enquiry</h3>
              <p className="font-sans text-sm text-[#4a4a4a] mb-6 leading-relaxed">
                Fill in the form below and our team will be in touch. Fields marked * are required.
              </p>

              {submitted ? (
                <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
                  <CheckCircle size={48} className="text-[#1a3c2e]" />
                  <p className="font-serif text-xl text-[#1a3c2e]">Thank you for reaching out!</p>
                  <p className="font-sans text-sm text-[#4a4a4a] mb-4">
                    Your enquiry has been received. Our team will respond within one business day.
                  </p>
                  <Button variant="outline" size="sm" onClick={() => setSubmitted(false)}>
                    Send Another Enquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
                  {/* Name */}
                  <div>
                    <label className="font-sans text-xs tracking-widest uppercase text-[#4a4a4a] mb-1.5 block">
                      Full Name *
                    </label>
                    <input
                      {...register('name', { required: 'Please enter your name.' })}
                      type="text"
                      placeholder="Your full name"
                      className={inputClass(!!errors.name)}
                    />
                    {errors.name && (
                      <p className="font-sans text-xs text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="font-sans text-xs tracking-widest uppercase text-[#4a4a4a] mb-1.5 block">
                      Email Address *
                    </label>
                    <input
                      {...register('email', {
                        required: 'Please enter your email.',
                        pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Please enter a valid email.' },
                      })}
                      type="email"
                      placeholder="you@example.com"
                      className={inputClass(!!errors.email)}
                    />
                    {errors.email && (
                      <p className="font-sans text-xs text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="font-sans text-xs tracking-widest uppercase text-[#4a4a4a] mb-1.5 block">
                      Phone Number
                    </label>
                    <input
                      {...register('phone')}
                      type="tel"
                      placeholder="+91 98765 43210"
                      className={inputClass(false)}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="font-sans text-xs tracking-widest uppercase text-[#4a4a4a] mb-1.5 block">
                      Message *
                    </label>
                    <textarea
                      {...register('message', { required: 'Please enter your message.' })}
                      rows={4}
                      placeholder="Tell us about your travel dates, room preferences, or any special requests..."
                      className={inputClass(!!errors.message) + ' resize-none'}
                    />
                    {errors.message && (
                      <p className="font-sans text-xs text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.message.message}
                      </p>
                    )}
                  </div>

                  {serverError && (
                    <p className="font-sans text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle size={12} /> {serverError}
                    </p>
                  )}

                  <Button type="submit" variant="secondary" size="lg" className="w-full" disabled={submitting}>
                    {submitting ? 'Sending…' : 'Send Enquiry'}
                  </Button>

                  <button
                    type="button"
                    onClick={() =>
                      window.open(
                        buildWhatsAppUrl("Hello, I'd like to enquire about a stay at The Royal Hotel."),
                        '_blank',
                        'noopener,noreferrer'
                      )
                    }
                    className="flex items-center justify-center gap-2 text-sm font-sans text-[#4a4a4a] hover:text-[#1a3c2e] transition-colors py-2"
                  >
                    <MessageCircle size={16} className="text-green-600" />
                    Or enquire directly via WhatsApp
                  </button>
                </form>
              )}
            </div>
          </RevealBlock>
        </div>
      </div>
    </section>
  );
}
