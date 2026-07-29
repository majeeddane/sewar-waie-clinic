'use client';

import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { ScrollReveal, StaggerContainer, TiltCard, GlassCard } from '@/components/animations';
import { Quote, Star } from 'lucide-react';

export default function TestimonialsSection() {
  const { t, direction } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-[#FAFAF8] relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#C29D44]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#5D3C83]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium 
                         bg-[#C29D44]/15 text-[#A88535] mb-4 backdrop-blur-sm border border-white/30">
              <Quote className="w-4 h-4" />
              {t.testimonials.sectionTitle}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F3D73] mb-4">
              {t.testimonials.sectionSubtitle}
            </h2>
          </div>
        </ScrollReveal>

        {/* Testimonials Grid */}
        <StaggerContainer staggerDelay={0.15} className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {t.testimonials.items.map((testimonial, index) => (
            <TiltCard key={index} tiltStrength={5}>
              <GlassCard
                blur="lg"
                glow
                className={`group relative p-6 lg:p-8 transition-all duration-500 h-full
                          ${index === 0 ? 'border-t-4 border-t-[#5D3C83]' : 
                            index === 1 ? 'border-t-4 border-t-[#C29D44]' : 
                            'border-t-4 border-t-[#90A36D]'}`}
              >
                {/* Quote Icon with animation */}
                <div className={`absolute -top-4 ${direction === 'rtl' ? 'right-6' : 'left-6'} w-10 h-10 rounded-xl flex items-center justify-center 
                              shadow-md group-hover:scale-110 transition-transform duration-500
                              ${index === 0 ? 'bg-[#5D3C83]/10' : 
                                index === 1 ? 'bg-[#C29D44]/10' : 'bg-[#90A36D]/10'}`}>
                  <Quote className={`w-5 h-5 ${index === 0 ? 'text-[#5D3C83]' : 
                    index === 1 ? 'text-[#C29D44]' : 'text-[#90A36D]'}`} />
                </div>

                {/* Stars with hover effect */}
                <div className="flex gap-1 mt-4 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 fill-current transition-all duration-300 hover:scale-125 cursor-default
                                ${index === 0 ? 'text-[#5D3C83]' : 
                                  index === 1 ? 'text-[#C29D44]' : 'text-[#90A36D]'}`}
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 text-sm min-h-[100px] group-hover:text-gray-700 transition-colors">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100/50">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold 
                                shadow-md group-hover:shadow-lg transition-all duration-500 group-hover:scale-110
                                ${index === 0 ? 'bg-gradient-to-br from-[#5D3C83] to-[#4A2F6A]' : 
                                  index === 1 ? 'bg-gradient-to-br from-[#C29D44] to-[#A88535]' : 
                                  'bg-gradient-to-br from-[#90A36D] to-[#7A8C5A]'}`}>
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-xs text-gray-500">
                      {index === 0 ? (t.locale === 'ar' ? 'مستفيد من العلاج النفسي' : 'Psychotherapy Client') :
                       index === 1 ? (t.locale === 'ar' ? 'مستفيدة من الاستشارات الأسرية' : 'Family Counseling Client') :
                       (t.locale === 'ar' ? 'مستفيد من برنامج الإدمان' : 'Addiction Treatment Client')}
                    </p>
                  </div>
                </div>

                {/* Decorative corner gradient on hover */}
                <div className={`absolute bottom-0 left-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden rounded-bl-2xl`}>
                  <div className={`absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-transparent to-${
                    index === 0 ? '[#5D3C83]/10' : index === 1 ? '[#C29D44]/10' : '[#90A36D]/10'
                  }`} />
                </div>
              </GlassCard>
            </TiltCard>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
