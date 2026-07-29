'use client';

import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { Shield, Users, Heart, Clock } from 'lucide-react';
import Image from 'next/image';

const iconMap: Record<string, React.ReactNode> = {
  shield: <Shield className="w-8 h-8" />,
  users: <Users className="w-8 h-8" />,
  heart: <Heart className="w-8 h-8" />,
  clock: <Clock className="w-8 h-8" />,
};

export default function AboutSection() {
  const { t, direction } = useLanguage();

  return (
    <section id="about" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full pattern-dots opacity-20 pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className={`${direction === 'rtl' ? '' : 'order-2'}`}>
            {/* Section Header */}
            <div className="mb-8">
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium 
                           bg-[#5D3C83]/10 text-[#5D3C83] mb-4">
                {t.about.sectionTitle}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#5D3C83] mb-4">
                {t.about.title}
                <span className="block text-[#90A36D] mt-2">{t.about.subtitle}</span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
              {t.about.description}
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-10">
              {t.about.description2}
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {t.about.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-[#FAFAF8] hover:bg-[#5D3C83]/5 
                           transition-colors duration-300 group"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#5D3C83]/10 
                               flex items-center justify-center text-[#5D3C83] group-hover:bg-[#5D3C83] 
                               group-hover:text-white transition-colors duration-300">
                    {iconMap[Object.keys(iconMap)[index]] || iconMap.shield}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-500">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className={`${direction === 'rtl' ? '' : 'order-1'}`}>
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-[#5D3C83]/20 via-transparent to-[#C29D44]/20 z-10" />
                <img
                  src="/images/logo.png"
                  alt={t.about.title}
                  fill
                  className="object-contain p-8 bg-gradient-to-br from-[#FAFAF8] to-white"
                />
              </div>
              
              {/* Floating Card */}
              <div className={`absolute -bottom-6 ${direction === 'rtl' ? '-left-6' : '-right-6'} 
                            bg-white rounded-2xl shadow-xl p-6 max-w-xs z-20`}>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-[#90A36D]/10 flex items-center justify-center">
                    <svg className="w-7 h-7 text-[#90A36D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">+500</p>
                    <p className="text-sm text-gray-500">
                      {t.locale === 'ar' ? 'رحلة تعافي ناجحة' : 'Successful Recovery Journeys'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
