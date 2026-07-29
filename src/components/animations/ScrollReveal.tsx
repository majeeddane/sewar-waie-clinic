'use client';

import { useRef, useEffect, type ReactNode, type ElementType } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  as?: ElementType;
}

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.8,
  distance = 40,
  className = '',
  as: Tag = 'div',
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) return;

    const element = elementRef.current;
    if (!element) return;

    // Set initial state based on direction
    let x = 0;
    let y = 0;

    switch (direction) {
      case 'up':
        y = distance;
        break;
      case 'down':
        y = -distance;
        break;
      case 'left':
        x = distance;
        break;
      case 'right':
        x = -distance;
        break;
      default:
        break;
    }

    // Initial state
    gsap.set(element, {
      opacity: 0,
      x,
      y,
    });

    // Create scroll trigger animation
    const tween = gsap.to(element, {
      opacity: 1,
      x: 0,
      y: 0,
      duration,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 88%',
        end: 'top 50%',
        toggleActions: 'play none none reverse',
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [direction, delay, duration, distance]);

  return (
    <Tag ref={elementRef} className={className}>
      {children}
    </Tag>
  );
}
