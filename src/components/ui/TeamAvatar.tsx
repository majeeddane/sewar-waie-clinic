'use client';

import React, { useMemo } from 'react';
import Image from 'next/image';

interface TeamAvatarProps {
  src?: string | null;
  alt: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  // For generating unique abstract avatars
  seed?: string;
}

// Brand colors for Sewar Waie
const COLORS = {
  deepPurple: '#5D3C83',
  gold: '#C29D44',
  navyBlue: '#1F3D73',
  sageGreen: '#90A36D',
  cream: '#FAFAF8',
};

// Size configurations
const SIZES = {
  sm: { container: 'w-12 h-12', svg: 48 },
  md: { container: 'w-16 h-16', svg: 64 },
  lg: { container: 'w-24 h-24', svg: 96 },
  xl: { container: 'w-32 h-32', svg: 128 },
};

// Generate a deterministic color palette based on seed
function generatePalette(seed: string) {
  // Simple hash function to generate consistent colors from seed
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    const char = seed.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  
  // Use hash to pick from brand colors with variations
  const colors = [COLORS.deepPurple, COLORS.gold, COLORS.navyBlue, COLORS.sageGreen];
  const primaryColor = colors[Math.abs(hash) % colors.length];
  const secondaryColor = colors[(Math.abs(hash) + 1) % colors.length];
  const accentColor = colors[(Math.abs(hash) + 2) % colors.length];
  
  return { primaryColor, secondaryColor, accentColor };
}

// Abstract artistic avatar component
function AbstractAvatar({ 
  seed, 
  size 
}: { 
  seed: string; 
  size: number;
}) {
  const palette = useMemo(() => generatePalette(seed), [seed]);
  
  // Generate shape variations based on seed
  const shapes = useMemo(() => {
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
      const char = seed.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    
    return {
      headOffset: Math.abs(hash % 8) - 4,
      headScale: 0.9 + (Math.abs(hash % 10) / 50),
      shoulderWidth: 28 + Math.abs((hash >> 2) % 8),
      curveIntensity: Math.abs((hash >> 3) % 20),
      decorationStyle: Math.abs(hash % 3), // Different decorative elements
    };
  }, [seed]);

  const center = size / 2;
  const radius = size / 2 - 4;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-sm"
    >
      {/* Background circle */}
      <circle
        cx={center}
        cy={center}
        r={radius}
        fill={COLORS.cream}
      />
      
      {/* Outer decorative ring */}
      <circle
        cx={center}
        cy={center}
        r={radius - 2}
        fill="none"
        stroke={palette.primaryColor}
        strokeWidth="1.5"
        opacity="0.3"
      />
      
      {/* Abstract shoulders/body shape */}
      <ellipse
        cx={center + shapes.headOffset * 0.3}
        cy={size * 0.78}
        rx={shapes.shoulderWidth}
        ry={size * 0.22}
        fill={palette.secondaryColor}
        opacity="0.6"
      />
      
      {/* Inner body highlight */}
      <ellipse
        cx={center + shapes.headOffset * 0.3}
        cy={size * 0.76}
        rx={shapes.shoulderWidth * 0.7}
        ry={size * 0.14}
        fill={palette.accentColor}
        opacity="0.4"
      />

      {/* Abstract head shape */}
      <circle
        cx={center + shapes.headOffset}
        cy={size * 0.42}
        r={size * 0.22 * shapes.headScale}
        fill={palette.primaryColor}
        opacity="0.85"
      />
      
      {/* Head inner glow */}
      <circle
        cx={center + shapes.headOffset - size * 0.03}
        cy={size * 0.39}
        r={size * 0.12 * shapes.headScale}
        fill={COLORS.cream}
        opacity="0.3"
      />

      {/* Decorative elements based on style */}
      {shapes.decorationStyle === 0 && (
        <>
          {/* Crescent moon decoration */}
          <path
            d={`M ${center + size * 0.25} ${size * 0.22} 
                A ${size * 0.08} ${size * 0.09} 45 1 1 ${center + size * 0.35} ${size * 0.15}`}
            fill={COLORS.gold}
            opacity="0.6"
          />
          {/* Small star */}
          <circle cx={center + size * 0.18} cy={size * 0.18} r="1.5" fill={COLORS.gold} opacity="0.8" />
        </>
      )}
      
      {shapes.decorationStyle === 1 && (
        <>
          {/* Geometric diamond */}
          <rect
            x={center + size * 0.24}
            y={size * 0.14}
            width={size * 0.06}
            height={size * 0.06}
            transform={`rotate(45 ${center + size * 0.27} ${size * 0.17})`}
            fill={COLORS.sageGreen}
            opacity="0.6"
          />
          {/* Dots pattern */}
          <circle cx={center - size * 0.25} cy={size * 0.25} r="1.5" fill={COLORS.gold} opacity="0.7" />
          <circle cx={center - size * 0.2} cy={size * 0.18} r="1" fill={COLORS.sageGreen} opacity="0.6" />
        </>
      )}
      
      {shapes.decorationStyle === 2 && (
        <>
          {/* Leaf/natural element */}
          <path
            d={`M ${center + size * 0.26} ${size * 0.25} 
                Q ${center + size * 0.32} ${size * 0.18} ${center + size * 0.28} ${size * 0.12}
                Q ${center + size * 0.24} ${size * 0.18} ${center + size * 0.26} ${size * 0.25}`}
            fill={COLORS.sageGreen}
            opacity="0.6"
          />
          {/* Small circle accent */}
          <circle cx={center - size * 0.23} cy={size * 0.2} r="2" fill={COLORS.deepPurple} opacity="0.5" />
        </>
      )}

      {/* Subtle gradient overlay for depth */}
      <defs>
        <radialGradient id={`avatar-gradient-${seed}`} cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="white" stopOpacity="0.2" />
          <stop offset="100%" stopColor="black" stopOpacity="0.1" />
        </radialGradient>
      </defs>
      <circle
        cx={center}
        cy={center}
        r={radius - 2}
        fill={`url(#avatar-gradient-${seed})`}
      />
    </svg>
  );
}

export default function TeamAvatar({
  src,
  alt,
  size = 'md',
  className = '',
  seed = 'default',
}: TeamAvatarProps) {
  const sizeConfig = SIZES[size];

  // If image source is provided, render image avatar
  if (src) {
    return (
      <div 
        className={`relative rounded-full overflow-hidden ${sizeConfig.container} ${className}`}
        style={{ 
          boxShadow: `0 4px 12px rgba(93, 60, 131, 0.15), inset 0 0 0 2px rgba(93, 60, 131, 0.125)`
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes={`${size === 'xl' ? '128px' : size === 'lg' ? '96px' : size === 'md' ? '64px' : '48px'}`}
        />
      </div>
    );
  }

  // Render abstract artistic avatar
  return (
    <div 
      className={`${sizeConfig.container} rounded-full overflow-hidden transition-all duration-500 
                  hover:scale-105 hover:shadow-lg cursor-default ${className}`}
      style={{ 
        boxShadow: `0 4px 16px rgba(93, 60, 131, 0.2), 0 2px 8px rgba(194, 157, 68, 0.1)`
      }}
    >
      <AbstractAvatar seed={seed} size={sizeConfig.svg} />
    </div>
  );
}

// Export a grid component for team display
export function TeamAvatarGrid({ 
  children, 
  className = '' 
}: { 
  children: React.ReactNode; 
  className?: string;
}) {
  return (
    <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 ${className}`}>
      {children}
    </div>
  );
}

// Export team member card that uses the avatar
export function TeamMemberCard({
  name,
  role,
  avatarSrc,
  avatarSeed,
  bio,
  size = 'lg',
}: {
  name: string;
  role: string;
  avatarSrc?: string | null;
  avatarSeed?: string;
  bio?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}) {
  return (
    <div 
      className="group bg-white rounded-2xl p-6 text-center transition-all duration-500 
                 hover:shadow-xl hover:-translate-y-1 border border-[#5D3C83]/10"
      style={{ boxShadow: '0 4px 20px rgba(93, 60, 131, 0.08)' }}
    >
      <div className="flex justify-center mb-4">
        <TeamAvatar
          src={avatarSrc}
          alt={name}
          size={size}
          seed={avatarSeed || name}
        />
      </div>
      <h3 className="font-bold text-lg text-[#1F3D73] mb-1 group-hover:text-[#5D3C83] transition-colors">
        {name}
      </h3>
      <p className="text-[#C29D44] text-sm font-medium mb-2">{role}</p>
      {bio && (
        <p className="text-gray-600 text-xs leading-relaxed line-clamp-3">{bio}</p>
      )}
    </div>
  );
}
