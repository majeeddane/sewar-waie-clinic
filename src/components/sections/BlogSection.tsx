'use client';

import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { ScrollReveal, StaggerContainer, TiltCard, GlassCard, FloatingElement } from '@/components/animations';
import { Calendar, ArrowRight, BookOpen, Tag } from 'lucide-react';

export default function BlogSection() {
  const { t, locale } = useLanguage();
  const posts = t.blog.posts;
  
  // Featured post (first post) and standard posts (rest)
  const featuredPost = posts[0];
  const standardPosts = posts.slice(1, 3);

  return (
    <section id="blog" className="py-20 md:py-28 bg-[#FAFAF8] relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-[#90A36D]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#5D3C83]/5 rounded-full blur-3xl pointer-events-none" />
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-[15%] w-4 h-4 bg-[#C29D44]/30 rounded-full pointer-events-none" />
      <div className="absolute bottom-32 right-[20%] w-3 h-3 bg-[#90A36D]/40 rounded-full pointer-events-none" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium 
                         bg-[#5D3C83]/10 text-[#5D3C83] mb-4 backdrop-blur-sm border border-white/30">
              <BookOpen className="w-4 h-4" />
              {t.blog.title}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F3D73] mb-4">
              {t.blog.subtitle}
            </h2>
          </div>
        </ScrollReveal>

        {/* Editorial Grid Layout */}
        <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Featured Post Card - Takes full height (row-span-2 equivalent) */}
          {featuredPost && (
            <TiltCard key="featured" tiltStrength={4}>
              <GlassCard
                blur="lg"
                glow
                className="group overflow-hidden transition-all duration-700 border-transparent hover:border-[#5D3C83]/30 h-full flex flex-col"
              >
                {/* Large Featured Image Area */}
                <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden bg-gradient-to-br from-[#5D3C83] via-[#7A52A3] to-[#5D3C83]/80">
                  {/* Decorative pattern overlay */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `radial-gradient(circle at 30% 40%, rgba(255,255,255,0.1) 0%, transparent 50%),
                                        radial-gradient(circle at 70% 60%, rgba(194,157,68,0.15) 0%, transparent 50%)`
                    }} />
                  </div>
                  
                  {/* Icon with animation */}
                  <div className="absolute inset-0 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-700">
                    <BookOpen className="w-24 h-24 text-white/25 group-hover:text-white/35 transition-opacity" />
                  </div>
                  
                  {/* Category Tag - Prominent on featured */}
                  <div className={`absolute top-5 ${locale === 'ar' ? 'right-5' : 'left-5'} px-4 py-2 rounded-full text-sm font-semibold text-white
                                shadow-lg shadow-black/20 group-hover:shadow-xl transition-all duration-300
                                bg-[#5D3C83] hover:bg-[#4A2F6A]`}>
                    <span className="flex items-center gap-2">
                      <Tag className="w-4 h-4" />
                      {featuredPost.category}
                    </span>
                  </div>

                  {/* Date Badge */}
                  <div className={`absolute bottom-5 ${locale === 'ar' ? 'left-5' : 'right-5'} flex items-center gap-2 text-sm text-white/90 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30`}>
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </div>

                  {/* Hover overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content - More prominent for featured */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-xl md:text-2xl text-gray-800 mb-4 group-hover:text-[#5D3C83] transition-colors duration-300 leading-relaxed">
                      {featuredPost.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3 text-base">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  {/* Read More Link - More prominent */}
                  <a
                    href="#"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-[#5D3C83]/10 hover:bg-[#5D3C83] text-[#5D3C83] hover:text-white 
                             font-semibold rounded-xl transition-all duration-500 group/link w-fit"
                  >
                    {t.blog.readMore}
                    <ArrowRight className="w-5 h-5 rtl:rotate-180 transition-transform duration-300 group-hover/link:-translate-x-1" />
                  </a>
                </div>
              </GlassCard>
            </TiltCard>
          )}

          {/* Standard Posts - Stacked vertically */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {standardPosts.map((post, index) => (
              <TiltCard key={index} tiltStrength={3}>
                <GlassCard
                  blur="md"
                  className="group overflow-hidden transition-all duration-500 border-transparent hover:border-[#90A36D]/20 h-full"
                >
                  <div className="flex flex-col sm:flex-row h-full">
                    {/* Smaller Image Area */}
                    <div className={`relative h-48 sm:h-auto sm:w-2/5 overflow-hidden ${
                      index === 0 
                        ? 'bg-gradient-to-br from-[#C29D44]/30 to-[#C29D44]/10' 
                        : 'bg-gradient-to-br from-[#90A36D]/30 to-[#90A36D]/10'
                    }`}>
                      {/* Icon */}
                      <div className={`absolute inset-0 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-600`}>
                        <BookOpen className={`w-14 h-14 ${
                          index === 0 ? 'text-[#C29D44]/35' : 'text-[#90A36D]/35'
                        } group-hover:opacity-60 transition-opacity`} />
                      </div>
                      
                      {/* Category Badge - Small */}
                      <div className={`absolute top-3 ${locale === 'ar' ? 'right-3' : 'left-3'} px-2.5 py-1 rounded-full text-xs font-medium text-white shadow-md
                                    ${
                                      index === 0 ? 'bg-[#C29D44]' : 'bg-[#90A36D]'
                                    }`}>
                        {post.category}
                      </div>

                      {/* Hover effect */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 p-5 flex flex-col justify-between">
                      <div>
                        {/* Date */}
                        <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-2">
                          <Calendar className="w-3.5 h-3.5" />
                          {post.date}
                        </div>
                        
                        <h3 className="font-bold text-base md:text-lg text-gray-800 mb-2 group-hover:text-[#5D3C83] transition-colors duration-300 line-clamp-2 leading-snug">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                          {post.excerpt}
                        </p>
                      </div>

                      {/* Read More Link */}
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 mt-4 text-[#5D3C83] font-semibold text-sm 
                                 hover:gap-3 transition-all duration-300 group/link w-fit"
                      >
                        {locale === 'ar' ? 'اقرأ →' : 'Read →'}
                        <ArrowRight className="w-4 h-4 rtl:rotate-180 transition-transform duration-300 group-hover/link:-translate-x-1" />
                      </a>
                    </div>
                  </div>
                </GlassCard>
              </TiltCard>
            ))}
          </div>
        </StaggerContainer>

        {/* View All CTA */}
        <ScrollReveal direction="up" delay={0.8}>
          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#5D3C83] text-[#5D3C83] 
                       hover:bg-[#5D3C83] hover:text-white font-semibold rounded-xl transition-all duration-500 group
                       shadow-sm hover:shadow-lg hover:shadow-[#5D3C83]/20"
            >
              {locale === 'ar' ? 'عرض جميع المقالات' : 'View All Articles'}
              <ArrowRight className="w-5 h-5 rtl:rotate-180 transition-transform duration-300 group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </ArrowRight>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
