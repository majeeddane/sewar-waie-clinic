'use client';

import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { ScrollReveal, GlassCard } from '@/components/animations';
import { ChevronDown, HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQSection() {
  const { t } = useLanguage();

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#FAFAF8] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium 
                         bg-[#5D3C83]/10 text-[#5D3C83] mb-4 backdrop-blur-sm border border-white/20">
              <HelpCircle className="w-4 h-4" />
              {t.faq.title}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#5D3C83] mb-4">
              {t.faq.subtitle}
            </h2>
          </div>
        </ScrollReveal>

        {/* FAQ Accordion with glassmorphism */}
        <ScrollReveal direction="up" delay={0.2} duration={0.9}>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {t.faq.items.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className={`bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100 
                           hover:border-[#5D3C83]/20 transition-all duration-300 shadow-sm
                           data-state-open:shadow-md overflow-hidden group`}
                >
                  {/* Trigger */}
                  <AccordionTrigger className="py-5 text-start hover:no-underline transition-colors duration-300">
                    <div className="flex items-center gap-4">
                      {/* Number badge */}
                      <span className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold text-white
                                    transition-all duration-300 group-hover:scale-110
                                    ${index % 3 === 0 ? 'bg-[#5D3C83]' : 
                                      index % 3 === 1 ? 'bg-[#C29D44]' : 'bg-[#90A36D]'}`}>
                        {index + 1}
                      </span>
                      
                      {/* Question */}
                      <span className="font-semibold text-gray-800 group-hover:text-[#5D3C83] transition-colors duration-300 text-right flex-1">
                        {item.question}
                      </span>
                    </div>
                    
                    {/* Custom chevron icon */}
                    <ChevronDown className="w-5 h-5 text-[#5D3C83] ml-2 transition-transform duration-300 
                                        rtl:rotate-180 accordion-chevron" />
                  </AccordionTrigger>
                  
                  {/* Content with animation */}
                  <AccordionContent className="pb-5 pr-12 text-gray-600 leading-relaxed">
                    <div className="pt-2 pl-14 border-r-2 border-[#5D3C83]/20 mr-4">
                      {item.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollReveal>

        {/* Additional CTA */}
        <ScrollReveal direction="up" delay={0.6}>
          <div className="text-center mt-12">
            <p className="text-gray-500 mb-4">
              {t.locale === 'ar' ? 'لم تجد إجابة لسؤالك؟ تواصل معنا مباشرة' : "Didn't find your answer? Contact us directly"}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#5D3C83] hover:bg-[#4A2F6A] 
                       text-white font-semibold rounded-xl transition-all duration-500 group shadow-lg hover:shadow-xl"
            >
              {t.contact.title}
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
