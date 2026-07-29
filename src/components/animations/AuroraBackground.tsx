'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface AuroraBackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

// Aurora Blob class - defined outside component
class AuroraBlob {
  x: number;
  y: number;
  radius: number;
  colorIndex: number;
  speedX: number;
  speedY: number;
  phase: number;

  constructor(
    private width: number,
    private height: number
  ) {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.radius = 150 + Math.random() * 200;
    this.colorIndex = Math.floor(Math.random() * 4);
    this.speedX = (Math.random() - 0.5) * 0.3; // Very slow movement
    this.speedY = (Math.random() - 0.5) * 0.3;
    this.phase = Math.random() * Math.PI * 2;
  }

  update(time: number, width: number, height: number) {
    // Gentle floating motion
    this.x += this.speedX + Math.sin(time * 0.0003 + this.phase) * 0.2;
    this.y += this.speedY + Math.cos(time * 0.0002 + this.phase) * 0.2;

    // Soft boundary wrapping
    if (this.x < -this.radius) this.x = width + this.radius;
    if (this.x > width + this.radius) this.x = -this.radius;
    if (this.y < -this.radius) this.y = height + this.radius;
    if (this.y > height + this.radius) this.y = -this.radius;

    // Subtle pulsing radius
    this.radius = 180 + Math.sin(time * 0.0005 + this.phase) * 40;
  }

  draw(ctx: CanvasRenderingContext2D, colors: Array<{ r: number; g: number; b: number }>) {
    const color = colors[this.colorIndex];
    
    // Create radial gradient with very soft edges
    const gradient = ctx.createRadialGradient(
      this.x, this.y, 0,
      this.x, this.y, this.radius
    );
    
    gradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, 0.25)`);
    gradient.addColorStop(0.4, `rgba(${color.r}, ${color.g}, ${color.b}, 0.12)`);
    gradient.addColorStop(0.7, `rgba(${color.r}, ${color.g}, ${color.b}, 0.05)`);
    gradient.addColorStop(1, `rgba(${color.r}, ${color.g}, ${color.b}, 0)`);

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

// Brand colors for aurora
const auroraColors = [
  { r: 93, g: 60, b: 131 },   // #5D3C83 - Purple
  { r: 194, g: 157, b: 68 },  // #C29D44 - Gold
  { r: 31, g: 61, b: 115 },   // #1F3D73 - Navy
  { r: 144, g: 163, b: 109 }, // #90A36D - Sage
];

export default function AuroraBackground({ className = '', children }: AuroraBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  // Check for reduced motion preference
  const prefersReducedMotion = 
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (prefersReducedMotion || !canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let time = 0;

    const resize = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener('resize', resize);

    // Create aurora blobs
    const blobs: AuroraBlob[] = Array.from({ length: 4 }, () => new AuroraBlob(width, height));

    const animate = () => {
      time++;
      
      ctx.clearRect(0, 0, width, height);
      
      // Set blend mode for softer look
      ctx.globalCompositeOperation = 'lighter';
      
      blobs.forEach(blob => {
        blob.update(time, width, height);
        blob.draw(ctx, auroraColors);
      });

      ctx.globalCompositeOperation = 'source-over';
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [prefersReducedMotion]);

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Static fallback background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#5D3C83]/10 via-transparent to-[#C29D44]/15" />
      
      {/* Animated canvas layer */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: prefersReducedMotion ? 0 : 1 }}
      />
      
      {/* Content overlay */}
      {children}
    </div>
  );
}
