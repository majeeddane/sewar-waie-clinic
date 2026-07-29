'use client';

import React from 'react';
import { FloatingElement, SlowRotate } from './ParallaxWrapper';

interface FloatingDecorationsProps {
  variant?: 'hero' | 'about' | 'services' | 'general';
  className?: string;
}

export default function FloatingDecorations({ 
  variant = 'general', 
  className = '' 
}: FloatingDecorationsProps) {
  
  // Different decoration sets based on section
  const renderDecorations = () => {
    switch (variant) {
      case 'hero':
        return (
          <>
            {/* Large floating leaf - top right */}
            <FloatingElement
              amplitude={12}
              duration={6}
              delay={0}
              className="absolute top-[15%] right-[8%] opacity-20 hidden lg:block"
            >
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" className="text-[#90A36D]">
                <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </FloatingElement>

            {/* Small star - floating */}
            <FloatingElement
              amplitude={18}
              duration={7}
              delay={1}
              className="absolute top-[30%] left-[15%] opacity-30 hidden md:block"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-[#C29D44]">
                <path d="M12 2L14.09 8.26L21 9.27L16 14.14L17.18 21.02L12 17.77L6.82 21.02L8 14.14L3 9.27L9.91 8.26L12 2Z" fill="currentColor"/>
              </svg>
            </FloatingElement>

            {/* Small circle/seed */}
            <FloatingElement
              amplitude={10}
              duration={5}
              delay={2}
              className="absolute bottom-[35%] right-[20%] opacity-20 hidden sm:block"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#5D3C83]">
                <circle cx="12" cy="12" r="8" fill="currentColor"/>
              </svg>
            </FloatingElement>
          </>
        );

      case 'about':
        return (
          <>
            {/* Slow rotating crescent moon shape */}
            <SlowRotate
              duration={40}
              className="absolute -top-20 -right-20 opacity-10 hidden xl:block"
            >
              <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
                <path
                  d="M100 180c44.183 0 80-35.817 80-80s-35.817-80-80-80c-10.85 0-21.198 2.168-30.654 6.093 19.68 8.55 33.454 28.156 33.454 50.907 0 30.658-24.86 55.52-55.52 55.52-5.5 0-10.78-.81-15.78-2.31C46.95 155.03 71.58 180 100 180z"
                  fill="#C29D44"
                  opacity="0.3"
                />
              </svg>
            </SlowRotate>

            {/* Small leaves */}
            <FloatingElement
              amplitude={8}
              duration={5.5}
              delay={0.5}
              className="absolute bottom-[20%] left-[5%] opacity-15 hidden md:block"
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-[#90A36D]">
                <path d="M12 3C4 3 3 12 3 18c0 1.5.5 3 1.5 4l1.5-1.5c-.5-.7-1-1.5-1-2.5 0-5 1-11 7-13z" fill="currentColor"/>
                <path d="M12 3c8 0 9 9 9 15 0 1.5-.5 3-1.5 4l-1.5-1.5c.5-.7 1-1.5 1-2.5 0-5-1-11-7-13z" fill="currentColor" opacity="0.6"/>
              </svg>
            </FloatingElement>
          </>
        );

      case 'services':
        return (
          <>
            {/* Decorative dots pattern that moves slowly */}
            <FloatingElement
              amplitude={6}
              duration={8}
              delay={0}
              className="absolute top-[10%] right-[5%] opacity-10"
            >
              <div className="grid grid-cols-3 gap-2">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-[#5D3C83]" />
                ))}
              </div>
            </FloatingElement>

            <FloatingElement
              amplitude={8}
              duration={7}
              delay={1}
              className="absolute bottom-[15%] left-[8%] opacity-10"
            >
              <div className="grid grid-cols-3 gap-2">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-[#C29D44]" />
                ))}
              </div>
            </FloatingElement>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {renderDecorations()}
    </div>
  );
}
