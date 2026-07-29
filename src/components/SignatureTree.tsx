'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Brand colors for Sewar Waie
const COLORS = {
  deepPurple: '#5D3C83',
  gold: '#C29D44',
  navyBlue: '#1F3D73',
  sageGreen: '#90A36D',
  cream: '#FAFAF8',
};

interface SignatureTreeProps {
  className?: string;
  position?: 'left' | 'right' | 'center';
  opacity?: number;
}

export default function SignatureTree({
  className = '',
  position = 'right',
  opacity = 0.12,
}: SignatureTreeProps) {
  const treeRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Tree path data for progressive drawing
  const treePaths = {
    // Roots - Foundation of awareness
    roots: `
      M 200 380 
      Q 190 400 175 415
      Q 160 430 140 440
      M 200 380
      Q 210 405 225 420
      Q 245 435 265 445
      M 200 380
      Q 195 410 185 435
      Q 178 455 165 470
      M 200 380
      Q 208 412 218 438
      Q 228 460 245 475
    `,
    
    // Trunk - Growth and healing
    trunk: `
      M 195 375
      L 192 320
      Q 190 290 193 260
      L 198 220
      Q 200 200 202 180
      L 205 150
      Q 207 130 205 110
      M 198 220
      Q 185 210 170 215
      Q 155 222 145 235
      M 203 200
      Q 218 192 232 198
      Q 248 206 258 220
    `,
    
    // Main branches
    mainBranches: `
      M 205 150
      Q 180 135 155 125
      Q 130 115 105 120
      M 200 170
      Q 175 160 152 165
      Q 130 172 112 185
      M 203 130
      Q 225 115 248 108
      Q 272 102 295 108
      M 198 145
      Q 218 138 238 142
      Q 258 148 275 158
    `,
    
    // Small branches and twigs
    twigs: `
      M 105 120
      Q 90 110 78 115
      Q 65 122 55 118
      M 105 120
      Q 95 105 82 98
      Q 68 92 58 88
      M 295 108
      Q 310 100 325 104
      Q 340 110 352 106
      M 295 108
      Q 308 95 322 92
      Q 338 88 350 85
      M 112 185
      Q 98 182 85 188
      M 275 158
      Q 288 152 302 156
    `,
    
    // Leaves - Fruits of care
    leaves: [
      { cx: 55, cy: 118, r: 8 },
      { cx: 72, cy: 95, r: 6 },
      { cx: 58, cy: 88, r: 7 },
      { cx: 88, cy: 105, r: 5 },
      { cx: 42, cy: 128, r: 6 },
      
      { cx: 352, cy: 106, r: 8 },
      { cx: 338, cy: 85, r: 6 },
      { cx: 350, cy: 85, r: 7 },
      { cx: 322, cy: 92, r: 5 },
      { cx: 365, cy: 98, r: 6 },
      
      { cx: 85, cy: 188, r: 6 },
      { cx: 70, cy: 195, r: 5 },
      { cx: 302, cy: 156, r: 6 },
      { cx: 315, cy: 162, r: 5 },
      
      { cx: 130, cy: 125, r: 6 },
      { cx: 270, cy: 112, r: 6 },
      { cx: 150, cy: 140, r: 5 },
      { cx: 250, cy: 132, r: 5 },
    ],
    
    // Crescent moon decoration (Arabic element)
    crescent: `
      M 60 50
      A 18 18 0 1 1 75 32
      A 14 14 0 1 0 60 50
    `,
    
    // Star decoration (Arabic element)
    stars: [
      { cx: 340, cy: 55, size: 4 },
      { cx: 45, cy: 70, size: 3 },
      { cx: 320, cy: 70, size: 2.5 },
      { cx: 80, cy: 45, size: 2 },
    ],
  };

  useEffect(() => {
    const svg = treeRef.current;
    const container = containerRef.current;
    if (!svg || !container) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      // Show final state immediately
      gsap.set(svg.querySelectorAll('path, circle'), { opacity: 1 });
      return;
    }

    // Create timeline for progressive tree growth
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.5,
      },
    });

    // Phase 1: Draw roots first (Foundation)
    const rootPaths = svg.querySelectorAll('.tree-roots path');
    tl.fromTo(
      rootPaths,
      { drawSVG: '0%', opacity: 0 },
      { drawSVG: '100%', opacity: 1, duration: 1, ease: 'power1.inOut', stagger: 0.1 }
    );

    // Phase 2: Grow trunk (Growth & Healing)
    const trunkPaths = svg.querySelectorAll('.tree-trunk path');
    tl.fromTo(
      trunkPaths,
      { drawSVG: '0%', opacity: 0 },
      { drawSVG: '100%', opacity: 1, duration: 1.5, ease: 'power1.out', stagger: 0.15 },
      '-=0.3'
    );

    // Phase 3: Main branches spread
    const branchPaths = svg.querySelectorAll('.tree-branches path');
    tl.fromTo(
      branchPaths,
      { drawSVG: '0%', opacity: 0 },
      { drawSVG: '100%', opacity: 1, duration: 1.2, ease: 'power1.out', stagger: 0.1 },
      '-=0.5'
    );

    // Phase 4: Twigs appear
    const twigPaths = svg.querySelectorAll('.tree-twigs path');
    tl.fromTo(
      twigPaths,
      { drawSVG: '0%', opacity: 0 },
      { drawSVG: '100%', opacity: 0.7, duration: 0.8, ease: 'power1.out', stagger: 0.08 },
      '-=0.3'
    );

    // Phase 5: Leaves bloom (Fruits of Care)
    const leafCircles = svg.querySelectorAll('.tree-leaves circle');
    tl.fromTo(
      leafCircles,
      { scale: 0, opacity: 0, transformOrigin: 'center center' },
      { scale: 1, opacity: 0.9, duration: 0.5, ease: 'back.out(1.7)', stagger: 0.03 },
      '-=0.2'
    );

    // Phase 6: Decorative elements fade in
    const decorations = svg.querySelectorAll('.decorative');
    tl.fromTo(
      decorations,
      { opacity: 0, scale: 0.8, transformOrigin: 'center center' },
      { opacity: 0.6, scale: 1, duration: 0.8, ease: 'power2.out', stagger: 0.2 },
      '-=0.3'
    );

    // Parallax effect on the whole tree
    gsap.to(svg, {
      y: -50,
      scrollTrigger: {
        trigger: container,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 2,
      },
      ease: 'none',
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === container || trigger.trigger === svg) {
          trigger.kill();
        }
      });
    };
  }, []);

  // Position styles based on prop
  const positionStyles = {
    left: { left: '2%' },
    right: { right: '2%' },
    center: { left: '50%', transform: 'translateX(-50%)' },
  };

  return (
    <div
      ref={containerRef}
      className={`fixed pointer-events-none z-0 ${className}`}
      style={{
        ...positionStyles[position],
        top: '10%',
        height: '80vh',
        width: '400px',
        maxWidth: '40vw',
        opacity,
      }}
    >
      <svg
        ref={treeRef}
        viewBox="0 0 420 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        style={{ filter: 'drop-shadow(0 2px 4px rgba(93, 60, 131, 0.1))' }}
      >
        <defs>
          {/* Gradient for roots */}
          <linearGradient id="root-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={COLORS.deepPurple} stopOpacity="0.8" />
            <stop offset="100%" stopColor={COLORS.navyBlue} stopOpacity="0.6" />
          </linearGradient>
          
          {/* Gradient for trunk */}
          <linearGradient id="trunk-gradient" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor={COLORS.navyBlue} stopOpacity="0.9" />
            <stop offset="50%" stopColor={COLORS.deepPurple} stopOpacity="0.8" />
            <stop offset="100%" stopColor={COLORS.sageGreen} stopOpacity="0.6" />
          </linearGradient>
          
          {/* Gradient for branches */}
          <linearGradient id="branch-gradient" x1="50%" y1="100%" x2="50%" y2="0%">
            <stop offset="0%" stopColor={COLORS.deepPurple} stopOpacity="0.7" />
            <stop offset="100%" stopColor={COLORS.sageGreen} stopOpacity="0.5" />
          </linearGradient>
          
          {/* Leaf gradient */}
          <radialGradient id="leaf-gradient" cx="30%" cy="30%">
            <stop offset="0%" stopColor={COLORS.gold} stopOpacity="0.9" />
            <stop offset="100%" stopColor={COLORS.sageGreen} stopOpacity="0.7" />
          </radialGradient>
          
          {/* Glow filter */}
          <filter id="soft-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Roots Group */}
        <g className="tree-roots">
          <path
            d={treePaths.roots}
            stroke="url(#root-gradient)"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            filter="url(#soft-glow)"
          />
        </g>

        {/* Trunk Group */}
        <g className="tree-trunk">
          <path
            d={treePaths.trunk}
            stroke="url(#trunk-gradient)"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            filter="url(#soft-glow)"
          />
        </g>

        {/* Main Branches */}
        <g className="tree-branches">
          <path
            d={treePaths.mainBranches}
            stroke="url(#branch-gradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
            filter="url(#soft-glow)"
          />
        </g>

        {/* Twigs */}
        <g className="tree-twigs">
          <path
            d={treePaths.twigs}
            stroke={COLORS.sageGreen}
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.6"
          />
        </g>

        {/* Leaves */}
        <g className="tree-leaves">
          {treePaths.leaves.map((leaf, index) => (
            <circle
              key={`leaf-${index}`}
              cx={leaf.cx}
              cy={leaf.cy}
              r={leaf.r}
              fill="url(#leaf-gradient)"
              filter="url(#soft-glow)"
              style={{ transformOrigin: `${leaf.cx}px ${leaf.cy}px` }}
            />
          ))}
        </g>

        {/* Arabic Decorative Elements */}
        <g className="decorative">
          {/* Crescent Moon */}
          <path
            d={treePaths.crescent}
            fill={COLORS.gold}
            opacity="0.5"
            filter="url(#soft-glow)"
          />
          
          {/* Stars */}
          {treePaths.stars.map((star, index) => (
            <g key={`star-${index}`}>
              <circle
                cx={star.cx}
                cy={star.cy}
                r={star.size}
                fill={COLORS.gold}
                opacity="0.6"
              />
              {/* Star points using small lines radiating from center */}
              {[0, 45, 90, 135].map((angle) => (
                <line
                  key={`star-line-${index}-${angle}`}
                  x1={star.cx}
                  y1={star.cy}
                  x2={star.cx + Math.cos((angle * Math.PI) / 180) * star.size * 1.5}
                  y2={star.cy + Math.sin((angle * Math.PI) / 180) * star.size * 1.5}
                  stroke={COLORS.gold}
                  strokeWidth="0.8"
                  opacity="0.5"
                />
              ))}
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}

// Export a smaller version for section backgrounds
export function MiniTree({ 
  className = '', 
  color = COLORS.deepPurple 
}: { 
  className?: string; 
  color?: string;
}) {
  return (
    <div className={`absolute pointer-events-none ${className}`} style={{ opacity: 0.08 }}>
      <svg
        width="200"
        height="250"
        viewBox="0 0 200 250"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Simplified mini tree */}
        <path
          d="M100 230 Q95 210 92 185 L95 150 Q97 130 100 110 L103 80 Q105 65 103 50"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M103 80 Q85 70 70 75 Q55 82 48 90"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M100 110 Q118 100 133 105 Q150 112 158 122"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        {/* Mini leaves */}
        <circle cx="48" cy="90" r="5" fill={color} opacity="0.6" />
        <circle cx="62" cy="76" r="4" fill={color} opacity="0.5" />
        <circle cx="38" cy="96" r="3" fill={color} opacity="0.4" />
        <circle cx="158" cy="122" r="5" fill={color} opacity="0.6" />
        <circle cx="145" cy="108" r="4" fill={color} opacity="0.5" />
        <circle cx="168" cy="126" r="3" fill={color} opacity="0.4" />
        
        {/* Mini decorative crescent */}
        <path
          d="M30 35 A 10 10 0 1 1 40 22 A 8 8 0 1 0 30 35"
          fill={COLORS.gold}
          opacity="0.4"
        />
      </svg>
    </div>
  );
}

export function FloatingLeaves({ count = 5 }: { count?: number }) {
  const leaves = Array.from({ length: count }, (_, i) => ({
    id: i,
    delay: i * 0.5,
    duration: 8 + i * 2,
    startX: 10 + (i * 20),
    size: 8 + (i % 3) * 4,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="absolute animate-float"
          style={{
            left: `${leaf.startX}%`,
            top: '-5%',
            animationDelay: `${leaf.delay}s`,
            animationDuration: `${leaf.duration}s`,
          }}
        >
          <svg
            width={leaf.size}
            height={leaf.size}
            viewBox="0 0 16 16"
            fill="none"
          >
            <ellipse
              cx="8"
              cy="8"
              rx="6"
              ry="8"
              fill={COLORS.sageGreen}
              opacity="0.15"
              transform="rotate(-30 8 8)"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}
