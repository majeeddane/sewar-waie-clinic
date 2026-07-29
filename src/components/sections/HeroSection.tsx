'use client';

import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import SignatureTree from '@/components/SignatureTree';
import { AnimatedCounter } from '@/components/animations/LineReveal';
import Link from 'next/link';

export default function HeroSection() {
  const { t, locale, direction } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden hero-warm-dark">
      {/* Animated Aurora Background - Calm & Slow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary aurora blob */}
        <div 
          className="absolute w-[600px] h-[600px] rounded-full will-change-transform will-change-opacity"
          style={{
            background: 'radial-gradient(circle, rgba(194,157,68,0.15) 0%, transparent 70%)',
            top: '-10%',
            right: '-5%',
            animation: 'aurora-shift 12s ease-in-out infinite',
          }}
        />
        {/* Secondary aurora blob */}
        <div 
          className="absolute w-[500px] h-[500px] rounded-full will-change-transform will-change-opacity"
          style={{
            background: 'radial-gradient(circle, rgba(144,163,109,0.12) 0%, transparent 70%)',
            bottom: '-15%',
            left: '-10%',
            animation: 'aurora-shift 15s ease-in-out infinite',
            animationDelay: '-5s',
          }}
        />
        {/* Tertiary aurora blob */}
        <div 
          className="absolute w-[400px] h-[400px] rounded-full will-change-transform will-change-opacity"
          style={{
            background: 'radial-gradient(circle, rgba(122,82,163,0.2) 0%, transparent 70%)',
            top: '40%',
            left: '30%',
            animation: 'aurora-shift 18s ease-in-out infinite',
            animationDelay: '-8s',
          }}
        />
      </div>

      {/* Signature Tree - Positioned on the right side */}
      <SignatureTree 
        position={direction === 'rtl' ? 'left' : 'right'} 
        opacity={0.18}
        className="hidden md:block"
      />

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        {/* Star element */}
        <div 
          className="absolute text-[#F5D98A] opacity-20 animate-float"
          style={{ top: '15%', right: '25%', animationDelay: '0s', animationDuration: '6s' }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L14.09 8.26L21 9.27L16 14.14L17.18 21.02L12 17.77L6.82 21.02L8 14.14L3 9.27L9.91 8.26L12 2Z" />
          </svg>
        </div>
        
        {/* Heart element */}
        <div 
          className="absolute text-[#C29D44] opacity-15 animate-float"
          style={{ bottom: '30%', right: '15%', animationDelay: '-2s', animationDuration: '7s' }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
        
        {/* Book element */}
        <div 
          className="absolute text-[#90A36D] opacity-15 animate-float"
          style={{ top: '60%', right: '35%', animationDelay: '-4s', animationDuration: '8s' }}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 19.5A2.5 2.5 0 016.5 17H20" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom relative z-10 pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content - Left Side */}
          <div className={`${direction === 'rtl' ? 'order-1 lg:pr-8' : 'order-1 lg:pl-8'}`}>
            {/* Badge - Trust indicator */}
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full 
                          bg-white/[0.08] backdrop-blur-md border border-white/[0.12]
                          mb-8 text-sm font-medium text-[#FAFAF8]/90
                          transition-all duration-500 hover:bg-white/[0.12]">
              <span className="w-2 h-2 rounded-full bg-[#C29D44] animate-pulse-soft shadow-lg shadow-[#C29D44]/50" />
              {locale === 'ar' ? 'مركز رعاية نفسية متكامل' : 'Integrated Mental Health Care Center'}
            </div>

            {/* Main Title - Gold gradient for premium feel */}
            <h1 className="text-display font-bold mb-6 text-[#FAFAF8]" style={{ fontFamily: 'var(--font-family-arabic)' }}>
              <span className="hero-title-gradient block mb-2">{t.hero.title}</span>
              <span className="text-[#FAFAF8]/95 text-h1 font-semibold block mt-2">{t.hero.subtitle}</span>
            </h1>

            {/* Description - Larger, more readable */}
            <p className="text-lg md:text-xl text-[#FAFAF8]/75 mb-10 max-w-xl leading-relaxed
                         font-light" style={{ fontFamily: 'var(--font-family-arabic)' }}>
              {t.hero.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12">
              {/* Primary CTA - Gold button */}
              <Link href="/#contact">
                <button className="group relative bg-[#C29D44] hover:bg-[#D4B062] text-white 
                                 px-8 py-4 rounded-xl text-base font-semibold 
                                 shadow-lg shadow-[#C29D44]/25 hover:shadow-xl hover:shadow-[#C29D44]/35
                                 transition-all duration-500 ease-out
                                 active:scale-[0.98] overflow-hidden">
                  {/* Shimmer effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                                translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <span className="relative z-10 flex items-center gap-2">
                    {t.hero.cta}
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1 rtl:group-hover:translate-x-1" 
                         fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={direction === 'rtl' ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} />
                    </svg>
                  </span>
                </button>
              </Link>

              {/* Secondary CTA - Glass outline with gold border */}
              <Link href="/#about">
                <button className="group bg-transparent hover:bg-white/[0.08] 
                                 border-2 border-[#C29D44]/70 hover:border-[#F5D98A]
                                 text-[#F5D98A] hover:text-white
                                 px-8 py-4 rounded-xl text-base font-semibold
                                 backdrop-blur-sm
                                 transition-all duration-500 ease-out
                                 active:scale-[0.98]">
                  <span className="flex items-center gap-2">
                    {t.hero.learnMore}
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" 
                         fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={direction === 'rtl' ? "M9 5l7 7-7 7" : "M15 19l-7-7 7-7"} />
                    </svg>
                  </span>
                </button>
              </Link>
            </div>

            {/* Stats Section - Organically integrated (not 3 separate columns) */}
            <div className="inline-flex flex-wrap items-center gap-2 px-6 py-4 rounded-2xl 
                          hero-glass">
              {/* Stat 1 */}
              <div className="flex items-center gap-2 pr-4 border-r border-white/10 last:border-r-0">
                <span className="stat-number text-2xl md:text-3xl">
                  <AnimatedCounter value={500} suffix="+" duration={2.5} />
                </span>
                <span className="text-sm text-[#FAFAF8]/60 hidden sm:inline">
                  {locale === 'ar' ? 'مستفيد' : 'Clients'}
                </span>
              </div>
              
              {/* Separator dot */}
              <span className="hidden sm:block w-1 h-1 rounded-full bg-[#C29D44]/50" />
              
              {/* Stat 2 */}
              <div className="flex items-center gap-2 px-4 border-r border-white/10 last:border-r-0">
                <span className="stat-number text-2xl md:text-3xl">
                  <AnimatedCounter value={15} suffix="+" duration={2.5} />
                </span>
                <span className="text-sm text-[#FAFAF8]/60 hidden sm:inline">
                  {locale === 'ar' ? 'أخصائي' : 'Experts'}
                </span>
              </div>
              
              {/* Separator dot */}
              <span className="hidden sm:block w-1 h-1 rounded-full bg-[#C29D44]/50" />
              
              {/* Stat 3 */}
              <div className="flex items-center gap-2 pl-4">
                <span className="stat-number text-2xl md:text-3xl">
                  <AnimatedCounter value={98} suffix="%" duration={2.5} />
                </span>
                <span className="text-sm text-[#FAFAF8]/60 hidden sm:inline">
                  {locale === 'ar' ? 'رضا' : 'Satisfaction'}
                </span>
              </div>
            </div>
          </div>

          {/* Visual Element - Right Side (Tree illustration area) */}
          <div className={`${direction === 'rtl' ? 'order-2' : 'order-2'} relative hidden lg:flex items-center justify-center`}>
            <div className="relative w-full max-w-md mx-auto">
              {/* Central decorative circle with glass effect */}
              <div className="relative aspect-square max-w-[320px] mx-auto">
                {/* Outer glow ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#C29D44]/20 via-[#5D3C83]/20 to-[#90A36D]/20 
                              blur-2xl animate-pulse-slow" />
                
                {/* Main glassmorphism container */}
                <div className="relative w-full h-full rounded-full overflow-hidden
                              bg-white/[0.06] backdrop-blur-xl
                              border border-white/[0.15]
                              shadow-2xl shadow-black/20">
                  
                  {/* Inner gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent" />
                  
                  {/* Center content area - subtle branding */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                    {/* Decorative tree icon in center */}
                    <div className="relative mb-4">
                      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="opacity-40">
                        {/* Simplified tree shape */}
                        <path 
                          d="M40 70 Q38 55 37 45 L39 35 Q40 28 41 22 L42 15" 
                          stroke="#F5D98A" strokeWidth="2.5" strokeLinecap="round"/>
                        <path 
                          d="M39 35 Q32 30 26 33 Q20 37 18 42" 
                          stroke="#90A36D" strokeWidth="2" strokeLinecap="round"/>
                        <path 
                          d="M41 28 Q48 23 54 26 Q60 30 64 36" 
                          stroke="#90A36D" strokeWidth="2" strokeLinecap="round"/>
                        {/* Leaves */}
                        <circle cx="18" cy="42" r="4" fill="#C29D44" opacity="0.6"/>
                        <circle cx="64" cy="36" r="4" fill="#C29D44" opacity="0.6"/>
                        <circle cx="26" cy="33" r="3" fill="#90A36D" opacity="0.5"/>
                        <circle cx="54" cy="26" r="3" fill="#90A36D" opacity="0.5"/>
                      </svg>
                      
                      {/* Pulsing glow behind tree */}
                      <div className="absolute inset-0 bg-[#C29D44]/20 rounded-full blur-xl animate-pulse-slow" />
                    </div>
                    
                    {/* Subtle tagline */}
                    <p className="text-xs text-[#FAFAF8]/40 text-center tracking-wide uppercase"
                       style={{ fontFamily: 'var(--font-body-en)' }}>
                      {locale === 'ar' ? 'نحو وعي أفضل' : 'Towards Better Awareness'}
                    </p>
                  </div>
                  
                  {/* Rotating border accent */}
                  <div className="absolute inset-0 rounded-full border border-dashed border-white/[0.08]
                                animate-spin-slow" style={{ animationDuration: '30s' }} />
                </div>
                
                {/* Floating accent elements around the circle */}
                <div className="absolute -top-3 -right-3 w-12 h-12 rounded-xl bg-[#C29D44]/20 backdrop-blur-sm
                            border border-[#C29D44]/30 flex items-center justify-center
                            animate-float shadow-lg shadow-[#C29D44]/10">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F5D98A" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                
                <div className="absolute -bottom-2 -left-2 w-11 h-11 rounded-xl bg-[#90A36D]/20 backdrop-blur-sm
                            border border-[#90A36D]/30 flex items-center justify-center
                            animate-float shadow-lg shadow-[#90A36D]/10"
                     style={{ animationDelay: '-1.5s' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A8BA85" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                
                <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 w-10 h-10 rounded-xl bg-white/[0.06] backdrop-blur-sm
                            border border-white/[0.15] flex items-center justify-center
                            animate-float shadow-lg"
                     style={{ animationDelay: '-3s' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FAFAF8" strokeWidth="2" opacity="0.6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider - Smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 z-10 leading-none">
        <svg 
          viewBox="0 0 1440 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          {/* Multi-layered wave for depth */}
          <path
            d="M0 40C96 65 288 95 480 85C672 75 864 35 1056 25C1248 15 1344 35 1440 45V100H0V40Z"
            fill="#FAFAF8"
            fillOpacity="0.98"
          />
          {/* Subtle highlight wave */}
          <path
            d="M0 55C120 70 360 88 540 78C720 68 900 38 1080 32C1260 26 1380 42 1440 50V100H0V55Z"
            fill="#FAFAF8"
            opacity="0.5"
          />
        </svg>
      </div>
    </section>
  );
}
