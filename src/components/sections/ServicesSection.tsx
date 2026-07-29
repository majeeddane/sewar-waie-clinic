'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { 
  User, 
  Heart, 
  Users, 
  MessageCircle, 
  Baby, 
  GraduationCap 
} from 'lucide-react';

// أيقونات خطية بسيطة موحدة
const iconMap: Record<string, React.ElementType> = {
  user: User,
  heart: Heart,
  users: Users,
  'message-circle': MessageCircle,
  baby: Baby,
  'graduation-cap': GraduationCap,
};

export default function ServicesSection() {
  const { t, locale } = useLanguage();
  const services = t.services.items;

  return (
    <section id="services" className="section-spacing bg-[#FAFAF8]">
      <div className="container-custom">
        {/* عنوان القسم */}
        <div className="text-center mb-16">
          {/* شريط ذهبي رفيع مركزي */}
          <div 
            className="w-16 h-1 mx-auto mb-8"
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
            {t.services.sectionTitle}
          </h2>
          
          <p 
            className="text-[16px] lg:text-[17px] max-w-2xl mx-auto leading-[1.7]"
            style={{ 
              fontFamily: 'var(--font-body-arabic)',
              color: '#6b7280',
            }}
          >
            {t.services.sectionSubtitle}
          </p>
        </div>

        {/* Bento Grid - تخطيط غير متساوي */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || User;
            
            // الخدمتان الأوليتان (العلاج النفسي، علاج الإدمان) - بطاقات كبيرة
            const isLarge = index < 2;
            
            return (
              <div
                key={index}
                className={`
                  group bg-white rounded-lg p-8 transition-all duration-200
                  border border-gray-100
                  hover:shadow-md
                  ${isLarge ? 'md:col-span-1' : ''}
                `}
                style={{
                  // بطاقات الخدمات الرئيسية أطول قليلاً
                  minHeight: isLarge ? '220px' : '200px',
                }}
              >
                {/* الأيقونة الخطية */}
                <div 
                  className="w-12 h-12 flex items-center justify-center rounded-lg mb-6 transition-colors duration-200"
                  style={{ 
                    backgroundColor: 'rgba(93, 60, 131, 0.06)',
                  }}
                >
                  <IconComponent 
                    width="24" 
                    height="24" 
                    style={{ color: '#5D3C83', strokeWidth: 1.5 }} 
                  />
                </div>

                {/* العنوان */}
                <h3 
                  className="text-[20px] lg:text-[22px] font-bold mb-3"
                  style={{ 
                    fontFamily: 'var(--font-display-arabic)',
                    color: '#1a1a2e',
                  }}
                >
                  {service.title}
                </h3>

                {/* الوصف */}
                <p 
                  className="text-[14px] lg:text-[15px] leading-[1.7]"
                  style={{ 
                    fontFamily: 'var(--font-body-arabic)',
                    color: '#6b7280',
                  }}
                >
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* زر الحجز */}
        <div className="text-center mt-16">
          <a href="/#contact">
            <button 
              className="btn-primary"
              style={{ fontFamily: 'var(--font-body-arabic)' }}
            >
              {t.services.bookNow}
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
