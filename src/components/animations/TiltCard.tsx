'use client';

import React, { useRef, useState, ReactNode } from 'react';
import { gsap } from 'gsap';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  tiltStrength?: number;
  glareEnabled?: boolean;
}

export default function TiltCard({
  children,
  className = '',
  tiltStrength = 8,
  glareEnabled = true,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Check for reduced motion preference
  const prefersReducedMotion = 
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -tiltStrength;
    const rotateY = ((x - centerX) / centerX) * tiltStrength;

    gsap.to(card, {
      rotateX,
      rotateY,
      scale: 1.02,
      duration: 0.4,
      ease: 'power2.out',
      transformPerspective: 1000,
    });

    // Update glare position if enabled
    if (glareEnabled) {
      const glareElement = card.querySelector('[data-glare]');
      if (glareElement) {
        gsap.set(glareElement, {
          background: `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.15), transparent 60%)`,
        });
      }
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    
    if (prefersReducedMotion || !cardRef.current) return;

    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.6,
      ease: 'elastic.out(1, 0.5)',
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div
      ref={cardRef}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        transformStyle: 'preserve-3d',
        willChange: 'transform',
        transition: isHovered ? 'none' : 'box-shadow 0.4s ease',
      }}
    >
      {children}
      
      {/* Glare effect */}
      {glareEnabled && (
        <div
          data-glare
          className="absolute inset-0 rounded-[inherit] pointer-events-none opacity-0 transition-opacity duration-300"
          style={{ opacity: isHovered ? 1 : 0 }}
          aria-hidden="true"
        />
      )}
    </div>
  );
}
