'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const { t, locale } = useLanguage();
  const faqs = t.faq.items;
  
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-spacing bg-white">
      <div className="container-custom">
        {/* عنوان القسم */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          {/* شريط ذهبي */}
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
            {t.faq.title}
          </h2>
          
          <p 
            className="text-[16px] lg:text-[17px] leading-[1.7]"
            style={{ 
              fontFamily: 'var(--font-body-arabic)',
              color: '#6b7280',
            }}
          >
            {t.faq.subtitle}
          </p>
        </div>

        {/* قائمة الأسئلة */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-100 rounded-lg overflow-hidden transition-all duration-200 hover:border-gray-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full flex items-center justify-between p-6 text-left transition-colors duration-200 ${
                  openIndex === index ? 'bg-[#FAFAF8]' : 'bg-white'
                }`}
                aria-expanded={openIndex === index}
              >
                <span 
                  className="flex-1 text-[16px] lg:text-[17px] font-semibold pr-4"
                  style={{ 
                    fontFamily: 'var(--font-body-arabic)',
                    color: '#1a1a2e',
                  }}
                >
                  {faq.question}
                </span>
                <ChevronDown 
                  width="20" 
                  height="20" 
                  className="flex-shrink-0 transition-transform duration-200"
                  style={{ 
                    color: '#5D3C83',
                    transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                  }} 
                />
              </button>
              
              {/* الإجابة */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p 
                  className="px-6 pb-6 text-[15px] leading-[1.7]"
                  style={{ 
                    fontFamily: 'var(--font-body-arabic)',
                    color: '#6b7280',
                  }}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
