'use client';

import { useLanguage } from '@/lib/LanguageContext';

export default function WhyUsSection() {
  const { t, locale } = useLanguage();
  const reasons = t.whyUs.reasons;

  return (
    <section id="why-us" className="section-spacing relative overflow-hidden" style={{ backgroundColor: '#5D3C83' }}>
      
      {/* خلفية بنمط خفيف */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div 
          className="absolute w-96 h-96 rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(194, 157, 68, 0.3) 0%, transparent 70%)',
            top: '-20%',
            right: '-10%',
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* عنوان القسم */}
        <div className="text-center mb-16">
          {/* خط ذهبي رفيع مركزي */}
          <div 
            className="w-16 h-1 mx-auto mb-8"
            style={{ backgroundColor: '#C29D44' }}
            aria-hidden="true"
          />
          
          <h2 
            className="text-[26px] lg:text-[40px] font-extrabold mb-4"
            style={{ 
              fontFamily: 'var(--font-display-arabic)',
              color: '#ffffff',
            }}
          >
            {t.whyUs.sectionTitle}
          </h2>
        </div>

        {/* قائمة الأسباب الستة - Ghost Numbers */}
        <div className="max-w-3xl mx-auto space-y-0">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="relative flex items-start gap-6 py-8 border-b last:border-b-0"
              style={{ borderColor: 'rgba(255, 255, 255, 0.12)' }}
            >
              
              {/* Ghost Number - رقم شفاف كبير في الخلفية */}
              <span 
                className="absolute text-[80px] lg:text-[100px] font-bold leading-none select-none"
                style={{
                  fontFamily: 'var(--font-display-arabic)',
                  color: 'rgba(255, 255, 255, 0.06)',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  [locale === 'ar' ? 'right' : 'left']: '0',
                }}
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, '0')}
              </span>

              {/* المحتوى */}
              <div className={`${locale === 'ar' ? 'mr-20' : 'ml-20'} flex-1`}>
                <h3 
                  className="text-[18px] lg:text-[22px] font-bold mb-2"
                  style={{ 
                    fontFamily: 'var(--font-display-arabic)',
                    color: '#ffffff',
                  }}
                >
                  {reason.title}
                </h3>
                <p 
                  className="text-[14px] lg:text-[15px] leading-[1.7]"
                  style={{ 
                    fontFamily: 'var(--font-body-arabic)',
                    color: 'rgba(250, 250, 248, 0.75)',
                  }}
                >
                  {reason.desc}
                </p>
              </div>

              {/* خط ذهبي رفيع كفاصل بصري */}
              <div 
                className="w-1 h-12 flex-shrink-0 mt-1"
                style={{ backgroundColor: 'rgba(194, 157, 68, 0.4)' }}
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
