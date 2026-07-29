'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { TextReveal, FadeInUp, StaggerContainer } from '@/components/effects/TextReveal';
import { 
  User, 
  Heart, 
  Users, 
  MessageCircle, 
  Baby, 
  GraduationCap,
  Brain,
  HandHeart,
  Star,
  ArrowUpRight
} from 'lucide-react';


// Icon mapping for services
const iconMap: Record<string, React.ElementType> = {
  user: User,
  heart: Heart,
  users: Users,
  'message-circle': MessageCircle,
  baby: Baby,
  'graduation-cap': GraduationCap,
};

// Additional icons for variety in bento grid
const extraIcons = [Brain, HandHeart];

// Bento Grid Card Types
type CardVariant = 'featured' | 'standard' | 'tall' | 'wide';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  variant: CardVariant;
  index: number;
  isPopular?: boolean;
  locale: 'ar' | 'en';
}

// Individual Service Card Component
function ServiceCard({ title, description, icon, variant, index, isPopular, locale }: ServiceCardProps) {
  const IconComponent = iconMap[icon] || extraIcons[index % extraIcons.length] || User;
  
  // Determine card styling based on variant
  const getCardStyles = () => {
    const baseStyles = `
      group relative rounded-2xl p-6 lg:p-8 
      transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
      cursor-pointer overflow-hidden
      hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-900/8
    `;
    
    switch (variant) {
      case 'featured':
        return `${baseStyles} bg-[rgba(93,60,131,0.04)] border border-purple-100/50`;
      case 'tall':
        return `${baseStyles} bg-white border border-gray-200/60`;
      case 'wide':
        return `${baseStyles} bg-white border border-gray-200/60`;
      default:
        return `${baseStyles} bg-white border border-gray-200/60`;
    }
  };

  const getIconContainerStyle = () => {
    switch (variant) {
      case 'featured':
        return {
          background: 'linear-gradient(135deg, rgba(93, 60, 131, 0.12) 0%, rgba(93, 60, 131, 0.06) 100%)',
          size: 'w-16 h-16 lg:w-20 lg:h-20',
          iconSize: 32,
          iconColor: '#5D3C83',
        };
      default:
        return {
          background: 'linear-gradient(135deg, rgba(93, 60, 131, 0.06) 0%, rgba(144, 163, 109, 0.04) 100%)',
          size: 'w-14 h-14',
          iconSize: 28,
          iconColor: '#5D3C83',
        };
    }
  };

  const iconStyle = getIconContainerStyle();

  return (
    <FadeInUp delay={index * 100} distance={30}>
      <div className={getCardStyles()}>
        
        {/* Popular Badge */}
        {isPopular && (
          <div className="absolute top-4 rtl:left-4 ltr:right-4 z-10">
            <span 
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
              style={{ 
                backgroundColor: 'rgba(194, 157, 68, 0.1)',
                color: '#C29D44',
                fontFamily: 'var(--font-body-arabic)',
              }}
            >
              <Star width={12} height={12} fill="currentColor" />
              {locale === 'ar' ? 'الأكثر طلباً' : 'Most Popular'}
            </span>
          </div>
        )}

        {/* Icon Area - Top 40% of card with elegant styling */}
        <div 
          className={`${iconStyle.size} rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-105`}
          style={{ background: iconStyle.background }}
        >
          <IconComponent 
            width={iconStyle.iconSize} 
            height={iconStyle.iconSize}
            style={{ color: iconStyle.iconColor, strokeWidth: 1.25 }} 
          />
          
          {/* Subtle glow effect on hover */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
            style={{
              background: 'radial-gradient(circle at center, rgba(93, 60, 131, 0.08) 0%, transparent 70%)',
              filter: 'blur(20px)',
            }}
          />
        </div>

        {/* Content Area */}
        <div className="space-y-3">
          {/* Service Name */}
          <h3 
            className="text-lg lg:text-xl font-bold leading-snug transition-colors duration-300"
            style={{ 
              fontFamily: 'var(--font-display-arabic)',
              color: '#1a1a2e',
            }}
          >
            {title}
          </h3>

          {/* Description */}
          <p 
            className={`leading-relaxed ${variant === 'tall' || variant === 'featured' ? 'text-sm lg:text-base' : 'text-sm'}`}
            style={{ 
              fontFamily: 'var(--font-body-arabic)',
              color: '#6b7280',
              lineHeight: 1.75,
            }}
          >
            {description}
          </p>
        </div>

        {/* Hover indicator arrow */}
        <div 
          className="absolute bottom-5 rtl:left-6 ltr:right-6 w-8 h-8 rounded-full flex items-center justify-center opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
          style={{ backgroundColor: 'rgba(93, 60, 131, 0.08)' }}
        >
          <ArrowUpRight width={14} height={14} style={{ color: '#5D3C83' }} />
        </div>

        {/* Decorative corner accent on hover */}
        <div 
          className="absolute top-0 rtl:right-0 ltr:left-0 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'linear-gradient(135deg, rgba(93, 60, 131, 0.05) 0%, transparent 50%)',
            borderRadius: '0 0 16px 0',
          }}
        />
      </div>
    </FadeInUp>
  );
}

// Main Services Section Component
export default function ServicesSection() {
  const { t, locale, direction } = useLanguage();
  const services = t.services.items;

  // Define grid layout pattern for each service
  // Pattern: Featured (large), Standard, Standard, Tall, Wide, etc.
  const getCardVariant = (index: number): CardVariant => {
    if (index === 0) return 'featured'; // First card is featured/large
    if (index === 4) return 'tall';     // Fifth card is tall
    if (index === 5) return 'wide';     // Sixth card is wide
    return 'standard';
  };

  // Get grid span classes based on variant
  const getGridClasses = (index: number): string => {
    const variant = getCardVariant(index);
    
    switch (variant) {
      case 'featured':
        // Spans 2 columns and 2 rows on desktop
        return 'md:col-span-2 md:row-span-2';
      case 'tall':
        // Spans 2 rows vertically
        return 'md:row-span-2';
      case 'wide':
        // Spans 2 columns horizontally
        return 'md:col-span-2';
      default:
        return '';
    }
  };

  return (
    <section 
      id="services" 
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ backgroundColor: '#FAFAF8' }}
      dir={direction}
    >
      {/* Subtle background decoration */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-[0.03] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, #90A36D 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
        aria-hidden="true"
      />

      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          {/* Gold horizontal line separator */}
          <FadeInUp delay={0} distance={20}>
            <div 
              className="w-10 h-[3px] mx-auto mb-8 rounded-full"
              style={{ backgroundColor: '#C29D44' }}
              aria-hidden="true"
            />
          </FadeInUp>

          {/* Section Title */}
          <TextReveal 
            as="h2" 
            mode="words" 
            delay={100}
            duration={0.7}
            className="text-3xl md:text-4xl lg:text-[42px] font-bold mb-6"
            style={{ 
              fontFamily: 'var(--font-display-arabic)',
              color: '#1a1a2e',
            }}
          >
            {t.services.sectionTitle}
          </TextReveal>

          {/* Section Subtitle */}
          <FadeInUp delay={400} distance={20}>
            <p 
              className="text-base lg:text-lg max-w-2xl mx-auto leading-relaxed"
              style={{ 
                fontFamily: 'var(--font-body-arabic)',
                color: '#6b7280',
              }}
            >
              {t.services.sectionSubtitle}
            </p>
          </FadeInUp>
        </div>

        {/* Bento Grid Layout */}
        <StaggerContainer staggerDelay={80} threshold={0.1}>
          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
            style={{
              gridAutoRows: 'minmax(220px, auto)',
            }}
          >
            {services.map((service, index) => (
              <div key={index} className={getGridClasses(index)}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  variant={getCardVariant(index)}
                  index={index}
                  isPopular={index === 0}
                  locale={locale}
                />
              </div>
            ))}
          </div>
        </StaggerContainer>

        {/* CTA Button */}
        <FadeInUp delay={800} distance={24}>
          <div className="text-center mt-16 lg:mt-20">
            <a href="/#contact" className="group inline-flex items-center gap-3">
              <button 
                className="px-8 py-4 rounded-2xl text-base font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                style={{ 
                  fontFamily: 'var(--font-body-arabic)',
                  background: 'linear-gradient(135deg, #5D3C83 0%, #7A52A3 100%)',
                  color: '#FFFFFF',
                  boxShadow: '0 10px 30px rgba(93, 60, 131, 0.25)',
                }}
              >
                {t.services.bookNow}
                <ArrowUpRight 
                  width={18} 
                  height={18} 
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>
            </a>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
