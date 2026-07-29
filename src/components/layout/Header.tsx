'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';

export default function Header() {
  const { locale, setLocale, t, direction } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // عند التمرير 50px+: تفعيل الحالة المتغيرة
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLocale(locale === 'ar' ? 'en' : 'ar');
  };

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/#about', label: t.about.sectionTitle },
    { href: '/#services', label: t.services.sectionTitle },
    { href: '/#team', label: t.team.sectionTitle },
    { href: '/#faq', label: t.faq.title },
    { href: '/#contact', label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        scrolled 
          ? 'bg-white shadow-sm header-scrolled' 
          : 'bg-transparent header-main'
      }`}
      style={{
        height: scrolled ? '72px' : '96px',
        transition: 'all 0.3s ease-out',
      }}
    >
      <div className="container-custom h-full">
        <nav className="flex items-center justify-between h-full">
          {/* الشعار */}
          <Link href="/" className="flex-shrink-0 group">
            <div className="flex items-center gap-3 transition-transform duration-200 group-hover:scale-[1.02]">
              <Image
                src="/images/logo.png"
                alt="سوار وعي - Sewar Waie"
                width={48}
                height={48}
                className="h-10 w-10 lg:h-12 w-12 object-contain"
                priority
              />
              <span
                className="hidden sm:block text-lg lg:text-xl font-bold transition-colors duration-200"
                style={{ 
                  fontFamily: 'var(--font-display-arabic)',
                  color: scrolled ? '#5D3C83' : '#1a1a2e',
                }}
              >
                {locale === 'ar' ? 'سوار وعي' : 'Sewar Waie'}
              </span>
            </div>
          </Link>

          {/* التنقل على سطح المكتب */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium rounded-md transition-all duration-200"
                style={{ 
                  fontFamily: 'var(--font-body-arabic)',
                  color: scrolled ? '#4a4a5a' : '#1a1a2e',
                }}
              >
                {link.label}
                <span 
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 rounded-full transition-all duration-200"
                  style={{ backgroundColor: '#C29D44' }}
                  onMouseEnter={(e) => (e.currentTarget.style.width = '60%')}
                  onMouseLeave={(e) => (e.currentTarget.style.width = '0%')}
                />
              </Link>
            ))}
          </div>

          {/* الأزرار الجانبية */}
          <div className="flex items-center gap-3">
            {/* زر تبديل اللغة */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="hidden sm:flex items-center gap-2 text-[#5D3C83] hover:bg-[#5D3C83]/5 transition-colors duration-200"
              style={{ fontFamily: 'var(--font-body-arabic)' }}
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">
                {locale === 'ar' ? 'EN' : 'عربي'}
              </span>
            </Button>

            {/* زر الحجز */}
            <Link href="/#contact" className="hidden lg:block">
              <button
                className="btn-primary text-sm"
                style={{ fontFamily: 'var(--font-body-arabic)' }}
              >
                {t.nav.bookNow}
              </button>
            </Link>

            {/* قائمة الجوال */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-[#5D3C83] hover:bg-[#5D3C83]/5 transition-colors duration-200"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">فتح القائمة</span>
                </Button>
              </SheetTrigger>
              <SheetContent 
                side={direction === 'rtl' ? 'right' : 'left'} 
                className="w-80 bg-white"
              >
                <SheetTitle className="sr-only">القائمة الرئيسية</SheetTitle>
                <div className="flex flex-col h-full pt-8">
                  {/* شعار الموبايل */}
                  <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-100">
                    <Image
                      src="/images/logo.png"
                      alt="سوار وعي"
                      width={44}
                      height={44}
                      className="h-11 w-11 object-contain"
                    />
                    <span
                      className="text-lg font-bold"
                      style={{ 
                        fontFamily: 'var(--font-display-arabic)',
                        color: '#5D3C83',
                      }}
                    >
                      {locale === 'ar' ? 'سوار وعي' : 'Sewar Waie'}
                    </span>
                  </div>

                  {/* روابط الموبايل */}
                  <nav className="flex-1 space-y-1">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200"
                        style={{ 
                          fontFamily: 'var(--font-body-arabic)',
                          color: '#1a1a2e',
                        }}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>

                  {/* أزرار الموبايل */}
                  <div className="space-y-3 pt-6 border-t border-gray-100">
                    <Button
                      variant="outline"
                      onClick={toggleLanguage}
                      className="w-full justify-center gap-2 border-[#5D3C83] text-[#5D3C83] hover:bg-[#5D3C83]/5"
                      style={{ fontFamily: 'var(--font-body-arabic)' }}
                    >
                      <Globe className="w-4 h-4" />
                      {locale === 'ar' ? 'English' : 'العربية'}
                    </Button>
                    <Link href="/#contact" onClick={() => setIsOpen(false)}>
                      <button 
                        className="btn-primary w-full"
                        style={{ fontFamily: 'var(--font-body-arabic)' }}
                      >
                        {t.nav.bookNow}
                      </button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
}
