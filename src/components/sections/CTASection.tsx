'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';

export default function CTASection() {
  const { t, locale, direction } = useLanguage();

  return (
    <section className="py-24 bg-[#FAFAF8] relative overflow-hidden">
      {/* زخرفة خفيفة */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div 
          className="absolute w-[400px] h-[400px] rounded-full opacity-[0.04]"
          style={{
            background: 'radial-gradient(circle, #5D3C83 0%, transparent 70%)',
            bottom: '-20%',
            left: '-10%',
          }}
        />
      </div>

      <div className="container-custom relative z-10 text-center">
        {/* شريط ذهبي مركزي */}
        <div 
          className="w-16 h-1 mx-auto mb-8"
          style={{ backgroundColor: '#C29D44' }}
          aria-hidden="true"
        />

        <h2 
          className="text-[26px] lg:text-[40px] font-extrabold mb-6 leading-[1.2]"
          style={{ 
            fontFamily: 'var(--font-display-arabic)',
            color: '#5D3C83',
          }}
        >
          {t.cta.title}
        </h2>

        <p 
          className="text-[16px] lg:text-[17px] max-w-xl mx-auto mb-10 leading-[1.7]"
          style={{ 
            fontFamily: 'var(--font-body-arabic)',
            color: '#6b7280',
          }}
        >
          {t.cta.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/#contact">
            <button 
              className="btn-primary inline-flex items-center gap-2"
              style={{ fontFamily: 'var(--font-body-arabic)' }}
            >
              {t.cta.button}
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
          
          <a 
            href="https://wa.me/966553008282" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <button 
              className="btn-secondary inline-flex items-center gap-2"
              style={{ fontFamily: 'var(--font-body-arabic)' }}
            >
              {t.cta.whatsapp}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403c-4.073 0-7.41-3.366-7.41-7.503s3.337-7.503 7.41-7.503c4.074 0 7.41 3.366 7.41 7.503s-3.336 7.503-7.41 7.503M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.435 5.173L2 22l4.883-1.435C8.328 21.47 10.107 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2"/>
              </svg>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
