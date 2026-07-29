'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
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
    <section id="faq" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#FAFAF8] to-transparent pointer-events-none" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium 
                       bg-[#5D3C83]/10 text-[#5D3C83] mb-4">
            <HelpCircle className="w-4 h-4" />
            {t.faq.title}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#5D3C83] mb-4">
            {t.faq.subtitle}
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-[#5D3C83] to-[#C29D44] mx-auto rounded-full" />
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {t.faq.items.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-[#FAFAF8] rounded-xl border border-gray-100 px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-start py-5 hover:no-underline group">
                  <div className="flex items-center gap-4">
                    <span className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center 
                                   text-sm font-bold text-white ${
                                     index % 3 === 0 ? 'bg-[#5D3C83]' : 
                                     index % 3 === 1 ? 'bg-[#C29D44]' : 'bg-[#90A36D]'
                                   }`}>
                      {index + 1}
                    </span>
                    <span className="font-semibold text-gray-800 group-hover:text-[#5D3C83] transition-colors text-right">
                      {item.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-5 pr-12 text-gray-600 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-500 mb-4">
            {t.locale === 'ar' ? 'لم تجد إجابة لسؤالك؟ تواصل معنا مباشرة' : "Didn't find your answer? Contact us directly"}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#5D3C83] hover:bg-[#4A2F6A] 
                     text-white font-semibold rounded-xl transition-all duration-300"
          >
            {t.contact.title}
            <svg className="w-4 h-4 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
