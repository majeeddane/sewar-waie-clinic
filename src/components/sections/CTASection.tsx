'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { FadeInUp } from '@/components/effects/TextReveal';
import { Shield, Heart, Lock, Award } from 'lucide-react';

export default function CTASection() {
  const { t, locale, direction } = useLanguage();

  const trustIndicators = [
    { icon: Shield, text: locale === 'ar' ? 'سرية تامة' : 'Complete Privacy' },
    { icon: Heart, text: locale === 'ar' ? 'رعاية متخصصة' : 'Specialized Care' },
    { icon: Lock, text: locale === 'ar' ? 'بيانات محمية' : 'Protected Data' },
    { icon: Award, text: locale === 'ar' ? 'خبراء معتمدون' : 'Certified Experts' },
  ];

  return (
    <section 
      className="py-28 lg:py-36 relative overflow-hidden"
      style={{ 
        background: 'linear-gradient(180deg, #FAFAF8 0%, rgba(93, 60, 131, 0.03) 50%, rgba(93, 60, 131, 0.06) 100%)',
      }}
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Large ghost text background */}
        <span 
          className="absolute select-none font-black leading-none opacity-[0.025]"
          style={{
            fontFamily: 'var(--font-display-arabic)',
            fontSize: 'clamp(180px, 20vw, 400px)',
            color: '#5D3C83',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -55%)',
            whiteSpace: 'nowrap',
          }}
        >
          {locale === 'ar' ? 'وعي' : 'AWARE'}
        </span>
        
        {/* Subtle radial gradient orbs */}
        <div 
          className="absolute w-[600px] h-[600px] rounded-full opacity-[0.06]"
          style={{
            background: 'radial-gradient(circle, #5D3C83 0%, transparent 70%)',
            top: '-30%',
            right: '-15%',
          }}
        />
        <div 
          className="absolute w-[400px] h-[400px] rounded-full opacity-[0.04]"
          style={{
            background: 'radial-gradient(circle, #C29D44 0%, transparent 70%)',
            bottom: '-10%',
            left: '-10%',
          }}
        />
        
        {/* Abstract geometric shape */}
        <svg 
          className="absolute opacity-[0.03]" 
          width="300" 
          height="300" 
          viewBox="0 0 200 200" 
          style={{ bottom: '10%', left: '5%' }}
        >
          <circle cx="100" cy="100" r="80" fill="none" stroke="#5D3C83" strokeWidth="0.5"/>
          <circle cx="100" cy="100" r="60" fill="none" stroke="#5D3C83" strokeWidth="0.5"/>
          <circle cx="100" cy="100" r="40" fill="none" stroke="#5D3C83" strokeWidth="0.5"/>
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <FadeInUp>
          <div className="text-center max-w-4xl mx-auto">
            {/* Gold accent line */}
            <div 
              className="w-16 h-[3px] mx-auto mb-10"
              style={{ backgroundColor: '#C29D44' }}
              aria-hidden="true"
            />

            {/* Main Heading - Larger & Bolder */}
            <h2 
              className="text-[32px] md:text-[42px] lg:text-[52px] xl:text-[58px] font-extrabold mb-8 leading-[1.15]"
              style={{ 
                fontFamily: 'var(--font-display-arabic)',
                color: '#5D3C83',
                letterSpacing: '-0.02em',
              }}
            >
              {t.cta.title}
            </h2>

            {/* Description */}
            <p 
              className="text-[17px] md:text-[18px] lg:text-[19px] max-w-2xl mx-auto mb-12 leading-[1.75]"
              style={{ 
                fontFamily: 'var(--font-body-arabic)',
                color: '#6b7280',
              }}
            >
              {t.cta.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-14">
              <Link href="/#contact">
                <button 
                  className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl text-white font-semibold text-[16px] transition-all duration-300 hover:shadow-xl hover:shadow-purple-900/20 hover:-translate-y-0.5 active:translate-y-0"
                  style={{ 
                    fontFamily: 'var(--font-body-arabic)',
                    backgroundColor: '#5D3C83',
                    boxShadow: '0 4px 24px rgba(93, 60, 131, 0.25)',
                  }}
                >
                  {t.cta.button}
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path d={direction === 'rtl' ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} />
                  </svg>
                </button>
              </Link>
              
              <a 
                href="https://wa.me/966553008282" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <button 
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-[16px] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 border-2"
                  style={{ 
                    fontFamily: 'var(--font-body-arabic)',
                    borderColor: '#25D366',
                    color: '#25D366',
                    backgroundColor: 'rgba(37, 211, 102, 0.04)',
                  }}
                >
                  <svg 
                    width="22" 
                    height="22" 
                    viewBox="0 0 24 24" 
                    fill="#25D366"
                    className="transition-transform duration-300 group-hover:scale-110"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403c-4.073 0-7.41-3.366-7.41-7.503s3.337-7.503 7.41-7.503c4.074 0 7.41 3.366 7.41 7.503s-3.336 7.503-7.41 7.503M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.435 5.173L2 22l4.883-1.435C8.328 21.47 10.107 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2"/>
                  </svg>
                  {t.cta.whatsapp}
                </button>
              </a>
            </div>

            {/* Trust Indicators */}
            <FadeInUp delay={200}>
              <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
                {trustIndicators.map((indicator, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/60 backdrop-blur-sm border border-gray-100/80"
                  >
                    <indicator.icon 
                      width="16" 
                      height="16" 
                      style={{ color: '#5D3C83', opacity: 0.7 }} 
                    />
                    <span 
                      className="text-[13px] font-medium whitespace-nowrap"
                      style={{ 
                        fontFamily: 'var(--font-body-arabic)',
                        color: '#6b7280',
                      }}
                    >
                      {indicator.text}
                    </span>
                  </div>
                ))}
              </div>
            </FadeInUp>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
