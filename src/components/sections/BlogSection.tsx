'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { ArrowLeft, Clock, FileText } from 'lucide-react';
import { FadeInUp, StaggerContainer } from '@/components/effects/TextReveal';

export default function BlogSection() {
  const { t, locale, direction } = useLanguage();
  const posts = t.blog.posts;

  // Color palette for different posts
  const cardColors = [
    { bg: '#f5f7f4', accent: '#90A36D', icon: '🌿' },
    { bg: '#f7f5f2', accent: '#C29D44', icon: '💡' },
    { bg: '#f4f5f8', accent: '#5D3C83', icon: '🧠' },
  ];

  return (
    <section id="blog" className="section-spacing bg-[#FAFAF8] relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div 
          className="absolute w-[400px] h-[400px] rounded-full opacity-[0.03]"
          style={{
            background: 'radial-gradient(circle, #90A36D 0%, transparent 70%)',
            bottom: '-15%',
            right: '-10%',
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <FadeInUp>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 lg:mb-16 gap-6">
            <div>
              {/* Gold accent line - 40px wide, 3px height */}
              <div 
                className="w-10 h-[3px] mb-8"
                style={{ backgroundColor: '#C29D44' }}
                aria-hidden="true"
              />
              
              <h2 
                className="text-[28px] md:text-[36px] lg:text-[44px] font-extrabold mb-4 leading-[1.15]"
                style={{ 
                  fontFamily: 'var(--font-display-arabic)',
                  color: '#5D3C83',
                }}
              >
                {t.blog.title}
              </h2>
              
              <p 
                className="text-[16px] lg:text-[17px] leading-[1.75]"
                style={{ 
                  fontFamily: 'var(--font-body-arabic)',
                  color: '#6b7280',
                }}
              >
                {t.blog.subtitle}
              </p>
            </div>

            <a 
              href="#" 
              className="group hidden md:inline-flex items-center gap-2.5 text-sm font-semibold transition-all duration-300 hover:gap-3"
              style={{ 
                fontFamily: 'var(--font-body-arabic)', 
                color: '#5D3C83',
              }}
            >
              {locale === 'ar' ? 'عرض الكل' : 'View All'}
              <ArrowLeft 
                width="16" 
                height="16"
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
            </a>
          </div>
        </FadeInUp>

        {/* Blog Grid - Editorial Style */}
        <StaggerContainer staggerDelay={120}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {posts.map((post, index) => {
              const colors = cardColors[index % cardColors.length];
              const isFeatured = index === 0;
              
              return (
                <FadeInUp key={index} delay={index * 100}>
                  <article
                    className={`group bg-white rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer ${
                      isFeatured ? 'md:col-span-2 lg:col-span-1' : ''
                    }`}
                    style={{
                      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.04), 0 4px 12px rgba(0, 0, 0, 0.03)',
                      transform: 'translateY(0)',
                      transitionProperty: 'transform, box-shadow',
                      transitionTimingFunction: 'cubic-bezier(0.25, 1, 0.5, 1)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-6px)';
                      e.currentTarget.style.boxShadow = '0 12px 40px rgba(93, 60, 131, 0.12), 0 4px 12px rgba(0, 0, 0, 0.04)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.04), 0 4px 12px rgba(0, 0, 0, 0.03)';
                    }}
                  >
                    {/* Image Area - 56% of card height with gradient overlay on hover */}
                    <div 
                      className="relative h-56 lg:h-64 overflow-hidden"
                      style={{ backgroundColor: colors.bg }}
                    >
                      {/* Decorative icon */}
                      <div 
                        className="absolute inset-0 flex items-center justify-center opacity-20 transition-opacity duration-500 group-hover:opacity-30"
                        style={{ color: colors.accent }}
                      >
                        <span className="text-6xl">{colors.icon}</span>
                      </div>
                      
                      {/* Gradient overlay on hover */}
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: `linear-gradient(to top, ${colors.accent}15 0%, transparent 50%)`,
                        }}
                      />

                      {/* Category Badge - Refined styling */}
                      <span 
                        className="absolute top-4 right-4 px-3.5 py-1.5 text-xs font-semibold tracking-wide uppercase rounded-full backdrop-blur-sm transition-all duration-300 group-hover:scale-105"
                        style={{ 
                          fontFamily: 'var(--font-body-arabic)',
                          backgroundColor: `${colors.accent}12`,
                          color: colors.accent,
                          border: `1px solid ${colors.accent}20`,
                        }}
                      >
                        {post.category}
                      </span>

                      {/* Read time indicator */}
                      <div 
                        className="absolute bottom-4 left-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium opacity-70"
                        style={{ 
                          fontFamily: 'var(--font-body-arabic)',
                          backgroundColor: 'rgba(255,255,255,0.85)',
                          color: '#6b7280',
                        }}
                      >
                        <Clock width="12" height="12" />
                        {locale === 'ar' ? '5 دقائق' : '5 min'}
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-6 lg:p-7">
                      {/* Date */}
                      <time 
                        className="block text-xs font-medium mb-3 tracking-wide uppercase"
                        style={{ 
                          fontFamily: 'var(--font-body-arabic)',
                          color: '#9ca3af',
                          letterSpacing: '0.05em',
                        }}
                      >
                        {post.date}
                      </time>

                      {/* Title - Bolder & Larger */}
                      <h3 
                        className="text-[18px] lg:text-[19px] font-bold mb-3.5 leading-[1.45] transition-colors duration-300"
                        style={{ 
                          fontFamily: 'var(--font-display-arabic)',
                          color: '#1a1a2e',
                        }}
                      >
                        {post.title}
                      </h3>

                      {/* Excerpt - Better line-clamp */}
                      <p 
                        className="text-[14px] lg:text-[15px] mb-5 leading-[1.8]"
                        style={{ 
                          fontFamily: 'var(--font-body-arabic)',
                          color: '#6b7280',
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        {post.excerpt}
                      </p>

                      {/* Read More Link with arrow animation */}
                      <span 
                        className="group/link inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300"
                        style={{ 
                          fontFamily: 'var(--font-body-arabic)',
                          color: '#5D3C83',
                        }}
                      >
                        {t.blog.readMore}
                        <ArrowLeft 
                          width="16" 
                          height="16"
                          className="transition-transform duration-300 group-hover/link:-translate-x-1.5"
                          style={{ transitionTimingFunction: 'cubic-bezier(0.25, 1, 0.5, 1)' }}
                        />
                      </span>
                    </div>
                  </article>
                </FadeInUp>
              );
            })}
          </div>
        </StaggerContainer>

        {/* Mobile View All Link */}
        <FadeInUp delay={300}>
          <div className="mt-10 text-center md:hidden">
            <a 
              href="#" 
              className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200"
              style={{ 
                fontFamily: 'var(--font-body-arabic)', 
                color: '#5D3C83',
              }}
            >
              {locale === 'ar' ? 'عرض جميع المقالات' : 'View All Articles'}
              <ArrowLeft width="16" height="16" />
            </a>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
