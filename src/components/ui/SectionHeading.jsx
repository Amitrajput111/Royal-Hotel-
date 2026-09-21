/**
 * Consistent gold-underlined section heading.
 *
 * Props:
 *   eyebrow  - small uppercase label above heading (optional)
 *   heading  - main heading text (required)
 *   sub      - paragraph below heading (optional)
 *   center   - boolean, center-aligns content (default false)
 *   light    - boolean, uses light colour scheme for dark backgrounds
 */
export default function SectionHeading({
  eyebrow,
  heading,
  sub,
  center = false,
  light = false,
}) {
  const align = center ? 'items-center text-center' : 'items-start text-left';
  const textCol = light ? 'text-[#f8f4ee]' : 'text-[#1a3c2e]';
  const subCol  = light ? 'text-[#ede7dc]/80' : 'text-[#4a4a4a]';

  return (
    <div className={`flex flex-col gap-3 ${align}`}>
      {eyebrow && (
        <span className="font-sans text-xs tracking-[0.22em] uppercase text-[#c9a84c] font-medium">
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-serif font-light leading-tight ${textCol}`}
        style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
      >
        {heading}
      </h2>
      <div className={`gold-divider ${center ? 'mx-auto' : ''}`} />
      {sub && (
        <p className={`font-sans font-light leading-relaxed max-w-xl ${subCol}`}>
          {sub}
        </p>
      )}
    </div>
  );
}
