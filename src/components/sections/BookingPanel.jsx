import { useState, useCallback } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CalendarDays, Users, BedDouble, Search, AlertCircle } from 'lucide-react';
import { buildBookingEnquiryMessage, buildWhatsAppUrl } from '../../config/hotel';

function Counter({ label, value, min, max, onChange }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="font-sans text-sm text-[#4a4a4a] flex-1">{label}</span>
      <div className="flex items-center gap-3 flex-shrink-0">
        <button
          type="button"
          onClick={() => onChange(Math.max(min, value - 1))}
          disabled={value <= min}
          className="w-7 h-7 rounded-full border border-[#c9a84c]/60 text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#0f241c] transition-all flex items-center justify-center text-base leading-none disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label={`Decrease ${label}`}
        >−</button>
        <span className="font-sans font-semibold text-[#2c2c2c] w-4 text-center tabular-nums">{value}</span>
        <button
          type="button"
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          className="w-7 h-7 rounded-full border border-[#c9a84c]/60 text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#0f241c] transition-all flex items-center justify-center text-base leading-none disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label={`Increase ${label}`}
        >+</button>
      </div>
    </div>
  );
}

function FieldBox({ icon: Icon, label, children }) {
  return (
    <div className="bg-white p-4 flex flex-col gap-2.5 min-h-[80px]">
      <label className="font-sans text-[10px] text-[#c9a84c] tracking-[0.2em] uppercase flex items-center gap-1.5 font-medium">
        <Icon size={11} strokeWidth={2.5} /> {label}
      </label>
      {children}
    </div>
  );
}

export default function BookingPanel() {
  const today    = new Date();
  const tomorrow = new Date(today); tomorrow.setDate(today.getDate() + 1);

  const [checkIn,  setCheckIn]  = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [adults,   setAdults]   = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms,    setRooms]    = useState(1);
  const [error,    setError]    = useState('');

  const nights = checkIn && checkOut
    ? Math.max(0, Math.ceil((checkOut - checkIn) / 86400000))
    : null;

  const handleCheck = useCallback(() => {
    if (!checkIn)  return setError('Please select a check-in date.');
    if (!checkOut) return setError('Please select a check-out date.');
    if (checkOut <= checkIn) return setError('Check-out must be after check-in.');
    setError('');
    const msg = buildBookingEnquiryMessage({ checkIn, checkOut, adults, children, rooms });
    window.open(buildWhatsAppUrl(msg), '_blank', 'noopener,noreferrer');
  }, [checkIn, checkOut, adults, children, rooms]);

  return (
    <section id="booking" aria-label="Book your stay" className="w-full relative z-20 bg-[#f8f4ee] py-12 flex flex-col items-center">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded shadow-2xl border border-[#ede7dc] overflow-hidden w-full">

          {/* Header strip — centered */}
          <div className="bg-[#1a3c2e] px-6 py-3 flex items-center justify-center gap-3">
            <span className="font-serif text-[#c9a84c] text-sm tracking-widest uppercase">
              Check Availability
            </span>
            {nights !== null && (
              <span className="font-sans text-xs text-[#c9a84c]/60 font-medium">
                &nbsp;—&nbsp;{nights} night{nights !== 1 ? 's' : ''}
              </span>
            )}
          </div>

          <div className="p-5 lg:p-6">
            {/* Fields grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 divide-x-0 sm:divide-x divide-[#ede7dc] border border-[#ede7dc] rounded overflow-hidden mb-5">

              <FieldBox icon={CalendarDays} label="Check-In">
                <DatePicker
                  selected={checkIn}
                  onChange={(date) => {
                    setCheckIn(date);
                    setError('');
                    if (checkOut && date >= checkOut) {
                      const next = new Date(date);
                      next.setDate(date.getDate() + 1);
                      setCheckOut(next);
                    }
                  }}
                  minDate={today}
                  placeholderText="Select date"
                  dateFormat="dd MMM yyyy"
                  popperPlacement="bottom-start"
                  aria-label="Check-in date"
                />
              </FieldBox>

              <FieldBox icon={CalendarDays} label="Check-Out">
                <DatePicker
                  selected={checkOut}
                  onChange={(date) => { setCheckOut(date); setError(''); }}
                  minDate={checkIn ? new Date(checkIn.getTime() + 86400000) : tomorrow}
                  placeholderText="Select date"
                  dateFormat="dd MMM yyyy"
                  popperPlacement="bottom-start"
                  aria-label="Check-out date"
                />
              </FieldBox>

              <FieldBox icon={Users} label="Guests">
                <div className="flex flex-col gap-2">
                  <Counter label="Adults"   value={adults}   min={1} max={8} onChange={setAdults} />
                  <Counter label="Children" value={children} min={0} max={6} onChange={setChildren} />
                </div>
              </FieldBox>

              <FieldBox icon={BedDouble} label="Rooms">
                <Counter label="Rooms" value={rooms} min={1} max={5} onChange={setRooms} />
              </FieldBox>
            </div>

            {/* Error */}
            {error && (
              <div className="flex items-center gap-2 text-red-600 font-sans text-sm mb-4 bg-red-50 px-4 py-2.5 rounded">
                <AlertCircle size={15} className="flex-shrink-0" />
                {error}
              </div>
            )}

            {/* Bottom row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="font-sans text-xs text-[#4a4a4a]/55 leading-relaxed max-w-sm">
                This will open a WhatsApp enquiry with your details. Our team will confirm availability and pricing.
              </p>
              <button
                type="button"
                onClick={handleCheck}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#1a3c2e] hover:bg-[#2d5a3d] active:bg-[#0f241c] text-white font-sans font-medium text-sm tracking-wide px-8 py-3.5 rounded transition-colors duration-300 flex-shrink-0"
              >
                <Search size={15} />
                Check Availability
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

