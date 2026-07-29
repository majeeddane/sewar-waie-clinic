'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * CustomCursor - Premium smooth cursor with Apple-level refinement
 * 
 * Features:
 * - Elegant dot that follows mouse with subtle lag (lerp 0.15)
 * - Soft ring that follows with gentle trail effect (lerp 0.08)
 * - Both expand elegantly on interactive elements
 * - Uses mix-blend-mode: difference for visual sophistication
 * - Completely hidden on touch devices (respectful)
 * - Respects prefers-reduced-motion (accessible)
 * - Smooth 60fps animation loop with requestAnimationFrame
 * 
 * Inspired by Cuberto/Lusion but toned down for healthcare context:
 * - No aggressive effects or distractions
 * - Subtle, calming presence
 * - Grows gently on hover (not jarring)
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  
  // Current positions (for smooth interpolation via lerp)
  const dotPos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const mousePos = useRef({ x: -100, y: -100 });
  
  // Animation frame ref for cleanup
  const rafRef = useRef<number>(0);

  useEffect(() => {
    // ── Exit early on touch devices ──
    const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    if (isTouchDevice) return;

    // ── Exit if user prefers reduced motion ──
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // ── Show cursor after brief delay (prevents initial flash) ──
    const showTimer = setTimeout(() => setIsVisible(true), 400);

    // ── Smooth interpolation function (Linear Interpolation) ──
    // Creates that premium "following" feel
    const lerp = (current: number, target: number, factor: number) => {
      return current + (target - current) * factor;
    };

    // ── Main animation loop - runs at display refresh rate ──
    const animate = () => {
      // Dot follows faster (responsive, precise feel)
      dotPos.current.x = lerp(dotPos.current.x, mousePos.current.x, 0.18);
      dotPos.current.y = lerp(dotPos.current.y, mousePos.current.y, 0.18);

      // Ring follows slower (creates elegant trail/wake effect)
      ringPos.current.x = lerp(ringPos.current.x, mousePos.current.x, 0.10);
      ringPos.current.y = lerp(ringPos.current.y, mousePos.current.y, 0.10);

      // Apply transforms using GPU-accelerated properties only
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotPos.current.x}px, ${dotPos.current.y}px) translate(-50%, -50%)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    // Start the animation loop
    rafRef.current = requestAnimationFrame(animate);

    // ── Event Handlers ──
    
    // Track mouse position with passive listener (performance)
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
    };

    // Show/hide when mouse enters/leaves viewport
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Detect hover state on interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Comprehensive check for interactive elements
      const isInteractive = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.tagName === 'SELECT' ||
        target.closest('a') !== null ||
        target.closest('button') !== null ||
        target.closest('[role="button"]') !== null ||
        target.dataset.cursor === 'pointer' ||
        target.classList.contains('cursor-pointer') ||
        getComputedStyle(target).cursor === 'pointer';

      if (isInteractive) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    // Handle click state for visual feedback
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // ── Attach all event listeners ──
    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // ── Cleanup on unmount ──
    return () => {
      clearTimeout(showTimer);
      cancelAnimationFrame(rafRef.current);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  // Don't render anything if not visible (saves DOM nodes)
  if (!isVisible) return null;

  return (
    <>
      {/* 
        Outer Ring - The "wake" behind the cursor
        Slower following creates elegant trailing effect
      */}
      <div
        ref={ringRef}
        className={`custom-cursor-ring ${isHovering ? 'is-hovering' : ''} ${isClicking ? 'is-clicking' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9998,
          opacity: isVisible ? 1 : 0,
          border: '1.5px solid rgba(93, 60, 131, 0.25)',
          backgroundColor: 'transparent',
          transition: 'width 0.4s cubic-bezier(0.16, 1, 0.3, 1), \
                       height 0.4s cubic-bezier(0.16, 1, 0.3, 1), \
                       border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1), \
                       background-color 0.4s cubic-bezier(0.16, 1, 0.3, 1), \
                       opacity 0.3s ease',
          transform: 'translate(-100px, -100px) translate(-50%, -50%)',
        }}
        aria-hidden="true"
      />
      
      {/* 
        Inner Dot - The precise point of interaction
        Faster following for responsive feel
      */}
      <div
        ref={dotRef}
        className={`custom-cursor-dot ${isHovering ? 'is-hovering' : ''} ${isClicking ? 'is-clicking' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isHovering ? '10px' : '6px',
          height: isHovering ? '10px' : '6px',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          opacity: isVisible ? 1 : 0,
          backgroundColor: isHovering ? 'rgba(93, 60, 131, 0.5)' : '#5D3C83',
          transition: 'width 0.3s cubic-bezier(0.16, 1, 0.3, 1), \
                       height 0.3s cubic-bezier(0.16, 1, 0.3, 1), \
                       background-color 0.3s cubic-bezier(0.16, 1, 0.3, 1), \
                       transform 0.15s cubic-bezier(0.16, 1, 0.3, 1)',
          transform: 'translate(-100px, -100px) translate(-50%, -50%)',
        }}
        aria-hidden="true"
      />
    </>
  );
}
