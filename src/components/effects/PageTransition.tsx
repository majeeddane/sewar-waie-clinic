'use client';

import { useEffect, useState, useRef, type ReactNode } from 'react';

/**
 * PageTransition - Cinematic page entrance transition
 * 
 * Creates a premium "fade + slight scale" entrance that feels
 * like Apple's website transitions - confident and smooth.
 * 
 * Features:
 * - Fade in from transparent (0 → 1)
 * - Subtle scale from 0.98 → 1.00 (barely noticeable but premium)
 * - Optional subtle Y-axis translation (8px → 0)
 * - Uses professional cubic-bezier(0.16, 1, 0.3, 1) easing
 * - Duration: 800ms (slow enough to feel, fast enough to not annoy)
 * - Respects prefers-reduced-motion (instant show)
 * - Prevents flash of unstyled content
 * 
 * Usage: Wrap your main content with <PageTransition>{children}</PageTransition>
 */
interface PageTransitionProps {
  children: ReactNode;
  /** Custom duration in seconds (default: 0.8) */
  duration?: number;
  /** Custom delay in ms (default: 0) */
  delay?: number;
  /** Enable Y-axis translation (default: true) */
  enableYTranslate?: boolean;
}

export default function PageTransition({ 
  children, 
  duration = 0.8, 
  delay = 0,
  enableYTranslate = true,
}: PageTransitionProps) {
  // Use a ref to track if we've initialized (prevents double-execution in strict mode)
  const initializedRef = useRef(false);
  
  // Start as not visible - content will animate in after mount
  const [isVisible, setIsVisible] = useState(() => {
    // On server or first render, always start hidden (prevent FOUC)
    if (typeof window === 'undefined') return false;
    // If reduced motion is preferred, start visible (skip animation)
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    // Prevent double execution in React strict mode
    if (initializedRef.current) return;
    initializedRef.current = true;

    // If already visible (reduced motion), no need to animate
    if (isVisible) return;

    // Schedule animation using microtask pattern for optimal timing:
    // 1. Promise.resolve() ensures we're in a microtask
    // 2. First rAF ensures browser has painted initial state
    // 3. Second rAF triggers the actual animation
    void Promise.resolve().then(() => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          // Apply delay if specified
          if (delay > 0) {
            setTimeout(() => setIsVisible(true), delay);
          } else {
            setIsVisible(true);
          }
        });
      });
    });
  }, [isVisible, delay]);

  // Build the transform string based on props
  const getTransform = () => {
    if (!isVisible) {
      return enableYTranslate 
        ? 'scale(0.98) translateY(12px)' 
        : 'scale(0.98)';
    }
    return 'scale(1) translateY(0)';
  };

  return (
    <div
      className="page-transition-wrapper"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        // Professional easing - the key to "premium" feel
        transition: `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1), \
                      transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1)`,
        // Ensure GPU acceleration for smooth animation
        willChange: 'opacity, transform',
        // Reset will-change after animation completes to free up GPU memory
        ...(isVisible ? { willChange: 'auto' } : {}),
      }}
    >
      {children}
    </div>
  );
}
