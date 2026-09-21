import React from 'react';

/**
 * Reusable button component.
 * Variants: 'primary' | 'secondary' | 'outline' | 'ghost'
 */
const Button = React.forwardRef(function Button(
  {
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    as: Tag = 'button',
    ...props
  },
  ref
) {
  const base =
    'inline-flex items-center justify-center gap-2 font-sans font-medium tracking-wide transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9a84c] select-none cursor-pointer';

  const sizes = {
    sm: 'px-5 py-2 text-sm',
    md: 'px-7 py-3 text-sm',
    lg: 'px-9 py-4 text-base',
  };

  const variants = {
    primary:
      'bg-[#c9a84c] text-[#0f241c] hover:bg-[#e0c070] active:bg-[#a07830] shadow-sm hover:shadow-md',
    secondary:
      'bg-[#1a3c2e] text-[#f8f4ee] hover:bg-[#2d5a3d] active:bg-[#0f241c]',
    outline:
      'border border-[#c9a84c] text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#0f241c] active:bg-[#a07830] active:border-[#a07830] active:text-[#0f241c]',
    ghost:
      'text-[#c9a84c] hover:text-[#e0c070] underline-offset-4 hover:underline',
    'outline-white':
      'border border-white/60 text-white hover:bg-white/10 hover:border-white active:bg-white/20',
  };

  return (
    <Tag
      ref={ref}
      className={`${base} ${sizes[size] ?? sizes.md} ${variants[variant] ?? variants.primary} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
});

export default Button;
