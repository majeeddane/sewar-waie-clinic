'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * CustomCursor - Cuberto-inspired smooth cursor
 * 
 * Features:
 * - Small dot that follows mouse with slight lag
 * - Larger ring that follows with more lag (smooth trail effect)
 * - Both grow when hovering over interactive elements
 * - Uses mix-blend-mode for visual interest
 * - Respects prefers-reduced-motion
 * - Hidden on touch devices
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Current positions (for smooth interpolation)
  const dotPos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const mousePos = useRef({ x: 0, y: 0 });
  
  // Animation frame ref
  const rafRef = useRef<number>(0);

  useEffect(() => {
    // Don't show custom cursor on touch devices
    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
      return;
    }

    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    // Show cursor after a small delay (prevents flash)
    const showTimer = setTimeout(() => setIsVisible(true), 500);

    // Smooth lerp function
    const lerp = (current: number, target: number, factor: number) => {
      return current + (target - current) * factor;
    };

    // Animation loop for smooth cursor movement
    const animate = () => {
      // Dot follows faster (more responsive)
      dotPos.current.x = lerp(dotPos.current.x, mousePos.current.x, 0.15);
      dotPos.current.y = lerp(dotPos.current.y, mousePos.current.y, 0.15);

      // Ring follows slower (creates trail effect)
      ringPos.current.x = lerp(ringPos.current.x, mousePos.current.x, 0.08);
      ringPos.current.y = lerp(ringPos.current.y, mousePos.current.y, 0.08);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotPos.current.x}px, ${dotPos.current.y}px) translate(-50%, -50%)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    // Start animation loop
    rafRef.current = requestAnimationFrame(animate);

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
    };

    // Mouse enter/leave document
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Detect hoverable elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if hovering over interactive element
      const isInteractive = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') !== null ||
        target.closest('button') !== null ||
        target.closest('[role="button"]') !== null ||
        target.dataset.cursor === 'pointer' ||
        target.classList.contains('btn');

      if (isInteractive) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      clearTimeout(showTimer);
      cancelAnimationFrame(rafRef.current);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer ring - slower, creates trail */}
      <div
        ref={ringRef}
        className={`cursor-ring ${isHovering ? 'hovering' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 9998,
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      />
      
      {/* Inner dot - faster, precise */}
      <div
        ref={dotRef}
        className={`cursor-dot ${isHovering ? 'hovering' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 9999,
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      />
    </>
  );
}
