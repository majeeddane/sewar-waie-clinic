'use client';

import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { ScrollReveal, StaggerContainer, LineReveal, TiltCard, GlassCard } from '@/components/animations';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export default function TeamSection() {
  const { t } = useLanguage();

  // Generate initials for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .slice(0, 2);
  };

  const avatarColors = [
    'bg-gradient-to-br from-[#5D3C83] to-[#4A2F6A]',
    'bg-gradient-to-br from-[#90A36D] to-[#7A8C5A]',
    'bg-gradient-to-br from-[#1F3D73] to-[#152B54]',
    'bg-gradient-to-br from-[#C29D44] to-[#A88535]',
  ];

  return (
    <section id="team" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#FAFAF8] to-transparent pointer-events-none" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium 
                         bg-[#5D3C83]/10 text-[#5D3C83] mb-4 backdrop-blur-sm border border-white/20">
              {t.team.sectionTitle}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#5D3C83] mb-4">
              {t.team.sectionSubtitle}
            </h2>
            <LineReveal direction="center" className="mx-auto w-20 h-1.5 rounded-full" />
          </div>
        </ScrollReveal>

        {/* Team Grid with Stagger and Tilt */}
        <StaggerContainer staggerDelay={0.15} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {t.team.members.map((member, index) => (
            <TiltCard key={index} tiltStrength={8} glareEnabled>
              <GlassCard
                blur="lg"
                glow
                className="group text-center p-6 border-transparent hover:border-[#5D3C83]/15 transition-all duration-500 h-full"
              >
                {/* Avatar with hover effect */}
                <div className="relative inline-block mb-5">
                  <Avatar className="w-28 h-28 mx-auto ring-4 ring-white/80 shadow-lg 
                              group-hover:ring-[#C29D44] group-hover:shadow-xl transition-all duration-500
                              group-hover:scale-105">
                    <AvatarFallback className={`${avatarColors[index]} text-white text-2xl font-bold`}>
                      {getInitials(member.name)}
                    </AvatarFallback>
                  </Avatar>
                  
                  {/* Status indicator with pulse */}
                  <div className="absolute -bottom-1 right-1/2 translate-x-1/2 w-4 h-4 rounded-full bg-green-400 
                                border-2 border-white shadow-sm animate-pulse" />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 rounded-full bg-[#5D3C83]/10 opacity-0 group-hover:opacity-100 
                                transition-opacity duration-500 pointer-events-none" />
                </div>

                {/* Info */}
                <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100 mb-1 group-hover:text-[#5D3C83] transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-[#5D3C83] font-medium text-sm mb-3">{member.specialty}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{member.bio}</p>

                {/* Social Link on hover */}
                <div className="flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <a href="#contact" className="w-9 h-9 rounded-full bg-[#5D3C83]/10 flex items-center justify-center 
                                        hover:bg-[#5D3C83] hover:text-white transition-all duration-300">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>

                {/* Bottom accent line */}
                <div className="mt-4 pt-4 border-t border-gray-100/50">
                  <div className={`w-12 h-0.5 mx-auto rounded-full transition-all duration-500 
                                ${index === 0 ? 'bg-[#5D3C83]' : index === 1 ? 'bg-[#90A36D]' : index === 2 ? 'bg-[#1F3D73]' : 'bg-[#C29D44]'}`} />
                </div>
              </GlassCard>
            </TiltCard>
          ))}
        </StaggerContainer>

        {/* View All CTA */}
        <ScrollReveal direction="up" delay={0.8}>
          <div className="text-center mt-12">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#5D3C83] text-[#5D3C83] 
                       hover:bg-[#5D3C83] hover:text-white font-semibold rounded-xl transition-all duration-500 group"
            >
              {t.team.viewAll}
              <svg className="w-4 h-4 rtl:rotate-180 transition-transform duration-300 group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
