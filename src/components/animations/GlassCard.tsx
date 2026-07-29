'use client';

import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  blur?: 'sm' | 'md' | 'lg' | 'xl';
  border?: boolean;
  glow?: boolean;
}

export default function GlassCard({
  children,
  className = '',
  blur = 'md',
  border = true,
  glow = false,
}: GlassCardProps) {
  const blurClasses = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
    xl: 'backdrop-blur-xl',
  };

  return (
    <div
      className={`
        relative overflow-hidden rounded-2xl
        bg-white/60 dark:bg-[#252542]/60
        ${blurClasses[blur]}
        ${border ? 'border border-white/30 dark:border-white/10' : ''}
        shadow-sm hover:shadow-lg transition-shadow duration-500
        ${className}
      `}
    >
      {/* Subtle inner gradient for depth */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none"
        aria-hidden="true"
      />
      
      {/* Optional glow effect */}
      {glow && (
        <div 
          className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 
                    transition-opacity duration-700 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(93,60,131,0.1), rgba(194,157,68,0.1), rgba(144,163,109,0.1))',
          }}
          aria-hidden="true"
        />
      )}
      
      {children}
    </div>
  );
}
