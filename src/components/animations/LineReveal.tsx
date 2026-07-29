'use client';

import React, { useRef, useEffect, useState } from 'react';
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

// Animated counter component using Intersection Observer
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
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = counterRef.current;
    if (!element) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      element.textContent = `${prefix}${value}${suffix}`;
      return;
    }

    // Use Intersection Observer for reliable visibility detection
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setIsVisible(true);
            setHasAnimated(true);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the element is visible
        rootMargin: '0px 0px -50px 0px', // Slightly before fully in view
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [value, suffix, prefix, hasAnimated]);

  // Run animation when element becomes visible
  useEffect(() => {
    if (!isVisible) return;

    const element = counterRef.current;
    if (!element) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const easeOutCubic = (t: number): number => {
      return 1 - Math.pow(1 - t, 3);
    };

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      
      // Ease out cubic for smooth counting
      const easedProgress = easeOutCubic(progress);
      const currentValue = Math.floor(easedProgress * value);
      
      element.textContent = `${prefix}${currentValue}${suffix}`;
      
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        // Ensure final value is exact
        element.textContent = `${prefix}${value}${suffix}`;
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isVisible, value, suffix, prefix, duration]);

  // Show initial value or 0 before animation
  return <span ref={counterRef} className={className}>{hasAnimated ? `${prefix}0${suffix}` : `${prefix}0${suffix}`}</span>;
}
