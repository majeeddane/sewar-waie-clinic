'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';
import { 
  Instagram, 
  Youtube, 
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock
} from 'lucide-react';

export default function Footer() {
  const { t, locale, direction } = useLanguage();

  return (
    <footer className="bg-[#1F3D73] text-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#C29D44] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#90A36D] rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/logo.png"
                  alt="سوار وعي"
                  width={60}
                  height={60}
                  className="h-14 w-14 object-contain brightness-0 invert"
                />
                <span className="text-xl font-bold text-[#C29D44]">
                  {locale === 'ar' ? 'سوار وعي' : 'Sewar Waie'}
                </span>
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              {t.footer.description}
            </p>
            {/* Social Links */}
            <div>
              <p className="text-sm font-semibold text-[#C29D44] mb-4">{t.footer.followUs}</p>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center 
                           hover:bg-[#C29D44] transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center 
                           hover:bg-[#C29D44] transition-colors duration-300"
                  aria-label="TikTok"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center 
                           hover:bg-[#C29D44] transition-colors duration-300"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center 
                           hover:bg-[#C29D44] transition-colors duration-300"
                  aria-label="Snapchat"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-[#C29D44] mb-6">{t.footer.quickLinks}</h4>
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
                    className="text-gray-300 hover:text-[#C29D44] transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-[#C29D44] mb-6">{t.footer.services}</h4>
            <ul className="space-y-3">
              {t.services.items.slice(0, 5).map((service, index) => (
                <li key={index}>
                  <Link
                    href="/#services"
                    className="text-gray-300 hover:text-[#C29D44] transition-colors duration-300 text-sm"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-[#C29D44] mb-6">{t.footer.contactUs}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#90A36D] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">{t.contact.info.addressValue}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#90A36D] flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+966553008282"
                  dir="ltr"
                  className="text-gray-300 hover:text-[#C29D44] transition-colors text-sm"
                >
                  +966 55 300 8282
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#90A36D] flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:info@sewarwaie.com"
                  className="text-gray-300 hover:text-[#C29D44] transition-colors text-sm"
                >
                  info@sewarwaie.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#90A36D] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">{t.contact.info.workingHoursValue}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-start">
              © {new Date().getFullYear()} {locale === 'ar' ? 'سوار وعي' : 'Sewar Waie'}. {t.footer.rights}
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="#"
                className="text-gray-400 hover:text-[#C29D44] transition-colors text-sm"
              >
                {t.footer.privacyPolicy}
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-[#C29D44] transition-colors text-sm"
              >
                {t.footer.termsOfService}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
