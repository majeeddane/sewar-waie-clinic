'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { ArrowLeft, ArrowRight } from 'lucide-react';

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
      className="relative overflow-hidden"
      style={{
        minHeight: 'calc(100vh - 96px)',
        backgroundColor: '#FAFAF8',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* ───────────────────────────────────────────────
          SUBTLE BACKGROUND GRADIENT (5% opacity max)
          Very gentle purple radial gradient for depth
         ─────────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Primary gradient - top area */}
        <div 
          className="absolute rounded-full"
          style={{
            width: '800px',
            height: '800px',
            background: 'radial-gradient(circle, rgba(93, 60, 131, 0.04) 0%, transparent 70%)',
            top: '-15%',
            right: direction === 'rtl' ? 'auto' : '-10%',
            left: direction === 'rtl' ? '-10%' : 'auto',
          }}
        />
        
        {/* Secondary gradient - bottom area */}
        <div 
          className="absolute rounded-full"
          style={{
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(194, 157, 68, 0.03) 0%, transparent 70%)',
            bottom: '-20%',
            left: direction === 'rtl' ? '-10%' : 'auto',
            right: direction === 'ltr' ? '-10%' : 'auto',
          }}
        />

        {/* Subtle noise texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* ───────────────────────────────────────────────
          MAIN CONTENT CONTAINER
          Asymmetric split: Text (55-60%) | Illustration (40-45%)
         ─────────────────────────────────────────────── */}
      <div 
        className="relative z-10 w-full px-6 lg:px-10 xl:px-16 py-16 lg:py-24"
        style={{ maxWidth: '1440px', margin: '0 auto' }}
      >
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${direction === 'rtl' ? '' : ''}`}>
          
          {/* ── TEXT CONTENT COLUMN (7/12 ≈ 58%) ── */}
          <div className={`${direction === 'rtl' ? 'lg:col-span-7 xl:col-span-7' : 'lg:col-span-7 xl:col-span-7'} order-2 lg:order-1`}>
            
            {/* ─── BADGE / PILL (Animation #1: delay 0ms) ─── */}
            <div
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full mb-8"
              style={{
                backgroundColor: 'rgba(93, 60, 131, 0.06)',
                opacity: isAnimated ? 1 : 0,
                transform: isAnimated ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 700ms cubic-bezier(0.25, 1, 0.5, 1), transform 700ms cubic-bezier(0.25, 1, 0.5, 1)',
                transitionDelay: '0ms',
              }}
            >
              <span 
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ 
                  backgroundColor: '#C29D44',
                  boxShadow: '0 0 8px rgba(194, 157, 68, 0.5)',
                }} 
              />
              <span 
                className="text-sm font-medium tracking-wide"
                style={{ 
                  fontFamily: 'var(--font-body-arabic)',
                  color: '#5D3C83',
                  fontSize: '13px',
                  fontWeight: 500,
                }}
              >
                {locale === 'ar' ? 'مركز رعاية نفسية متكامل' : 'Integrated Mental Health Care Center'}
              </span>
            </div>

            {/* ─── H1 TITLE (Animation #2: delay 150ms) ─── */}
            <h1 
              className="mb-5 leading-[1.12]"
              style={{ 
                fontFamily: 'var(--font-heading-ar)',
                fontSize: 'clamp(32px, 5vw, 56px)',
                fontWeight: 800,
                color: '#5D3C83',
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
                opacity: isAnimated ? 1 : 0,
                transform: isAnimated ? 'translateY(0)' : 'translateY(28px)',
                transition: 'opacity 750ms cubic-bezier(0.25, 1, 0.5, 1), transform 750ms cubic-bezier(0.25, 1, 0.5, 1)',
                transitionDelay: '150ms',
              }}
            >
              {t.hero.title}
            </h1>

            {/* ─── H1 SUBTITLE ─── */}
            <h2 
              className="mb-6 leading-[1.2]"
              style={{ 
                fontFamily: 'var(--font-heading-ar)',
                fontSize: 'clamp(24px, 3.5vw, 38px)',
                fontWeight: 500,
                color: '#1a1a2e',
                letterSpacing: '-0.02em',
                opacity: isAnimated ? 1 : 0,
                transform: isAnimated ? 'translateY(0)' : 'translateY(28px)',
                transition: 'opacity 750ms cubic-bezier(0.25, 1, 0.5, 1), transform 750ms cubic-bezier(0.25, 1, 0.5, 1)',
                transitionDelay: '220ms',
              }}
            >
              {t.hero.subtitle}
            </h2>

            {/* ─── DESCRIPTION PARAGRAPH (Animation #3: delay 400ms) ─── */}
            <p 
              className="mb-10 max-w-xl leading-relaxed"
              style={{ 
                fontFamily: 'var(--font-body-arabic)',
                fontSize: 'clamp(15px, 1.8vw, 17px)',
                color: '#4a4a5a',
                fontWeight: 400,
                lineHeight: 1.75,
                opacity: isAnimated ? 1 : 0,
                transform: isAnimated ? 'translateY(0)' : 'translateY(24px)',
                transition: 'opacity 700ms cubic-bezier(0.25, 1, 0.5, 1), transform 700ms cubic-bezier(0.25, 1, 0.5, 1)',
                transitionDelay: '400ms',
              }}
            >
              {t.hero.description}
            </p>

            {/* ─── CTA BUTTONS (Animation #4: delay 550ms) ─── */}
            <div 
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-14"
              style={{
                opacity: isAnimated ? 1 : 0,
                transform: isAnimated ? 'scale(1) translateY(0)' : 'scale(0.96) translateY(12px)',
                transition: 'opacity 650ms cubic-bezier(0.25, 1, 0.5, 1), transform 650ms cubic-bezier(0.25, 1, 0.5, 1)',
                transitionDelay: '550ms',
              }}
            >
              {/* Primary Button */}
              <Link href="/#contact">
                <button
                  className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-semibold overflow-hidden transition-all duration-300"
                  style={{
                    fontFamily: 'var(--font-body-arabic)',
                    fontSize: '15px',
                    fontWeight: 600,
                    backgroundColor: '#5D3C83',
                    boxShadow: '0 8px 32px rgba(93, 60, 131, 0.28)',
                    transition: 'all 350ms cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#512D6F';
                    e.currentTarget.style.boxShadow = '0 12px 40px rgba(93, 60, 131, 0.38)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#5D3C83';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(93, 60, 131, 0.28)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <span className="relative z-10">{t.hero.cta}</span>
                  {direction === 'rtl' ? (
                    <ArrowLeft className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:-translate-x-1" />
                  ) : (
                    <ArrowRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                  )}
                  
                  {/* Shimmer effect on hover */}
                  <span 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.15) 50%, transparent 70%)',
                      transform: 'translateX(-100%)',
                      animation: 'shimmer 1.2s ease forwards',
                    }}
                  />
                </button>
              </Link>

              {/* Secondary Outline Button */}
              <Link href="/#about">
                <button
                  className="group inline-flex items-center gap-3 px-7 py-4 rounded-2xl font-semibold transition-all duration-300"
                  style={{
                    fontFamily: 'var(--font-body-arabic)',
                    fontSize: '15px',
                    fontWeight: 600,
                    color: '#5D3C83',
                    backgroundColor: 'transparent',
                    border: '1.5px solid rgba(93, 60, 131, 0.2)',
                    boxShadow: 'none',
                    transition: 'all 350ms cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(93, 60, 131, 0.45)';
                    e.currentTarget.style.backgroundColor = 'rgba(93, 60, 131, 0.04)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(93, 60, 131, 0.2)';
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <span>{t.hero.learnMore}</span>
                  {direction === 'rtl' ? (
                    <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
                  ) : (
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  )}
                </button>
              </Link>
            </div>

            {/* ─── STATS ROW (Animation #5: delay 700ms) ─── */}
            <div 
              className="flex flex-wrap items-center"
              style={{
                opacity: isAnimated ? 1 : 0,
                transform: isAnimated ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 700ms cubic-bezier(0.25, 1, 0.5, 1), transform 700ms cubic-bezier(0.25, 1, 0.5, 1)',
                transitionDelay: '700ms',
              }}
            >
              {/* Stat 1: Clients */}
              <div className="flex items-center gap-3">
                <span 
                  className="font-bold"
                  style={{ 
                    fontFamily: 'var(--font-heading-ar)',
                    fontSize: 'clamp(22px, 2.5vw, 30px)',
                    color: '#5D3C83',
                    letterSpacing: '-0.02em',
                  }}
                >
                  500+
                </span>
                <span 
                  className="text-sm font-medium"
                  style={{ 
                    fontFamily: 'var(--font-body-arabic)',
                    color: '#6b7280',
                    fontSize: '14px',
                  }}
                >
                  {locale === 'ar' ? 'مستفيد' : 'Clients'}
                </span>
              </div>

              {/* Separator */}
              <div 
                className="hidden sm:block mx-5 md:mx-7"
                style={{ 
                  width: '1px', 
                  height: '32px',
                  background: 'linear-gradient(to bottom, transparent, rgba(93, 60, 131, 0.2), transparent)',
                }} 
              />

              {/* Stat 2: Experts */}
              <div className="flex items-center gap-3">
                <span 
                  className="font-bold"
                  style={{ 
                    fontFamily: 'var(--font-heading-ar)',
                    fontSize: 'clamp(22px, 2.5vw, 30px)',
                    color: '#5D3C83',
                    letterSpacing: '-0.02em',
                  }}
                >
                  15+
                </span>
                <span 
                  className="text-sm font-medium"
                  style={{ 
                    fontFamily: 'var(--font-body-arabic)',
                    color: '#6b7280',
                    fontSize: '14px',
                  }}
                >
                  {locale === 'ar' ? 'أخصائي' : 'Experts'}
                </span>
              </div>

              {/* Separator */}
              <div 
                className="hidden sm:block mx-5 md:mx-7"
                style={{ 
                  width: '1px', 
                  height: '32px',
                  background: 'linear-gradient(to bottom, transparent, rgba(93, 60, 131, 0.2), transparent)',
                }} 
              />

              {/* Stat 3: Satisfaction */}
              <div className="flex items-center gap-3">
                <span 
                  className="font-bold"
                  style={{ 
                    fontFamily: 'var(--font-heading-ar)',
                    fontSize: 'clamp(22px, 2.5vw, 30px)',
                    color: '#5D3C83',
                    letterSpacing: '-0.02em',
                  }}
                >
                  98%
                </span>
                <span 
                  className="text-sm font-medium"
                  style={{ 
                    fontFamily: 'var(--font-body-arabic)',
                    color: '#6b7280',
                    fontSize: '14px',
                  }}
                >
                  {locale === 'ar' ? 'رضا' : 'Satisfaction'}
                </span>
              </div>
            </div>
          </div>

          {/* ── ILLUSTRATION COLUMN (5/12 ≈ 42%) ── */}
          <div className={`${direction === 'rtl' ? 'lg:col-span-5 xl:col-span-5' : 'lg:col-span-5 xl:col-span-5'} order-1 lg:order-2 flex items-center justify-center`}>
            <div 
              className="relative w-full max-w-[380px] mx-auto lg:max-w-[450px] xl:max-w-[480px]"
              style={{
                opacity: isAnimated ? 1 : 0,
                transform: isAnimated ? 'scale(1) translateX(0)' : `scale(0.92) translateX(${direction === 'rtl' ? '40px' : '-40px'})`,
                transition: 'opacity 900ms cubic-bezier(0.25, 1, 0.5, 1), transform 900ms cubic-bezier(0.25, 1, 0.5, 1)',
                transitionDelay: '300ms',
              }}
            >
              {/* Main Tree Illustration with Floating Animation */}
              <HeroTreeIllustration />
              
              {/* Decorative Crescent Moon Element (Arabic Touch) */}
              <div 
                className="absolute pointer-events-none"
                style={{
                  top: '-8%',
                  [direction === 'rtl' ? 'left' : 'right']: '-5%',
                  width: '80px',
                  height: '80px',
                  opacity: 0.18,
                  animation: 'float-crescent 6s ease-in-out infinite',
                }}
              >
                <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="crescent-gold" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#C29D44" stopOpacity="1" />
                      <stop offset="100%" stopColor="#D4B062" stopOpacity="0.8" />
                    </linearGradient>
                  </defs>
                  {/* Crescent shape */}
                  <path
                    d="M42 8C26.536 8 14 20.536 14 36c0 5.04 1.35 9.76 3.71 13.82A27.92 27.92 0 0042 64c15.464 0 28-12.536 28-28 0-5.04-1.35-9.76-3.71-13.82A27.92 27.92 0 0042 8z"
                    stroke="url(#crescent-gold)"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path
                    d="M48 18a20 20 0 0120 20c0 5-1.84 9.57-4.87 13.07A19.94 19.94 0 0148 62a20 20 0 01-15.13-33.55A19.94 19.94 0 0148 18z"
                    fill="#5D3C83"
                    opacity="0.08"
                  />
                  {/* Small star near crescent */}
                  <circle cx="62" cy="16" r="2" fill="#C29D44" opacity="0.6" />
                  <circle cx="18" cy="54" r="1.5" fill="#90A36D" opacity="0.5" />
                </svg>
              </div>

              {/* Ambient glow behind tree */}
              <div 
                className="absolute inset-0 pointer-events-none -z-10"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(144, 163, 109, 0.08) 0%, transparent 65%)',
                  filter: 'blur(40px)',
                  transform: 'scale(1.2)',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ───────────────────────────────────────────────
          BOTTOM WAVE SEPARATOR
          Smooth transition to next section
         ─────────────────────────────────────────────── */}
      <div 
        className="absolute bottom-0 left-0 right-0 leading-none pointer-events-none" 
        aria-hidden="true"
        style={{ zIndex: 5 }}
      >
        <svg 
          viewBox="0 0 1440 72" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-auto"
          preserveAspectRatio="none"
          style={{ display: 'block' }}
        >
          <path
            d="M0 28C96 48 288 64 480 56C672 48 864 24 1056 16C1248 8 1344 20 1440 28V72H0V28Z"
            fill="#FFFFFF"
            opacity="0.95"
          />
        </svg>
      </div>

      {/* ───────────────────────────────────────────────
          CUSTOM ANIMATION KEYFRAMES (Inline Styles)
         ─────────────────────────────────────────────── */}
      <style jsx global>{`
        @keyframes float-tree {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-12px) rotate(0.5deg);
          }
        }
        
        @keyframes float-crescent {
          0%, 100% {
            transform: translateY(0px) rotate(-15deg);
          }
          33% {
            transform: translateY(-8px) rotate(-10deg);
          }
          66% {
            transform: translateY(-4px) rotate(-20deg);
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
        
        .tree-float {
          animation: float-tree 4s ease-in-out infinite;
        }
        
        /* Respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .tree-float {
            animation: none;
          }
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}

/* ════════════════════════════════════════════════════════
   HERO TREE ILLUSTRATION COMPONENT
   Enhanced SVG tree with:
   - Larger, more prominent design
   - Gentle floating animation
   - Professional gradients
   - Arabic-inspired decorative elements
   ════════════════════════════════════════════════════════ */
function HeroTreeIllustration() {
  return (
    <div className="tree-float relative w-full">
      <svg 
        viewBox="0 0 360 420" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-sm"
        aria-hidden="true"
        role="img"
      >
        <defs>
          {/* Root Gradient - Deep to Light */}
          <linearGradient id="hero-root-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#5D3C83" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#3D2858" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#1F3D73" stopOpacity="0.35" />
          </linearGradient>
          
          {/* Trunk Gradient - Navy to Purple to Sage */}
          <linearGradient id="hero-trunk-grad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#1F3D73" stopOpacity="0.85" />
            <stop offset="40%" stopColor="#3D4A7A" stopOpacity="0.75" />
            <stop offset="70%" stopColor="#5D3C83" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#90A36D" stopOpacity="0.55" />
          </linearGradient>
          
          {/* Branch Gradient */}
          <linearGradient id="hero-branch-grad" x1="50%" y1="100%" x2="50%" y2="0%">
            <stop offset="0%" stopColor="#5D3C83" stopOpacity="0.65" />
            <stop offset="60%" stopColor="#6B5490" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#90A36D" stopOpacity="0.4" />
          </linearGradient>
          
          {/* Leaf Glow Gradient */}
          <radialGradient id="hero-leaf-glow" cx="35%" cy="30%" r="60%">
            <stop offset="0%" stopColor="#C29D44" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#D4B062" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#90A36D" stopOpacity="0.45" />
          </radialGradient>
          
          {/* Soft Leaf Gradient */}
          <radialGradient id="hero-leaf-soft" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#A8BA85" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#90A36D" stopOpacity="0.4" />
          </radialGradient>
          
          {/* Glow Filter */}
          <filter id="soft-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ═══ ROOTS - Foundation of Growth ═══ */}
        <g className="tree-roots" opacity="0.9">
          {/* Main root branches spreading outward */}
          <path
            d="M175 375 Q165 392 150 405 Q135 418 115 428 M175 375 Q185 392 200 408 Q215 422 235 432"
            stroke="url(#hero-root-grad)"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M175 375 Q170 395 158 415 Q148 432 132 445 M175 375 Q180 398 192 418 Q202 438 218 450"
            stroke="url(#hero-root-grad)"
            strokeWidth="2.2"
            strokeLinecap="round"
            fill="none"
          />
          {/* Fine root hairs */}
          <path
            d="M115 428 Q105 434 95 438 M115 428 Q110 436 102 444 M235 432 Q245 438 255 440 M235 432 Q242 440 250 448"
            stroke="url(#hero-root-grad)"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.6"
          />
        </g>

        {/* ═══ TRUNK - Main Growth Path ═══ */}
        <g className="tree-trunk">
          {/* Central trunk with organic curve */}
          <path
            d="M172 372 L168 320 Q165 290 169 260 L174 215 Q177 195 180 172 L183 140 Q186 122 184 100"
            stroke="url(#hero-trunk-grad)"
            strokeWidth="4.5"
            strokeLinecap="round"
            fill="none"
          />
          
          {/* Lower side branches from trunk */}
          <path
            d="M174 215 Q158 205 142 212 Q126 220 114 232"
            stroke="url(#hero-trunk-grad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M180 190 Q196 182 212 188 Q228 198 238 210"
            stroke="url(#hero-trunk-grad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        {/* ═══ MAIN BRANCHES - Spreading Support ═══ */}
        <g className="tree-branches">
          {/* Left primary branch */}
          <path
            d="M184 140 Q158 125 134 116 Q108 109 82 114"
            stroke="url(#hero-branch-grad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          {/* Left secondary branch */}
          <path
            d="M178 160 Q156 152 138 158 Q118 168 102 178"
            stroke="url(#hero-branch-grad)"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
          
          {/* Right primary branch */}
          <path
            d="M183 122 Q204 110 226 104 Q250 98 274 106"
            stroke="url(#hero-branch-grad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          {/* Right secondary branch */}
          <path
            d="M179 136 Q198 128 216 134 Q234 142 248 154"
            stroke="url(#hero-branch-grad)"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
          
          {/* Top delicate branches */}
          <path
            d="M184 100 Q172 88 158 84 Q142 82 126 88"
            stroke="url(#hero-branch-grad)"
            strokeWidth="1.8"
            strokeLinecap="round"
            fill="none"
            opacity="0.8"
          />
          <path
            d="M183 104 Q196 95 210 92 Q226 90 240 96"
            stroke="url(#hero-branch-grad)"
            strokeWidth="1.8"
            strokeLinecap="round"
            fill="none"
            opacity="0.8"
          />
        </g>

        {/* ═══ LEAVES & FRUITS - Results of Care ═══ */}
        <g className="tree-leaves">
          {/* Left side leaves - main cluster */}
          <circle cx="82" cy="114" r="9" fill="url(#hero-leaf-glow)" opacity="0.75" filter="url(#soft-glow)" />
          <circle cx="102" cy="106" r="6.5" fill="url(#hero-leaf-soft)" opacity="0.6" />
          <circle cx="68" cy="124" r="7.5" fill="url(#hero-leaf-glow)" opacity="0.65" />
          <circle cx="96" cy="130" r="5" fill="#90A36D" opacity="0.45" />
          
          {/* Left lower leaves */}
          <circle cx="102" cy="178" r="6" fill="url(#hero-leaf-soft)" opacity="0.55" />
          <circle cx="118" cy="170" r="4.5" fill="#90A36D" opacity="0.4" />
          
          {/* Right side leaves - main cluster */}
          <circle cx="274" cy="106" r="9" fill="url(#hero-leaf-glow)" opacity="0.75" filter="url(#soft-glow)" />
          <circle cx="254" cy="96" r="6.5" fill="url(#hero-leaf-soft)" opacity="0.6" />
          <circle cx="288" cy="118" r="7.5" fill="url(#hero-leaf-glow)" opacity="0.65" />
          <circle cx="260" cy="124" r="5" fill="#90A36D" opacity="0.45" />
          
          {/* Right lower leaves */}
          <circle cx="248" cy="154" r="6" fill="url(#hero-leaf-soft)" opacity="0.55" />
          <circle cx="232" cy="146" r="4.5" fill="#90A36D" opacity="0.4" />
          
          {/* Middle leaves */}
          <circle cx="134" cy="116" r="5.5" fill="url(#hero-leaf-soft)" opacity="0.5" />
          <circle cx="226" cy="104" r="5.5" fill="url(#hero-leaf-soft)" opacity="0.5" />
          <circle cx="158" cy="86" r="5" fill="#90A36D" opacity="0.4" />
          <circle cx="206" cy="94" r="5" fill="#90A36D" opacity="0.4" />
          <circle cx="126" cy="88" r="4.5" fill="url(#hero-leaf-glow)" opacity="0.45" />
          <circle cx="240" cy="96" r="4.5" fill="url(#hero-leaf-glow)" opacity="0.45" />
        </g>

        {/* ═══ DECORATIVE CRESCENT MOON (Arabic Element) ═══ */}
        <g className="decorative-crescent" opacity="0.18">
          <path
            d="M295 52 A24 24 0 1 1 317 30 A19 19 0 1 0 295 52"
            fill="#C29D44"
          />
        </g>

        {/* ═══ DECORATIVE STARS ═══ */}
        <g className="decorative-stars" opacity="0.25">
          <circle cx="302" cy="58" r="3.5" fill="#C29D44" />
          <circle cx="58" cy="78" r="3" fill="#C29D44" />
          <circle cx="285" cy="78" r="2.5" fill="#90A36D" />
          <circle cx="72" cy="96" r="2" fill="#C29D44" opacity="0.6" />
        </g>

        {/* ═══ SUBTLE GROUND LINE ═══ */}
        <g className="ground-line" opacity="0.15">
          <path
            d="M100 410 Q180 400 260 410"
            stroke="#5D3C83"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
        </g>
      </svg>
    </div>
  );
}
