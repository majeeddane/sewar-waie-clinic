'use client';

import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { ScrollReveal, StaggerContainer, LineReveal, FloatingDecorations, GlassCard } from '@/components/animations';
import { Shield, Users, Heart, Clock } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  shield: <Shield className="w-8 h-8" />,
  users: <Users className="w-8 h-8" />,
  heart: <Heart className="w-8 h-8" />,
  clock: <Clock className="w-8 h-8" />,
};

export default function AboutSection() {
  const { t, direction } = useLanguage();

  return (
    <section id="about" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background Pattern & Decorations */}
      <div className="absolute top-0 left-0 w-full h-full pattern-dots opacity-20 pointer-events-none" />
      <FloatingDecorations variant="about" className="z-[1]" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className={`${direction === 'rtl' ? '' : 'order-2'}`}>
            {/* Section Header */}
            <ScrollReveal direction="up" delay={0.1}>
              <div className="mb-8">
                <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium 
                             bg-[#5D3C83]/10 text-[#5D3C83] mb-4 backdrop-blur-sm border border-white/20">
                  {t.about.sectionTitle}
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#5D3C83] mb-4">
                {t.about.title}
                <span className="block text-[#90A36D] mt-2">{t.about.subtitle}</span>
              </h2>
              
              {/* Animated line */}
              <LineReveal className="w-24 mt-6 mb-8" direction={direction === 'rtl' ? 'right' : 'left'} />
            </ScrollReveal>

            {/* Description */}
            <ScrollReveal direction="up" delay={0.3} duration={0.9}>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                {t.about.description}
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.4} duration={0.9}>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-10">
                {t.about.description2}
              </p>
            </ScrollReveal>

            {/* Features Grid with Stagger Animation */}
            <StaggerContainer 
              staggerDelay={0.15} 
              className="grid sm:grid-cols-2 gap-4"
            >
              {t.about.features.map((feature, index) => (
                <GlassCard key={index} blur="md" glow className="group p-4 rounded-xl hover:bg-white transition-all duration-500">
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center text-white
                                  ${index % 2 === 0 ? 'bg-[#5D3C83]/90' : 'bg-[#90A36D]/90'}
                                  group-hover:scale-110 group-hover:shadow-lg transition-all duration-500`}>
                      {iconMap[Object.keys(iconMap)[index]] || iconMap.shield}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-1 group-hover:text-[#5D3C83] transition-colors">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-gray-500">{feature.desc}</p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </StaggerContainer>
          </div>

          {/* Visual with Parallax */}
          <div className={`${direction === 'rtl' ? '' : 'order-1'}`}>
            <ScrollReveal direction={direction === 'rtl' ? 'right' : 'left'} delay={0.3} duration={1}>
              <div className="relative">
                {/* Main Image Container with glassmorphism */}
                <GlassCard blur="lg" className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/5] max-w-md mx-auto p-2">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-[#FAFAF8] to-white">
                    <img
                      src="/images/logo.png"
                      alt={t.about.title}
                      fill
                      className="object-contain p-8"
                    />
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#5D3C83]/10 via-transparent to-[#C29D44]/10 pointer-events-none" />
                  </div>
                </GlassCard>
                
                {/* Floating Card with stats */}
                <ScrollReveal direction="down" delay={0.7} duration={0.8}>
                  <div className={`absolute -bottom-6 ${direction === 'rtl' ? '-left-6' : '-right-6'} 
                                bg-white rounded-2xl shadow-xl p-6 max-w-xs z-20 backdrop-blur-md border border-white/30`}>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-[#90A36D]/15 flex items-center justify-center">
                        <svg className="w-7 h-7 text-[#90A36D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">+500</p>
                        <p className="text-sm text-gray-500">
                          {t.locale === 'ar' ? 'رحلة تعافي ناجحة' : 'Successful Recovery Journeys'}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
