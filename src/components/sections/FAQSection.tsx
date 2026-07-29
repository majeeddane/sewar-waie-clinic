'use client';

import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { ChevronDown } from 'lucide-react';
import { FadeInUp, StaggerContainer } from '@/components/effects/TextReveal';

export default function FAQSection() {
  const { t, locale } = useLanguage();
  const faqs = t.faq.items;
  
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [heights, setHeights] = useState<Record<number, number>>({});

  // Measure content heights for smooth animation
  useEffect(() => {
    const newHeights: Record<number, number> = {};
    contentRefs.current.forEach((ref, index) => {
      if (ref) {
        newHeights[index] = ref.scrollHeight;
      }
    });
    // Schedule state update to avoid synchronous setState in effect
    setTimeout(() => setHeights(newHeights), 0);
  }, [faqs]);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-spacing bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div 
          className="absolute w-[500px] h-[500px] rounded-full opacity-[0.03]"
          style={{
            background: 'radial-gradient(circle, #5D3C83 0%, transparent 70%)',
            top: '-20%',
            left: '-10%',
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <FadeInUp>
          <div className="text-center mb-16 lg:mb-20 max-w-2xl mx-auto">
            {/* Gold accent line - 40px wide, 3px height */}
            <div 
              className="w-10 h-[3px] mx-auto mb-8"
              style={{ backgroundColor: '#C29D44' }}
              aria-hidden="true"
            />
            
            <h2 
              className="text-[28px] md:text-[36px] lg:text-[44px] font-extrabold mb-5 leading-[1.15]"
              style={{ 
                fontFamily: 'var(--font-display-arabic)',
                color: '#5D3C83',
              }}
            >
              {t.faq.title}
            </h2>
            
            <p 
              className="text-[16px] lg:text-[17px]"
              style={{ 
                fontFamily: 'var(--font-body-arabic)',
                color: '#6b7280',
                lineHeight: '1.75',
              }}
            >
              {t.faq.subtitle}
            </p>
          </div>
        </FadeInUp>

        {/* FAQ Accordion - Wider max-width */}
        <StaggerContainer staggerDelay={100}>
          <div className="max-w-4xl mx-auto space-y-2">
            {faqs.map((faq, index) => (
              <FadeInUp key={index} delay={index * 80}>
                <div
                  className={
                    "rounded-xl overflow-hidden transition-all " +
                    (openIndex === index 
                      ? "bg-gradient-to-r from-[#FAFAF8] to-white shadow-sm" 
                      : "bg-white border border-gray-100 hover:border-gray-200 hover:shadow-sm")
                  }
                  style={{
                    transitionTimingFunction: 'cubic-bezier(0.25, 1, 0.5, 1)',
                    transitionDuration: '300ms',
                    ...(openIndex === index ? {
                      borderLeft: '4px solid #5D3C83',
                    } : {}),
                  }}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className={"w-full flex items-center justify-between p-6 lg:p-7 text-left transition-colors duration-300 group"}
                    aria-expanded={openIndex === index}
                  >
                    <span 
                      className="flex-1 text-[16px] lg:text-[18px] font-bold pr-4 leading-relaxed"
                      style={{ 
                        fontFamily: 'var(--font-body-arabic)',
                        color: openIndex === index ? '#5D3C83' : '#1a1a2e',
                        transition: 'color 0.3s cubic-bezier(0.25, 1, 0.5, 1)',
                      }}
                    >
                      {faq.question}
                    </span>
                    
                    {/* Animated Chevron */}
                    <div 
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-400"
                      style={{
                        backgroundColor: openIndex === index ? 'rgba(93, 60, 131, 0.08)' : 'rgba(0, 0, 0, 0.03)',
                        transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                        transitionDuration: '400ms',
                      }}
                    >
                      <ChevronDown 
                        width="18" 
                        height="18" 
                        style={{ 
                          color: openIndex === index ? '#5D3C83' : '#9ca3af',
                          transition: 'color 0.3s ease',
                        }} 
                      />
                    </div>
                  </button>
                  
                  {/* Answer with smooth height animation */}
                  <div
                    className="overflow-hidden"
                    style={{
                      maxHeight: heights[index] && openIndex === index ? `${heights[index]}px` : '0px',
                      opacity: openIndex === index ? 1 : 0,
                      transition: "max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease " + (openIndex === index ? "0.1s" : "0s"),
                    }}
                  >
                    <div
                      ref={(el) => { contentRefs.current[index] = el; }}
                      className="px-6 lg:px-7 pb-6 lg:pb-7 pt-0"
                    >
                      <p 
                        className="text-[15px] lg:text-[16px] leading-[1.85] pl-2"
                        style={{ 
                          fontFamily: 'var(--font-body-arabic)',
                          color: '#6b7280',
                        }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </StaggerContainer>

        {/* Additional help text */}
        <FadeInUp delay={400}>
          <p 
            className="text-center mt-12 text-[14px]"
            style={{ 
              fontFamily: 'var(--font-body-arabic)',
              color: '#9ca3af',
            }}
          >
            {locale === 'ar' 
              ? 'لم تجد إجابة لسؤالك؟ تواصل معنا مباشرة' 
              : "Didn't find your answer? Contact us directly"}
            {' '}
            <a 
              href="/#contact" 
              className="font-medium underline underline-offset-2 transition-colors duration-200 hover:text-[#5D3C83]"
              style={{ color: '#5D3C83' }}
            >
              {locale === 'ar' ? 'من هنا' : 'here'}
            </a>
          </p>
        </FadeInUp>
      </div>
    </section>
  );
}
