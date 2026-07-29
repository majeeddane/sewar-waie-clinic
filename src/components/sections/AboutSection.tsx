'use client';

import { useLanguage } from '@/lib/LanguageContext';

export default function AboutSection() {
  const { t, locale, direction } = useLanguage();

  const features = t.about.features;

  return (
    <section id="about" className="section-spacing bg-white">
      <div className="container-custom">
        {/* تخطيط غير متماثل: نص (60%) + عرض بصري (40%) */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* العمود النصي (60% = 7 أعمدة) */}
          <div className={direction === 'rtl' ? 'lg:col-span-7' : 'lg:col-span-7'}>
            {/* شريط ذهبي رفيع كعنوان فرعي */}
            <div 
              className="w-16 h-1 mb-8"
              style={{ backgroundColor: '#C29D44' }}
              aria-hidden="true"
            />
            
            {/* عنوان القسم */}
            <h2 
              className="text-[26px] lg:text-[40px] font-extrabold mb-6 leading-[1.2]"
              style={{ 
                fontFamily: 'var(--font-display-arabic)',
                color: '#5D3C83',
              }}
            >
              {t.about.sectionTitle}
            </h2>

            {/* العنوان الفرعي */}
            <h3 
              className="text-[20px] lg:text-[28px] font-extrabold mb-6"
              style={{ 
                fontFamily: 'var(--font-display-arabic)',
                color: '#1a1a2e',
              }}
            >
              {t.about.title}
            </h3>

            {/* فقرة الوصف الأولى */}
            <p 
              className="text-[16px] lg:text-[17px] mb-6 leading-[1.7]"
              style={{ 
                fontFamily: 'var(--font-body-arabic)',
                color: '#4a4a5a',
                fontWeight: 400,
              }}
            >
              {t.about.description}
            </p>

            {/* فقرة الوصف الثانية */}
            <p 
              className="text-[16px] lg:text-[17px] mb-10 leading-[1.7]"
              style={{ 
                fontFamily: 'var(--font-body-arabic)',
                color: '#4a4a5a',
                fontWeight: 400,
              }}
            >
              {t.about.description2}
            </p>
          </div>

          {/* العمود البصري (40% = 5 أعمدة) - Timeline Style */}
          <div className={`${direction === 'rtl' ? 'lg:col-span-5' : 'lg:col-span-5'} relative`}>
            
            {/* الخط الرأسي الرئيسي للـ Timeline */}
            <div 
              className="absolute top-0 bottom-0 w-px"
              style={{ 
                backgroundColor: '#e5e5e5',
                [direction === 'rtl' ? 'right' : 'left']: '24px',
              }}
              aria-hidden="true"
            />

            {/* الميزات الأربع بأسلوب Timeline */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="relative flex gap-6 items-start"
                  style={{
                    flexDirection: direction === 'rtl' ? 'row' : 'row-reverse',
                  }}
                >
                  {/* نقطة التوقف على الخط */}
                  <div 
                    className="absolute w-3 h-3 rounded-full border-2 bg-white flex-shrink-0 mt-1.5"
                    style={{ 
                      borderColor: '#5D3C83',
                      backgroundColor: index === 0 ? '#5D3C83' : 'white',
                      [direction === 'rtl' ? 'right' : 'left']: '19px', // 24px - (3px/2) + 1px for border
                    }}
                  />

                  {/* محتوى الميزة */}
                  <div 
                    className={`${direction === 'rtl' ? 'mr-12' : 'ml-12'} flex-1 pb-2`}
                  >
                    <h4 
                      className="text-[18px] lg:text-[20px] font-bold mb-2"
                      style={{ 
                        fontFamily: 'var(--font-display-arabic)',
                        color: '#1a1a2e',
                      }}
                    >
                      {feature.title}
                    </h4>
                    <p 
                      className="text-[14px] lg:text-[15px] leading-[1.7]"
                      style={{ 
                        fontFamily: 'var(--font-body-arabic)',
                        color: '#6b7280',
                      }}
                    >
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
