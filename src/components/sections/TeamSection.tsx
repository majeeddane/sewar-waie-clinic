'use client';

import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function TeamSection() {
  const { t, locale, direction } = useLanguage();
  const members = t.team.members;
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // حساب عدد العناصر المرئية
  const getVisibleCount = () => {
    if (typeof window === 'undefined') return 2;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  const [visibleCount, setVisibleCount] = useState(2);

  useEffect(() => {
    setVisibleCount(getVisibleCount());
    
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
      setCurrentIndex(0);
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, members.length - visibleCount);

  const scrollToIndex = (index: number) => {
    const clampedIndex = Math.max(0, Math.min(index, maxIndex));
    setCurrentIndex(clampedIndex);
    
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.scrollWidth / members.length;
      scrollContainerRef.current.scrollTo({
        left: cardWidth * clampedIndex,
        behavior: 'smooth',
      });
    }
  };

  const handlePrev = () => {
    scrollToIndex(currentIndex - 1);
  };

  const handleNext = () => {
    scrollToIndex(currentIndex + 1);
  };

  const handleDotClick = (index: number) => {
    scrollToIndex(index);
  };

  return (
    <section id="team" className="section-spacing bg-white">
      <div className="container-custom">
        {/* عنوان القسم */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div>
            {/* شريط ذهبي رفيع */}
            <div 
              className="w-16 h-1 mb-8"
              style={{ backgroundColor: '#C29D44' }}
              aria-hidden="true"
            />
            
            <h2 
              className="text-[26px] lg:text-[40px] font-extrabold mb-4"
              style={{ 
                fontFamily: 'var(--font-display-arabic)',
                color: '#5D3C83',
              }}
            >
              {t.team.sectionTitle}
            </h2>
            
            <p 
              className="text-[16px] lg:text-[17px] leading-[1.7]"
              style={{ 
                fontFamily: 'var(--font-body-arabic)',
                color: '#6b7280',
              }}
            >
              {t.team.sectionSubtitle}
            </p>
          </div>

          {/* أسهم التنقل - ظاهرة على سطح المكتب */}
          <div 
            className="hidden md:flex items-center gap-3"
            style={{ direction: 'ltr' }}
          >
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="w-12 h-12 flex items-center justify-center rounded-lg border border-gray-200 transition-all duration-200 hover:border-[#5D3C83] disabled:opacity-40 disabled:cursor-not-allowed"
              style={{
                color: currentIndex === 0 ? '#d1d5db' : '#5D3C83',
                backgroundColor: 'white',
              }}
              aria-label="السابق"
            >
              <ChevronLeft width="20" height="20" />
            </button>
            
            <button
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              className="w-12 h-12 flex items-center justify-center rounded-lg border border-gray-200 transition-all duration-200 hover:border-[#5D3C83] disabled:opacity-40 disabled:cursor-not-allowed"
              style={{
                color: currentIndex >= maxIndex ? '#d1d5db' : '#5D3C83',
                backgroundColor: 'white',
              }}
              aria-label="التالي"
            >
              <ChevronRight width="20" height="20" />
            </button>
          </div>
        </div>

        {/* حاوية العرض الأفقي مع Scroll */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {members.map((member, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start text-center p-6 rounded-xl transition-all duration-200 hover:bg-gray-50"
            >
              {/* الصورة/الأفاتار الدائري */}
              <div 
                className="w-24 h-24 mx-auto mb-5 rounded-full overflow-hidden"
                style={{ 
                  background: `linear-gradient(135deg, rgba(93, 60, 131, 0.1) 0%, rgba(144, 163, 109, 0.1) 100%)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span 
                  className="text-[32px] font-bold"
                  style={{ 
                    fontFamily: 'var(--font-display-arabic)',
                    color: '#5D3C83',
                  }}
                >
                  {member.name.charAt(0)}
                </span>
              </div>

              {/* الاسم */}
              <h3 
                className="text-[18px] font-bold mb-2"
                style={{ 
                  fontFamily: 'var(--font-display-arabic)',
                  color: '#1a1a2e',
                }}
              >
                {member.name}
              </h3>

              {/* التخصص */}
              <p 
                className="text-[14px]"
                style={{ 
                  fontFamily: 'var(--font-body-arabic)',
                  color: '#6b7280',
                }}
              >
                {member.specialty}
              </p>
            </div>
          ))}
        </div>

        {/* مؤشر النقاط (Dots) */}
        <div 
          className="flex items-center justify-center gap-2 mt-10"
          role="tablist"
          aria-label="تنقل بين أعضاء الفريق"
        >
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`transition-all duration-200 rounded-full`}
              style={{
                width: index === currentIndex ? '24px' : '8px',
                height: '8px',
                backgroundColor: index === currentIndex ? '#5D3C83' : '#e5e5e5',
              }}
              role="tab"
              aria-selected={index === currentIndex}
              aria-label={`عضو ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* أنماط CSS للإخفاء Scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
