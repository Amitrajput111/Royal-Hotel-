/**
 * Shared RevealBlock component.
 * Uses useScrollReveal (inline-style based) with optional delay.
 */
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function RevealBlock({ children, delay = 0, className = '' }) {
  const ref = useScrollReveal();

  // Apply delay via a wrapper span so the hook's transition-delay works
  return (
    <div
      ref={ref}
      className={className}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
