'use client';

import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { ScrollReveal, StaggerContainer, GlassCard, LineReveal } from '@/components/animations';
import { Calendar, ArrowRight, Clock, BookOpen, Tag } from 'lucide-react';

// Category color mapping for visual variety
const categoryColors: Record<string, { bg: string; text: string; gradient: string; accent: string }> = {
  default: { 
    bg: 'bg-[#1F3D73]', 
    text: 'text-[#1F3D73]', 
    gradient: 'from-[#1F3D73] via-[#2a4f8f] to-[#1F3D73]/90',
    accent: '#1F3D73'
  },
  anxiety: { 
    bg: 'bg-[#C29D44]', 
    text: 'text-[#C29D44]', 
    gradient: 'from-[#C29D44] via-[#d4ad54] to-[#C29D44]/90',
    accent: '#C29D44'
  },
  depression: { 
    bg: 'bg-[#90A36D]', 
    text: 'text-[#90A36D]', 
    gradient: 'from-[#90A36D] via-[#a3b87e] to-[#90A36D]/90',
    accent: '#90A36D'
  },
  therapy: { 
    bg: 'bg-[#7B68A6]', 
    text: 'text-[#7B68A6]', 
    gradient: 'from-[#7B68A6] via-[#8d7db8] to-[#7B68A6]/90',
    accent: '#7B68A6'
  },
  wellness: { 
    bg: 'bg-[#5B8FA3]', 
    text: 'text-[#5B8FA3]', 
    gradient: 'from-[#5B8FA3] via-[#6ea3b8] to-[#5B8FA3]/90',
    accent: '#5B8FA3'
  },
};

// Helper function to get category colors based on index or name
function getCategoryStyle(category: string | undefined, index: number) {
  const categoryLower = (category || '').toLowerCase();
  
  if (categoryLower.includes('قلق') || categoryLower.includes('anxiety') || index === 1) {
    return categoryColors.anxiety;
  }
  if (categoryLower.includes('اكتئاب') || categoryLower.includes('depression') || index === 2) {
    return categoryColors.depression;
  }
  if (categoryLower.includes('علاج') || categoryLower.includes('therapy') || index === 0) {
    return categoryColors.therapy;
  }
  if (categoryLower.includes('صحة') || categoryLower.includes('wellness') || index === 3) {
    return categoryColors.wellness;
  }
  
  // Cycle through colors based on index as fallback
  const colorKeys = Object.keys(categoryColors).filter(k => k !== 'default');
  return categoryColors[colorKeys[index % colorKeys.length]] || categoryColors.default;
}

// Format date for Arabic locale support
function formatDate(dateStr: string, locale: string): string {
  if (!dateStr) return '';
  
  // If already formatted, return as-is
  if (locale === 'ar' && /[\u0600-\u06FF]/.test(dateStr)) {
    return dateStr;
  }
  
  return dateStr;
}

// Generate reading time based on excerpt length
function getReadingTime(excerpt: string): string {
  const wordsPerMinute = 200;
  const wordCount = (excerpt || '').split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(wordCount / wordsPerMinute));
  return `${minutes} min`;
}

interface BlogPost {
  title: string;
  excerpt: string;
  category?: string;
  date?: string;
  [key: string]: unknown;
}

export default function BlogSection() {
  const { t, locale } = useLanguage();
  const posts: BlogPost[] = t.blog.posts as BlogPost[];
  
  // Editorial layout structure
  const featuredPost = posts[0];
  const sidePosts = posts.slice(1, 3); // 2 side articles
  const compactPosts = posts.slice(3, 6); // 3 compact preview cards below

  const isRTL = locale === 'ar';

  return (
    <section id="blog" className="py-20 md:py-28 bg-[#FAFAF8] relative overflow-hidden">
      {/* Subtle Background Decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1F3D73]/3 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#C29D44]/4 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Decorative dots pattern */}
      <div className="absolute top-24 left-[8%] opacity-20">
        <div className="grid grid-cols-4 gap-2">
          {[...Array(8)].map((_, i) => (
            <div key={i} className={`w-1.5 h-1.5 rounded-full ${i % 2 === 0 ? 'bg-[#1F3D73]' : 'bg-[#C29D44]'}`} />
          ))}
        </div>
      </div>
      <div className="absolute bottom-32 right-[10%] opacity-15">
        <div className="grid grid-cols-3 gap-2">
          {[...Array(6)].map((_, i) => (
            <div key={i} className={`w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-[#90A36D]' : 'bg-[#1F3D73]'}`} />
          ))}
        </div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header with Line Reveal */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 md:mb-16 gap-6">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-[#1F3D73]/8 text-[#1F3D73] mb-4 border border-[#1F3D73]/10">
                <BookOpen className="w-4 h-4" />
                {t.blog.title}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F3D73] leading-tight">
                {t.blog.subtitle}
              </h2>
            </div>
            
            {/* View All Link - Desktop */}
            <a
              href="#"
              className="hidden md:inline-flex items-center gap-2 text-[#1F3D73] font-semibold hover:text-[#C29D44] transition-colors duration-300 group"
            >
              {isRTL ? 'عرض جميع المقالات' : 'View All Articles'}
              <ArrowRight className={`w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1 ${isRTL ? 'rotate-180' : ''}`} />
            </a>
          </div>
        </ScrollReveal>

        {/* ========================================== */}
        {/* EDITORIAL HERO SECTION                    */}
        {/* Featured (60%) + Side Stack (40%)         */}
        {/* ========================================== */}
        <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 mb-10 md:mb-12">
          
          {/* FEATURED ARTICLE - Large Hero Card (60% = 3 cols) */}
          {featuredPost && (
            <ScrollReveal direction="up" delay={0.15}>
              <GlassCard
                blur="lg"
                glow
                className="group lg:col-span-3 overflow-hidden transition-all duration-500 border-transparent hover:border-[#1F3D73]/20 hover:shadow-2xl hover:shadow-[#1F3D73]/10 hover:-translate-y-2 h-full flex flex-col"
              >
                {/* Large Hero Image with Gradient Overlay */}
                <div className={`relative h-72 sm:h-80 md:h-96 overflow-hidden bg-gradient-to-br ${getCategoryStyle(featuredPost.category, 0).gradient}`}>
                  {/* Decorative geometric patterns */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full" />
                    <div className="absolute bottom-16 right-16 w-48 h-48 border border-white/10 rounded-full" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/5 rounded-full" />
                  </div>
                  
                  {/* Animated icon centerpiece */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-white/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-700" />
                      <BookOpen className="relative w-20 h-20 text-white/30 group-hover:text-white/50 group-hover:scale-110 transition-all duration-500" />
                    </div>
                  </div>
                  
                  {/* Gradient overlay for text readability at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  {/* Category Tag - Prominent placement */}
                  <div className={`absolute top-5 ${isRTL ? 'right-5' : 'left-5'} z-10`}>
                    <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-white shadow-lg shadow-black/20 backdrop-blur-sm ${getCategoryStyle(featuredPost.category, 0).bg}`}>
                      <Tag className="w-3.5 h-3.5" />
                      {featuredPost.category || (isRTL ? 'مقالات' : 'Articles')}
                    </span>
                  </div>

                  {/* Date & Reading Time - Bottom of image */}
                  <div className={`absolute bottom-5 ${isRTL ? 'left-5' : 'right-5'} z-10 flex items-center gap-3`}>
                    <span className="inline-flex items-center gap-1.5 text-sm text-white/95 bg-white/15 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20">
                      <Calendar className="w-4 h-4" />
                      {formatDate(featuredPost.date as string, locale)}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-sm text-white/95 bg-white/15 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20">
                      <Clock className="w-4 h-4" />
                      {getReadingTime(featuredPost.excerpt as string)} {isRTL ? 'قراءة' : 'read'}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between bg-white/70 backdrop-blur-sm">
                  <div>
                    <h3 className="font-bold text-xl md:text-2xl lg:text-[1.75rem] text-gray-900 mb-4 group-hover:text-[#1F3D73] transition-colors duration-300 leading-snug">
                      {featuredPost.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed line-clamp-3 text-base md:text-lg">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  {/* Read More CTA */}
                  <div className="mt-6 pt-6 border-t border-gray-200/60">
                    <a
                      href="#"
                      className="inline-flex items-center gap-3 px-6 py-3 bg-[#1F3D73] hover:bg-[#162d57] text-white font-semibold rounded-xl transition-all duration-400 group/link shadow-md hover:shadow-lg hover:shadow-[#1F3D73]/25"
                    >
                      {t.blog.readMore}
                      <ArrowRight className={`w-5 h-5 transition-transform duration-300 group-hover/link:-translate-x-1 ${isRTL ? 'rotate-180' : ''}`} />
                    </a>
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>
          )}

          {/* SIDE ARTICLES - 2 Stacked Cards (40% = 2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-6 lg:gap-8">
            {sidePosts.map((post, index) => {
              const catStyle = getCategoryStyle(post.category, index + 1);
              return (
                <ScrollReveal key={index} direction={index === 0 ? 'up' : 'up'} delay={0.25 + (index * 0.1)}>
                  <GlassCard
                    blur="md"
                    className="group overflow-hidden transition-all duration-500 border-transparent hover:border-[#C29D44]/25 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 flex-1 flex flex-col"
                  >
                    <div className="flex flex-col sm:flex-row h-full">
                      {/* Side Image with Gradient */}
                      <div className={`relative h-40 sm:h-auto sm:w-36 lg:w-44 overflow-hidden bg-gradient-to-br ${catStyle.gradient} shrink-0}`}>
                        {/* Subtle pattern */}
                        <div className="absolute inset-0 opacity-20">
                          <div className={`absolute ${index === 0 ? 'top-4 right-4' : 'bottom-4 left-4'} w-16 h-16 border border-white/30 rounded-full`} />
                        </div>
                        
                        {/* Icon */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <BookOpen className="w-10 h-10 text-white/25 group-hover:text-white/40 group-hover:scale-110 transition-all duration-400" />
                        </div>
                        
                        {/* Bottom gradient fade */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent sm:bg-gradient-to-r" />

                        {/* Category Badge */}
                        <div className={`absolute top-3 ${isRTL ? 'right-3' : 'left-3'} z-10`}>
                          <span className={`px-2.5 py-1 rounded-full text-[10px] font-semibold text-white shadow-md ${catStyle.bg}`}>
                            {post.category || (isRTL ? 'مقال' : 'Article')}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between bg-white/60 backdrop-blur-sm">
                        <div>
                          {/* Meta info row */}
                          <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {formatDate(post.date as string, locale)}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {getReadingTime(post.excerpt as string)}
                            </span>
                          </div>
                          
                          <h3 className="font-bold text-base md:text-lg text-gray-900 mb-2 group-hover:text-[#1F3D73] transition-colors duration-300 line-clamp-2 leading-snug">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 hidden sm:block">
                            {post.excerpt}
                          </p>
                        </div>

                        {/* Read link */}
                        <a
                          href="#"
                          className={`inline-flex items-center gap-2 mt-3 text-sm font-semibold ${catStyle.text} hover:gap-3 transition-all duration-300 group/link w-fit`}
                        >
                          {t.blog.readMore}
                          <ArrowRight className={`w-4 h-4 transition-transform duration-300 group-hover/link:-translate-x-1 ${isRTL ? 'rotate-180' : ''}`} />
                        </a>
                      </div>
                    </div>
                  </GlassCard>
                </ScrollReveal>
              );
            })}
          </div>
        </StaggerContainer>

        {/* ========================================== */}
        {/* COMPACT PREVIEW ROW                      */}
        {/* 3 Article Preview Cards                  */}
        {/* ========================================== */}
        {compactPosts.length > 0 && (
          <>
            {/* Divider line */}
            <div className="my-10 md:my-12">
              <div className="h-px bg-gradient-to-r from-transparent via-[#1F3D73]/15 to-transparent" />
            </div>

            <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {compactPosts.map((post, index) => {
                const catStyle = getCategoryStyle(post.category, index + 3);
                return (
                  <ScrollReveal key={index} direction="up" delay={0.35 + (index * 0.08)}>
                    <GlassCard
                      blur="sm"
                      className="group overflow-hidden transition-all duration-400 border-transparent hover:border-[#90A36D]/20 hover:shadow-lg hover:shadow-black/5 hover:-translate-y-1 h-full flex flex-col"
                    >
                      {/* Compact Image Header */}
                      <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${catStyle.gradient}`}>
                        {/* Minimal decoration */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-400">
                            <BookOpen className="w-7 h-7 text-white/40" />
                          </div>
                        </div>
                        
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                        {/* Top badges row */}
                        <div className={`absolute top-3 ${isRTL ? 'right-3' : 'left-3'} flex items-center gap-2`}>
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium text-white ${catStyle.bg}`}>
                            {post.category || (isRTL ? 'مقال' : 'Article')}
                          </span>
                        </div>

                        {/* Reading time badge */}
                        <div className={`absolute bottom-3 ${isRTL ? 'left-3' : 'right-3'}`}>
                          <span className="inline-flex items-center gap-1 text-xs text-white/90 bg-black/25 backdrop-blur-sm px-2 py-1 rounded-md">
                            <Clock className="w-3 h-3" />
                            {getReadingTime(post.excerpt as string)}
                          </span>
                        </div>
                      </div>

                      {/* Compact Content */}
                      <div className="p-5 flex-1 flex flex-col bg-white/70">
                        {/* Date */}
                        <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-3">
                          <Calendar className="w-3.5 h-3.5" />
                          <time>{formatDate(post.date as string, locale)}</time>
                        </div>
                        
                        <h3 className="font-bold text-base text-gray-900 mb-2 group-hover:text-[#1F3D73] transition-colors duration-300 line-clamp-2 leading-snug">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-4 flex-1">
                          {post.excerpt}
                        </p>

                        {/* Read more arrow */}
                        <a
                          href="#"
                          className={`inline-flex items-center gap-2 text-sm font-semibold ${catStyle.text} transition-all duration-300 group/link w-fit hover:gap-3`}
                        >
                          {t.blog.readMore}
                          <ArrowRight className={`w-4 h-4 transition-transform duration-300 group-hover/link:-translate-x-1 ${isRTL ? 'rotate-180' : ''}`} />
                        </a>
                      </div>
                    </GlassCard>
                  </ScrollReveal>
                );
              })}
            </StaggerContainer>
          </>
        )}

        {/* View All CTA - Mobile & Bottom */}
        <ScrollReveal direction="up" delay={0.65}>
          <div className="mt-12 md:mt-14 text-center">
            <a
              href="#"
              className="md:hidden inline-flex items-center gap-2 px-8 py-4 border-2 border-[#1F3D73] text-[#1F3D73] hover:bg-[#1F3D73] hover:text-white font-semibold rounded-xl transition-all duration-400 group shadow-sm hover:shadow-lg hover:shadow-[#1F3D73]/20"
            >
              {isRTL ? 'عرض جميع المقالات' : 'View All Articles'}
              <ArrowRight className={`w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1 ${isRTL ? 'rotate-180' : ''}`} />
            </a>
            
            {/* Desktop subtle version */}
            <a
              href="#"
              className="hidden md:inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-[#1F3D73] to-[#2a4f8f] text-white font-semibold rounded-xl transition-all duration-400 group shadow-lg hover:shadow-xl hover:shadow-[#1F3D73]/30 hover:-translate-y-0.5"
            >
              {isRTL ? 'استكشف جميع المقالات' : 'Explore All Articles'}
              <ArrowRight className={`w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1 ${isRTL ? 'rotate-180' : ''}`} />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
