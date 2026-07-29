'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { ScrollReveal, GlassCard, FloatingElement } from '@/components/animations';
import { HelpCircle, Plus, Minus } from 'lucide-react';

export default function FAQSection() {
  const { t, locale } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 relative overflow-hidden">
      {/* Navy to Purple Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1F3D73] via-[#2A4A8A] to-[#5D3C83]" />
      
      {/* Decorative gradient overlays */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/5 to-transparent" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#5D3C83]/40 rounded-full blur-3xl" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#C29D44]/20 rounded-full blur-2xl" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-[10%] w-3 h-3 bg-white/20 rounded-full pointer-events-none" />
      <div className="absolute bottom-32 right-[15%] w-4 h-4 bg-[#C29D44]/30 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-[5%] w-2 h-2 bg-[#90A36D]/25 rounded-full pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium 
                         bg-white/10 text-white/90 mb-4 backdrop-blur-sm border border-white/20">
              <HelpCircle className="w-4 h-4" />
              {t.faq.title}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#FAFAF8] mb-4">
              {t.faq.subtitle}
            </h2>
          </div>
        </ScrollReveal>

        {/* FAQ Accordion with Glassmorphism */}
        <ScrollReveal direction="up" delay={0.2} duration={0.9}>
          <div className="max-w-3xl mx-auto space-y-4">
            {t.faq.items.map((item, index) => {
              const isOpen = openIndex === index;
              
              return (
                <GlassCard
                  key={index}
                  blur="lg"
                  className={`group overflow-hidden transition-all duration-500 cursor-pointer
                            ${isOpen 
                              ? 'bg-white/15 border-white/30 shadow-lg shadow-black/10' 
                              : 'bg-white/8 border-white/15 hover:bg-white/12 hover:border-white/25'
                            }`}
                >
                  {/* Accordion Trigger */}
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full flex items-center justify-between p-5 md:p-6 text-start hover:no-underline focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      {/* Question Mark Icon */}
                      <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500
                                    ${isOpen 
                                      ? 'bg-gradient-to-br from-[#C29D44] to-[#A88535] text-white rotate-12' 
                                      : 'bg-white/10 text-white/60 group-hover:bg-white/15'
                                    }`}>
                        <HelpCircle className={`w-5 h-5 transition-transform duration-500 ${isOpen ? 'scale-110' : ''}`} />
                      </div>
                      
                      {/* Question Text */}
                      <span className={`font-semibold transition-colors duration-300 text-right flex-1
                                      ${isOpen ? 'text-white text-lg' : 'text-white/85 text-base md:text-lg'}`}>
                        {item.question}
                      </span>
                    </div>

                    {/* Plus/Minus Icon with rotation */}
                    <div className={`flex-shrink-0 ml-4 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-500
                                  ${isOpen 
                                    ? 'bg-[#C29D44] text-white rotate-180' 
                                    : 'bg-white/10 text-white/60 group-hover:bg-white/20 group-hover:text-white/80'
                                  }`}>
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  {/* Accordion Content - Animated expand/collapse */}
                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-in-out
                              ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="px-5 md:px-6 pb-5 md:pb-6 pr-[4.25rem]">
                      <div className={`pt-4 border-t transition-colors duration-300
                                    ${isOpen ? 'border-white/20' : 'border-transparent'}`}>
                        <p className="text-white/70 leading-relaxed text-sm md:text-base">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Additional CTA */}
        <ScrollReveal direction="up" delay={0.7}>
          <div className="text-center mt-12">
            <p className="text-white/60 mb-5 text-sm md:text-base">
              {locale === 'ar' ? 'لم تجد إجابة لسؤالك؟ تواصل معنا مباشرة' : "Didn't find your answer? Contact us directly"}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-[#FAFAF8] 
                       text-[#1F3D73] font-semibold rounded-xl transition-all duration-500 group shadow-lg hover:shadow-xl
                       hover:-translate-y-0.5"
            >
              {t.contact.title}
              <svg className="w-5 h-5 rtl:rotate-180 transition-transform duration-300 group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
