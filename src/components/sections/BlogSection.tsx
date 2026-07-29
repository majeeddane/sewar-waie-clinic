'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { ArrowLeft } from 'lucide-react';

export default function BlogSection() {
  const { t, locale, direction } = useLanguage();
  const posts = t.blog.posts;

  return (
    <section id="blog" className="section-spacing bg-[#FAFAF8]">
      <div className="container-custom">
        {/* عنوان القسم */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div>
            {/* شريط ذهبي */}
            <div 
              className="w-16 h-1 mb-8"
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
              {t.blog.title}
            </h2>
            
            <p 
              className="text-[16px] lg:text-[17px] leading-[1.7]"
              style={{ 
                fontFamily: 'var(--font-body-arabic)',
                color: '#6b7280',
              }}
            >
              {t.blog.subtitle}
            </p>
          </div>

          <a href="#" className="hidden md:inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200 hover:text-[#5D3C83]" style={{ fontFamily: 'var(--font-body-arabic)', color: '#5D3C83' }}>
            {locale === 'ar' ? 'عرض الكل' : 'View All'}
            <ArrowLeft width="16" height="16" />
          </a>
        </div>

        {/* شبكة المقالات */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="group bg-white rounded-lg overflow-hidden border border-gray-100 transition-all duration-200 hover:shadow-md"
            >
              {/* صورة المقال - Placeholder بلون خفيف */}
              <div 
                className="h-48 relative overflow-hidden"
                style={{ backgroundColor: index === 0 ? '#f0f4f0' : index === 1 ? '#f4f0f0' : '#f0f0f4' }}
              >
                {/* زخرفة بسيطة */}
                <div 
                  className="absolute inset-0 flex items-center justify-center opacity-20"
                  style={{ color: index === 0 ? '#90A36D' : index === 1 ? '#C29D44' : '#5D3C83' }}
                >
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                  </svg>
                </div>
                
                {/* التصنيف */}
                <span 
                  className="absolute top-4 right-4 px-3 py-1 text-xs font-medium rounded-full"
                  style={{ 
                    fontFamily: 'var(--font-body-arabic)',
                    backgroundColor: 'rgba(93, 60, 131, 0.08)',
                    color: '#5D3C83',
                  }}
                >
                  {post.category}
                </span>
              </div>

              {/* محتوى المقال */}
              <div className="p-6">
                {/* التاريخ */}
                <time 
                  className="block text-xs mb-3"
                  style={{ 
                    fontFamily: 'var(--font-body-arabic)',
                    color: '#9ca3af',
                  }}
                >
                  {post.date}
                </time>

                {/* العنوان */}
                <h3 
                  className="text-[18px] font-bold mb-3 leading-[1.4] group-hover:text-[#5D3C83] transition-colors duration-200"
                  style={{ 
                    fontFamily: 'var(--font-display-arabic)',
                    color: '#1a1a2e',
                  }}
                >
                  {post.title}
                </h3>

                {/* المقتطف */}
                <p 
                  className="text-[14px] leading-[1.7] mb-4 line-clamp-2"
                  style={{ 
                    fontFamily: 'var(--font-body-arabic)',
                    color: '#6b7280',
                  }}
                >
                  {post.excerpt}
                </p>

                {/* رابط اقرأ المزيد */}
                <span 
                  className="inline-flex items-center gap-1 text-sm font-medium transition-colors duration-200 group-hover:gap-2"
                  style={{ 
                    fontFamily: 'var(--font-body-arabic)',
                    color: '#5D3C83',
                  }}
                >
                  {t.blog.readMore}
                  <ArrowLeft width="14" height="14" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
