'use client';

import React, { useState, useCallback, useEffect, useRef } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { ScrollReveal, LineReveal, GlassCard } from '@/components/animations';

// Large Quote Icon Component
const LargeQuoteIcon = () => (
  <svg 
    className="w-16 h-16 md:w-20 md:h-20" 
    viewBox="0 0 80 80" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M20 45C13.373 45 8 39.627 8 33V25C8 18.373 13.373 13 20 13H28V21H20C17.79 21 16 22.79 16 25V29H28V45H20ZM52 45C45.373 45 40 39.627 40 33V25C40 18.373 45.373 13 52 13H60V21H52C49.79 21 48 22.79 48 25V29H60V45H52Z"
      fill="currentColor"
      opacity="0.15"
    />
  </svg>
);

export default function TestimonialsSection() {
  const { t, locale, direction } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  
  const testimonials = t.testimonials.items;
  const totalTestimonials = testimonials.length;

  // Navigate to specific testimonial
  const goToTestimonial = useCallback((index: number) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex(index);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
  }, [isTransitioning]);

  // Next/Previous navigation
  const handleNext = useCallback(() => {
    const nextIndex = (currentIndex + 1) % totalTestimonials;
    goToTestimonial(nextIndex);
  }, [currentIndex, totalTestimonials, goToTestimonial]);

  const handlePrev = useCallback(() => {
    const prevIndex = (currentIndex - 1 + totalTestimonials) % totalTestimonials;
    goToTestimonial(prevIndex);
  }, [currentIndex, totalTestimonials, goToTestimonial]);

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying) {
      autoPlayRef.current = setInterval(() => {
        handleNext();
      }, 12000); // 12 seconds per slide
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isPlaying, handleNext]);

  // Toggle play/pause
  const toggleAutoPlay = () => {
    setIsPlaying(!isPlaying);
  };

  // Get direction from context
  // direction is already destructured above

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        if (direction === 'rtl') {
          handleNext();
        } else {
          handlePrev();
        }
      } else if (e.key === 'ArrowRight') {
        if (direction === 'rtl') {
          handlePrev();
        } else {
          handleNext();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, direction]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section 
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ backgroundColor: '#FAFAF8' }}
    >
      {/* Background Pattern - Gold dots */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #C29D44 1.5px, transparent 1.5px)`,
          backgroundSize: '32px 32px',
        }}
      />

      {/* Decorative gradient overlays */}
      <div 
        className="absolute top-0 left-0 w-full h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(144, 163, 109, 0.08), transparent)',
        }}
      />
      <div 
        className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-[0.06] blur-3xl pointer-events-none"
        style={{ backgroundColor: '#90A36D' }}
      />
      <div 
        className="absolute top-1/2 left-0 w-64 h-64 rounded-full opacity-[0.05] blur-3xl pointer-events-none"
        style={{ backgroundColor: '#C29D44' }}
      />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: '#1F3D73' }}
            >
              {t.testimonials.sectionSubtitle}
            </h2>
            <LineReveal 
              direction="center" 
              className="mx-auto h-1.5 rounded-full mb-4"
            />
          </div>
        </ScrollReveal>

        {/* Play/Pause Control - Top Right */}
        <div className="flex justify-end mb-4 px-4">
          <button
            onClick={toggleAutoPlay}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
                     transition-all duration-300 hover:shadow-md active:scale-95`}
            style={{
              backgroundColor: isPlaying ? '#90A36D' : '#FFFFFF',
              color: isPlaying ? '#FFFFFF' : '#5D3C83',
              border: `1.5px solid ${isPlaying ? '#90A36D' : '#E5E5E5'}`,
            }}
            aria-label={isPlaying ? 'Pause autoplay' : 'Start autoplay'}
          >
            {isPlaying ? (
              <>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
                <span>{locale === 'ar' ? 'إيقاف' : 'Pause'}</span>
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span>{locale === 'ar' ? 'تشغيل تلقائي' : 'Auto-play'}</span>
              </>
            )}
          </button>
        </div>

        {/* Main Carousel Container */}
        <div className="relative max-w-4xl mx-auto px-4">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            disabled={isTransitioning}
            className={`absolute top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center
                     transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-40 disabled:cursor-not-allowed
                     hover:-translate-x-1 active:scale-95 hidden sm:flex`}
            style={{
              backgroundColor: '#FFFFFF',
              color: '#5D3C83',
              border: `2px solid rgba(93, 60, 131, 0.2)`,
              [direction === 'rtl' ? 'right' : 'left']: '-12px',
            }}
            aria-label="Previous testimonial"
          >
            <svg 
              className={`w-5 h-5 ${direction === 'rtl' ? '' : 'rotate-180'}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            disabled={isTransitioning}
            className={`absolute top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center
                     transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-40 disabled:cursor-not-allowed
                     hover:translate-x-1 active:scale-95 hidden sm:flex`}
            style={{
              backgroundColor: '#FFFFFF',
              color: '#5D3C83',
              border: `2px solid rgba(93, 60, 131, 0.2)`,
              [direction === 'rtl' ? 'left' : 'right']: '-12px',
            }}
            aria-label="Next testimonial"
          >
            <svg 
              className={`w-5 h-5 ${direction === 'rtl' ? 'rotate-180' : ''}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Testimonial Card */}
          <GlassCard
            blur="lg"
            glow
            className={`relative p-8 md:p-12 transition-all duration-600 ease-in-out min-h-[320px]
                     bg-white border border-gray-100/50
                     ${isTransitioning ? 'scale-[0.98] opacity-70' : 'scale-100 opacity-100'}`}
          >
            {/* Quote Icon */}
            <div className="flex justify-center mb-6">
              <div 
                className="p-4 rounded-2xl"
                style={{ backgroundColor: 'rgba(144, 163, 109, 0.1)' }}
              >
                <LargeQuoteIcon />
              </div>
            </div>

            {/* Testimonial Content with fade/slide animation */}
            <div 
              key={currentIndex}
              className="transition-all duration-600 ease-in-out"
              style={{
                transform: isTransitioning ? 'translateY(10px)' : 'translateY(0)',
                opacity: isTransitioning ? 0 : 1,
              }}
            >
              {/* Text */}
              <p 
                className="text-center text-lg md:text-xl leading-relaxed mb-8"
                style={{ color: '#333333' }}
              >
                &ldquo;{currentTestimonial.text}&rdquo;
              </p>

              {/* Divider */}
              <div 
                className="w-20 h-0.5 mx-auto mb-6 rounded-full"
                style={{ background: 'linear-gradient(90deg, transparent, #C29D44, transparent)' }}
              />

              {/* Author Info */}
              <div className="text-center">
                <p 
                  className="font-bold text-lg mb-1"
                  style={{ color: '#1F3D73' }}
                >
                  {currentTestimonial.name}
                </p>
                <p 
                  className="text-sm"
                  style={{ color: '#888888' }}
                >
                  {currentIndex === 0 
                    ? (locale === 'ar' ? 'مستفيد من العلاج النفسي' : 'Psychotherapy Client')
                    : currentIndex === 1 
                    ? (locale === 'ar' ? 'مستفيدة من الاستشارات الأسرية' : 'Family Counseling Client')
                    : (locale === 'ar' ? 'مستفيد من برنامج الإدمان' : 'Addiction Treatment Client')
                  }
                </p>
              </div>
            </div>

            {/* Decorative corner elements */}
            <div 
              className="absolute top-0 rtl:right-0 ltr:left-0 w-16 h-16 rounded-tr-2xl rounded-bl-xl opacity-30"
              style={{ backgroundColor: 'rgba(93, 60, 131, 0.05)' }}
            />
            <div 
              className="absolute bottom-0 rtl:left-0 ltr:right-0 w-16 h-16 rounded-bl-2xl rounded-tr-xl opacity-30"
              style={{ backgroundColor: 'rgba(194, 157, 68, 0.05)' }}
            />
          </GlassCard>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center items-center gap-3 mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              disabled={isTransitioning}
              className="transition-all duration-300 focus:outline-none disabled:cursor-not-allowed"
              aria-label={`Go to testimonial ${index + 1}`}
            >
              <div
                className={`rounded-full transition-all duration-500 ${
                  index === currentIndex ? 'scale-125' : 'hover:scale-110'
                }`}
                style={{
                  width: index === currentIndex ? '14px' : '10px',
                  height: index === currentIndex ? '14px' : '10px',
                  backgroundColor: index === currentIndex ? '#90A36D' : '#D1D1D1',
                  boxShadow: index === currentIndex ? '0 0 15px rgba(144, 163, 109, 0.4)' : 'none',
                }}
              />
            </button>
          ))}
        </div>

        {/* Counter indicator */}
        <div 
          className="text-center mt-4 text-sm"
          style={{ color: '#999999' }}
        >
          {currentIndex + 1} / {totalTestimonials}
        </div>
      </div>

      {/* Custom duration for transitions */}
      <style jsx global>{`
        .duration-600 {
          transition-duration: 600ms;
        }
      `}</style>
    </section>
  );
}
