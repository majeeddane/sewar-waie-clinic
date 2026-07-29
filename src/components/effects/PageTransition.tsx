'use client';

import { useEffect, useState, useRef, type ReactNode } from 'react';

/**
 * PageTransition - Cinematic page transition wrapper
 * 
 * Features:
 * - Fade + slight scale on mount (cinematic entrance)
 * - Smooth easing curve (cubic-bezier(0.25, 1, 0.5, 1))
 * - Respects prefers-reduced-motion
 * - Wraps main content for consistent transitions
 */
interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  // Use a ref to track if we've initialized
  const initializedRef = useRef(false);
  
  // Start as not visible, will be updated after mount via scheduled callback
  const [isVisible, setIsVisible] = useState(() => {
    // On server or first render, always start hidden
    if (typeof window === 'undefined') return false;
    // If reduced motion is preferred, we can start visible
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    // Prevent double execution in strict mode
    if (initializedRef.current) return;
    initializedRef.current = true;

    // If already visible (reduced motion), no need to animate
    if (isVisible) return;

    // Schedule animation using microtask pattern (not synchronous setState)
    void Promise.resolve().then(() => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsVisible(true);
        });
      });
    });
  }, [isVisible]);

  return (
    <div
      className="page-transition-active"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible 
          ? 'scale(1) translateY(0)' 
          : 'scale(0.98) translateY(8px)',
        transition: 'opacity 0.7s cubic-bezier(0.25, 1, 0.5, 1), transform 0.7s cubic-bezier(0.25, 1, 0.5, 1)',
      }}
    >
      {children}
    </div>
  );
}
