'use client';

import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { Shield, Users, Eye, Heart, ClipboardCheck, Clock } from 'lucide-react';

const iconMap = [
  { icon: <Shield className="w-8 h-8" />, key: 'shield' },
  { icon: <Users className="w-8 h-8" />, key: 'users' },
  { icon: <Eye className="w-8 h-8" />, key: 'eye' },
  { icon: <Heart className="w-8 h-8" />, key: 'heart' },
  { icon: <ClipboardCheck className="w-8 h-8" />, key: 'clipboard' },
  { icon: <Clock className="w-8 h-8" />, key: 'clock' },
];

export default function WhyUsSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-[#5D3C83] via-[#1F3D73] to-[#4A2F6A] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full pattern-dots" />
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 border-2 border-[#C29D44]/30 rounded-full" />
      <div className="absolute bottom-10 right-10 w-48 h-48 border-2 border-[#90A36D]/30 rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] 
                    border border-white/5 rounded-full" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium 
                       bg-white/10 text-[#C29D44] mb-4">
            {t.whyUs.sectionTitle}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.whyUs.sectionTitle}
          </h2>
          <p className="text-gray-300 text-lg">
            {t.locale === 'ar' ? 'نتميز بتقديم رعاية نفسية فريدة تجمع بين الاحترافية والدفء الإنساني' : 'We stand out with unique mental health care that combines professionalism with human warmth'}
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {t.whyUs.reasons.map((reason, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 
                       hover:bg-white/20 transition-all duration-300 border border-white/10
                       hover:border-[#C29D44]/30 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#C29D44] to-[#C29D44]/70 
                           flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300">
                {iconMap[index].icon}
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-white mb-3">{reason.title}</h3>
              <p className="text-gray-300 leading-relaxed text-sm">{reason.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#C29D44] hover:bg-[#A88535] 
                     text-white font-semibold rounded-xl shadow-lg hover:shadow-xl 
                     transition-all duration-300 hover:scale-105"
          >
            {t.nav.bookNow}
            <svg className="w-5 h-5 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
