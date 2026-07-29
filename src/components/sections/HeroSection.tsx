'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { ArrowLeft, ArrowRight, Sparkles, Heart, Users, Shield } from 'lucide-react';

/**
 * HeroTreeIllustration - Premium abstract tree illustration
 * Represents growth, healing, and mental wellness
 */
function HeroTreeIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Main SVG Tree - Elegant minimalist design */}
      <svg 
        viewBox="0 0 400 500" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-h-[480px] tree-float"
        style={{ filter: 'drop-shadow(0 20px 60px rgba(93, 60, 131, 0.15))' }}
      >
        {/* Definitions */}
        <defs>
          {/* Trunk gradient */}
          <linearGradient id="trunk-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5D3C83" />
            <stop offset="100%" stopColor="#3D2565" />
          </linearGradient>
          
          {/* Branch gradient */}
          <linearGradient id="branch-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7A52A3" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#5D3C83" stopOpacity="0.6" />
          </linearGradient>
          
          {/* Leaf gradient - Gold */}
          <radialGradient id="leaf-gold" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#D4B062" />
            <stop offset="100%" stopColor="#C29D44" />
          </radialGradient>
          
          {/* Leaf gradient - Purple */}
          <radialGradient id="leaf-purple" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#9B7EC4" />
            <stop offset="100%" stopColor="#7A52A3" />
          </radialGradient>
          
          {/* Leaf gradient - Sage */}
          <radialGradient id="leaf-sage" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#A8BA85" />
            <stop offset="100%" stopColor="#90A36D" />
          </radialGradient>
          
          {/* Glow filter */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          {/* Soft shadow */}
          <filter id="soft-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#5D3C83" floodOpacity="0.15"/>
          </filter>
        </defs>
        
        {/* Background glow circle */}
        <circle cx="200" cy="280" r="160" fill="url(#leaf-purple)" opacity="0.06" />
        <circle cx="200" cy="280" r="120" fill="url(#leaf-gold)" opacity="0.04" />
        
        {/* Root system - grounding element */}
        <g opacity="0.6">
          <path 
            d="M200 450 Q180 470 160 485" 
            stroke="url(#trunk-gradient)" 
            strokeWidth="2.5" 
            strokeLinecap="round"
            fill="none"
          />
          <path 
            d="M200 450 Q220 468 240 480" 
            stroke="url(#trunk-gradient)" 
            strokeWidth="2" 
            strokeLinecap="round"
            fill="none"
          />
          <path 
            d="M200 455 Q195 475 185 490" 
            stroke="url(#trunk-gradient)" 
            strokeWidth="1.5" 
            strokeLinecap="round"
            fill="none"
            opacity="0.6"
          />
          <path 
            d="M200 455 Q208 472 218 485" 
            stroke="url(#trunk-gradient)" 
            strokeWidth="1.5" 
            strokeLinecap="round"
            fill="none"
            opacity="0.6"
          />
        </g>
        
        {/* Main trunk - elegant curve */}
        <path 
          d="M200 450 Q195 380 198 320 Q200 260 200 200" 
          stroke="url(#trunk-gradient)" 
          strokeWidth="4" 
          strokeLinecap="round"
          fill="none"
          filter="url(#soft-shadow)"
        />
        
        {/* Trunk detail lines for depth */}
        <path 
          d="M197 400 Q192 370 196 340" 
          stroke="#7A52A3" 
          strokeWidth="1" 
          strokeLinecap="round"
          fill="none"
          opacity="0.4"
        />
        <path 
          d="M203 380 Q207 350 202 320" 
          stroke="#7A52A3" 
          strokeWidth="1" 
          strokeLinecap="round"
          fill="none"
          opacity="0.3"
        />
        
        {/* Main branches */}
        {/* Left primary branch */}
        <path 
          d="M198 250 Q170 230 140 210 Q115 190 90 175" 
          stroke="url(#branch-gradient)" 
          strokeWidth="2.5" 
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Right primary branch */}
        <path 
          d="M202 240 Q232 218 262 195 Q288 175 315 160" 
          stroke="url(#branch-gradient)" 
          strokeWidth="2.5" 
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Left secondary branch (higher) */}
        <path 
          d="M198 200 Q175 178 155 155 Q138 135 120 118" 
          stroke="url(#branch-gradient)" 
          strokeWidth="2" 
          strokeLinecap="round"
          fill="none"
          opacity="0.85"
        />
        
        {/* Right secondary branch (higher) */}
        <path 
          d="M202 195 Q228 172 252 150 Q273 130 295 112" 
          stroke="url(#branch-gradient)" 
          strokeWidth="2" 
          strokeLinecap="round"
          fill="none"
          opacity="0.85"
        />
        
        {/* Top center branch */}
        <path 
          d="M200 165 Q200 140 195 115 Q188 88 175 70" 
          stroke="url(#branch-gradient)" 
          strokeWidth="1.8" 
          strokeLinecap="round"
          fill="none"
          opacity="0.75"
        />
        <path 
          d="M200 165 Q205 142 212 118 Q220 95 235 78" 
          stroke="url(#branch-gradient)" 
          strokeWidth="1.8" 
          strokeLinecap="round"
          fill="none"
          opacity="0.75"
        />
        
        {/* Small twig details */}
        <path d="M140 210 Q125 200 110 195" stroke="#7A52A3" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.5" />
        <path d="M90 175 Q78 168 68 165" stroke="#7A52A3" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.5" />
        <path d="M262 195 Q278 184 292 176" stroke="#7A52A3" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.5" />
        <path d="M315 160 Q330 152 343 148" stroke="#7A52A3" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.5" />
        <path d="M155 155 Q143 144 132 136" stroke="#7A52A3" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.4" />
        <path d="M252 150 Q264 139 276 130" stroke="#7A52A3" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.4" />
        
        {/* Leaves / Fruits - Clustered at branch ends */}
        {/* Gold leaves - main focal points */}
        <circle cx="85" cy="170" r="10" fill="url(#leaf-gold)" filter="url(#glow)" className="leaf-pulse-1" />
        <circle cx="320" cy="155" r="11" fill="url(#leaf-gold)" filter="url(#glow)" className="leaf-pulse-2" />
        <circle cx="115" cy="114" r="8" fill="url(#leaf-gold)" filter="url(#glow)" className="leaf-pulse-3" />
        <circle cx="300" cy="108" r="9" fill="url(#leaf-gold)" filter="url(#glow)" className="leaf-pulse-1" />
        
        {/* Purple leaves */}
        <circle cx="65" cy="162" r="7" fill="url(#leaf-purple)" opacity="0.9" className="leaf-pulse-2" />
        <circle cx="340" cy="145" r="8" fill="url(#leaf-purple)" opacity="0.9" className="leaf-pulse-3" />
        <circle cx="145" cy="148" r="6" fill="url(#leaf-purple)" opacity="0.85" className="leaf-pulse-1" />
        <circle cx="268" cy="145" r="6.5" fill="url(#leaf-purple)" opacity="0.85" className="leaf-pulse-2" />
        
        {/* Sage green leaves - representing healing/growth */}
        <circle cx="105" cy="190" r="6" fill="url(#leaf-sage)" opacity="0.85" className="leaf-pulse-3" />
        <circle cx="290" cy="172" r="6.5" fill="url(#leaf-sage)" opacity="0.85" className="leaf-pulse-1" />
        <circle cx="128" cy="133" r="5" fill="url(#leaf-sage)" opacity="0.8" className="leaf-pulse-2" />
        <circle cx="280" cy="125" r="5.5" fill="url(#leaf-sage)" opacity="0.8" className="leaf-pulse-3" />
        
        {/* Top leaves */}
        <circle cx="172" cy="66" r="7" fill="url(#leaf-gold)" filter="url(#glow)" className="leaf-pulse-2" opacity="0.95" />
        <circle cx="238" cy="74" r="7.5" fill="url(#leaf-purple)" filter="url(#glow)" className="leaf-pulse-1" opacity="0.9" />
        <circle cx="205" cy="55" r="5" fill="url(#leaf-sage)" className="leaf-pulse-3" opacity="0.85" />
        
        {/* Tiny floating particles around tree */}
        <circle cx="55" cy="145" r="3" fill="#C29D44" opacity="0.4" className="particle-float-1" />
        <circle cx="355" cy="130" r="3.5" fill="#C29D44" opacity="0.35" className="particle-float-2" />
        <circle cx="160" cy="85" r="2.5" fill="#90A36D" opacity="0.4" className="particle-float-3" />
        <circle cx="250" cy="62" r="2.5" fill="#7A52A3" opacity="0.35" className="particle-float-1" />
        <circle cx="72" cy="195" r="2" fill="#5D3C83" opacity="0.3" className="particle-float-2" />
        <circle cx="330" cy="185" r="2" fill="#5D3C83" opacity="0.25" className="particle-float-3" />
      </svg>
    </div>
  );
}

export default function HeroSection() {
  const { t, locale, direction } = useLanguage();
  const [isAnimated, setIsAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Trigger animation on mount with proper timing
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      requestAnimationFrame(() => setIsAnimated(true));
      return;
    }

    // Small delay for natural feel - defer state update
    const timer = setTimeout(() => {
      requestAnimationFrame(() => setIsAnimated(true));
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative overflow-hidden min-h-[100vh] flex items-center"
      style={{
        backgroundColor: '#FAFAF8',
        paddingTop: '96px', // Account for fixed header
      }}
    >
      {/* ════════════════════════════════════════════════════════
          PREMIUM BACKGROUND LAYER
          Subtle gradients, noise texture, ambient elements
         ════════════════════════════════════════════════════════ */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Primary purple gradient - top right area */}
        <div 
          className="absolute rounded-full"
          style={{
            width: '900px',
            height: '900px',
            background: 'radial-gradient(circle, rgba(93, 60, 131, 0.05) 0%, transparent 65%)',
            top: '-18%',
            right: direction === 'rtl' ? 'auto' : '-12%',
            left: direction === 'rtl' ? '-12%' : 'auto',
          }}
        />
        
        {/* Secondary gold gradient - bottom left area */}
        <div 
          className="absolute rounded-full"
          style={{
            width: '700px',
            height: '700px',
            background: 'radial-gradient(circle, rgba(194, 157, 68, 0.04) 0%, transparent 65%)',
            bottom: '-25%',
            left: direction === 'rtl' ? '-12%' : 'auto',
            right: direction === 'ltr' ? '-12%' : 'auto',
          }}
        />

        {/* Sage accent gradient - center left */}
        <div 
          className="absolute rounded-full"
          style={{
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(144, 163, 109, 0.03) 0%, transparent 65%)',
            top: '40%',
            left: direction === 'rtl' ? '5%' : 'auto',
            right: direction === 'ltr' ? '5%' : 'auto',
          }}
        />

        {/* Subtle grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(93, 60, 131, 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(93, 60, 131, 0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Noise texture for premium feel */}
        <div 
          className="absolute inset-0 opacity-[0.012]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* ════════════════════════════════════════════════════════
          MAIN CONTENT CONTAINER
          Premium asymmetric layout with generous spacing
         ════════════════════════════════════════════════════════ */}
      <div 
        className="relative z-10 w-full px-6 lg:px-12 xl:px-20 py-16 lg:py-24"
        style={{ maxWidth: '1440px', margin: '0 auto' }}
      >
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center`}>
          
          {/* ── TEXT CONTENT COLUMN (7/12 ≈ 58%) ── */}
          <div className={`${direction === 'rtl' ? 'lg:col-span-7 xl:col-span-7' : 'lg:col-span-7 xl:col-span-7'} order-2 lg:order-1`}>
            
            {/* ─── PREMIUM BADGE (Animation #1) ─── */}
            <div
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full mb-10 group"
              style={{
                backgroundColor: 'rgba(93, 60, 131, 0.06)',
                border: '1px solid rgba(93, 60, 131, 0.08)',
                opacity: isAnimated ? 1 : 0,
                transform: isAnimated ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 800ms cubic-bezier(0.16, 1, 0.3, 1), transform 800ms cubic-bezier(0.16, 1, 0.3, 1)',
                transitionDelay: '0ms',
              }}
            >
              <span 
                className="flex items-center justify-center w-2 h-2 rounded-full"
                style={{ 
                  backgroundColor: '#C29D44',
                  boxShadow: '0 0 12px rgba(194, 157, 68, 0.6)',
                  animation: isAnimated ? 'pulse-dot 2s ease-in-out infinite' : 'none',
                }} 
              />
              <span 
                className="text-sm font-medium tracking-wide"
                style={{ 
                  fontFamily: 'var(--font-body-arabic)',
                  color: '#5D3C83',
                  fontSize: '13px',
                  fontWeight: 600,
                  letterSpacing: '0.02em',
                }}
              >
                {locale === 'ar' ? 'مركز رعاية نفسية متكامل' : 'Integrated Mental Health Center'}
              </span>
              
              {/* Badge decorative arrow */}
              <ArrowLeft 
                className={`w-4 h-4 transition-transform duration-300 ${direction === 'rtl' ? '' : 'rotate-180'}`}
                style={{ color: '#C29D44', opacity: 0.6 }}
              />
            </div>

            {/* ─── H1 MAIN TITLE (Animation #2) ─── */}
            <h1 
              className="mb-6 leading-[1.15]"
              style={{ 
                fontFamily: 'var(--font-heading-ar)',
                fontSize: 'clamp(36px, 5.5vw, 64px)',
                fontWeight: 900,
                color: '#1a1a2e',
                letterSpacing: '-0.035em',
                lineHeight: 1.15,
                opacity: isAnimated ? 1 : 0,
                transform: isAnimated ? 'translateY(0)' : 'translateY(32px)',
                transition: 'opacity 900ms cubic-bezier(0.16, 1, 0.3, 1), transform 900ms cubic-bezier(0.16, 1, 0.3, 1)',
                transitionDelay: '120ms',
              }}
            >
              {t.hero.title}
            </h1>

            {/* ─── SUBTITLE LINE (Animation #3) ─── */}
            <h2 
              className="mb-7 leading-[1.25]"
              style={{ 
                fontFamily: 'var(--font-heading-ar)',
                fontSize: 'clamp(22px, 3vw, 32px)',
                fontWeight: 500,
                color: '#5D3C83',
                letterSpacing: '-0.025em',
                lineHeight: 1.25,
                opacity: isAnimated ? 1 : 0,
                transform: isAnimated ? 'translateY(0)' : 'translateY(28px)',
                transition: 'opacity 850ms cubic-bezier(0.16, 1, 0.3, 1), transform 850ms cubic-bezier(0.16, 1, 0.3, 1)',
                transitionDelay: '200ms',
              }}
            >
              {t.hero.subtitle}
            </h2>

            {/* ─── DESCRIPTION (Animation #4) ─── */}
            <p 
              className="mb-12 max-w-xl leading-relaxed"
              style={{ 
                fontFamily: 'var(--font-body-arabic)',
                fontSize: 'clamp(15px, 1.6vw, 17px)',
                color: '#5a5a6e',
                fontWeight: 400,
                lineHeight: 1.85,
                opacity: isAnimated ? 1 : 0,
                transform: isAnimated ? 'translateY(0)' : 'translateY(24px)',
                transition: 'opacity 800ms cubic-bezier(0.16, 1, 0.3, 1), transform 800ms cubic-bezier(0.16, 1, 0.3, 1)',
                transitionDelay: '320ms',
              }}
            >
              {t.hero.description}
            </p>

            {/* ─── CTA BUTTONS ROW (Animation #5) ─── */}
            <div 
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-16"
              style={{
                opacity: isAnimated ? 1 : 0,
                transform: isAnimated ? 'scale(1) translateY(0)' : 'scale(0.97) translateY(16px)',
                transition: 'opacity 800ms cubic-bezier(0.16, 1, 0.3, 1), transform 800ms cubic-bezier(0.16, 1, 0.3, 1)',
                transitionDelay: '420ms',
              }}
            >
              {/* Primary CTA Button - Premium Design */}
              <Link href="/#contact">
                <button
                  className="group relative inline-flex items-center gap-3 px-9 py-4.5 rounded-2xl text-white font-semibold overflow-hidden"
                  style={{
                    fontFamily: 'var(--font-body-arabic)',
                    fontSize: '15px',
                    fontWeight: 700,
                    backgroundColor: '#5D3C83',
                    boxShadow: '0 10px 40px rgba(93, 60, 131, 0.35), 0 4px 12px rgba(93, 60, 131, 0.2)',
                    transition: 'all 400ms cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#4a2d6b';
                    e.currentTarget.style.boxShadow = '0 14px 50px rgba(93, 60, 131, 0.45), 0 6px 16px rgba(93, 60, 131, 0.25)';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#5D3C83';
                    e.currentTarget.style.boxShadow = '0 10px 40px rgba(93, 60, 131, 0.35), 0 4px 12px rgba(93, 60, 131, 0.2)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {/* Shimmer overlay effect */}
                  <span 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'linear-gradient(120deg, transparent 25%, rgba(255,255,255,0.12) 50%, transparent 75%)',
                      transform: 'translateX(-100%)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.animation = 'shimmer 1.2s ease forwards';
                    }}
                  />
                  
                  <Sparkles className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:rotate-12" />
                  <span className="relative z-10">{t.hero.cta}</span>
                  {direction === 'rtl' ? (
                    <ArrowLeft className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:-translate-x-1.5" />
                  ) : (
                    <ArrowRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1.5" />
                  )}
                </button>
              </Link>

              {/* Secondary Outline Button */}
              <Link href="/#about">
                <button
                  className="group inline-flex items-center gap-3 px-8 py-4.5 rounded-2xl font-semibold"
                  style={{
                    fontFamily: 'var(--font-body-arabic)',
                    fontSize: '15px',
                    fontWeight: 600,
                    color: '#5D3C83',
                    backgroundColor: 'transparent',
                    border: '1.5px solid rgba(93, 60, 131, 0.22)',
                    backdropFilter: 'blur(4px)',
                    transition: 'all 400ms cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(93, 60, 131, 0.5)';
                    e.currentTarget.style.backgroundColor = 'rgba(93, 60, 131, 0.05)';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(93, 60, 131, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(93, 60, 131, 0.22)';
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <span>{t.hero.learnMore}</span>
                  {direction === 'rtl' ? (
                    <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1.5" />
                  ) : (
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  )}
                </button>
              </Link>
            </div>

            {/* ─── TRUST INDICATORS ROW (Animation #6) ─── */}
            <div 
              className="flex flex-wrap items-center gap-8 lg:gap-10"
              style={{
                opacity: isAnimated ? 1 : 0,
                transform: isAnimated ? 'translateY(0)' : 'translateY(24px)',
                transition: 'opacity 800ms cubic-bezier(0.16, 1, 0.3, 1), transform 800ms cubic-bezier(0.16, 1, 0.3, 1)',
                transitionDelay: '550ms',
              }}
            >
              {/* Trust Indicator 1 */}
              <div className="flex items-center gap-3">
                <div 
                  className="flex items-center justify-center w-11 h-11 rounded-xl"
                  style={{ backgroundColor: 'rgba(93, 60, 131, 0.06)' }}
                >
                  <Users className="w-5 h-5" style={{ color: '#5D3C83' }} />
                </div>
                <div>
                  <div 
                    className="font-bold leading-none"
                    style={{ 
                      fontFamily: 'var(--font-heading-ar)',
                      fontSize: 'clamp(22px, 2.2vw, 28px)',
                      color: '#1a1a2e',
                      letterSpacing: '-0.025em',
                    }}
                  >
                    +500
                  </div>
                  <div 
                    className="text-xs font-medium mt-0.5"
                    style={{ 
                      fontFamily: 'var(--font-body-arabic)',
                      color: '#8888a0',
                      fontSize: '12px',
                    }}
                  >
                    {locale === 'ar' ? 'مستفيد' : 'Client'}
                  </div>
                </div>
              </div>

              {/* Vertical Separator */}
              <div 
                className="hidden sm:block w-px h-12 rounded-full"
                style={{ 
                  background: 'linear-gradient(to bottom, transparent, rgba(93, 60, 131, 0.2), transparent)',
                }} 
              />

              {/* Trust Indicator 2 */}
              <div className="flex items-center gap-3">
                <div 
                  className="flex items-center justify-center w-11 h-11 rounded-xl"
                  style={{ backgroundColor: 'rgba(144, 163, 109, 0.1)' }}
                >
                  <Shield className="w-5 h-5" style={{ color: '#90A36D' }} />
                </div>
                <div>
                  <div 
                    className="font-bold leading-none"
                    style={{ 
                      fontFamily: 'var(--font-heading-ar)',
                      fontSize: 'clamp(22px, 2.2vw, 28px)',
                      color: '#1a1a2e',
                      letterSpacing: '-0.025em',
                    }}
                  >
                    +15
                  </div>
                  <div 
                    className="text-xs font-medium mt-0.5"
                    style={{ 
                      fontFamily: 'var(--font-body-arabic)',
                      color: '#8888a0',
                      fontSize: '12px',
                    }}
                  >
                    {locale === 'ar' ? 'أخصائي' : 'Expert'}
                  </div>
                </div>
              </div>

              {/* Vertical Separator */}
              <div 
                className="hidden md:block w-px h-12 rounded-full"
                style={{ 
                  background: 'linear-gradient(to bottom, transparent, rgba(93, 60, 131, 0.2), transparent)',
                }} 
              />

              {/* Trust Indicator 3 */}
              <div className="flex items-center gap-3">
                <div 
                  className="flex items-center justify-center w-11 h-11 rounded-xl"
                  style={{ backgroundColor: 'rgba(194, 157, 68, 0.1)' }}
                >
                  <Heart className="w-5 h-5" style={{ color: '#C29D44' }} />
                </div>
                <div>
                  <div 
                    className="font-bold leading-none"
                    style={{ 
                      fontFamily: 'var(--font-heading-ar)',
                      fontSize: 'clamp(22px, 2.2vw, 28px)',
                      color: '#1a1a2e',
                      letterSpacing: '-0.025em',
                    }}
                  >
                    98%
                  </div>
                  <div 
                    className="text-xs font-medium mt-0.5"
                    style={{ 
                      fontFamily: 'var(--font-body-arabic)',
                      color: '#8888a0',
                      fontSize: '12px',
                    }}
                  >
                    {locale === 'ar' ? 'رضا' : 'Satisfaction'}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── VISUAL COLUMN (5/12 ≈ 42%) ── */}
          <div className={`${direction === 'rtl' ? 'lg:col-span-5 xl:col-span-5' : 'lg:col-span-5 xl:col-span-5'} order-1 lg:order-2 flex items-center justify-center relative`}>
            <div 
              className="relative w-full max-w-[420px] mx-auto lg:max-w-[480px] xl:max-w-[520px]"
              style={{
                opacity: isAnimated ? 1 : 0,
                transform: isAnimated ? 'scale(1) translateX(0)' : `scale(0.92) translateX(${direction === 'rtl' ? '50px' : '-50px'})`,
                transition: 'opacity 1000ms cubic-bezier(0.16, 1, 0.3, 1), transform 1000ms cubic-bezier(0.16, 1, 0.3, 1)',
                transitionDelay: '280ms',
              }}
            >
              {/* Main Tree Illustration */}
              <HeroTreeIllustration />
              
              {/* Floating Feature Card 1 - Top Right */}
              <div 
                className="absolute hidden lg:flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/90 backdrop-blur-md shadow-lg shadow-purple-900/8 border border-purple-100/50"
                style={{
                  top: '8%',
                  [direction === 'rtl' ? 'left' : 'right']: '-8%',
                  opacity: isAnimated ? 1 : 0,
                  transform: isAnimated ? 'translateY(0)' : 'translateY(16px)',
                  transition: 'all 800ms cubic-bezier(0.16, 1, 0.3, 1)',
                  transitionDelay: '700ms',
                }}
              >
                <div 
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgba(93, 60, 131, 0.1)' }}
                >
                  <Shield className="w-[18px] h-[18px]" style={{ color: '#5D3C83' }} />
                </div>
                <div>
                  <p className="text-xs font-semibold" style={{ fontFamily: 'var(--font-body-arabic)', color: '#1a1a2e' }}>
                    {locale === 'ar' ? 'خصوصية تامة' : 'Confidential'}
                  </p>
                  <p className="text-[10px]" style={{ fontFamily: 'var(--font-body-arabic)', color: '#8888a0' }}>
                    {locale === 'ar' ? 'سرية تامة' : '100% Secure'}
                  </p>
                </div>
              </div>

              {/* Floating Feature Card 2 - Bottom Left */}
              <div 
                className="absolute hidden lg:flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/90 backdrop-blur-md shadow-lg shadow-purple-900/8 border border-purple-100/50"
                style={{
                  bottom: '15%',
                  [direction === 'rtl' ? 'right' : 'left']: '-10%',
                  opacity: isAnimated ? 1 : 0,
                  transform: isAnimated ? 'translateY(0)' : 'translateY(16px)',
                  transition: 'all 800ms cubic-bezier(0.16, 1, 0.3, 1)',
                  transitionDelay: '850ms',
                }}
              >
                <div 
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgba(144, 163, 109, 0.12)' }}
                >
                  <Heart className="w-[18px] h-[18px]" style={{ color: '#90A36D' }} />
                </div>
                <div>
                  <p className="text-xs font-semibold" style={{ fontFamily: 'var(--font-body-arabic)', color: '#1a1a2e' }}>
                    {locale === 'ar' ? 'رعاية متخصصة' : 'Expert Care'}
                  </p>
                  <p className="text-[10px]" style={{ fontFamily: 'var(--font-body-arabic)', color: '#8888a0' }}>
                    {locale === 'ar' ? 'فريق متميز' : 'Specialized Team'}
                  </p>
                </div>
              </div>

              {/* Decorative crescent moon - Arabic touch */}
              <div 
                className="absolute pointer-events-none hidden lg:block"
                style={{
                  top: '-5%',
                  [direction === 'rtl' ? 'left' : 'right']: '-3%',
                  width: '70px',
                  height: '70px',
                  opacity: 0.2,
                  animation: isAnimated ? 'float-crescent 7s ease-in-out infinite' : 'none',
                }}
              >
                <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="crescent-gold-new" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#C29D44" stopOpacity="1" />
                      <stop offset="100%" stopColor="#D4B062" stopOpacity="0.7" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M42 8C26.536 8 14 20.536 14 36c0 5.04 1.35 9.76 3.71 13.82A27.92 27.92 0 0042 64c15.464 0 28-12.536 28-28 0-5.04-1.35-9.76-3.71-13.82A27.92 27.92 0 0042 8z"
                    stroke="url(#crescent-gold-new)"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path
                    d="M48 18a20 20 0 0120 20c0 5-1.84 9.57-4.87 13.07A19.94 19.94 0 0148 62a20 20 0 01-15.13-33.55A19.94 19.94 0 0148 18z"
                    fill="#5D3C83"
                    opacity="0.08"
                  />
                  <circle cx="62" cy="16" r="2.5" fill="#C29D44" opacity="0.7" />
                  <circle cx="18" cy="54" r="1.8" fill="#90A36D" opacity="0.6" />
                </svg>
              </div>

              {/* Ambient glow behind illustration */}
              <div 
                className="absolute inset-0 pointer-events-none -z-10"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(93, 60, 131, 0.06) 0%, transparent 60%)',
                  filter: 'blur(50px)',
                  transform: 'scale(1.3)',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════
          BOTTOM WAVE SEPARATOR
          Smooth elegant transition to next section
         ════════════════════════════════════════════════════════ */}
      <div 
        className="absolute bottom-0 left-0 right-0 leading-none pointer-events-none" 
        aria-hidden="true"
        style={{ zIndex: 5 }}
      >
        <svg 
          viewBox="0 0 1440 80" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-auto"
          preserveAspectRatio="none"
          style={{ display: 'block' }}
        >
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
              <stop offset="30%" stopColor="#FFFFFF" stopOpacity="1" />
              <stop offset="70%" stopColor="#FFFFFF" stopOpacity="1" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0 32C80 56 200 72 360 64C520 56 680 24 840 20C1000 16 1160 40 1280 48L1440 56V80H0V32Z"
            fill="#FFFFFF"
            opacity="0.98"
          />
          <path
            d="M0 48C96 64 288 72 480 64C672 56 864 32 1056 24C1248 16 1344 28 1440 36V80H0V48Z"
            fill="url(#wave-gradient)"
          />
        </svg>
      </div>

      {/* ════════════════════════════════════════════════════════
          CUSTOM ANIMATION KEYFRAMES
         ════════════════════════════════════════════════════════ */}
      <style jsx global>{`
        @keyframes float-tree {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-14px) rotate(0.5deg);
          }
        }
        
        @keyframes float-crescent {
          0%, 100% {
            transform: translateY(0px) rotate(-15deg);
          }
          33% {
            transform: translateY(-10px) rotate(-10deg);
          }
          66% {
            transform: translateY(-5px) rotate(-20deg);
          }
        }
        
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes pulse-dot {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.2);
          }
        }
        
        @keyframes leaf-pulse-1 {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.08);
            opacity: 0.9;
          }
        }

        @keyframes leaf-pulse-2 {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.85;
          }
        }

        @keyframes leaf-pulse-3 {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.95;
          }
        }

        @keyframes particle-float-1 {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-12px) translateX(6px);
            opacity: 0.6;
          }
        }

        @keyframes particle-float-2 {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.35;
          }
          50% {
            transform: translateY(-10px) translateX(-5px);
            opacity: 0.55;
          }
        }

        @keyframes particle-float-3 {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-8px) translateX(4px);
            opacity: 0.5;
          }
        }
        
        .tree-float {
          animation: float-tree 5s ease-in-out infinite;
        }
        
        .leaf-pulse-1 {
          animation: leaf-pulse-1 4s ease-in-out infinite;
        }

        .leaf-pulse-2 {
          animation: leaf-pulse-2 4.5s ease-in-out infinite;
        }

        .leaf-pulse-3 {
          animation: leaf-pulse-3 5s ease-in-out infinite;
        }

        .particle-float-1 {
          animation: particle-float-1 6s ease-in-out infinite;
        }

        .particle-float-2 {
          animation: particle-float-2 7s ease-in-out infinite;
        }

        .particle-float-3 {
          animation: particle-float-3 5.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
