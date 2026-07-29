'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const { t, locale, direction } = useLanguage();
  const testimonials = t.testimonials.items;
  
  const [currentIndex, setCurrentIndex] = useState(0);

  // تنقل يدوي فقط - بدون auto-play
  const handlePrev = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="section-spacing bg-[#FAFAF8] relative overflow-hidden">
      <div className="container-custom">
        {/* عنوان القسم */}
        <div className="text-center mb-16">
          {/* شريط ذهبي رفيع */}
          <div 
            className="w-16 h-1 mx-auto mb-8"
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
            {t.testimonials.sectionTitle}
          </h2>
          
          <p 
            className="text-[16px] lg:text-[17px] max-w-2xl mx-auto leading-[1.7]"
            style={{ 
              fontFamily: 'var(--font-body-arabic)',
              color: '#6b7280',
            }}
          >
            {t.testimonials.sectionSubtitle}
          </p>
        </div>

        {/* محتوى الشهادة */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* علامة التنصيص الكبيرة كخلفية Typography */}
          <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 select-none pointer-events-none"
            style={{ 
              [direction === 'rtl' ? 'right' : 'left']: '50%',
              transform: direction === 'rtl' ? 'translateX(50%)' : 'translateX(-50%)',
            }}
            aria-hidden="true"
          >
            <Quote 
              width="180" 
              height="180" 
              className="opacity-[0.04]"
              style={{ color: '#5D3C83' }}
            />
          </div>

          {/* بطاقة الشهادة */}
          <div className="relative bg-white rounded-lg p-8 md:p-12 border border-gray-100 text-center min-h-[280px] flex flex-col justify-center">
            
            {/* النص الرئيسي */}
            <blockquote>
              <p 
                className="text-[18px] lg:text-[22px] leading-[1.8] mb-8 italic"
                style={{ 
                  fontFamily: locale === 'ar' ? 'var(--font-body-arabic)' : "'Fraunces', serif",
                  color: '#1a1a2e',
                  fontWeight: 400,
                }}
              >
                &ldquo;{currentTestimonial.text}&rdquo;
              </p>
            </blockquote>

            {/* اسم صاحب الشهادة */}
            <footer>
              <p 
                className="text-[16px] font-bold"
                style={{ 
                  fontFamily: 'var(--font-display-arabic)',
                  color: '#5D3C83',
                }}
              >
                — {currentTestimonial.name}
              </p>
            </footer>
          </div>

          {/* أزرار التنقل اليدوي */}
          <div 
            className="flex items-center justify-center gap-4 mt-10"
            style={{ direction: 'ltr' }}
          >
            {/* السهم السابق */}
            <button
              onClick={handlePrev}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-200 transition-all duration-200 hover:border-[#5D3C83] hover:bg-white"
              style={{
                color: '#5D3C83',
                backgroundColor: 'transparent',
              }}
              aria-label="الشهادة السابقة"
            >
              <ChevronLeft width="20" height="20" />
            </button>

            {/* نقاط التنقل */}
            <div 
              className="flex items-center gap-2"
              role="tablist"
              aria-label="تنقل بين الشهادات"
            >
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`transition-all duration-200 rounded-full`}
                  style={{
                    width: index === currentIndex ? '28px' : '8px',
                    height: '8px',
                    backgroundColor: index === currentIndex ? '#5D3C83' : '#d1d5db',
                  }}
                  role="tab"
                  aria-selected={index === currentIndex}
                  aria-label={`شهادة ${index + 1}`}
                />
              ))}
            </div>

            {/* السهم التالي */}
            <button
              onClick={handleNext}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-200 transition-all duration-200 hover:border-[#5D3C83] hover:bg-white"
              style={{
                color: '#5D3C83',
                backgroundColor: 'transparent',
              }}
              aria-label="شهادة التالية"
            >
              <ChevronRight width="20" height="20" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
