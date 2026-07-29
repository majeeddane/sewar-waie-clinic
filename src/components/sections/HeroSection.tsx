'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';

export default function HeroSection() {
  const { t, locale, direction } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#FAFAF8] overflow-hidden">
      {/* خلفية تدرج شفاف خفيف جداً (5% opacity) في الزاوية */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div 
          className="absolute w-[600px] h-[600px] rounded-full opacity-[0.05]"
          style={{
            background: 'radial-gradient(circle, #5D3C83 0%, transparent 70%)',
            top: '-10%',
            right: direction === 'rtl' ? 'auto' : '-5%',
            left: direction === 'rtl' ? '-5%' : 'auto',
          }}
        />
      </div>

      <div className="container-custom relative z-10 py-24 lg:py-32">
        {/* Split Layout: نص (55%) + رسم (45%) */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* العمود الأيسر - النص (55% = 7 أعمدة من 12) */}
          <div className={`${direction === 'rtl' ? 'lg:col-span-7' : 'lg:col-span-7'} order-2 lg:order-1`}>
            
            {/* شارة صغيرة */}
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-sm font-medium"
              style={{ 
                backgroundColor: 'rgba(93, 60, 131, 0.06)',
                color: '#5D3C83',
                fontFamily: 'var(--font-body-arabic)'
              }}
            >
              <span className="w-2 h-2 rounded-full bg-[#C29D44]" />
              {locale === 'ar' ? 'مركز رعاية نفسية متكامل' : 'Integrated Mental Health Care Center'}
            </div>

            {/* H1 العنوان الرئيسي */}
            <h1 
              className="text-[34px] lg:text-[56px] leading-[1.15] font-extrabold mb-6"
              style={{ 
                fontFamily: 'var(--font-display-arabic)',
                color: '#1a1a2e',
              }}
            >
              <span className="block" style={{ color: '#5D3C83' }}>{t.hero.title}</span>
              <span className="block mt-2">{t.hero.subtitle}</span>
            </h1>

            {/* فقرة وصفية */}
            <p 
              className="text-[16px] lg:text-[17px] mb-10 max-w-xl leading-[1.7]"
              style={{ 
                fontFamily: 'var(--font-body-arabic)',
                color: '#4a4a5a',
                fontWeight: 400,
              }}
            >
              {t.hero.description}
            </p>

            {/* الأزرار */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12">
              {/* زر أساسي */}
              <Link href="/#contact">
                <button 
                  className="btn-primary inline-flex items-center gap-2"
                  style={{ fontFamily: 'var(--font-body-arabic)' }}
                >
                  {t.hero.cta}
                  <svg 
                    width="18" 
                    height="18" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={direction === 'rtl' ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} />
                  </svg>
                </button>
              </Link>

              {/* زر ثانوي - Outline */}
              <Link href="/#about">
                <button 
                  className="btn-secondary inline-flex items-center gap-2"
                  style={{ fontFamily: 'var(--font-body-arabic)' }}
                >
                  {t.hero.learnMore}
                  <svg 
                    width="18" 
                    height="18" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={direction === 'rtl' ? "M9 5l7 7-7 7" : "M15 19l-7-7 7-7"} />
                  </svg>
                </button>
              </Link>
            </div>

            {/* الإحصائيات - سطر أفقي رفيع مع خطوط فاصلة */}
            <div className="flex flex-wrap items-center gap-0">
              {/* إحصائية 1 */}
              <div className="flex items-center gap-3 pr-6 md:pr-8">
                <span 
                  className="text-[24px] lg:text-[28px] font-bold"
                  style={{ 
                    fontFamily: 'var(--font-display-arabic)',
                    color: '#5D3C83',
                  }}
                >
                  500+
                </span>
                <span 
                  className="text-[14px]"
                  style={{ 
                    fontFamily: 'var(--font-body-arabic)',
                    color: '#6b7280',
                  }}
                >
                  {locale === 'ar' ? 'مستفيد' : 'Clients'}
                </span>
              </div>

              {/* فاصل */}
              <div className="w-px h-8 bg-gray-200 hidden sm:block" />

              {/* إحصائية 2 */}
              <div className="flex items-center gap-3 px-6 md:px-8">
                <span 
                  className="text-[24px] lg:text-[28px] font-bold"
                  style={{ 
                    fontFamily: 'var(--font-display-arabic)',
                    color: '#5D3C83',
                  }}
                >
                  15+
                </span>
                <span 
                  className="text-[14px]"
                  style={{ 
                    fontFamily: 'var(--font-body-arabic)',
                    color: '#6b7280',
                  }}
                >
                  {locale === 'ar' ? 'أخصائي' : 'Experts'}
                </span>
              </div>

              {/* فاصل */}
              <div className="w-px h-8 bg-gray-200 hidden sm:block" />

              {/* إحصائية 3 */}
              <div className="flex items-center gap-3 pl-6 md:pl-8">
                <span 
                  className="text-[24px] lg:text-[28px] font-bold"
                  style={{ 
                    fontFamily: 'var(--font-display-arabic)',
                    color: '#5D3C83',
                  }}
                >
                  98%
                </span>
                <span 
                  className="text-[14px]"
                  style={{ 
                    fontFamily: 'var(--font-body-arabic)',
                    color: '#6b7280',
                  }}
                >
                  {locale === 'ar' ? 'رضا' : 'Satisfaction'}
                </span>
              </div>
            </div>
          </div>

          {/* العمود الأيمن - رسم الشجرة (45% = 5 أعمدة من 12) */}
          <div className={`${direction === 'rtl' ? 'lg:col-span-5' : 'lg:col-span-5'} order-1 lg:order-2 flex items-center justify-center`}>
            <div className="relative w-full max-w-[320px] mx-auto lg:max-w-[400px]">
              {/* رسم SVG للشجرة داخل هلال - عائم بدون إطار */}
              <HeroTreeIllustration />
              
              {/* عنصر زخرفي صغير - هلال شفاف */}
              <div 
                className="absolute -top-4 -right-4 w-16 h-16 opacity-10 pointer-events-none"
                style={{ transform: 'rotate(-15deg)' }}
              >
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M32 6C17.641 6 6 17.641 6 32c0 3.946.85 7.689 2.37 11.06A25.92 25.92 0 0132 58c14.359 0 26-11.641 26-26 0-3.946-.85-7.689-2.37-11.06A25.92 25.92 0 0132 6z"
                    stroke="#C29D44"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path
                    d="M32 14a18 18 0 0118 18c0 4.5-1.65 8.62-4.38 11.79A17.94 17.94 0 0132 50a18 18 0 01-13.62-30.21A17.94 17.94 0 0132 14z"
                    fill="#5D3C83"
                    opacity="0.08"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* موجة فاصلة في الأسفل */}
      <div className="absolute bottom-0 left-0 right-0 leading-none" aria-hidden="true">
        <svg 
          viewBox="0 0 1440 60" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 24C96 40 288 56 480 50C672 44 864 24 1056 18C1248 12 1344 24 1440 30V60H0V24Z"
            fill="#FAFAF8"
          />
        </svg>
      </div>
    </section>
  );
}

// مكون رسم الشجرة SVG
function HeroTreeIllustration() {
  return (
    <svg 
      viewBox="0 0 320 380" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      aria-hidden="true"
    >
      <defs>
        {/* تدرج للجذور */}
        <linearGradient id="tree-root-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#5D3C83" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#1F3D73" stopOpacity="0.4" />
        </linearGradient>
        
        {/* تدرج للجذع */}
        <linearGradient id="tree-trunk-gradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#1F3D73" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#5D3C83" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#90A36D" stopOpacity="0.5" />
        </linearGradient>
        
        {/* تدرج للأغصان */}
        <linearGradient id="tree-branch-gradient" x1="50%" y1="100%" x2="50%" y2="0%">
          <stop offset="0%" stopColor="#5D3C83" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#90A36D" stopOpacity="0.4" />
        </linearGradient>
        
        {/* تدرج للأوراق */}
        <radialGradient id="leaf-glow" cx="30%" cy="30%">
          <stop offset="0%" stopColor="#C29D44" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#90A36D" stopOpacity="0.5" />
        </radialGradient>
      </defs>

      {/* الجذور - Foundation */}
      <g className="tree-roots">
        <path
          d="M155 340 Q148 355 138 365 Q128 375 115 380 M155 340 Q162 355 172 368 Q182 378 195 383 M155 340 Q152 358 145 375 Q140 390 130 398 M155 340 Q160 360 168 378 Q175 392 188 400"
          stroke="url(#tree-root-gradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
      </g>

      {/* الجذع - Growth */}
      <g className="tree-trunk">
        <path
          d="M153 338 L151 295 Q149 270 152 245 L156 210 Q158 195 160 178 L162 150 Q164 135 162 118"
          stroke="url(#tree-trunk-gradient)"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />
        {/* أغصان جانبية من الجذع */}
        <path
          d="M156 210 Q145 202 133 208 Q120 214 112 225"
          stroke="url(#tree-trunk-gradient)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M160 190 Q172 184 183 189 Q195 196 203 206"
          stroke="url(#tree-trunk-gradient)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </g>

      {/* الأغصان الرئيسية */}
      <g className="tree-branches">
        <path
          d="M162 150 Q142 138 122 130 Q102 124 82 128"
          stroke="url(#tree-branch-gradient)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M158 168 Q140 162 125 168 Q108 176 95 185"
          stroke="url(#tree-branch-gradient)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M163 132 Q180 122 198 118 Q218 114 236 120"
          stroke="url(#tree-branch-gradient)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M159 145 Q175 140 190 144 Q205 150 216 158"
          stroke="url(#tree-branch-gradient)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </g>

      {/* الأوراق - Fruits of Care */}
      <g className="tree-leaves">
        {/* أوراق على الفرع الأيسر */}
        <circle cx="82" cy="128" r="7" fill="url(#leaf-glow)" opacity="0.7" />
        <circle cx="100" cy="118" r="5" fill="#90A36D" opacity="0.5" />
        <circle cx="70" cy="135" r="6" fill="url(#leaf-glow)" opacity="0.6" />
        <circle cx="95" cy="185" r="5" fill="#90A36D" opacity="0.5" />
        
        {/* أوراق على الفرع الأيمن */}
        <circle cx="236" cy="120" r="7" fill="url(#leaf-glow)" opacity="0.7" />
        <circle cx="220" cy="110" r="5" fill="#90A36D" opacity="0.5" />
        <circle cx="248" cy="130" r="6" fill="url(#leaf-glow)" opacity="0.6" />
        <circle cx="216" cy="158" r="5" fill="#90A36D" opacity="0.5" />
        
        {/* أوراق متوسطة */}
        <circle cx="122" cy="130" r="5" fill="#90A36D" opacity="0.5" />
        <circle cx="195" cy="116" r="5" fill="#90A36D" opacity="0.5" />
      </g>

      {/* الهلال الزخرفي - Arabic Element */}
      <g className="decorative-crescent" opacity="0.15">
        <path
          d="M260 50 A20 20 0 1 1 278 32 A16 16 0 1 0 260 50"
          fill="#C29D44"
        />
      </g>

      {/* نجوم زخرفية صغيرة */}
      <g className="decorative-stars" opacity="0.2">
        <circle cx="265" cy="55" r="3" fill="#C29D44" />
        <circle cx="55" cy="70" r="2.5" fill="#C29D44" />
        <circle cx="250" cy="72" r="2" fill="#C29D44" />
      </g>
    </svg>
  );
}
