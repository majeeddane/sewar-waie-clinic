'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { TextReveal, FadeInUp, StaggerContainer } from '@/components/effects/TextReveal';
import { Shield, Users, Heart, Clock, Sparkles } from 'lucide-react';

// Feature icons mapping - subtle and elegant
const featureIcons = [Shield, Users, Heart, Clock];

export default function AboutSection() {
  const { t, direction, locale } = useLanguage();
  const features = t.about.features;

  return (
    <section 
      id="about" 
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
      dir={direction}
    >
      {/* Subtle decorative background element */}
      <div 
        className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-[0.04] pointer-events-none hidden lg:block"
        style={{
          background: 'radial-gradient(circle, #5D3C83 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        aria-hidden="true"
      />
      
      {/* Secondary decorative blob */}
      <div 
        className="absolute bottom-0 right-10 w-[300px] h-[300px] rounded-full opacity-[0.03] pointer-events-none hidden lg:block"
        style={{
          background: 'radial-gradient(circle, #C29D44 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
        aria-hidden="true"
      />

      <div className="container-custom relative z-10">
        {/* 60/40 Asymmetric Grid Layout */}
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center`}>
          
          {/* Left Side (60% = 7 columns) - Main Content */}
          <div className={direction === 'rtl' ? 'lg:col-span-7' : 'lg:col-span-7'}>
            
            {/* Section Label - Small, uppercase-style, gold */}
            <FadeInUp delay={0} distance={20}>
              <span 
                className="inline-block text-sm font-medium tracking-widest uppercase mb-6"
                style={{ color: '#C29D44', fontFamily: 'var(--font-body-arabic)' }}
              >
                {t.nav.about}
              </span>
            </FadeInUp>

            {/* Gold horizontal line separator (40px wide) */}
            <FadeInUp delay={100} distance={20}>
              <div 
                className="w-10 h-[3px] mb-8 rounded-full"
                style={{ backgroundColor: '#C29D44' }}
                aria-hidden="true"
              />
            </FadeInUp>

            {/* H2 Heading - Large, bold, Tajawal */}
            <TextReveal 
              as="h2" 
              mode="words" 
              delay={150}
              duration={0.7}
              className="text-3xl md:text-4xl lg:text-[42px] font-bold leading-tight mb-8"
              style={{ 
                fontFamily: 'var(--font-display-arabic)',
                color: '#1a1a2e',
              }}
            >
              {t.about.sectionTitle}
            </TextReveal>

            {/* Lead Paragraph - IBM Plex Sans Arabic, gray */}
            <FadeInUp delay={400} distance={24}>
              <p 
                className="text-base lg:text-lg leading-relaxed mb-6 max-w-xl"
                style={{ 
                  fontFamily: 'var(--font-body-arabic)',
                  color: '#6b7280',
                  fontWeight: 400,
                  lineHeight: 1.85,
                }}
              >
                {t.about.description}
              </p>
            </FadeInUp>

            <FadeInUp delay={500} distance={24}>
              <p 
                className="text-base lg:text-lg leading-relaxed mb-12 max-w-xl"
                style={{ 
                  fontFamily: 'var(--font-body-arabic)',
                  color: '#6b7280',
                  fontWeight: 400,
                  lineHeight: 1.85,
                }}
              >
                {t.about.description2}
              </p>
            </FadeInUp>

            {/* Features List - With purple left border accent */}
            <StaggerContainer staggerDelay={100} threshold={0.2}>
              <div className="space-y-5">
                {features.map((feature, index) => {
                  const IconComponent = featureIcons[index] || Shield;
                  
                  return (
                    <FadeInUp key={index} delay={index * 100} distance={20}>
                      <div 
                        className="group flex items-start gap-5 p-5 rounded-2xl transition-all duration-300 hover:bg-gray-50/50"
                        style={{
                          borderRight: direction === 'rtl' ? '3px solid #5D3C83' : 'none',
                          borderLeft: direction === 'ltr' ? '3px solid #5D3C83' : 'none',
                        }}
                      >
                        {/* Icon Container - Subtle, not overwhelming */}
                        <div 
                          className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                          style={{ 
                            backgroundColor: 'rgba(93, 60, 131, 0.06)',
                          }}
                        >
                          <IconComponent 
                            width={22} 
                            height={22} 
                            style={{ color: '#5D3C83', strokeWidth: 1.75 }} 
                          />
                        </div>
                        
                        {/* Feature Content */}
                        <div className="flex-1 min-w-0 pt-0.5">
                          <h4 
                            className="text-base lg:text-lg font-bold mb-1.5 transition-colors duration-300"
                            style={{ 
                              fontFamily: 'var(--font-display-arabic)',
                              color: '#1a1a2e',
                            }}
                          >
                            {feature.title}
                          </h4>
                          <p 
                            className="text-sm leading-relaxed"
                            style={{ 
                              fontFamily: 'var(--font-body-arabic)',
                              color: '#9ca3af',
                            }}
                          >
                            {feature.desc}
                          </p>
                        </div>
                      </div>
                    </FadeInUp>
                  );
                })}
              </div>
            </StaggerContainer>

            {/* Signature Quote / Values Statement */}
            <FadeInUp delay={800} distance={30}>
              <div 
                className="mt-14 p-6 lg:p-8 rounded-2xl relative overflow-hidden"
                style={{ backgroundColor: 'rgba(250, 250, 248, 1)' }}
              >
                {/* Decorative quote mark */}
                <Sparkles 
                  width={32} 
                  height={32} 
                  className="absolute top-4 rtl:left-4 ltr:right-4 opacity-10"
                  style={{ color: '#C29D44' }} 
                />
                
                <p 
                  className="text-base lg:text-lg leading-relaxed italic relative z-10"
                  style={{ 
                    fontFamily: 'var(--font-body-arabic)',
                    color: '#5D3C83',
                    fontWeight: 500,
                  }}
                >
                  {t.about.subtitle}
                </p>
              </div>
            </FadeInUp>
          </div>

          {/* Right Side (40% = 5 columns) - Visual Element */}
          <div className={`${direction === 'rtl' ? 'lg:col-span-5' : 'lg:col-span-5'} relative`}>
            <FadeInUp delay={300} distance={40}>
              <div className="relative">
                {/* Main Visual Container - Abstract Pattern / Gradient Art */}
                <div 
                  className="aspect-[4/5] lg:aspect-[3/4] rounded-3xl relative overflow-hidden"
                  style={{ 
                    background: 'linear-gradient(145deg, rgba(93, 60, 131, 0.03) 0%, rgba(194, 157, 68, 0.05) 50%, rgba(144, 163, 109, 0.04) 100%)',
                    border: '1px solid rgba(93, 60, 131, 0.08)',
                  }}
                >
                  {/* Abstract Geometric Pattern */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full h-full p-8 lg:p-12">
                      {/* Concentric circles pattern */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 lg:w-64 lg:h-64 rounded-full border border-dashed opacity-15"
                        style={{ borderColor: '#5D3C83' }}
                      />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 lg:w-48 lg:h-48 rounded-full border border-dashed opacity-10"
                        style={{ borderColor: '#C29D44' }}
                      />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 lg:w-32 lg:h-32 rounded-full opacity-5"
                        style={{ backgroundColor: '#5D3C83' }}
                      />
                      
                      {/* Center icon/emblem */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center shadow-lg"
                        style={{ 
                          background: 'linear-gradient(135deg, #5D3C83 0%, #7A52A3 100%)',
                          boxShadow: '0 20px 40px rgba(93, 60, 131, 0.25)',
                        }}
                      >
                        <Heart 
                          width={32} 
                          height={32} 
                          className="text-white"
                          strokeWidth={1.5}
                        />
                      </div>

                      {/* Floating decorative elements */}
                      <div 
                        className="absolute top-8 rtl:right-8 ltr:left-8 w-4 h-4 rounded-full opacity-30"
                        style={{ backgroundColor: '#C29D44' }}
                      />
                      <div 
                        className="absolute bottom-12 rtl:left-12 ltr:right-12 w-3 h-3 rounded-full opacity-20"
                        style={{ backgroundColor: '#90A36D' }}
                      />
                      <div 
                        className="absolute top-1/3 rtl:left-4 ltr:right-4 w-2 h-2 rounded-full opacity-25"
                        style={{ backgroundColor: '#5D3C83' }}
                      />
                    </div>
                  </div>

                  {/* Overlay gradient for depth */}
                  <div 
                    className="absolute inset-0 opacity-30"
                    style={{
                      background: 'linear-gradient(180deg, transparent 40%, rgba(93, 60, 131, 0.05) 100%)',
                    }}
                  />
                </div>

                {/* Floating stats card - positioned absolutely */}
                <div 
                  className="absolute -bottom-6 rtl:-left-4 ltr:-right-4 bg-white rounded-2xl p-5 shadow-xl shadow-purple-900/5 border border-gray-100/50 max-w-[200px]"
                >
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'rgba(144, 163, 109, 0.1)' }}
                    >
                      <Users width={18} height={18} style={{ color: '#90A36D' }} />
                    </div>
                    <div>
                      <p 
                        className="text-xs font-medium"
                        style={{ fontFamily: 'var(--font-body-arabic)', color: '#9ca3af' }}
                      >
                        {locale === 'ar' ? 'ثقة' : 'Trust'}
                      </p>
                      <p 
                        className="text-lg font-bold"
                        style={{ fontFamily: 'var(--font-display-arabic)', color: '#1a1a2e' }}
                      >
                        100%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>
    </section>
  );
}
