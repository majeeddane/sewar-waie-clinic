'use client';

import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { ScrollReveal, StaggerContainer, TiltCard, GlassCard, ParallaxWrapper } from '@/components/animations';
import { Calendar, ArrowRight, BookOpen } from 'lucide-react';

export default function BlogSection() {
  const { t } = useLanguage();

  return (
    <section id="blog" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#90A36D]/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium 
                         bg-[#90A36D]/15 text-[#7A8C5A] mb-4 backdrop-blur-sm border border-white/30">
              <BookOpen className="w-4 h-4" />
              {t.blog.title}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F3D73] mb-4">
              {t.blog.subtitle}
            </h2>
          </div>
        </ScrollReveal>

        {/* Blog Posts Grid */}
        <StaggerContainer staggerDelay={0.15} className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {t.blog.posts.map((post, index) => (
            <TiltCard key={index} tiltStrength={5}>
              <GlassCard
                blur="md"
                glow
                className="group overflow-hidden transition-all duration-500 border-transparent hover:border-[#90A36D]/20 h-full"
              >
                {/* Image Placeholder with gradient and hover effect */}
                <div className={`relative h-48 overflow-hidden ${index === 0 ? 'bg-gradient-to-br from-[#5D3C83]/20 to-[#5D3C83]/5' : 
                  index === 1 ? 'bg-gradient-to-br from-[#C29D44]/20 to-[#C29D44]/5' : 
                  'bg-gradient-to-br from-[#90A36D]/20 to-[#90A36D]/5'}`}>
                  
                  {/* Icon with animation */}
                  <div className={`absolute inset-0 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-700`}>
                    <BookOpen className={`w-16 h-16 ${index === 0 ? 'text-[#5D3C83]/30' : 
                      index === 1 ? 'text-[#C29D44]/30' : 'text-[#90A36D]/30'} 
                      group-hover:opacity-50 transition-opacity`} />
                  </div>
                  
                  {/* Category Badge */}
                  <div className={`absolute top-4 ${t.locale === 'ar' ? 'right-4' : 'left-4'} px-3 py-1 rounded-full text-xs font-medium text-white
                                shadow-md group-hover:shadow-lg transition-all duration-300
                                ${index === 0 ? 'bg-[#5D3C83]' : index === 1 ? 'bg-[#C29D44]' : 'bg-[#90A36D]'}`}>
                    {post.category}
                  </div>

                  {/* Date */}
                  <div className={`absolute bottom-4 ${t.locale === 'ar' ? 'left-4' : 'right-4'} flex items-center gap-1.5 text-xs text-gray-600 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-full`}>
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </div>

                  {/* Hover overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100 mb-3 group-hover:text-[#5D3C83] transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Read More Link */}
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-[#5D3C83] font-semibold text-sm 
                             hover:gap-3 transition-all duration-300 group/link"
                  >
                    {t.blog.readMore}
                    <ArrowRight className="w-4 h-4 rtl:rotate-180 transition-transform duration-300 group-hover/link:-translate-x-1" />
                  </a>
                </div>

                {/* Bottom line on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-${
                  index === 0 ? '[#5D3C83]' : index === 1 ? '[#C29D44]' : '[#90A36D]'
                } to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </GlassCard>
            </TiltCard>
          ))}
        </StaggerContainer>

        {/* View All CTA */}
        <ScrollReveal direction="up" delay={0.8}>
          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#90A36D] text-[#7A8C5A] 
                       hover:bg-[#90A36D] hover:text-white font-semibold rounded-xl transition-all duration-500 group"
            >
              {t.locale === 'ar' ? 'عرض جميع المقالات' : 'View All Articles'}
              <ArrowRight className="w-4 h-4 rtl:rotate-180 transition-transform duration-300 group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </ArrowRight>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
