'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

// أيقونات التواصل الاجتماعي كـ SVG
function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  );
}

function TikTokIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
    </svg>
  );
}

function YouTubeIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

const socialLinks = [
  { name: 'Instagram', url: 'https://www.instagram.com/suwarwai/', icon: InstagramIcon },
  { name: 'TikTok', url: 'https://www.tiktok.com/@suwarwai', icon: TikTokIcon },
  { name: 'YouTube', url: 'https://www.youtube.com/@suwarwai', icon: YouTubeIcon },
];

export default function Footer() {
  const { t, locale } = useLanguage();

  return (
    <footer style={{ backgroundColor: '#1F3D73' }} className="text-white relative overflow-hidden mt-auto">
      
      {/* زخرفة خفيفة */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" aria-hidden="true">
        <div 
          className="absolute w-80 h-80 rounded-full"
          style={{
            background: 'radial-gradient(circle, #C29D44 0%, transparent 70%)',
            top: '-20%',
            right: '-10%',
          }}
        />
        <div 
          className="absolute w-64 h-64 rounded-full"
          style={{
            background: 'radial-gradient(circle, #90A36D 0%, transparent 70%)',
            bottom: '-10%',
            left: '-5%',
          }}
        />
      </div>

      <div className="container-custom relative z-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* العمود الأول - العلامة التجارية */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/logo.png"
                  alt="سوار وعي"
                  width={48}
                  height={48}
                  className="h-12 w-12 object-contain brightness-0 invert"
                />
                <span 
                  className="text-lg font-bold"
                  style={{ fontFamily: 'var(--font-display-arabic)', color: '#C29D44' }}
                >
                  {locale === 'ar' ? 'سوار وعي' : 'Sewar Waie'}
                </span>
              </div>
            </Link>
            
            <p 
              className="text-sm leading-relaxed mb-6 opacity-80"
              style={{ 
                fontFamily: 'var(--font-body-arabic)',
                color: 'rgba(250, 250, 248, 0.75)',
              }}
            >
              {t.footer.description}
            </p>

            {/* روابط التواصل الاجتماعي */}
            <div>
              <p 
                className="text-sm font-semibold mb-4"
                style={{ fontFamily: 'var(--font-body-arabic)', color: '#C29D44' }}
              >
                {t.footer.followUs}
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:bg-white/10"
                      aria-label={social.name}
                    >
                      <IconComponent className="w-4 h-4 text-white/80 hover:text-white transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* الروابط السريعة */}
          <div>
            <h4 
              className="text-base font-bold mb-6"
              style={{ fontFamily: 'var(--font-display-arabic)', color: '#C29D44' }}
            >
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-3">
              {[
                { href: '/', label: t.nav.home },
                { href: '/#about', label: t.about.sectionTitle },
                { href: '/#services', label: t.services.sectionTitle },
                { href: '/#team', label: t.team.sectionTitle },
                { href: '/#faq', label: t.faq.title },
                { href: '/#contact', label: t.nav.contact },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-[#C29D44] transition-colors duration-200"
                    style={{ 
                      fontFamily: 'var(--font-body-arabic)',
                      color: 'rgba(250, 250, 248, 0.7)',
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* الخدمات */}
          <div>
            <h4 
              className="text-base font-bold mb-6"
              style={{ fontFamily: 'var(--font-display-arabic)', color: '#C29D44' }}
            >
              {t.footer.services}
            </h4>
            <ul className="space-y-3">
              {t.services.items.slice(0, 5).map((service, index) => (
                <li key={index}>
                  <Link
                    href="/#services"
                    className="text-sm hover:text-[#C29D44] transition-colors duration-200"
                    style={{ 
                      fontFamily: 'var(--font-body-arabic)',
                      color: 'rgba(250, 250, 248, 0.7)',
                    }}
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* معلومات التواصل */}
          <div>
            <h4 
              className="text-base font-bold mb-6"
              style={{ fontFamily: 'var(--font-display-arabic)', color: '#C29D44' }}
            >
              {t.footer.contactUs}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#90A36D' }} />
                <span 
                  className="text-sm"
                  style={{ 
                    fontFamily: 'var(--font-body-arabic)',
                    color: 'rgba(250, 250, 248, 0.7)',
                  }}
                >
                  {t.contact.info.addressValue}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#90A36D' }} />
                <a
                  href="tel:+966553008282"
                  dir="ltr"
                  className="text-sm hover:text-[#C29D44] transition-colors"
                  style={{ 
                    fontFamily: 'var(--font-body-arabic)',
                    color: 'rgba(250, 250, 248, 0.7)',
                  }}
                >
                  +966 55 300 8282
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#90A36D' }} />
                <a
                  href="mailto:info@sewarwaie.com"
                  className="text-sm hover:text-[#C29D44] transition-colors"
                  style={{ 
                    fontFamily: 'var(--font-body-arabic)',
                    color: 'rgba(250, 250, 248, 0.7)',
                  }}
                >
                  info@sewarwaie.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#90A36D' }} />
                <span 
                  className="text-sm"
                  style={{ 
                    fontFamily: 'var(--font-body-arabic)',
                    color: 'rgba(250, 250, 248, 0.7)',
                  }}
                >
                  {t.contact.info.workingHoursValue}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* الشريط السفلي */}
        <div 
          className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p 
            className="text-xs text-center md:text-start"
            style={{ 
              fontFamily: 'var(--font-body-arabic)',
              color: 'rgba(250, 250, 248, 0.5)',
            }}
          >
            © {new Date().getFullYear()} {locale === 'ar' ? 'سوار وعي' : 'Sewar Waie'}. {t.footer.rights}
          </p>
          
          <div className="flex items-center gap-6">
            <Link href="#" className="text-xs hover:text-[#C29D44] transition-colors" style={{ fontFamily: 'var(--font-body-arabic)', color: 'rgba(250, 250, 248, 0.5)' }}>
              {t.footer.privacyPolicy}
            </Link>
            <Link href="#" className="text-xs hover:text-[#C29D44] transition-colors" style={{ fontFamily: 'var(--font-body-arabic)', color: 'rgba(250, 250, 248, 0.5)' }}>
              {t.footer.termsOfService}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
