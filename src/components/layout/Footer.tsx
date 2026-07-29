'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';
import { 
  Phone,
  Mail,
  MapPin,
  Clock
} from 'lucide-react';

// Custom SVG Icons for Social Media with brand colors on hover
function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" fill="currentColor"/>
    </svg>
  );
}

function TikTokIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
    </svg>
  );
}

function YouTubeIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

function SnapchatIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641 0 12.017 0z"/>
    </svg>
  );
}

function ThreadsIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.235 18.27 1.4 15.034 1.386 11.467V11.3c.01-2.929.705-5.341 2.064-7.174C4.707 2.627 6.605 1.48 8.985.869c1.933-.5 4.182-.557 6.508-.168v4.71c-1.783-.322-3.338-.26-4.628.185-1.09.378-1.943 1.034-2.535 1.95-.67 1.033-1.01 2.352-1.01 3.92v.145c.007 2.322.51 4.076 1.495 5.214.95 1.098 2.358 1.652 4.187 1.647h.005c.97-.003 1.79-.216 2.44-.632.62-.398 1.101-.978 1.428-1.724.315-.718.474-1.573.474-2.542V12.5H13.42V8.167h5.906V13.563c0 1.676-.305 3.126-.907 4.31-.59 1.16-1.447 2.06-2.548 2.676-1.07.598-2.365.91-3.85.914l.165.037z"/>
    </svg>
  );
}

// Social links configuration with custom icons and brand colors
const socialLinks = [
  { 
    name: 'Instagram', 
    url: 'https://www.instagram.com/suwarwai/', 
    icon: InstagramIcon, 
    color: '#E4405F',
    hoverBg: 'hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#E4405F] hover:to-[#FCAF45]'
  },
  { 
    name: 'TikTok', 
    url: 'https://www.tiktok.com/@suwarwai', 
    icon: TikTokIcon, 
    color: '#000000',
    hoverBg: 'hover:bg-black'
  },
  { 
    name: 'YouTube', 
    url: 'https://www.youtube.com/@suwarwai', 
    icon: YouTubeIcon, 
    color: '#FF0000',
    hoverBg: 'hover:bg-red-600'
  },
  { 
    name: 'Snapchat', 
    url: 'https://snapchat.com/add/suwarwai', 
    icon: SnapchatIcon, 
    color: '#FFFC00',
    hoverBg: 'hover:bg-yellow-400'
  },
  { 
    name: 'Threads', 
    url: 'https://www.threads.net/@suwarwai', 
    icon: ThreadsIcon, 
    color: '#000000',
    hoverBg: 'hover:bg-gray-800'
  },
];

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
              <div className="flex items-center gap-3 flex-wrap">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 rounded-full bg-white/10 flex items-center justify-center 
                               transition-all duration-300 group ${social.hoverBg}`}
                      aria-label={social.name}
                      style={{ '--social-color': social.color } as React.CSSProperties}
                    >
                      <IconComponent className="w-5 h-5 transition-colors duration-300 text-gray-300 group-hover:text-white" />
                    </a>
                  );
                })}
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
