'use client';

import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { ScrollReveal, StaggerContainer, LineReveal, GlassCard } from '@/components/animations';

// Custom SVG Icons for each reason
const LockIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 4C17.373 4 12 9.373 12 16V20H10C7.79 20 6 21.79 6 24V40C6 42.21 7.79 44 10 44H38C40.21 44 42 42.21 42 40V24C42 21.79 40.21 20 38 20H36V16C36 9.373 30.627 4 24 4ZM24 8C28.418 8 32 11.582 32 16V20H16V16C16 11.582 19.582 8 24 8ZM24 28C25.105 28 26 28.895 26 30V34C26 35.105 25.105 36 24 36C22.895 36 22 35.105 22 34V30C22 28.895 22.895 28 24 28Z" fill="currentColor"/>
  </svg>
);

const TeamIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 18C32 23.523 27.523 28 22 28C16.477 28 12 23.523 12 18C12 12.477 16.477 8 22 8C27.523 8 32 12.477 32 18ZM8 38C8 33.582 11.582 30 16 30H28C32.418 30 36 33.582 36 38V40H8V38ZM36 14H38C41.314 14 44 16.686 44 20V22C44 24.209 42.209 26 40 26V28C43.314 28 46 25.314 46 22V20C46 15.582 42.418 12 38 12H36V14ZM34.5 30C36.985 31.851 38.667 34.72 39 38V40H42V38C42 33.294 38.889 29.306 34.656 28.047L34.5 30Z" fill="currentColor"/>
  </svg>
);

const LightBulbIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 4C15.163 4 8 11.163 8 20C8 26.492 11.786 32.104 17.256 34.686L18.4 40H29.6L30.744 34.686C36.214 32.104 40 26.492 40 20C40 11.163 32.837 4 24 4ZM24 8C30.627 8 36 13.373 36 20C36 25.082 32.992 29.43 28.592 31.308L27.752 31.674L27.052 35H20.948L20.248 31.674L19.408 31.308C15.008 29.43 12 25.082 12 20C12 13.373 17.373 8 24 8ZM20 38V40H28V38H20Z" fill="currentColor"/>
    <path d="M22 14H26V22H30L24 30L18 22H22V14Z" fill="currentColor" opacity="0.6"/>
  </svg>
);

const HomeShieldIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 4L6 14V24C6 34 14 42.4 24 44C34 42.4 42 34 42 24V14L24 4ZM24 8.5L38 16.5V24C38 32.2 31.6 39 24 40.8C16.4 39 10 32.2 10 24V16.5L24 8.5Z" fill="currentColor"/>
    <path d="M22 28L18 24L15.83 26.17L22 32.34L32.17 22.17L30 20L22 28Z" fill="currentColor" opacity="0.8"/>
  </svg>
);

const DocumentIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M28 4H12C9.79 4 8.02 5.79 8.02 8L8 40C8 42.21 9.77 44 11.98 44H36C38.21 44 40 42.21 40 40V16L28 4ZM36 40H12V8H26V18H36V40ZM18 22H30V26H18V22ZM18 30H30V34H18V30Z" fill="currentColor"/>
    <path d="M32 14V6L40 14H32Z" fill="currentColor" opacity="0.6"/>
  </svg>
);

const RefreshIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M35.49 12.51C32.28 9.3 28 7.5 23.5 7.5C14.16 7.5 6.62 15.04 6.62 24.38C6.62 33.72 14.16 41.26 23.5 41.26C31.56 41.26 38.24 35.64 39.92 28.06H35.82C34.26 33.54 29.3 37.66 23.5 37.66C16.26 37.66 10.38 31.78 10.38 24.54C10.38 17.3 16.26 11.42 23.5 11.42C26.94 11.42 30.04 12.86 32.26 15.16L25 22.5H42V5.5L35.49 12.51Z" fill="currentColor"/>
  </svg>
);

const iconComponents = [
  LockIcon,
  TeamIcon,
  LightBulbIcon,
  HomeShieldIcon,
  DocumentIcon,
  RefreshIcon,
];

export default function WhyUsSection() {
  const { t, locale } = useLanguage();

  return (
    <section 
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ backgroundColor: '#5D3C83' }}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, #C29D44 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      {/* Decorative glowing orbs */}
      <div 
        className="absolute top-20 left-10 w-40 h-40 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ backgroundColor: '#C29D44' }}
      />
      <div 
        className="absolute bottom-20 right-10 w-52 h-52 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ backgroundColor: '#90A36D' }}
      />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              style={{ color: '#C29D44' }}
            >
              {t.whyUs.sectionTitle}
            </h2>
            <LineReveal 
              direction="center" 
              className="mx-auto h-1 rounded-full mb-6"
            />
            <p className="text-lg leading-relaxed" style={{ color: '#FAFAF8', opacity: 0.85 }}>
              {locale === 'ar' 
                ? 'نتميز بتقديم رعاية نفسية فريدة تجمع بين الاحترافية والدفء الإنساني' 
                : 'We stand out with unique mental health care that combines professionalism with human warmth'}
            </p>
          </div>
        </ScrollReveal>

        {/* Reasons Grid - Numbered Cards */}
        <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
          {t.whyUs.reasons.map((reason, index) => {
            const IconComponent = iconComponents[index];
            return (
              <GlassCard
                key={index}
                blur="md"
                className="group relative p-6 md:p-8 transition-all duration-700 ease-out h-full
                         border border-white/[0.08] hover:border-[#C29D44]/40
                         bg-white/[0.05] hover:bg-white/[0.1]
                         hover:shadow-[0_0_40px_rgba(194,157,68,0.15)]"
              >
                {/* Number Badge - Top Corner */}
                <div 
                  className="absolute top-4 rtl:right-4 ltr:left-4 text-4xl md:text-5xl font-bold select-none transition-all duration-500 group-hover:scale-110"
                  style={{ color: '#C29D44', opacity: 0.25 }}
                >
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Icon Container */}
                <div 
                  className="relative w-16 h-16 rounded-xl flex items-center justify-center mb-6 mt-8
                           transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                  style={{ 
                    backgroundColor: 'rgba(194, 157, 68, 0.15)',
                    color: '#C29D44',
                  }}
                >
                  <IconComponent />
                  
                  {/* Glow effect on hover */}
                  <div 
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"
                    style={{ backgroundColor: 'rgba(194, 157, 68, 0.3)' }}
                  />
                </div>

                {/* Content */}
                <h3 
                  className="text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-[#C29D44]"
                  style={{ color: '#FAFAF8' }}
                >
                  {reason.title}
                </h3>
                <p 
                  className="text-sm leading-relaxed"
                  style={{ color: '#FAFAF8', opacity: 0.75 }}
                >
                  {reason.desc}
                </p>

                {/* Bottom accent line */}
                <div className="mt-6 pt-4 border-t border-white/10">
                  <div 
                    className="w-10 h-0.5 rounded-full transition-all duration-500 group-hover:w-16"
                    style={{ background: 'linear-gradient(90deg, #C29D44, transparent)' }}
                  />
                </div>
              </GlassCard>
            );
          })}
        </StaggerContainer>

        {/* CTA Button */}
        <ScrollReveal direction="up" delay={0.9}>
          <div className="text-center mt-14 md:mt-16">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold shadow-lg 
                       transition-all duration-500 group relative overflow-hidden"
              style={{ 
                backgroundColor: '#C29D44',
                color: '#FFFFFF',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#A88535';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(194, 157, 68, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#C29D44';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(194, 157, 68, 0.3)';
              }}
            >
              <span className="relative z-10">{t.nav.bookNow}</span>
              <svg 
                className="w-5 h-5 rtl:rotate-180 transition-transform duration-300 group-hover:-translate-x-1 relative z-10" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              
              {/* Shimmer effect on hover */}
              <div 
                className="absolute inset-0 transition-transform duration-700"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                  transform: 'translateX(-100%)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(100%)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(-100%)';
                }}
              />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
