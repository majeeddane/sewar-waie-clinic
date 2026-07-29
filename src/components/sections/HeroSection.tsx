'use client';

import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { 
  ScrollReveal, 
  StaggerContainer, 
  TextReveal, 
  MagneticButton,
  AnimatedCounter,
  AuroraBackground,
  FloatingDecorations
} from '@/components/animations';
import Link from 'next/link';

export default function HeroSection() {
  const { t, locale, direction } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#FAFAF8]">
      {/* Animated Aurora Background */}
      <AuroraBackground className="z-0" />
      
      {/* Floating Decorations */}
      <FloatingDecorations variant="hero" className="z-[1]" />

      {/* Content */}
      <div className="container-custom relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className={`${direction === 'rtl' ? 'order-1' : ''} text-center lg:text-start`}>
            {/* Badge */}
            <ScrollReveal direction="down" delay={0.2} duration={0.8}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                            bg-[#5D3C83]/10 text-[#5D3C83] dark:bg-[#90A36D]/10 dark:text-[#90A36D] mb-6 text-sm font-medium
                            backdrop-blur-sm border border-white/20">
                <span className="w-2 h-2 rounded-full bg-[#C29D44] animate-pulse" />
                {locale === 'ar' ? 'مركز رعاية نفسية متكامل' : 'Integrated Mental Health Care Center'}
              </div>
            </ScrollReveal>

            {/* Title with text reveal effect */}
            <TextReveal className="mb-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-[#5D3C83]">{t.hero.title}</span>
                <br />
                <span className="text-gradient">{t.hero.subtitle}</span>
              </h1>
            </TextReveal>

            {/* Description */}
            <ScrollReveal direction="up" delay={0.3} duration={0.9}>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                {t.hero.description}
              </p>
            </ScrollReveal>

            {/* CTA Buttons with magnetic effect */}
            <ScrollReveal direction="up" delay={0.5} duration={0.8}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <MagneticButton strength={0.25}>
                  <Link href="/#contact">
                    <button className="bg-[#5D3C83] hover:bg-[#4A2F6A] text-white px-8 py-4 rounded-xl 
                                   text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-500
                                   relative overflow-hidden group">
                      <span className="relative z-10">{t.hero.cta}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                                    translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    </button>
                  </Link>
                </MagneticButton>

                <MagneticButton strength={0.2}>
                  <Link href="/#about">
                    <button className="border-2 border-[#C29D44] text-[#C29D44] hover:bg-[#C29D44] hover:text-white 
                                   px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-500
                                   backdrop-blur-sm">
                      {t.hero.learnMore}
                    </button>
                  </Link>
                </MagneticButton>
              </div>
            </ScrollReveal>

            {/* Trust Indicators with animated counters */}
            <ScrollReveal direction="up" delay={0.7} duration={0.8}>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-12 pt-8 
                            border-t border-gray-200/50 backdrop-blur-sm">
                {[
                  { value: 500, suffix: '+', label: t.locale === 'ar' ? 'مستفيد سعيد' : 'Happy Clients' },
                  { value: 15, suffix: '+', label: t.locale === 'ar' ? 'أخصائي معتمد' : 'Certified Experts' },
                  { value: 98, suffix: '%', label: t.locale === 'ar' ? 'نسبة الرضا' : 'Satisfaction Rate' },
                ].map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="text-2xl font-bold text-[#5D3C83] group-hover:text-[#C29D44] transition-colors duration-300">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={2.5} />
                    </div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Visual Element - Logo with floating animation */}
          <div className={`${direction === 'rtl' ? 'order-2' : ''} relative`}>
            <ScrollReveal direction={direction === 'rtl' ? 'left' : 'right'} delay={0.4} duration={1}>
              <div className="relative w-full max-w-md mx-auto">
                {/* Main Circle with glassmorphism */}
                <div className="relative aspect-square rounded-full overflow-hidden animate-float"
                     style={{ background: 'linear-gradient(135deg, rgba(93,60,131,0.15), rgba(194,157,68,0.15), rgba(144,163,109,0.15))',
                           backdropFilter: 'blur(12px)' }}>
                  
                  {/* Inner glow ring */}
                  <div className="absolute inset-2 rounded-full border border-white/30 backdrop-blur-md shadow-2xl" />
                  
                  <div className="absolute inset-4 rounded-full bg-white/80 dark:bg-[#252542]/80 backdrop-blur-xl shadow-inner flex items-center justify-center overflow-hidden">
                    <img
                      src="/images/logo.png"
                      alt="سوار وعي"
                      className="w-3/4 h-3/4 object-contain drop-shadow-lg"
                    />
                    
                    {/* Subtle inner gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#5D3C83]/5 via-transparent to-[#C29D44]/5 pointer-events-none" />
                  </div>
                  
                  {/* Floating Elements around logo */}
                  <div className="absolute -top-4 right-8 w-16 h-16 rounded-2xl bg-[#C29D44] shadow-lg flex items-center justify-center 
                              animate-pulse-soft hover:scale-110 transition-transform duration-300 cursor-default">
                    <svg className="w-8 h-8 text-white drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  
                  <div className="absolute -bottom-4 left-8 w-16 h-16 rounded-2xl bg-[#90A36D] shadow-lg flex items-center justify-center 
                              animate-pulse-soft delay-1000 hover:scale-110 transition-transform duration-300 cursor-default">
                    <svg className="w-8 h-8 text-white drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  
                  <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-14 h-14 rounded-2xl bg-[#5D3C83] shadow-lg flex items-center justify-center 
                              animate-pulse-soft delay-500 hover:scale-110 transition-transform duration-300 cursor-default">
                    <svg className="w-7 h-7 text-white drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Wave Divider with animation */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}
