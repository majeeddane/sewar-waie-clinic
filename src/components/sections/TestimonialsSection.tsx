'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { FadeInUp } from '@/components/effects/TextReveal';

// Testimonial data with realistic Arabic testimonials
const testimonialsData = [
  {
    id: 1,
    text: 'تجربتي في سوار وعي غيرت حياتي تماماً. الفريق هنا لا يعالج فقط، بل يصغي ويفهم. شعرت لأول مرة أنني في مكان آمن يمكنني فيه أن أكون نفسي.',
    name: 'أ. محمد',
    role: 'مستفيد من العلاج الفردي',
    initials: 'م',
  },
  {
    id: 2,
    text: 'بعد سنوات من البحث عن المساعدة الصحيحة، وجدت أخيراً في سوار وعي ما كنت أحتاجه. الاحترافية والخصوصية والرعاية الإنسانية في أعلى مستوياتها.',
    name: 'س. نورة',
    role: 'متخصصة في العلاج الجماعي',
    initials: 'ن',
  },
  {
    id: 3,
    text: 'كأم، كان قرار طلب المساعدة لابنتي صعباً. لكن فريق سوار وعي جعل الرحلة مريحة لنا جميعاً. نحن ممتنون لهذا المركز الرائع.',
    name: 'و. خالد',
    role: 'ولي أمر',
    initials: 'خ',
  },
];

export default function TestimonialsSection() {
  const { t, locale, direction } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  const currentTestimonial = testimonialsData[currentIndex];
  const isRTL = direction === 'rtl';

  // Manual navigation - no auto-play for respectful experience
  const goToTestimonial = useCallback((index: number) => {
    if (isTransitioning || index === currentIndex) return;
    
    setIsTransitioning(true);
    
    // Start fade out
    setTimeout(() => {
      setCurrentIndex(index);
      setDisplayedText('');
      
      // Start character-by-character reveal after index change
      setTimeout(() => {
        const newText = testimonialsData[index].text;
        let charIndex = 0;
        
        const revealInterval = setInterval(() => {
          if (charIndex <= newText.length) {
            setDisplayedText(newText.slice(0, charIndex));
            charIndex++;
          } else {
            clearInterval(revealInterval);
          }
        }, 30); // Speed of character reveal
        
        setIsTransitioning(false);
      }, 200);
    }, 300); // Crossfade duration
  }, [currentIndex, isTransitioning]);

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? testimonialsData.length - 1 : currentIndex - 1;
    goToTestimonial(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex === testimonialsData.length - 1 ? 0 : currentIndex + 1;
    goToTestimonial(newIndex);
  };

  const handleDotClick = (index: number) => {
    goToTestimonial(index);
  };

  // Initialize displayed text on mount and when language changes
  useEffect(() => {
    setDisplayedText(currentTestimonial.text);
  }, [currentTestimonial.text]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="testimonials" 
      className="section-spacing relative overflow-hidden"
      style={{ backgroundColor: '#FAFAF8' }}
    >
      {/* Subtle background texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.4]" aria-hidden="true">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C29D44' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Subtle decorative element at very low opacity */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(194, 157, 68, 0.04) 0%, transparent 70%)',
          top: '-10%',
          right: '-15%',
        }}
        aria-hidden="true"
      />

      <div className="container-custom relative z-10">
        {/* Section Header - Minimal & Elegant */}
        <FadeInUp>
          <div className="text-center mb-20 md:mb-28">
            {/* Section Label - Small Gold Text */}
            <span 
              className="inline-block text-sm tracking-[0.25em] uppercase mb-6"
              style={{ 
                fontFamily: 'var(--font-body-arabic)',
                color: '#C29D44',
              }}
            >
              {locale === 'ar' ? 'قصص نجاح' : 'Success Stories'}
            </span>
            
            {/* Section Title */}
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-light"
              style={{ 
                fontFamily: 'var(--font-display-arabic)',
                color: '#2d2d2d',
              }}
            >
              {t.testimonials.sectionTitle}
            </h2>
          </div>
        </FadeInUp>

        {/* Main Testimonial Display - Large Typography Focus */}
        <div className="relative max-w-[800px] mx-auto">
          
          {/* Giant Decorative Quote Mark */}
          <div 
            className={`absolute select-none pointer-events-none transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
            style={{
              [isRTL ? 'right' : 'left']: '-20px',
              top: '-60px',
              fontSize: 'clamp(120px, 15vw, 180px)',
              fontFamily: 'Georgia, "Times New Roman", serif',
              color: '#C29D44',
              opacity: 0.12,
              lineHeight: 1,
              zIndex: 0,
            }}
            aria-hidden="true"
          >
            {isRTL ? '\u201D' : '\u201C'}
          </div>

          {/* Testimonial Content Container */}
          <div 
            className="relative min-h-[320px] md:min-h-[280px] flex flex-col justify-center"
            style={{ zIndex: 1 }}
          >
            {/* The Star: Large Testimonial Text */}
            <blockquote className="text-center">
              <p
                className={`
                  text-[clamp(22px,3vw,38px)] leading-[1.6] font-light italic
                  transition-all duration-600 ease-out
                  ${isTransitioning ? 'opacity-0 translate-y-[10px]' : 'opacity-100 translate-y-0'}
                `}
                style={{
                  fontFamily: locale === 'ar' ? 'var(--font-body-arabic)' : 'Georgia, serif',
                  color: '#2d2d2d',
                  fontWeight: 300,
                  transitionTimingFunction: 'cubic-bezier(0.25, 1, 0.5, 1)',
                }}
              >
                {displayedText || currentTestimonial.text}
              </p>
            </blockquote>

            {/* Author Information */}
            <footer 
              className={`
                mt-10 md:mt-14 text-center transition-all duration-500 delay-100
                ${isTransitioning ? 'opacity-0 translate-y-[8px]' : 'opacity-100 translate-y-0'}
              `}
              style={{
                transitionTimingFunction: 'cubic-bezier(0.25, 1, 0.5, 1)',
              }}
            >
              {/* Avatar / Initials Circle */}
              <div className="flex justify-center mb-4">
                <div 
                  className="w-14 h-14 rounded-full flex items-center justify-center text-lg font-medium"
                  style={{
                    background: 'linear-gradient(135deg, #C29D44 0%, #A88535 100%)',
                    color: '#FFFFFF',
                    fontFamily: 'var(--font-display-arabic)',
                  }}
                >
                  {currentTestimonial.initials}
                </div>
              </div>
              
              {/* Name */}
              <p 
                className="text-lg md:text-xl font-semibold mb-1"
                style={{ 
                  fontFamily: 'var(--font-display-arabic)',
                  color: '#1F3D73',
                }}
              >
                — {currentTestimonial.name}
              </p>
              
              {/* Role/Context */}
              <p 
                className="text-sm"
                style={{ 
                  fontFamily: 'var(--font-body-arabic)',
                  color: '#C29D44',
                }}
              >
                {currentTestimonial.role}
              </p>
            </footer>
          </div>

          {/* Navigation Controls - Elegant & Subtle */}
          <div 
            className="flex items-center justify-center gap-6 mt-16 md:mt-20"
            style={{ direction: 'ltr' }}
          >
            {/* Previous Arrow */}
            <button
              onClick={handlePrev}
              disabled={isTransitioning}
              className={`group w-12 h-12 flex items-center justify-center border border-gray-300/50 rounded-full transition-all duration-300 ease-out hover:border-[#5D3C83]/30 hover:bg-[#5D3C83]/5 disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5D3C83]/50 focus-visible:ring-offset-2`}
              aria-label={locale === 'ar' ? 'الشهادة السابقة' : 'Previous testimonial'}
            >
              <svg 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="transition-colors duration-300 text-gray-500 group-hover:text-[#5D3C83]"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dot Indicators - Minimal */}
            <div 
              className="flex items-center gap-3"
              role="tablist"
              aria-label={locale === 'ar' ? 'تنقل بين الشهادات' : 'Navigate between testimonials'}
            >
              {testimonialsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  disabled={isTransitioning}
                  className={`relative transition-all duration-400 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C29D44]/50 focus-visible:ring-offset-2 rounded-full disabled:cursor-not-allowed`}
                  style={{
                    width: index === currentIndex ? '32px' : '8px',
                    height: '8px',
                    borderRadius: '9999px',
                    backgroundColor: index === currentIndex ? '#C29D44' : '#d1d5db',
                    transitionTimingFunction: 'cubic-bezier(0.25, 1, 0.5, 1)',
                  }}
                  role="tab"
                  aria-selected={index === currentIndex}
                  aria-label={`${locale === 'ar' ? 'شهادة' : 'Testimonial'} ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Arrow */}
            <button
              onClick={handleNext}
              disabled={isTransitioning}
              className={`group w-12 h-12 flex items-center justify-center border border-gray-300/50 rounded-full transition-all duration-300 ease-out hover:border-[#5D3C83]/30 hover:bg-[#5D3C83]/5 disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5D3C83]/50 focus-visible:ring-offset-2`}
              aria-label={locale === 'ar' ? 'الشهادة التالية' : 'Next testimonial'}
            >
              <svg 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="transition-colors duration-300 text-gray-500 group-hover:text-[#5D3C83]"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Testimonial Counter - Subtle */}
          <p 
            className="text-center mt-8 text-xs tracking-wider"
            style={{ 
              fontFamily: 'var(--font-body-arabic)',
              color: '#9ca3af',
            }}
          >
            <span style={{ color: '#C29D44', fontWeight: 500 }}>
              {String(currentIndex + 1).padStart(2, '0')}
            </span>
            {' / '}
            <span>{String(testimonialsData.length).padStart(2, '0')}</span>
          </p>
        </div>
      </div>

      {/* Custom styles for smooth transitions */}
      <style jsx global>{`
        .duration-600 {
          transition-duration: 0.6s;
        }
        .duration-400 {
          transition-duration: 0.4s;
        }
        .delay-100 {
          transition-delay: 0.1s;
        }
      `}</style>
    </section>
  );
}
