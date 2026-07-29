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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-[#252542]/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 relative z-10">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="سوار وعي - Sewar Waie"
                width={60}
                height={60}
                className="h-12 w-12 md:h-16 md:w-16 object-contain"
                priority
              />
              <div className={`${direction === 'rtl' ? 'hidden sm:block' : 'hidden md:block'}`}>
                <span
                  className="block text-xl md:text-2xl font-bold"
                  style={{ color: '#90A36D' }}
                >
                  {locale === 'ar' ? 'سوار وعي' : 'Sewar Waie'}
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 
                         hover:text-[#5D3C83] dark:hover:text-[#A8BA85] transition-colors rounded-lg
                         hover:bg-[#5D3C83]/5 dark:hover:bg-[#90A36D]/10"
              >
                {link.label}
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
              className="hidden sm:flex items-center gap-2 text-[#5D3C83] hover:text-[#5D3C83] hover:bg-[#5D3C83]/10"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">
                {locale === 'ar' ? 'EN' : 'عربي'}
              </span>
            </Button>

            {/* Book Now Button - Desktop */}
            <Link href="/#contact" className="hidden lg:block">
              <Button
                className="bg-[#5D3C83] hover:bg-[#4A2F6A] text-white px-6 py-2.5 rounded-xl
                           font-semibold shadow-md hover:shadow-lg transition-all duration-300"
              >
                {t.nav.bookNow}
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="text-[#5D3C83]">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">فتح القائمة</span>
                </Button>
              </SheetTrigger>
              <SheetContent side={direction === 'rtl' ? 'right' : 'left'} className="w-80 bg-white dark:bg-[#252542]">
                <SheetTitle className="sr-only">القائمة الرئيسية</SheetTitle>
                <div className="flex flex-col h-full pt-8">
                  {/* Mobile Logo */}
                  <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-200 dark:border-gray-700">
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

                  {/* Mobile Nav Links */}
                  <nav className="flex-1 space-y-1">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-200 
                                 hover:text-[#5D3C83] dark:hover:text-[#A8BA85] 
                                 hover:bg-[#5D3C83]/5 dark:hover:bg-[#90A36D]/10 rounded-xl transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>

                  {/* Mobile Language & CTA */}
                  <div className="space-y-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <Button
                      variant="outline"
                      onClick={toggleLanguage}
                      className="w-full justify-center gap-2 border-[#5D3C83] text-[#5D3C83] hover:bg-[#5D3C83]/10"
                    >
                      <Globe className="w-4 h-4" />
                      {locale === 'ar' ? 'English' : 'العربية'}
                    </Button>
                    <Link href="/#contact" onClick={() => setIsOpen(false)}>
                      <Button className="w-full bg-[#5D3C83] hover:bg-[#4A2F6A] text-white py-3 rounded-xl font-semibold">
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
