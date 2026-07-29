'use client';

import { useCallback, useEffect, useState, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { useLanguage } from '@/lib/LanguageContext';

// Enhanced team members data
const teamMembersData = {
  ar: [
    {
      name: 'د. سارة المنصور',
      specialty: 'أخصائية نفسية إكلينيكية',
      credentials: 'دكتوراه في علم النفس الإكلينيكي',
      gradient: 'from-[#5D3C83] to-[#1F3D73]',
      initials: 'س م',
    },
    {
      name: 'د. أحمد الشهري',
      specialty: 'استشاري علاج الإدمان',
      credentials: '15+ عام من الخبرة',
      gradient: 'from-[#7A52A3] to-[#5D3C83]',
      initials: 'أ ش',
    },
    {
      name: 'د. نورة القحطاني',
      specialty: 'أخصائية علاج أسري',
      credentials: 'معتمدة من الجمعية الأمريكية',
      gradient: 'from-[#1F3D73] to-[#2D5299]',
      initials: 'ن ق',
    },
    {
      name: 'محمد الدوسري',
      specialty: 'معالج نفسي معتمد',
      credentials: 'متخصص في العلاج السلوكي المعرفي',
      gradient: 'from-[#5D3C83] to-[#7A52A3]',
      initials: 'م د',
    },
    {
      name: 'د. لينا العتيبي',
      specialty: 'أخصائية طب نفسي للأطفال',
      credentials: 'خبرة في التشخيص المبكر',
      gradient: 'from-[#3D2565] to-[#5D3C83]',
      initials: 'ل ع',
    },
    {
      name: 'خالد السبيعي',
      specialty: 'استشاري علاج سلوكي',
      credentials: 'مدرب معتمد في تقنيات الاسترخاء',
      gradient: 'from-[#2D5299] to-[#1F3D73]',
      initials: 'خ س',
    },
  ],
  en: [
    {
      name: 'Dr. Sara Al-Mansour',
      specialty: 'Clinical Psychologist',
      credentials: 'Ph.D. in Clinical Psychology',
      gradient: 'from-[#5D3C83] to-[#1F3D73]',
      initials: 'SM',
    },
    {
      name: 'Dr. Ahmed Al-Shahri',
      specialty: 'Addiction Treatment Consultant',
      credentials: '15+ Years Experience',
      gradient: 'from-[#7A52A3] to-[#5D3C83]',
      initials: 'AS',
    },
    {
      name: 'Dr. Noura Al-Qahtani',
      specialty: 'Family Therapy Specialist',
      credentials: 'American Association Certified',
      gradient: 'from-[#1F3D73] to-[#2D5299]',
      initials: 'NQ',
    },
    {
      name: 'Mohammed Al-Dosari',
      specialty: 'Certified Psychotherapist',
      credentials: 'CBT Specialist',
      gradient: 'from-[#5D3C83] to-[#7A52A3]',
      initials: 'MD',
    },
    {
      name: 'Dr. Lina Al-Atibi',
      specialty: 'Child Psychiatrist',
      credentials: 'Early Diagnosis Expert',
      gradient: 'from-[#3D2565] to-[#5D3C83]',
      initials: 'LA',
    },
    {
      name: 'Khaled Al-Subaie',
      specialty: 'Behavioral Consultant',
      credentials: 'Relaxation Techniques Certified',
      gradient: 'from-[#2D5299] to-[#1F3D73]',
      initials: 'KS',
    },
  ],
};

interface TeamMemberCardProps {
  member: (typeof teamMembersData.ar)[0];
  index: number;
  isVisible: boolean;
}

function TeamMemberCard({ member, index, isVisible }: TeamMemberCardProps) {
  return (
    <div
      className="flex-shrink-0 w-[280px] sm:w-[300px] lg:w-[280px] xl:w-[300px] group"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : `translateY(${40 + index * 10}px)`,
        transition: `opacity 0.8s cubic-bezier(0.25, 1, 0.5, 1), transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)`,
        transitionDelay: `${index * 100 + 150}ms`,
      }}
    >
      <div 
        className="h-full bg-white rounded-2xl overflow-hidden transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-black/10 hover:-translate-y-2"
        style={{
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)',
        }}
      >
        {/* Photo Area - 65% of card height */}
        <div className="relative aspect-[4/5] overflow-hidden">
          {/* Gradient background with initials */}
          <div 
            className={`absolute inset-0 bg-gradient-br ${member.gradient} flex items-center justify-center transition-transform duration-700 ease-out group-hover:scale-105`}
          >
            {/* Decorative pattern overlay */}
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(0,0,0,0.2) 0%, transparent 50%)`,
              }}
            />
            
            {/* Initials */}
            <span 
              className="relative text-white/90 font-bold select-none transition-all duration-500 group-hover:text-white group-hover:scale-110"
              style={{ 
                fontFamily: 'var(--font-heading-ar)',
                fontSize: 'clamp(48px, 12vw, 72px)',
                letterSpacing: '-0.02em',
              }}
            >
              {member.initials}
            </span>
            
            {/* Subtle overlay on hover */}
            <div 
              className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
          </div>

          {/* Bottom fade on image area */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"
          />
        </div>

        {/* Info Area - 35% of card height */}
        <div className="p-5 pt-3 pb-6">
          {/* Name */}
          <h3 
            className="text-lg font-bold mb-1 text-gray-900 transition-colors duration-300"
            style={{ 
              fontFamily: 'var(--font-heading-ar)',
              lineHeight: 1.3,
            }}
          >
            {member.name}
          </h3>
          
          {/* Specialty - Gold accent */}
          <p 
            className="text-sm font-medium mb-2 transition-colors duration-300"
            style={{ 
              fontFamily: 'var(--font-body-ar)',
              color: '#C29D44',
            }}
          >
            {member.specialty}
          </p>
          
          {/* Credentials - subtle */}
          <p 
            className="text-xs leading-relaxed transition-colors duration-300"
            style={{ 
              fontFamily: 'var(--font-body-ar)',
              color: '#9CA3AF',
            }}
          >
            {member.credentials}
          </p>
        </div>
      </div>
    </div>
  );
}

// Dot indicator component
interface DotButtonProps {
  selected: boolean;
  onClick: () => void;
}

function DotButton({ selected, onClick }: DotButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C29D44]"
      style={{
        width: selected ? '28px' : '8px',
        height: '8px',
        borderRadius: '9999px',
        backgroundColor: selected ? '#C29D44' : 'rgba(93, 60, 131, 0.2)',
        transform: selected ? 'scale(1)' : 'scale(1)',
      }}
      aria-label={selected ? 'Current slide' : `Go to slide`}
    />
  );
}

// Navigation arrow component
interface NavButtonProps {
  onClick: () => void;
  disabled: boolean;
  direction: 'prev' | 'next';
  locale: string;
}

function NavButton({ onClick, disabled, direction, locale }: NavButtonProps) {
  const isRtl = locale === 'ar';
  const isPrev = (direction === 'prev' && !isRtl) || (direction === 'next' && isRtl);
  
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full border transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C29D44] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 active:scale-95"
      style={{
        borderColor: disabled ? '#E5E7EB' : 'rgba(93, 60, 131, 0.3)',
        color: disabled ? '#D1D5DB' : '#5D3C83',
        background: 'white',
      }}
      aria-label={direction === 'prev' ? 'Previous' : 'Next'}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          transform: isPrev ? '' : 'rotate(180deg)',
        }}
      >
        <path d="M15 18l-6-6 6-6" />
      </svg>
    </button>
  );
}

export default function TeamSection() {
  const { t, locale } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  // Embla Carousel setup
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    slidesToScroll: 1,
    containScroll: 'trimSnaps',
    dragFree: false,
    direction: locale === 'ar' ? 'rtl' : 'ltr',
  });
  
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const members = teamMembersData[locale as keyof typeof teamMembersData] || teamMembersData.ar;

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  // Initialize and update scroll snaps
  useEffect(() => {
    if (!emblaApi) return;
    
    // Schedule state updates to avoid synchronous setState in effect
    setTimeout(() => {
      onSelect();
      setScrollSnaps(emblaApi.scrollSnapList());
    }, 0);
    
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  // Reinitialize when locale changes (for RTL/LTR)
  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit({
        direction: locale === 'ar' ? 'rtl' : 'ltr',
      });
    }
  }, [locale, emblaApi]);

  // Intersection Observer for section visibility
  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setTimeout(() => setIsVisible(true), 0);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), 0);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '-50px 0px -50px 0px',
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="team"
      className="relative w-full overflow-hidden"
      style={{
        backgroundColor: '#FAFAF8',
        padding: 'clamp(80px, 10vw, 120px) 0',
      }}
    >
      <div className="container-custom">
        {/* Section Header */}
        <div 
          className="mb-14 lg:mb-16 transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          }}
        >
          {/* Section Label - Gold */}
          <p
            className="text-sm tracking-widest uppercase mb-4"
            style={{
              fontFamily: 'var(--font-body-ar)',
              color: '#C29D44',
              letterSpacing: '0.2em',
              fontWeight: 500,
            }}
          >
            {locale === 'ar' ? 'فريقنا' : 'Our Team'}
          </p>
          
          {/* Main Heading */}
          <h2
            className="text-3xl md:text-4xl lg:text-5xl xl:text-[52px] font-extrabold leading-tight"
            style={{ 
              fontFamily: 'var(--font-heading-ar)',
              color: '#1a1a2e',
              lineHeight: 1.2,
            }}
          >
            {t.team.sectionTitle}
          </h2>
          
          {/* Subtitle */}
          <p
            className="mt-4 text-base lg:text-lg max-w-2xl leading-relaxed"
            style={{
              fontFamily: 'var(--font-body-ar)',
              color: '#6B7280',
            }}
          >
            {t.team.sectionSubtitle}
          </p>
          
          {/* Decorative gold line */}
          <div
            className="mt-8 h-px origin-left transition-transform duration-1000 delay-300"
            style={{
              width: '60px',
              background: 'linear-gradient(90deg, #C29D44, transparent)',
              transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
            }}
          />
        </div>

        {/* Navigation Row - Desktop only */}
        <div 
          className="hidden md:flex items-center justify-end gap-3 mb-6 transition-all duration-700 delay-200"
          style={{
            opacity: isVisible ? 1 : 0,
          }}
        >
          <NavButton 
            onClick={scrollPrev} 
            disabled={!canScrollPrev} 
            direction="prev" 
            locale={locale}
          />
          <NavButton 
            onClick={scrollNext} 
            disabled={!canScrollNext} 
            direction="next" 
            locale={locale}
          />
        </div>
      </div>

      {/* Embla Carousel Container */}
      <div 
        className="transition-all duration-700 delay-100"
        style={{
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div ref={emblaRef} className="overflow-hidden">
          <div 
            className="flex gap-5 lg:gap-6"
            style={{ 
              margin: '0 clamp(16px, 4vw, 48px)',
            }}
          >
            {members.map((member, index) => (
              <div key={index} className="flex-shrink-0">
                <TeamMemberCard
                  member={member}
                  index={index}
                  isVisible={isVisible}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dot Indicators */}
      <div 
        className="flex items-center justify-center gap-2 mt-10 lg:mt-12 transition-all duration-700 delay-300"
        style={{
          opacity: isVisible ? 1 : 0,
        }}
        role="tablist"
        aria-label="Team member navigation"
      >
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>

      {/* Mobile Navigation Buttons */}
      <div 
        className="flex sm:hidden items-center justify-center gap-3 mt-6 transition-all duration-700 delay-300"
        style={{
          opacity: isVisible ? 1 : 0,
        }}
      >
        <NavButton 
          onClick={scrollPrev} 
          disabled={!canScrollPrev} 
          direction="prev" 
          locale={locale}
        />
        <NavButton 
          onClick={scrollNext} 
          disabled={!canScrollNext} 
          direction="next" 
          locale={locale}
        />
      </div>

      {/* Subtle bottom decoration */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(250, 250, 248, 1), transparent)',
        }}
      />
    </section>
  );
}
