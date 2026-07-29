'use client';

import React, { useRef, useState, useCallback, useEffect } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { ScrollReveal, GlassCard } from '@/components/animations';

export default function TeamSection() {
  const { t, locale, direction } = useLanguage();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Generate initials for avatar fallback
  const getInitials = (name: string) => {
    return name.split(' ').map(word => word[0]).join('').slice(0, 2);
  };

  // Unique color scheme for each member - professional palette
  const memberStyles = [
    { 
      gradient: 'from-[#5D3C83] to-[#7A52A3]', 
      accent: '#C29D44',
      bgLight: 'rgba(93, 60, 131, 0.08)',
      pattern: 'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.15) 1px, transparent 1px)',
      iconBg: 'rgba(194, 157, 68, 0.2)',
      cornerColor: 'rgba(255, 255, 255, 0.1)'
    },
    { 
      gradient: 'from-[#90A36D] to-[#A8BA85]', 
      accent: '#1F3D73',
      bgLight: 'rgba(144, 163, 109, 0.08)',
      pattern: 'radial-gradient(circle at 70% 30%, rgba(255,255,255,0.15) 1px, transparent 1px)',
      iconBg: 'rgba(31, 61, 115, 0.2)',
      cornerColor: 'rgba(255, 255, 255, 0.15)'
    },
    { 
      gradient: 'from-[#1F3D73] to-[#2D5299]', 
      accent: '#90A36D',
      bgLight: 'rgba(31, 61, 115, 0.08)',
      pattern: 'radial-gradient(circle at 50% 70%, rgba(255,255,255,0.12) 1px, transparent 1px)',
      iconBg: 'rgba(144, 163, 109, 0.2)',
      cornerColor: 'rgba(144, 163, 109, 0.15)'
    },
    { 
      gradient: 'from-[#C29D44] to-[#D4B062]', 
      accent: '#5D3C83',
      bgLight: 'rgba(194, 157, 68, 0.08)',
      pattern: 'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.18) 1px, transparent 1px)',
      iconBg: 'rgba(93, 60, 131, 0.2)',
      cornerColor: 'rgba(93, 60, 131, 0.1)'
    },
  ];

  // Avatar illustration components - unique for each member type
  const renderAvatarIllustration = (initials: string, styleIndex: number) => {
    const style = memberStyles[styleIndex % memberStyles.length];
    
    // Different avatar styles based on index for variety
    const renderAvatarStyle = (initials: string, styleIndex: number) => {
      switch (styleIndex % 4) {
        case 0:
          // Style 1: Rounded square with inner circle
          return (
            <div key="avatar-1" className={`w-full h-full rounded-xl bg-gradient-to-br ${style.gradient} flex items-center justify-center relative overflow-hidden`}>
              {/* Decorative circles */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full border-2 border-white/20" />
              <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full border border-white/10" />
              <span className="text-white text-3xl font-bold relative z-10 tracking-wide">
                {initials}
              </span>
            </div>
          );
        case 1:
          // Style 2: Diagonal stripes pattern
          return (
            <div key="avatar-2" className={`w-full h-full rounded-xl bg-gradient-to-br ${style.gradient} flex items-center justify-center relative overflow-hidden`}>
              <div 
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 8px, white 8px, white 9px)`
                }}
              />
              <span className="text-white text-3xl font-bold relative z-10">
                {initials}
              </span>
            </div>
          );
        case 2:
          // Style 3: Geometric pattern
          return (
            <div key="avatar-3" className={`w-full h-full rounded-xl bg-gradient-to-br ${style.gradient} flex items-center justify-center relative overflow-hidden`}>
              <div 
                className="absolute bottom-0 right-0 w-0 h-0"
                style={{
                  borderLeft: '40px solid transparent',
                  borderTop: '40px solid rgba(255,255,255,0.1)'
                }}
              />
              <div 
                className="absolute top-0 left-0 w-0 h-0"
                style={{
                  borderRight: '30px solid transparent',
                  borderBottom: '30px solid rgba(255,255,255,0.08)'
                }}
              />
              <span className="text-white text-3xl font-bold relative z-10">
                {initials}
              </span>
            </div>
          );
        default:
          // Style 4: Dots pattern
          return (
            <div key="avatar-4" className={`w-full h-full rounded-xl bg-gradient-to-br ${style.gradient} flex items-center justify-center relative overflow-hidden`}>
              <div 
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage: `${style.pattern}`,
                  backgroundSize: '14px 14px'
                }}
              />
              <span className="text-white text-3xl font-bold relative z-10">
                {initials}
              </span>
            </div>
          );
      }
    };

    return renderAvatarStyle(initials, styleIndex);
  };

  // Mouse/touch drag handlers for horizontal scroll
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!scrollContainerRef.current || isMobile) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  }, [isMobile]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current || isMobile) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Scroll speed multiplier
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  }, [isDragging, startX, scrollLeft, isMobile]);

  // Touch handlers for mobile
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (!scrollContainerRef.current) return;
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!scrollContainerRef.current) return;
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  }, [startX, scrollLeft]);

  // Prevent click events when dragging
  const handleClick = useCallback((e: React.MouseEvent) => {
    if (isDragging) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, [isDragging]);

  return (
    <section id="team" className="py-20 md:py-28 relative overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#FAFAF8] to-transparent pointer-events-none" />
      
      {/* Subtle top decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#5D3C83]/[0.02] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-[#90A36D]/[0.03] rounded-full blur-3xl pointer-events-none" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center max-w-3xl mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-[#5D3C83]/10 text-[#5D3C83] mb-4 backdrop-blur-sm border border-white/20">
              {t.team.sectionTitle}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#5D3C83] mb-4 leading-tight">
              {t.team.sectionSubtitle}
            </h2>
            {/* Gold accent line */}
            <div className="w-20 h-1.5 rounded-full mx-auto bg-gradient-to-r from-[#C29D44] via-[#D4B062] to-[#90A36D]" />
          </div>
        </ScrollReveal>

        {/* Scroll hint for mobile/tablet */}
        <div className="flex justify-center mb-6 lg:hidden">
          <div className="scroll-hint flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-100 text-sm text-gray-500 animate-pulse-slow">
            <svg className="w-5 h-5 text-[#5D3C83]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
            </svg>
            <span className="font-medium">{locale === 'ar' ? 'اسحب لاستعراض الفريق' : 'Swipe to browse team'}</span>
            <svg className={`w-4 h-4 ${locale === 'ar' ? '' : 'rotate-180'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>

        {/* HORIZONTAL SCROLL CONTAINER - The main feature! */}
        <div 
          ref={scrollContainerRef}
          className="horizontal-scroll-container gap-6 pb-6 px-2 select-none"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onClick={handleClick}
          style={{ 
            cursor: isDragging ? 'grabbing' : 'grab',
            userSelect: isDragging ? 'none' : 'auto'
          }}
          dir="ltr" // Force LTR for horizontal scroll consistency
        >
          {t.team.members.map((member, index) => {
            const style = memberStyles[index % memberStyles.length];
            
            return (
              <div 
                key={index} 
                className="horizontal-scroll-item w-[300px] sm:w-[320px] md:w-[340px]"
                dir={direction} // Restore direction inside cards
              >
                <GlassCard
                  blur="lg"
                  glow
                  className="team-card group h-full overflow-hidden border border-transparent hover:border-gray-100/80 rounded-3xl bg-white shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
                >
                  {/* UNIQUE CARD TOP - Colored header area with avatar overlapping boundary */}
                  <div 
                    className={`relative h-44 sm:h-48 bg-gradient-to-br ${style.gradient} p-6 flex flex-col justify-between overflow-hidden`}
                  >
                    {/* Pattern overlay - unique per card */}
                    <div 
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage: style.pattern,
                        backgroundSize: '18px 18px'
                      }}
                    />

                    {/* Decorative elements based on card index */}
                    {index % 4 === 0 && (
                      <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm rotate-12" />
                    )}
                    {index % 4 === 1 && (
                      <>
                        <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-white/10" />
                        <div className="absolute top-12 left-10 w-4 h-4 rounded-full bg-white/10" />
                      </>
                    )}
                    {index % 4 === 2 && (
                      <div className="absolute top-4 right-4 flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-white/20" />
                        <div className="w-2 h-2 rounded-full bg-white/20" />
                        <div className="w-2 h-2 rounded-full bg-white/20" />
                      </div>
                    )}
                    {index % 4 === 3 && (
                      <div className="absolute top-4 right-4 w-0 h-0 border-t-[20px] border-t-transparent border-l-[24px] border-l-white/10 border-b-[20px] border-b-transparent" />
                    )}

                    {/* Specialty badge at top */}
                    <div className="relative z-10 flex justify-between items-start">
                      <span className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-semibold text-white/90 bg-white/15 backdrop-blur-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 mr-2 animate-pulse" />
                        {member.specialty.split(' ')[0]}
                      </span>
                      
                      {/* Card number */}
                      <span className="text-white/30 text-lg font-bold font-mono">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Avatar - positioned to overlap the boundary between header and content */}
                    <div className="relative mt-auto pt-4">
                      <div className={`w-26 h-26 w-[100px] h-[100px] rounded-2xl bg-white p-1.5 shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2 group-hover:rotate-[-2deg]`}>
                        {renderAvatarIllustration(getInitials(member.name), index)}
                      </div>
                      
                      {/* Online status indicator */}
                      <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-400 rounded-full border-3 border-white shadow-md flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>
                      
                      {/* Hover ring effect */}
                      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/30 transition-all duration-500 scale-110" />
                    </div>
                  </div>

                  {/* Card Content Area */}
                  <div className="p-6 pt-5 relative">
                    {/* Subtle top divider */}
                    <div 
                      className="absolute top-0 left-6 right-6 h-px"
                      style={{ background: `linear-gradient(to right, transparent, ${style.bgLight}, transparent)` }}
                    />

                    {/* Name with hover effect */}
                    <h3 className="text-xl font-bold text-gray-800 mb-1.5 transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#5D3C83] group-hover:to-[#C29D44]">
                      {member.name}
                    </h3>
                    
                    {/* Full specialty title */}
                    <p className="text-sm font-semibold mb-4 flex items-center gap-2" style={{ color: style.accent }}>
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: style.accent }} />
                      {member.specialty}
                    </p>
                    
                    {/* Bio - truncated elegantly */}
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-6 min-h-[4.5rem]">
                      {member.bio}
                    </p>

                    {/* Bottom action area */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                      {/* Contact button - appears on hover */}
                      <a 
                        href="#contact"
                        className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300
                                 opacity-60 hover:opacity-100 transform hover:scale-105 active:scale-95`}
                        style={{
                          backgroundColor: style.bgLight,
                          color: style.accent,
                        }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span>{locale === 'ar' ? 'تواصل' : 'Contact'}</span>
                      </a>
                      
                      {/* Experience indicator or additional info */}
                      <div className="flex items-center gap-1.5 text-xs text-gray-400">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span>{locale === 'ar' ? 'متاح' : 'Available'}</span>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </div>
            );
          })}
        </div>

        {/* Navigation arrows for desktop - optional visual affordance */}
        <div className="hidden lg:flex justify-center mt-8 gap-4">
          <button 
            onClick={() => {
              if (scrollContainerRef.current) {
                scrollContainerRef.current.scrollBy({ left: -360, behavior: 'smooth' });
              }
            }}
            className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#5D3C83] hover:text-[#5D3C83] transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Scroll left"
          >
            <svg className="w-5 h-5 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {/* Progress dots indicator */}
          <div className="flex items-center gap-2 px-4">
            {t.team.members.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  if (scrollContainerRef.current) {
                    const itemWidth = 340 + 24; // width + gap
                    scrollContainerRef.current.scrollTo({ left: i * itemWidth, behavior: 'smooth' });
                  }
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === 0 ? 'bg-[#5D3C83] w-6' : 'bg-gray-200 hover:bg-gray-300'
                }`}
                aria-label={`Go to team member ${i + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={() => {
              if (scrollContainerRef.current) {
                scrollContainerRef.current.scrollBy({ left: 360, behavior: 'smooth' });
              }
            }}
            className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#5D3C83] hover:text-[#5D3C83] transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Scroll right"
          >
            <svg className="w-5 h-5 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* View All CTA */}
        <ScrollReveal direction="up" delay={0.6}>
          <div className="text-center mt-10">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#5D3C83] text-[#5D3C83] hover:bg-[#5D3C83] hover:text-white font-semibold rounded-xl transition-all duration-500 group shadow-sm hover:shadow-lg hover:shadow-[#5D3C83]/20"
            >
              {t.team.viewAll}
              <svg className={`w-5 h-5 ${locale === 'ar' ? 'rotate-180' : ''} transition-transform duration-300 group-hover:${locale === 'ar' ? '-translate-x-1' : 'translate-x-1'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* Custom styles for animations */}
      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
        
        /* Hide scrollbar during drag */
        .dragging .horizontal-scroll-container {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .dragging .horizontal-scroll-container::-webkit-scrollbar {
          display: none;
        }

        /* Smooth snap scrolling */
        .horizontal-scroll-container {
          scroll-behavior: smooth;
        }

        /* Line clamp utility */
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}
