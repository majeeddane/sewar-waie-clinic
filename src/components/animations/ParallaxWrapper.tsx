'use client';

import React, { useRef, useEffect, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ParallaxWrapperProps {
  children: ReactNode;
  speed?: number;
  direction?: 'up' | 'down';
  className?: string;
}

export default function ParallaxWrapper({
  children,
  speed = 0.3,
  direction = 'up',
  className = '',
}: ParallaxWrapperProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) return;

    const content = contentRef.current;
    if (!content) return;

    const yMovement = direction === 'up' ? speed * -100 : speed * 100;

    gsap.to(content, {
      y: `${yMovement}%`,
      ease: 'none',
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.5, // Smooth scrubbing
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === content || trigger.trigger === wrapperRef.current) {
          trigger.kill();
        }
      });
    };
  }, [speed, direction]);

  return (
    <div ref={wrapperRef} className={`overflow-hidden ${className}`}>
      <div ref={contentRef} className="will-change-transform">
        {children}
      </div>
    </div>
  );
}

// Floating animation component for decorative elements
interface FloatingElementProps {
  children: ReactNode;
  amplitude?: number; // pixels of movement
  duration?: number; // seconds per cycle
  delay?: number;
  className?: string;
}

export function FloatingElement({
  children,
  amplitude = 15,
  duration = 4,
  delay = 0,
  className = '',
}: FloatingElementProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) return;

    const element = elementRef.current;
    if (!element) return;

    const tween = gsap.to(element, {
      y: amplitude * -1,
      duration,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
      delay,
    });

    return () => {
      tween.kill();
    };
  }, [amplitude, duration, delay]);

  return (
    <div ref={elementRef} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}

// Slow rotation for decorative elements
export function SlowRotate({
  children,
  duration = 20,
  className = '',
}: {
  children: ReactNode;
  duration?: number;
  className?: string;
}) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) return;

    const element = elementRef.current;
    if (!element) return;

    const tween = gsap.to(element, {
      rotation: 360,
      duration,
      ease: 'none',
      repeat: -1,
    });

    return () => {
      tween.kill();
    };
  }, [duration]);

  return (
    <div ref={elementRef} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}
