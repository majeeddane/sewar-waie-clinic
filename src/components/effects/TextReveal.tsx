'use client';

import { useEffect, useRef, useState, useMemo, useCallback, type ReactNode } from 'react';
import { useSyncExternalStore } from 'react';

/**
 * TextReveal - Professional text reveal animation
 * 
 * Features:
 * - Character-by-character or word-by-word reveal
 * - Scroll-triggered with IntersectionObserver
 * - Staggered timing for cinematic effect
 * - Uses professional easing curves
 * - Respects prefers-reduced-motion
 */
interface TextRevealProps {
  children: ReactNode;
  as?: 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'p';
  className?: string;
  delay?: number;
  duration?: number;
  mode?: 'words' | 'lines' | 'block';
  triggerOnce?: boolean;
}

// External store for reduced motion preference (shared stable reference)
const reducedMotionQuery = typeof window !== 'undefined' 
  ? window.matchMedia('(prefers-reduced-motion: reduce)')
  : null;

function subscribeReducedMotion(callback: () => void) {
  reducedMotionQuery?.addEventListener('change', callback);
  return () => reducedMotionQuery?.removeEventListener('change', callback);
}

function getReducedMotionSnapshot() {
  return reducedMotionQuery?.matches ?? false;
}

// Get initial visibility state based on reduced motion
function getInitialVisibility(): boolean {
  if (typeof window === 'undefined') return false;
  return getReducedMotionSnapshot();
}

export default function TextReveal({
  children,
  as: Tag = 'div',
  className = '',
  delay = 0,
  duration = 0.6,
  mode = 'words',
  triggerOnce = true,
}: TextRevealProps) {
  const elementRef = useRef<HTMLElement>(null);
  
  // Use sync external store for reduced motion (avoids setState in effect)
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    () => false
  );
  
  // Initialize with proper default based on reduced motion
  const [isVisible, setIsVisible] = useState(getInitialVisibility);

  // Extract words from string children using useMemo (derived state, not effect)
  const words = useMemo(() => {
    if (mode === 'block') return [];
    const text = typeof children === 'string' ? children : '';
    return text ? text.split(/\s+/) : [];
  }, [children, mode]);

  // Set up the IntersectionObserver
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // If reduced motion is preferred, we already initialized as visible
    if (prefersReducedMotion) {
      return;
    }

    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Use setTimeout to schedule state update (not synchronous in effect)
          timeoutId = setTimeout(() => {
            setIsVisible(true);
          }, delay);

          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.15,
        rootMargin: '-40px 0px -40px 0px',
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
      }
    };
  }, [delay, triggerOnce, prefersReducedMotion]);

  // For block mode, just show/hide the whole element
  if (mode === 'block') {
    return (
      <Tag
        ref={elementRef as React.RefObject<HTMLDivElement>}
        className={className}
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
          transition: `opacity ${duration}s cubic-bezier(0.25, 1, 0.5, 1), transform ${duration}s cubic-bezier(0.25, 1, 0.5, 1)`,
          transitionDelay: `${delay}ms`,
        }}
      >
        {children}
      </Tag>
    );
  }

  // For words/lines mode with character animation
  if (typeof children === 'string' && words.length > 0) {
    return (
      <Tag 
        ref={elementRef as React.RefObject<HTMLDivElement>} 
        className={`reveal-text ${isVisible ? 'revealed' : ''} ${className}`}
      >
        {words.map((word, index) => (
          <span
            key={index}
            className="inline-block overflow-hidden align-bottom mr-[0.25em]"
          >
            <span
              className="inline-block reveal-text-inner"
              style={{
                transitionDelay: `${delay + index * 50}ms`,
                transitionDuration: `${duration}s`,
              }}
            >
              {word}
            </span>
          </span>
        ))}
      </Tag>
    );
  }

  // Fallback for non-string children
  return (
    <Tag
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity ${duration}s cubic-bezier(0.25, 1, 0.5, 1), transform ${duration}s cubic-bezier(0.25, 1, 0.5, 1)`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </Tag>
  );
}

/**
 * StaggerContainer - Container that staggers children animations
 */
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  threshold?: number;
}

export function StaggerContainer({
  children,
  className = '',
  staggerDelay = 80,
  threshold = 0.1,
}: StaggerContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Use external store for reduced motion
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    () => false
  );
  
  // Initialize based on reduced motion
  const [isVisible, setIsVisible] = useState(getInitialVisibility);

  useEffect(() => {
    const element = containerRef.current;
    if (!element || prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Schedule state update via setTimeout
          setTimeout(() => setIsVisible(true), 0);
          observer.unobserve(element);
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, prefersReducedMotion]);

  return (
    <div
      ref={containerRef}
      className={`stagger-reveal ${isVisible ? 'revealed' : ''} ${className}`}
    >
      {children}
    </div>
  );
}

/**
 * FadeInUp - Simple fade in up on scroll
 */
interface FadeInUpProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
}

export function FadeInUp({
  children,
  className = '',
  delay = 0,
  distance = 32,
}: FadeInUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    () => false
  );
  
  const [isVisible, setIsVisible] = useState(getInitialVisibility);

  useEffect(() => {
    const element = ref.current;
    if (!element || prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), 0);
          observer.unobserve(element);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : `translateY(${distance}px)`,
        transition: `opacity 0.7s cubic-bezier(0.25, 1, 0.5, 1), transform 0.7s cubic-bezier(0.25, 1, 0.5, 1)`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/**
 * ScaleIn - Scale in on scroll
 */
interface ScaleInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function ScaleIn({
  children,
  className = '',
  delay = 0,
}: ScaleInProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    () => false
  );
  
  const [isVisible, setIsVisible] = useState(getInitialVisibility);

  useEffect(() => {
    const element = ref.current;
    if (!element || prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), 0);
          observer.unobserve(element);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'scale(1)' : 'scale(0.95)',
        transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
