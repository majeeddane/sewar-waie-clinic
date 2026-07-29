'use client';

import { useRef, useEffect, useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

// Feature data with enhanced content
const featuresData = {
  ar: [
    {
      number: '01',
      title: 'فريق متخصص',
      description: 'نخبة من الأخصائيين والمعالجين المعتمدين بخبرات متنوعة في مجالات العلاج النفسي والإدمان',
    },
    {
      number: '02',
      title: 'خصوصية تامة',
      description: 'نلتزم بأعلى معايير السرية المهنية، جميع بياناتك وجلساتك محمية تماماً',
    },
    {
      number: '03',
      title: 'منهجية علمية',
      description: 'نعتمد أساليب علاجية مثبتة علمياً ومواكبة لأحدث الأبحاث والممارسات العالمية',
    },
    {
      number: '04',
      title: 'بيئة داعمة',
      description: 'مساحة آمنة ودافئة مصممة بعناية لتشعرك بالراحة والأمان خلال رحلة التعافي',
    },
    {
      number: '05',
      title: 'متابعة مستمرة',
      description: 'دعم متواصل ومتابعة بعد انتهاء البرنامج لضمان استدامة النتائج والتعافي',
    },
    {
      number: '06',
      title: 'نتائج ملموسة',
      description: 'سجل حافل بقصص نجاح حقيقية ونتائج مثبتة في تحسين جودة حياة المستفيدين',
    },
  ],
  en: [
    {
      number: '01',
      title: 'Specialized Team',
      description: 'Elite certified professionals with diverse expertise in psychotherapy and addiction treatment',
    },
    {
      number: '02',
      title: 'Complete Confidentiality',
      description: 'We adhere to the highest professional standards to protect your privacy completely',
    },
    {
      number: '03',
      title: 'Evidence-Based Approach',
      description: 'We use scientifically proven therapeutic methods aligned with latest global research',
    },
    {
      number: '04',
      title: 'Supportive Environment',
      description: 'A safe and warm space carefully designed to make you feel comfortable and secure',
    },
    {
      number: '05',
      title: 'Continuous Support',
      description: 'Ongoing support and follow-up after program completion to ensure sustainable recovery',
    },
    {
      number: '06',
      title: 'Proven Results',
      description: 'A strong track record of real success stories and measurable life improvements',
    },
  ],
};

interface FeatureCardProps {
  number: string;
  title: string;
  description: string;
  index: number;
  isVisible: boolean;
  locale: string;
}

function FeatureCard({ number, title, description, index, isVisible, locale }: FeatureCardProps) {
  return (
    <div
      className="group relative p-6 lg:p-8 transition-all duration-700"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transitionDelay: `${index * 120 + 200}ms`,
        transitionTimingFunction: 'cubic-bezier(0.25, 1, 0.5, 1)',
      }}
    >
      {/* Gold accent line at top */}
      <div
        className="absolute top-0 right-0 left-0 h-px origin-left transition-transform duration-700 group-hover:scale-x-100"
        style={{
          background: 'linear-gradient(90deg, transparent, #C29D44, transparent)',
          transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
          transformOrigin: locale === 'ar' ? 'right' : 'left',
          transitionDelay: `${index * 120 + 400}ms`,
        }}
      />

      {/* Ghost Number - Large decorative background */}
      <span
        className="absolute select-none pointer-events-none leading-none font-[var(--font-heading-en)]"
        style={{
          fontSize: 'clamp(100px, 15vw, 180px)',
          fontWeight: 300,
          color: 'transparent',
          WebkitTextStroke: '1px rgba(255, 255, 255, 0.1)',
          top: '-20px',
          [locale === 'ar' ? 'right' : 'left']: '-10px',
          zIndex: 0,
          opacity: isVisible ? 1 : 0,
          transition: `opacity 1s cubic-bezier(0.16, 1, 0.3, 1) ${index * 120}ms`,
        }}
        aria-hidden="true"
      >
        {number}
      </span>

      {/* Content */}
      <div className="relative z-10">
        <h3
          className="text-lg lg:text-xl font-bold mb-3 text-white transition-colors duration-300"
          style={{ fontFamily: 'var(--font-heading-ar)' }}
        >
          {title}
        </h3>
        <p
          className="text-sm lg:text-base leading-relaxed transition-colors duration-300"
          style={{
            fontFamily: 'var(--font-body-ar)',
            color: 'rgba(255, 255, 255, 0.7)',
            maxWidth: '320px',
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export default function WhyUsSection() {
  const { t, locale } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const features = featuresData[locale as keyof typeof featuresData] || featuresData.ar;

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setTimeout(() => setIsVisible(true), 0);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), 0);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '-50px 0px -50px 0px',
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why-us"
      className="relative overflow-hidden w-full"
      style={{
        background: 'linear-gradient(165deg, #5D3C83 0%, #3D2565 50%, #2D1A4D 100%)',
        padding: 'clamp(80px, 12vw, 140px) 0',
      }}
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Subtle radial gradient - top right */}
        <div
          className="absolute rounded-full"
          style={{
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(194, 157, 68, 0.08) 0%, transparent 70%)',
            top: '-200px',
            right: '-200px',
          }}
        />
        
        {/* Subtle radial gradient - bottom left */}
        <div
          className="absolute rounded-full"
          style={{
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(93, 60, 131, 0.3) 0%, transparent 70%)',
            bottom: '-150px',
            left: '-150px',
          }}
        />
        
        {/* Faint circle decoration */}
        <div
          className="absolute rounded-full border border-white/[0.03]"
          style={{
            width: '800px',
            height: '800px',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
        
        {/* Noise texture overlay for depth */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div 
          className="mb-16 lg:mb-20 transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transitionDelay: '0ms',
          }}
        >
          {/* Section Label - Gold */}
          <p
            className="text-sm tracking-widest uppercase mb-4"
            style={{
              fontFamily: 'var(--font-body-ar)',
              color: '#C29D44',
              letterSpacing: '0.2em',
              fontWeight: 500,
            }}
          >
            {t.whyUs.sectionTitle}
          </p>
          
          {/* Main Heading */}
          <h2
            className="text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-extrabold text-white leading-tight max-w-4xl"
            style={{ 
              fontFamily: 'var(--font-heading-ar)',
              lineHeight: 1.2,
            }}
          >
            {locale === 'ar' 
              ? 'نؤمن بأن كل شخص يستحق الرعاية الأفضل'
              : 'We Believe Everyone Deserves the Best Care'
            }
          </h2>
          
          {/* Decorative gold line under heading */}
          <div
            className="mt-8 h-px origin-left transition-transform duration-1000 delay-500"
            style={{
              width: '80px',
              background: 'linear-gradient(90deg, #C29D44, transparent)',
              transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
            }}
          />
        </div>

        {/* Features Grid - 2 columns on mobile, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 lg:gap-x-12 lg:gap-y-16">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.number}
              number={feature.number}
              title={feature.title}
              description={feature.description}
              index={index}
              isVisible={isVisible}
              locale={locale}
            />
          ))}
        </div>
      </div>

      {/* Bottom decorative fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(45, 26, 77, 0.5), transparent)',
        }}
      />
    </section>
  );
}
