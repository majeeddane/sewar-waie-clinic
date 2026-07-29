'use client';

import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
  const { t, locale, direction } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#FAFAF8]">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-20 -right-32 w-96 h-96 bg-[#5D3C83]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -left-32 w-96 h-96 bg-[#C29D44]/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#90A36D]/5 rounded-full blur-3xl" />
        
        {/* Pattern */}
        <div className="absolute inset-0 pattern-dots opacity-30" />
      </div>

      <div className="container-custom relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Content */}
          <div className={`${direction === 'rtl' ? 'order-1' : ''} text-center lg:text-start`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                          bg-[#5D3C83]/10 text-[#5D3C83] dark:bg-[#90A36D]/10 dark:text-[#90A36D]
                          mb-6 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-[#C29D44] animate-pulse" />
              {locale === 'ar' ? 'مركز رعاية نفسية متكامل' : 'Integrated Mental Health Care Center'}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-[#5D3C83]">{t.hero.title}</span>
              <br />
              <span className="text-gradient">{t.hero.subtitle}</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {t.hero.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link href="/#contact">
                <Button
                  size="lg"
                  className="bg-[#5D3C83] hover:bg-[#4A2F6A] text-white px-8 py-4 rounded-xl 
                           text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {t.hero.cta}
                </Button>
              </Link>
              <Link href="/#about">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-[#C29D44] text-[#C29D44] hover:bg-[#C29D44] hover:text-white 
                           px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300"
                >
                  {t.hero.learnMore}
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-12 pt-8 border-t border-gray-200/50">
              {[
                { value: '+500', label: locale === 'ar' ? 'مستفيد سعيد' : 'Happy Clients' },
                { value: '+15', label: locale === 'ar' ? 'أخصائي معتمد' : 'Certified Experts' },
                { value: '98%', label: locale === 'ar' ? 'نسبة الرضا' : 'Satisfaction Rate' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-[#5D3C83]">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className={`${direction === 'rtl' ? 'order-2' : ''} relative`}>
            <div className="relative w-full max-w-md mx-auto">
              {/* Main Circle with Logo */}
              <div className="relative aspect-square rounded-full bg-gradient-to-br from-[#5D3C83]/20 via-[#C29D44]/20 to-[#90A36D]/20 p-12 animate-float">
                <div className="w-full h-full rounded-full bg-white/80 dark:bg-[#252542]/80 backdrop-blur-sm shadow-2xl flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/logo.png"
                    alt="سوار وعي"
                    className="w-3/4 h-3/4 object-contain"
                  />
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 right-8 w-16 h-16 rounded-2xl bg-[#C29D44] shadow-lg flex items-center justify-center animate-pulse-soft">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                
                <div className="absolute -bottom-4 left-8 w-16 h-16 rounded-2xl bg-[#90A36D] shadow-lg flex items-center justify-center animate-pulse-soft delay-1000">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                
                <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-14 h-14 rounded-2xl bg-[#5D3C83] shadow-lg flex items-center justify-center animate-pulse-soft delay-500">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
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
