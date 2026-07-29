'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface LineRevealProps {
  className?: string;
  direction?: 'left' | 'right' | 'center';
  color?: string;
}

export default function LineReveal({
  className = '',
  direction = 'center',
  color = 'linear-gradient(to right, #5D3C83, #C29D44)',
}: LineRevealProps) {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) return;

    const line = lineRef.current;
    if (!line) return;

    const isCenter = direction === 'center';
    const initialScaleX = isCenter ? 0 : (direction === 'left' ? 0 : 0);
    
    gsap.set(line, {
      scaleX: initialScaleX,
      transformOrigin: direction === 'left' ? 'left center' : direction === 'right' ? 'right center' : 'center',
    });

    const tween = gsap.to(line, {
      scaleX: 1,
      duration: 1.2,
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: line,
        start: 'top 90%',
        toggleActions: 'play none none reverse',
      },
    });

    return () => {
      tween.kill();
    };
  }, [direction]);

  return (
    <div
      ref={lineRef}
      className={`h-1 rounded-full ${className}`}
      style={{ background: color }}
    />
  );
}

// Animated counter component
export function AnimatedCounter({
  value,
  suffix = '',
  prefix = '',
  duration = 2,
  className = '',
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}) {
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion && counterRef.current) {
      counterRef.current.textContent = `${prefix}${value}${suffix}`;
      return;
    }

    const element = counterRef.current;
    if (!element) return;

    let startTime: number | null = null;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      
      // Ease out cubic for smooth counting
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(easeOutCubic * value);
      
      element.textContent = `${prefix}${currentValue}${suffix}`;
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const tween = ScrollTrigger.create({
      trigger: element,
      start: 'top 85%',
      onEnter: () => requestAnimationFrame(animate),
    });

    return () => {
      tween.kill();
    };
  }, [value, suffix, prefix, duration]);

  return <span ref={counterRef} className={className}>0</span>;
}
