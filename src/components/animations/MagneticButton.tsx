'use client';

import React, { useRef, useState, ReactNode } from 'react';
import { gsap } from 'gsap';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  onClick?: () => void;
}

export default function MagneticButton({
  children,
  className = '',
  strength = 0.3,
  onClick,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Check for reduced motion preference
  const prefersReducedMotion = 
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const handleMouseMove = (e: React.MouseEvent) => {
    if (prefersReducedMotion || !buttonRef.current) return;

    const button = buttonRef.current;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(button, {
      x: x * strength,
      y: y * strength,
      duration: 0.4,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    
    if (prefersReducedMotion || !buttonRef.current) return;

    gsap.to(buttonRef.current, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: 'elastic.out(1, 0.4)',
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Clone the first child to add magnetic effect
  const child = React.Children.only(children) as React.ReactElement<any>;

  return (
    <div
      className={`inline-block ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onClick={onClick}
    >
      {React.cloneElement(child, {
        ref: buttonRef,
        className: `${child.props.className || ''} relative inline-block`,
        style: {
          ...child.props.style,
          transition: isHovered ? 'none' : 'transform 0.3s ease',
        },
      })}
      
      {/* Glow effect */}
      <div
        className={`absolute inset-0 rounded-inherit opacity-0 transition-opacity duration-500 pointer-events-none
                    bg-gradient-to-r from-[#5D3C83]/20 to-[#C29D44]/20 blur-xl -z-10
                    ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        aria-hidden="true"
      />
    </div>
  );
}
