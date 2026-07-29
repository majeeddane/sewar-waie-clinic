'use client';

import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { ScrollReveal, StaggerContainer, LineReveal, TiltCard, FloatingDecorations, GlassCard } from '@/components/animations';
import { User, Heart, Users, MessageCircle, Baby, GraduationCap } from 'lucide-react';

const iconComponents: Record<string, React.ReactNode> = {
  'user': <User className="w-7 h-7" />,
  'heart': <Heart className="w-7 h-7" />,
  'users': <Users className="w-7 h-7" />,
  'message-circle': <MessageCircle className="w-7 h-7" />,
  'baby': <Baby className="w-7 h-7" />,
  'graduation-cap': <GraduationCap className="w-7 h-7" />,
};

export default function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-20 md:py-28 bg-[#FAFAF8] relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#5D3C83]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C29D44]/10 rounded-full blur-3xl pointer-events-none" />
      <FloatingDecorations variant="services" className="z-[1]" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium 
                         bg-[#90A36D]/15 text-[#7A8C5A] mb-4 backdrop-blur-sm border border-white/30">
              {t.services.sectionTitle}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F3D73] mb-4">
              {t.services.sectionSubtitle}
            </h2>
            <LineReveal direction="center" className="mx-auto w-20 h-1.5 rounded-full" />
          </div>
        </ScrollReveal>

        {/* Services Grid with Stagger and Tilt */}
        <StaggerContainer staggerDelay={0.12} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {t.services.items.map((service, index) => (
            <TiltCard key={index} tiltStrength={6} glareEnabled>
              <GlassCard
                blur="lg"
                glow
                className="group relative p-6 lg:p-8 border-transparent hover:border-[#5D3C83]/20 transition-all duration-500 h-full"
              >
                {/* Icon with hover effect */}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500
                              ${index % 2 === 0 
                                ? 'bg-[#5D3C83]/10 text-[#5D3C83] group-hover:bg-[#5D3C83] group-hover:text-white' 
                                : index % 3 === 1
                                  ? 'bg-[#90A36D]/10 text-[#90A36D] group-hover:bg-[#90A36D] group-hover:text-white'
                                  : 'bg-[#C29D44]/10 text-[#C29D44] group-hover:bg-[#C29D44] group-hover:text-white'
                              }`}>
                  {iconComponents[service.icon]}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3 group-hover:text-[#5D3C83] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 text-sm flex-grow">
                  {service.description}
                </p>

                {/* CTA Link with arrow animation */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-[#5D3C83] font-semibold text-sm 
                           hover:gap-3 transition-all duration-300 group/link"
                >
                  {t.services.bookNow}
                  <svg className="w-4 h-4 rtl:rotate-180 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>

                {/* Decorative corner gradient on hover */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden rounded-tr-2xl">
                  <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-[#5D3C83]/10 to-transparent" />
                </div>

                {/* Bottom line that appears on hover */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#5D3C83] via-[#C29D44] to-[#90A36D]
                              group-hover:w-3/4 transition-all duration-500 rounded-full" />
              </GlassCard>
            </TiltCard>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
