'use client';

import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { ScrollReveal, StaggerContainer, LineReveal, GlassCard, FloatingDecorations } from '@/components/animations';
import { MiniTree } from '@/components/SignatureTree';
import { Shield, Users, Heart, Clock } from 'lucide-react';

// Feature colors for the circular icons
const featureColors = [
  { bg: '#5D3C83', lightBg: 'rgba(93, 60, 131, 0.12)' }, // Deep Purple
  { bg: '#C29D44', lightBg: 'rgba(194, 157, 68, 0.12)' }, // Gold
  { bg: '#1F3D73', lightBg: 'rgba(31, 61, 115, 0.12)' }, // Navy Blue
  { bg: '#90A36D', lightBg: 'rgba(144, 163, 109, 0.12)' }, // Sage Green
];

const iconMap: Record<string, React.ReactNode> = {
  shield: <Shield className="w-6 h-6" />,
  users: <Users className="w-6 h-6" />,
  heart: <Heart className="w-6 h-6" />,
  clock: <Clock className="w-6 h-6" />,
};

export default function AboutSection() {
  const { t, locale, direction } = useLanguage();

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#FAFAF8' }}>
      {/* Background Pattern - Subtle Leaves */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5c-2 4-6 7-10 9 4 1 8 4 10 8 2-4 6-7 10-9-4-1-8-4-10-8z' fill='%235D3C83' fill-opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '120px 120px',
        }}
      />
      
      {/* Decorative Mini Trees */}
      <MiniTree 
        className={direction === 'rtl' ? 'left-[5%] top-[15%]' : 'right-[5%] top-[15%]'} 
        color="#90A36D" 
      />
      <MiniTree 
        className={direction === 'rtl' ? 'right-[8%] bottom-[20%]' : 'left-[8%] bottom-[20%]'} 
        color="#5D3C83" 
      />
      
      <FloatingDecorations variant="about" className="z-[1]" />

      <div className="container-custom relative z-10">
        {/* Asymmetric Layout */}
        <div className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center`}>
          
          {/* Left Side - Visual / Logo with Parallax Effect (RTL: Right) */}
          <div className={`lg:col-span-5 ${direction === 'rtl' ? '' : 'order-1'}`}>
            <ScrollReveal direction={direction === 'rtl' ? 'right' : 'left'} delay={0.2} duration={1}>
              <div className="relative">
                {/* Main Visual Container */}
                <GlassCard blur="lg" className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square max-w-sm mx-auto lg:max-w-none">
                  <div 
                    className="relative w-full h-full rounded-3xl flex items-center justify-center p-8 md:p-12"
                    style={{
                      background: 'linear-gradient(135deg, rgba(93, 60, 131, 0.05) 0%, rgba(144, 163, 109, 0.08) 50%, rgba(194, 157, 68, 0.05) 100%)',
                    }}
                  >
                    {/* Logo Image */}
                    <img
                      src="/images/logo.png"
                      alt={t.about.title}
                      className="w-4/5 h-4/5 object-contain drop-shadow-lg transition-transform duration-700 hover:scale-105"
                    />
                    
                    {/* Gradient Overlay */}
                    <div 
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: 'radial-gradient(circle at 30% 30%, rgba(93, 60, 131, 0.08) 0%, transparent 60%)',
                      }}
                    />
                  </div>
                </GlassCard>
                
                {/* Floating Stats Card */}
                <ScrollReveal direction="down" delay={0.6} duration={0.8}>
                  <div 
                    className={`absolute -bottom-4 ${direction === 'rtl' ? '-left-4 lg:-left-8' : '-right-4 lg:-right-8'} 
                              bg-white rounded-2xl shadow-xl p-5 max-w-[200px] z-20 backdrop-blur-md border`}
                    style={{ borderColor: 'rgba(144, 163, 109, 0.2)' }}
                  >
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: 'rgba(144, 163, 109, 0.15)' }}
                      >
                        <svg className="w-6 h-6" style={{ color: '#90A36D' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-bold text-gray-800 text-lg">+500</p>
                        <p className="text-xs text-gray-500 leading-tight">
                          {locale === 'ar' ? 'رحلة تعافي ناجحة' : 'Successful Journeys'}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Decorative Circle */}
                <div 
                  className={`absolute -top-6 ${direction === 'rtl' ? '-right-6' : '-left-6'} w-24 h-24 rounded-full opacity-20 blur-xl`}
                  style={{ backgroundColor: '#C29D44' }}
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Right Side - Content (RTL: Left) */}
          <div className={`lg:col-span-7 ${direction === 'rtl' ? '' : 'order-2'}`}>
            
            {/* Section Badge */}
            <ScrollReveal direction="up" delay={0.1}>
              <span 
                className="inline-block px-5 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border"
                style={{
                  backgroundColor: 'rgba(93, 60, 131, 0.08)',
                  color: '#5D3C83',
                  borderColor: 'rgba(93, 60, 131, 0.15)',
                }}
              >
                {t.about.sectionTitle}
              </span>
            </ScrollReveal>

            {/* Title with Gradient */}
            <ScrollReveal direction="up" delay={0.2}>
              <h2 
                className="text-4xl md:text-5xl font-bold mb-3 leading-tight"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #5D3C83 0%, #7A52A3 50%, #5D3C83 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {t.about.title}
              </h2>
              <h3 
                className="text-xl md:text-2xl font-semibold mb-6"
                style={{ color: '#90A36D' }}
              >
                {t.about.subtitle}
              </h3>
              
              {/* Animated Line */}
              <LineReveal 
                className="w-28 mb-8 h-1 rounded-full" 
                direction={direction === 'rtl' ? 'right' : 'left'}
              />
            </ScrollReveal>

            {/* Description Texts */}
            <ScrollReveal direction="up" delay={0.3} duration={0.9}>
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                {t.about.description}
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.4} duration={0.9}>
              <p className="text-gray-500 leading-relaxed mb-10">
                {t.about.description2}
              </p>
            </ScrollReveal>

            {/* Features List - Vertical Cards Layout */}
            <StaggerContainer staggerDelay={0.15} className="space-y-4">
              {t.about.features.map((feature, index) => (
                <ScrollReveal key={index} direction="up" delay={0.2 + index * 0.1} duration={0.7}>
                  <GlassCard
                    blur="md"
                    className="group p-5 rounded-2xl border transition-all duration-500 hover:shadow-lg hover:-translate-x-1 rtl:hover:translate-x-1 bg-white"
                  >
                    <div className="flex items-center gap-5">
                      {/* Icon Circle */}
                      <div 
                        className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-white
                                   transition-all duration-500 group-hover:scale-110 group-hover:shadow-md"
                        style={{ 
                          backgroundColor: featureColors[index].bg,
                        }}
                      >
                        {iconMap[Object.keys(iconMap)[index]] || iconMap.shield}
                      </div>
                      
                      {/* Text Content */}
                      <div className="flex-grow min-w-0">
                        <h4 
                          className="font-bold text-base mb-1 transition-colors duration-300"
                          style={{ color: '#1F3D73' }}
                        >
                          {feature.title}
                        </h4>
                        <p className="text-sm text-gray-500 leading-relaxed">
                          {feature.desc}
                        </p>
                      </div>

                      {/* Subtle Arrow Indicator */}
                      <div 
                        className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 rtl:-translate-x-2 rtl:group-hover:translate-x-0"
                        style={{ backgroundColor: `${featureColors[index].lightBg}` }}
                      >
                        <svg 
                          className="w-4 h-4 transition-transform duration-300" 
                          style={{ color: featureColors[index].bg }}
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={direction === 'rtl' ? "M17 8l4 4m0 0l-4 4m4-4H3" : "M7 16l-4-4m0 0l4-4m-4 4h18"} />
                        </svg>
                      </div>
                    </div>
                  </GlassCard>
                </ScrollReveal>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
