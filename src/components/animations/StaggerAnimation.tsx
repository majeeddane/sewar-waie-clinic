'use client';

import { useRef, useEffect, type ReactNode, type ElementType, Children } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface StaggerContainerProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
  as?: ElementType;
}

export function StaggerContainer({
  children,
  staggerDelay = 0.12,
  className = '',
  as: Tag = 'div',
}: StaggerContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <Tag ref={containerRef} className={className} data-stagger-container>
      {Children.map(children, (child, index) => (
        <StaggerItem
          key={index}
          index={index}
          staggerDelay={staggerDelay}
        >
          {child}
        </StaggerItem>
      ))}
    </Tag>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  index: number;
  staggerDelay?: number;
}

function StaggerItem({ children, index, staggerDelay = 0.12 }: StaggerItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) return;

    const item = itemRef.current;
    if (!item) return;

    // Initial state
    gsap.set(item, {
      opacity: 0,
      y: 35,
    });

    // Create scroll trigger animation with stagger
    const tween = gsap.to(item, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      delay: index * staggerDelay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: item,
        start: 'top 88%',
        end: 'top 50%',
        toggleActions: 'play none none reverse',
      },
    });

    return () => {
      tween.kill();
    };
  }, [index, staggerDelay]);

  return (
    <div ref={itemRef} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}

// Text reveal animation for headings
export function TextReveal({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) return;

    const element = textRef.current;
    if (!element) return;

    // Split text into words for animation
    const text = element.textContent || '';
    element.innerHTML = text.split(' ').map(word => 
      `<span class="inline-block" style="display: inline-block; margin: 0 0.15em;">${word}</span>`
    ).join('');

    const words = element.querySelectorAll('span');

    gsap.set(words, {
      opacity: 0,
      y: 25,
      rotateX: -80,
    });

    const tween = gsap.to(words, {
      opacity: 1,
      y: 0,
      rotateX: 0,
      duration: 0.6,
      stagger: 0.04,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    });

    return () => {
      tween.kill();
    };
  }, []);

  return (
    <div ref={textRef} className={className}>
      {children}
    </div>
  );
}
