'use client';

import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { ScrollReveal, StaggerContainer, LineReveal, TiltCard, GlassCard, FloatingDecorations } from '@/components/animations';

// Service Colors Configuration
const serviceColors = [
  { primary: '#5D3C83', light: 'rgba(93, 60, 131, 0.1)', lighter: 'rgba(93, 60, 131, 0.05)' }, // Deep Purple - Individual Therapy
  { primary: '#C29D44', light: 'rgba(194, 157, 68, 0.1)', lighter: 'rgba(194, 157, 68, 0.05)' }, // Gold - Addiction Treatment
  { primary: '#1F3D73', light: 'rgba(31, 61, 115, 0.1)', lighter: 'rgba(31, 61, 115, 0.05)' }, // Navy Blue - Family Counseling
  { primary: '#90A36D', light: 'rgba(144, 163, 109, 0.1)', lighter: 'rgba(144, 163, 109, 0.05)' }, // Sage Green - Group Therapy
  { primary: '#7A52A3', light: 'rgba(122, 82, 163, 0.1)', lighter: 'rgba(122, 82, 163, 0.05)' }, // Light Purple - Children & Adolescents
  { primary: '#D4B062', light: 'rgba(212, 176, 98, 0.1)', lighter: 'rgba(212, 176, 98, 0.05)' }, // Light Gold - Training
];

// Custom SVG Icons for each service
function IndividualTherapyIcon({ color, size = 48 }: { color: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Person silhouette */}
      <circle cx="32" cy="18" r="10" stroke={color} strokeWidth="2.5" fill="none"/>
      <path d="M14 54c0-10 8-18 18-18s18 8 18 18" stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      {/* Inner glow effect */}
      <circle cx="32" cy="18" r="6" fill={color} opacity="0.15"/>
    </svg>
  );
}

function AddictionTreatmentIcon({ color, size = 48 }: { color: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Heart shape */}
      <path 
        d="M32 56s-22-16-22-30c0-7.18 5.82-13 13-13 3.6 0 6.84 1.46 9 3.82C34.16 14.46 37.4 13 41 13c7.18 0 13 5.82 13 13 0 14-22 30-22 30z" 
        stroke={color} 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill="none"
      />
      {/* Heart inner detail */}
      <path 
        d="M26 28c0-3.31 2.69-6 6-6s6 2.69 6 6c0 4-6 10-6 10s-6-6-6-10z" 
        fill={color} 
        opacity="0.12"
      />
      {/* Pulse line */}
      <path d="M20 32h6l3-6 4 12 3-6h8" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
    </svg>
  );
}

function FamilyCounselingIcon({ color, size = 48 }: { color: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Three people representing family */}
      {/* Center person (larger) */}
      <circle cx="32" cy="16" r="7" stroke={color} strokeWidth="2.5" fill="none"/>
      <path d="M20 42c0-6.63 5.37-12 12-12s12 5.37 12 12" stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      
      {/* Left person (smaller) */}
      <circle cx="12" cy="26" r="5" stroke={color} strokeWidth="2" fill="none"/>
      <path d="M4 46c0-4.42 3.58-8 8-8s8 3.58 8 8" stroke={color} strokeWidth="2" strokeLinecap="round" fill="none"/>
      
      {/* Right person (smaller) */}
      <circle cx="52" cy="26" r="5" stroke={color} strokeWidth="2" fill="none"/>
      <path d="M44 46c0-4.42 3.58-8 8-8s8 3.58 8 8" stroke={color} strokeWidth="2" strokeLinecap="round" fill="none"/>
      
      {/* Connection lines */}
      <path d="M24 36c-4-3-8-4-12-2M40 36c4-3 8-4 12-2" stroke={color} strokeWidth="1.5" strokeDasharray="3 3" opacity="0.4"/>
    </svg>
  );
}

function GroupTherapyIcon({ color, size = 48 }: { color: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Circle of people representing group */}
      {/* Top center */}
      <circle cx="32" cy="12" r="5" stroke={color} strokeWidth="2" fill="none"/>
      <path d="M25 28c0-3.87 3.13-7 7-7s7 3.13 7 7" stroke={color} strokeWidth="2" strokeLinecap="round" fill="none"/>
      
      {/* Left */}
      <circle cx="14" cy="28" r="5" stroke={color} strokeWidth="2" fill="none"/>
      <path d="M7 44c0-3.87 3.13-7 7-7s7 3.13 7 7" stroke={color} strokeWidth="2" strokeLinecap="round" fill="none"/>
      
      {/* Right */}
      <circle cx="50" cy="28" r="5" stroke={color} strokeWidth="2" fill="none"/>
      <path d="M43 44c0-3.87 3.13-7 7-7s7 3.13 7 7" stroke={color} strokeWidth="2" strokeLinecap="round" fill="none"/>
      
      {/* Bottom center */}
      <circle cx="32" cy="44" r="5" stroke={color} strokeWidth="2" fill="none"/>
      <path d="M25 58c0-3.87 3.13-7 7-7s7 3.13 7 7" stroke={color} strokeWidth="2" strokeLinecap="round" fill="none"/>
      
      {/* Center circle connecting all */}
      <circle cx="32" cy="35" r="10" stroke={color} strokeWidth="1.5" strokeDasharray="4 3" opacity="0.4" fill="none"/>
    </svg>
  );
}

function ChildAdolescentIcon({ color, size = 48 }: { color: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Child figure - smaller head proportion */}
      <circle cx="32" cy="18" r="9" stroke={color} strokeWidth="2.5" fill="none"/>
      <path d="M16 54c0-8.84 7.16-16 16-16s16 7.16 16 16" stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      
      {/* Playful element - star/sparkle on head */}
      <path d="M44 10l2 4 4 2-4 2-2 4-2-4-4-2 4-2z" fill={color} opacity="0.4"/>
      
      {/* Smaller star */}
      <path d="M18 14l1 2 2 1-2 2-1 2-1-2-2-2 2-1z" fill={color} opacity="0.25"/>
      
      {/* Cute face hint */}
      <circle cx="28" cy="17" r="1.5" fill={color} opacity="0.3"/>
      <circle cx="36" cy="17" r="1.5" fill={color} opacity="0.3"/>
      <path d="M29 23c1.5 1.5 4.5 1.5 6 0" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
    </svg>
  );
}

function TrainingIcon({ color, size = 48 }: { color: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Book/Certificate shape */}
      <rect x="14" y="10" width="36" height="44" rx="3" stroke={color} strokeWidth="2.5" fill="none"/>
      
      {/* Book spine detail */}
      <line x1="22" y1="10" x2="22" y2="54" stroke={color} strokeWidth="1.5" opacity="0.3"/>
      
      {/* Text lines */}
      <line x1="28" y1="20" x2="44" y2="20" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
      <line x1="28" y1="28" x2="44" y2="28" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
      <line x1="28" y1="36" x2="38" y2="36" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
      
      {/* Certificate seal/badge */}
      <circle cx="32" cy="45" r="6" stroke={color} strokeWidth="2" fill={color} fillOpacity="0.08"/>
      <path d="M32 41v8M28 45h8" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      
      {/* Ribbon tails */}
      <path d="M28 51l-3 5 3-2 3 2-3-5" fill={color} opacity="0.3"/>
      <path d="M36 51l3 5-3-2-3 2 3-5" fill={color} opacity="0.3"/>
    </svg>
  );
}

// Icon component mapper
const ServiceIcons = [
  IndividualTherapyIcon,
  AddictionTreatmentIcon,
  FamilyCounselingIcon,
  GroupTherapyIcon,
  ChildAdolescentIcon,
  TrainingIcon,
];

export default function ServicesSection() {
  const { t, locale, direction } = useLanguage();

  // Split services into two rows
  const firstRowServices = t.services.items.slice(0, 3);
  const secondRowServices = t.services.items.slice(3, 6);

  return (
    <section id="services" className="py-20 md:py-32 relative overflow-hidden">
      {/* Gradient Background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, #FAFAF8 0%, rgba(144, 163, 109, 0.08) 50%, #FAFAF8 100%)',
        }}
      />
      
      {/* Background Decorative Blobs */}
      <div 
        className="absolute top-[10%] right-[5%] w-72 h-72 rounded-full blur-3xl pointer-events-none opacity-30"
        style={{ backgroundColor: 'rgba(93, 60, 131, 0.08)' }}
      />
      <div 
        className="absolute bottom-[15%] left-[5%] w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-25"
        style={{ backgroundColor: 'rgba(194, 157, 68, 0.1)' }}
      />
      
      <FloatingDecorations variant="services" className="z-[1]" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <span 
              className="inline-block px-5 py-2 rounded-full text-sm font-medium mb-5 backdrop-blur-sm border"
              style={{
                backgroundColor: 'rgba(144, 163, 109, 0.12)',
                color: '#7A8C5A',
                borderColor: 'rgba(144, 163, 109, 0.2)',
              }}
            >
              {t.services.sectionTitle}
            </span>
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight"
              style={{ color: '#1F3D73' }}
            >
              {t.services.sectionSubtitle}
            </h2>
            <LineReveal 
              direction="center" 
              className="mx-auto w-24 h-1.5 rounded-full"
            />
          </div>
        </ScrollReveal>

        {/* First Row - Vertical Cards (Icon on Top) */}
        <StaggerContainer staggerDelay={0.15} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
          {firstRowServices.map((service, index) => {
            const IconComponent = ServiceIcons[index];
            const colors = serviceColors[index];
            
            return (
              <TiltCard key={index} tiltStrength={5} glareEnabled>
                <ScrollReveal direction="up" delay={0.15 * index} duration={0.8}>
                  <GlassCard
                    blur="lg"
                    glow
                    className="group relative p-8 h-full border transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 rounded-3xl overflow-hidden bg-white"
                  >
                    {/* Background decoration on hover */}
                    <div 
                      className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full blur-2xl"
                      style={{ backgroundColor: colors.light }}
                    />
                    
                    {/* Large Icon Container */}
                    <div className="relative z-10 flex justify-center mb-6">
                      <div 
                        className="w-24 h-24 rounded-3xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg"
                        style={{ 
                          backgroundColor: colors.light,
                        }}
                      >
                        <IconComponent color={colors.primary} size={52} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 text-center">
                      <h3 
                        className="text-xl font-bold mb-4 transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text"
                        style={{ 
                          color: '#1F3D73',
                          backgroundImage: `linear-gradient(135deg, ${colors.primary}, ${colors.primary})`,
                          WebkitBackgroundClip: 'text',
                          backgroundClip: 'group-hover:text',
                        }}
                      >
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6 text-sm min-h-[60px]">
                        {service.description}
                      </p>

                      {/* CTA Button */}
                      <a
                        href="#contact"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 group/btn w-full sm:w-auto"
                        style={{
                          backgroundColor: colors.light,
                          color: colors.primary,
                          border: `1px solid rgba(93, 60, 131, 0.15)`,
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = colors.primary;
                          e.currentTarget.style.color = 'white';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = colors.light;
                          e.currentTarget.style.color = colors.primary;
                        }}
                      >
                        {t.services.bookNow}
                        <svg 
                          className={`w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1 ${direction === 'rtl' ? 'rotate-180' : ''}`} 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </div>

                    {/* Bottom accent line */}
                    <div 
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 rounded-b-3xl transition-all duration-700 group-hover:w-3/4"
                      style={{ backgroundColor: colors.primary }}
                    />
                  </GlassCard>
                </ScrollReveal>
              </TiltCard>
            );
          })}
        </StaggerContainer>

        {/* Second Row - Horizontal Cards (Icon Left, Content Right) */}
        <StaggerContainer staggerDelay={0.15} className="grid gap-5 lg:gap-6">
          {secondRowServices.map((service, index) => {
            const actualIndex = index + 3;
            const IconComponent = ServiceIcons[actualIndex];
            const colors = serviceColors[actualIndex];
            
            return (
              <ScrollReveal key={actualIndex} direction="right" delay={0.2 + index * 0.1} duration={0.8}>
                <GlassCard
                  blur="md"
                  className="group relative p-6 lg:p-8 border transition-all duration-700 hover:shadow-xl rounded-2xl overflow-hidden cursor-pointer bg-white"
                >
                  {/* Subtle background accent */}
                  <div 
                    className="absolute inset-y-0 start-0 w-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-r-lg"
                    style={{ backgroundColor: colors.primary }}
                  />
                  
                  <div className="flex flex-col sm:flex-row items-start gap-6">
                    {/* Icon Container - Horizontal Layout */}
                    <div 
                      className="flex-shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-105"
                      style={{ backgroundColor: colors.light }}
                    >
                      <IconComponent color={colors.primary} size={42} />
                    </div>

                    {/* Content */}
                    <div className="flex-grow min-w-0">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-grow">
                          <h3 
                            className="text-lg lg:text-xl font-bold mb-2 transition-colors duration-300"
                            style={{ color: '#1F3D73' }}
                          >
                            {service.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed text-sm mb-4 line-clamp-2 sm:line-clamp-none">
                            {service.description}
                          </p>
                        </div>

                        {/* CTA Arrow */}
                        <a
                          href="#contact"
                          className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 group/link self-start"
                          style={{
                            color: colors.primary,
                            backgroundColor: colors.lighter,
                            border: `1px solid rgba(93, 60, 131, 0.08)`,
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = colors.light;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = colors.lighter;
                          }}
                        >
                          <span className="hidden sm:inline">{t.services.bookNow}</span>
                          <svg 
                            className={`w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1 ${direction === 'rtl' ? 'rotate-180' : ''}`} 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </a>
                      </div>
                      
                      {/* Progress bar indicator */}
                      <div className="mt-4 h-1 rounded-full overflow-hidden" style={{ backgroundColor: colors.light }}>
                        <div 
                          className="h-full rounded-full transition-all duration-700 group-hover:w-full"
                          style={{ 
                            width: '30%',
                            backgroundColor: colors.primary,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </ScrollReveal>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
