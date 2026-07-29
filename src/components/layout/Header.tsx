'use client';

import React, { useState, useEffect } from 'react';
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
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      window.addEventListener('scroll', () => {
        setScrolled(window.scrollY > 20);
      });
      return;
    }

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // Show/hide header based on scroll direction
          if (currentScrollY > lastScrollY && currentScrollY > 200) {
            setIsHidden(true);
          } else {
            setIsHidden(false);
          }

          // Set scrolled state for background change
          setScrolled(currentScrollY > 20);

          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out
                ${scrolled 
                  ? 'bg-white/95 dark:bg-[#252542]/95 backdrop-blur-xl shadow-lg shadow-black/5' 
                  : 'bg-transparent'
                }
                ${isHidden ? '-translate-y-full' : 'translate-y-0'}
              `}
      style={{ transform: isHidden ? 'translateY(-100%)' : 'translateY(0)' }}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between h-20 md:h-24 transition-all duration-300"
             style={{ height: scrolled ? '70px' : undefined }}>
          {/* Logo with hover effect */}
          <Link href="/" className="flex-shrink-0 relative z-10 group">
            <div className="flex items-center gap-3 transition-transform duration-300 group-hover:scale-[1.02]">
              <Image
                src="/images/logo.png"
                alt="سوار وعي - Sewar Waie"
                width={60}
                height={60}
                className={`h-12 w-12 md:h-16 md:w-16 object-contain transition-all duration-500
                          ${scrolled ? '' : 'drop-shadow-lg'}`}
                priority
              />
              <div className={`${direction === 'rtl' ? 'hidden sm:block' : 'hidden md:block'} transition-opacity duration-300`}>
                <span
                  className="block text-xl md:text-2xl font-bold transition-colors duration-300"
                  style={{ color: '#90A36D' }}
                >
                  {locale === 'ar' ? 'سوار وعي' : 'Sewar Waie'}
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 
                         hover:text-[#5D3C83] dark:hover:text-[#A8BA85] transition-all duration-300 rounded-lg
                         group overflow-hidden"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="relative z-10">{link.label}</span>
                {/* Hover underline effect */}
                <span className="absolute bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#5D3C83] rounded-full 
                              group-hover:w-3/4 transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="hidden sm:flex items-center gap-2 text-[#5D3C83] hover:text-[#5D3C83] hover:bg-[#5D3C83]/10 
                       transition-all duration-300 group"
            >
              <Globe className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
              <span className="text-sm font-medium">
                {locale === 'ar' ? 'EN' : 'عربي'}
              </span>
            </Button>

            {/* Book Now Button - Desktop with glow effect */}
            <Link href="/#contact" className="hidden lg:block">
              <Button
                className="bg-[#5D3C83] hover:bg-[#4A2F6A] text-white px-6 py-2.5 rounded-xl 
                         font-semibold shadow-md hover:shadow-lg transition-all duration-500
                         relative overflow-hidden group"
              >
                <span className="relative z-10">{t.nav.bookNow}</span>
                {/* Shimmer on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="text-[#5D3C83] hover:bg-[#5D3C83]/10 transition-colors duration-300">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">فتح القائمة</span>
                </Button>
              </SheetTrigger>
              <SheetContent side={direction === 'rtl' ? 'right' : 'left'} className="w-80 bg-white dark:bg-[#252542] backdrop-blur-xl">
                <SheetTitle className="sr-only">القائمة الرئيسية</SheetTitle>
                <div className="flex flex-col h-full pt-8">
                  {/* Mobile Logo */}
                  <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-200/50">
                    <Image
                      src="/images/logo.png"
                      alt="سوار وعي"
                      width={50}
                      height={50}
                      className="h-12 w-12 object-contain"
                    />
                    <span
                      className="text-xl font-bold"
                      style={{ color: '#90A36D' }}
                    >
                      {locale === 'ar' ? 'سوار وعي' : 'Sewar Waie'}
                    </span>
                  </div>

                  {/* Mobile Nav Links with stagger effect */}
                  <nav className="flex-1 space-y-1">
                    {navLinks.map((link, index) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-200 
                                 hover:text-[#5D3C83] dark:hover:text-[#A8BA85] 
                                 hover:bg-[#5D3C83]/5 dark:hover:bg-[#90A36D]/10 rounded-xl transition-all duration-300
                                 flex items-center gap-3"
                        style={{ animationDelay: `${index * 75}ms` }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5D3C83]/30 opacity-0 group-hover:opacity-100" />
                        {link.label}
                      </Link>
                    ))}
                  </nav>

                  {/* Mobile Language & CTA */}
                  <div className="space-y-4 pt-6 border-t border-gray-200/50">
                    <Button
                      variant="outline"
                      onClick={toggleLanguage}
                      className="w-full justify-center gap-2 border-[#5D3C83] text-[#5D3C83] hover:bg-[#5D3C83]/10 transition-all duration-300"
                    >
                      <Globe className="w-4 h-4" />
                      {locale === 'ar' ? 'English' : 'العربية'}
                    </Button>
                    <Link href="/#contact" onClick={() => setIsOpen(false)}>
                      <Button className="w-full bg-[#5D3C83] hover:bg-[#4A2F6A] text-white py-3 rounded-xl font-semibold transition-all duration-300">
                        {t.nav.bookNow}
                      </Button>
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
