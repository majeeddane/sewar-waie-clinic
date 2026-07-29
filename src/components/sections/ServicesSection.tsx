'use client';

import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { Button } from '@/components/ui/button';
import { User, Heart, Users, MessageCircle, Baby, GraduationCap } from 'lucide-react';

const iconComponents: Record<string, React.ReactNode> = {
  'user': <User className="w-7 h-7" />,
  'heart': <Heart className="w-7 h-7" />,
  'users': <Users className="w-7 h-7" />,
  'message-circle': <MessageCircle className="w-7 h-7" />,
  'baby': <Baby className="w-7 h-7" />,
  'graduation-cap': <GraduationCap className="w-7 h-7" />,
};

export default function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-20 md:py-28 bg-[#FAFAF8] relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#5D3C83]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C29D44]/10 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium 
                       bg-[#90A36D]/15 text-[#7A8C5A] mb-4">
            {t.services.sectionTitle}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F3D73] mb-4">
            {t.services.sectionSubtitle}
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-[#5D3C83] to-[#C29D44] mx-auto rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {t.services.items.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-xl 
                       transition-all duration-500 card-hover border border-transparent hover:border-[#5D3C83]/10"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300
                            ${index % 2 === 0 ? 'bg-[#5D3C83]/10 text-[#5D3C83] group-hover:bg-[#5D3C83] group-hover:text-white' : 'bg-[#90A36D]/10 text-[#90A36D] group-hover:bg-[#90A36D] group-hover:text-white'}`}>
                {iconComponents[service.icon]}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3 group-hover:text-[#5D3C83] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 text-sm">
                {service.description}
              </p>

              {/* CTA Link */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-[#5D3C83] font-semibold text-sm 
                         hover:gap-3 transition-all duration-300"
              >
                {t.services.bookNow}
                <svg className="w-4 h-4 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden rounded-tr-2xl">
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-[#5D3C83]/10 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
