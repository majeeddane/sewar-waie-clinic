'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';
import { Menu, Globe, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';

export default function Header() {
  const { locale, setLocale, t, direction } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger scrolled state after 80px for Apple-like precision
      setScrolled(window.scrollY > 80);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'header-scrolled shadow-sm' 
          : 'header-main'
      }`}
      style={{
        height: scrolled ? '72px' : '96px',
        backgroundColor: scrolled 
          ? 'rgba(255, 255, 255, 0.85)' 
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(93, 60, 131, 0.06)' : '1px solid transparent',
        transitionProperty: 'height, background-color, backdrop-filter, -webkit-backdrop-filter, border-color, box-shadow',
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        transitionDuration: '500ms',
      }}
    >
      <div className="h-full px-6 lg:px-10 xl:px-16">
        <nav className="flex items-center justify-between h-full max-w-[1440px] mx-auto">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 group">
            <div 
              className="flex items-center gap-3 transition-transform duration-300"
              style={{ 
                transform: 'scale(1)',
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <Image
                src="/images/logo.png"
                alt="سوار وعي - Sewar Waie"
                width={scrolled ? 40 : 48}
                height={scrolled ? 40 : 48}
                className="object-contain transition-all duration-500"
                style={{
                  width: scrolled ? '40px' : '48px',
                  height: scrolled ? '40px' : '48px',
                  transition: 'all 500ms cubic-bezier(0.16, 1, 0.3, 1)',
                  filter: scrolled ? 'none' : 'drop-shadow(0 2px 8px rgba(93, 60, 131, 0.15))',
                }}
                priority
              />
              <span
                className="hidden sm:block font-bold tracking-tight transition-all duration-500"
                style={{ 
                  fontFamily: 'var(--font-heading-ar)',
                  fontSize: scrolled ? '18px' : '20px',
                  color: scrolled ? '#5D3C83' : '#1a1a2e',
                  letterSpacing: '-0.02em',
                  transition: 'all 500ms cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                {locale === 'ar' ? 'سوار وعي' : 'Sewar Waie'}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                isScrolled={scrolled}
                direction={direction}
                index={index}
              />
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 group"
              style={{
                color: scrolled ? '#5D3C83' : '#4a4a5a',
                fontFamily: 'var(--font-body-arabic)',
                fontSize: '13px',
                fontWeight: 500,
                backgroundColor: scrolled ? 'rgba(93, 60, 131, 0.04)' : 'transparent',
                transition: 'all 300ms cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(93, 60, 131, 0.08)';
                e.currentTarget.style.color = '#5D3C83';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = scrolled ? 'rgba(93, 60, 131, 0.04)' : 'transparent';
                e.currentTarget.style.color = scrolled ? '#5D3C83' : '#4a4a5a';
              }}
            >
              <Globe 
                className="w-4 h-4 transition-transform duration-300" 
                style={{ transform: 'rotate(0deg)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'rotate(15deg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'rotate(0deg)';
                }}
              />
              <span className="font-medium">{locale === 'ar' ? 'EN' : 'عربي'}</span>
            </button>

            {/* CTA Button */}
            <Link href="/#contact" className="hidden lg:block">
              <button
                className="relative overflow-hidden px-6 py-2.5 rounded-full text-white font-medium transition-all duration-300 group"
                style={{
                  fontFamily: 'var(--font-body-arabic)',
                  fontSize: '14px',
                  fontWeight: 600,
                  backgroundColor: '#5D3C83',
                  boxShadow: scrolled 
                    ? '0 2px 12px rgba(93, 60, 131, 0.25)' 
                    : '0 4px 20px rgba(93, 60, 131, 0.3)',
                  transform: 'scale(1)',
                  transition: 'all 300ms cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#512D6F';
                  e.currentTarget.style.boxShadow = '0 6px 24px rgba(93, 60, 131, 0.35)';
                  e.currentTarget.style.transform = 'scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#5D3C83';
                  e.currentTarget.style.boxShadow = scrolled 
                    ? '0 2px 12px rgba(93, 60, 131, 0.25)' 
                    : '0 4px 20px rgba(93, 60, 131, 0.3)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {t.nav.bookNow}
                  <ArrowLeft 
                    className="w-4 h-4 transition-transform duration-300 rtl:block hidden"
                    style={{ transform: 'translateX(0)' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateX(-3px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  />
                  <ArrowRight 
                    className="w-4 h-4 transition-transform duration-300 ltr:block hidden"
                    style={{ transform: 'translateX(0)' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateX(3px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  />
                </span>
              </button>
            </Link>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="transition-colors duration-300"
                  style={{ 
                    color: scrolled ? '#5D3C83' : '#1a1a2e',
                    borderRadius: '12px',
                  }}
                >
                  <Menu className="h-5 w-5" strokeWidth={1.5} />
                  <span className="sr-only">فتح القائمة</span>
                </Button>
              </SheetTrigger>
              <SheetContent 
                side={direction === 'rtl' ? 'left' : 'right'} 
                className="w-[320px] sm:w-[360px] p-0"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderLeft: direction === 'rtl' ? '1px solid rgba(93, 60, 131, 0.08)' : 'none',
                  borderRight: direction === 'ltr' ? '1px solid rgba(93, 60, 131, 0.08)' : 'none',
                }}
              >
                <SheetTitle className="sr-only">القائمة الرئيسية</SheetTitle>
                
                {/* Mobile Menu Content */}
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-center justify-between px-6 py-5 border-b" style={{ borderColor: 'rgba(93, 60, 131, 0.06)' }}>
                    <div className="flex items-center gap-3">
                      <Image
                        src="/images/logo.png"
                        alt="سوار وعي"
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                      <span
                        className="text-lg font-bold"
                        style={{ 
                          fontFamily: 'var(--font-heading-ar)',
                          color: '#5D3C83',
                        }}
                      >
                        {locale === 'ar' ? 'سوار وعي' : 'Sewar Waie'}
                      </span>
                    </div>
                  </div>

                  {/* Navigation Links */}
                  <nav className="flex-1 py-6 px-4 space-y-1 overflow-y-auto">
                    {navLinks.map((link, index) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-200 group"
                        style={{ 
                          fontFamily: 'var(--font-body-arabic)',
                          color: '#1a1a2e',
                          transition: 'all 200ms cubic-bezier(0.16, 1, 0.3, 1)',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(93, 60, 131, 0.05)';
                          e.currentTarget.style.color = '#5D3C83';
                          e.currentTarget.style.paddingInlineStart = '20px';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent';
                          e.currentTarget.style.color = '#1a1a2e';
                          e.currentTarget.style.paddingInlineStart = '16px';
                        }}
                      >
                        <span className="flex items-center justify-between">
                          {link.label}
                          <span 
                            className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                            style={{ color: '#C29D44' }}
                          >
                            {direction === 'rtl' ? '←' : '→'}
                          </span>
                        </span>
                      </Link>
                    ))}
                  </nav>

                  {/* Footer Actions */}
                  <div className="p-4 space-y-3 border-t" style={{ borderColor: 'rgba(93, 60, 131, 0.06)' }}>
                    <button
                      onClick={() => {
                        toggleLanguage();
                        setIsOpen(false);
                      }}
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-medium transition-all duration-200"
                      style={{
                        fontFamily: 'var(--font-body-arabic)',
                        color: '#5D3C83',
                        backgroundColor: 'rgba(93, 60, 131, 0.05)',
                        border: '1px solid rgba(93, 60, 131, 0.12)',
                        fontSize: '14px',
                      }}
                    >
                      <Globe className="w-4 h-4" />
                      {locale === 'ar' ? 'English' : 'العربية'}
                    </button>
                    
                    <Link href="/#contact" onClick={() => setIsOpen(false)}>
                      <button 
                        className="w-full py-3.5 rounded-xl text-white font-semibold transition-all duration-300"
                        style={{ 
                          fontFamily: 'var(--font-body-arabic)',
                          backgroundColor: '#5D3C83',
                          fontSize: '15px',
                          boxShadow: '0 4px 16px rgba(93, 60, 131, 0.25)',
                        }}
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

/* ───────────────────────────────────────────────
   NAV LINK COMPONENT (Desktop)
   Premium hover effect with gold underline animation
   ─────────────────────────────────────────────── */
interface NavLinkProps {
  href: string;
  label: string;
  isScrolled: boolean;
  direction: 'rtl' | 'ltr';
  index: number;
}

function NavLink({ href, label, isScrolled, direction }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="relative px-4 py-2 group nav-link"
      style={{ 
        fontFamily: 'var(--font-body-arabic)',
        fontSize: '14px',
        fontWeight: 500,
        color: isScrolled ? '#4a4a5a' : '#1a1a2e',
        transition: 'color 300ms cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <span className="relative z-10">{label}</span>
      
      {/* Gold Underline Animation */}
      <span 
        className="absolute bottom-1 left-1/2 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
        style={{
          width: '0%',
          backgroundColor: '#C29D44',
          transform: 'translateX(-50%)',
          transitionProperty: 'width, opacity',
          transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
          transitionDuration: '300ms',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.width = '70%';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.width = '0%';
        }}
      />

      {/* Hover Background Glow */}
      <span 
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          backgroundColor: 'rgba(194, 157, 68, 0.06)',
          transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />
    </Link>
  );
}
