'use client';

import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { MessageCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="container-custom">
        <div className="relative bg-gradient-to-br from-[#5D3C83] via-[#4A2F6A] to-[#1F3D73] 
                      rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-full h-full pattern-dots" />
          </div>
          
          {/* Decorative Circles */}
          <div className="absolute -top-20 -right-20 w-64 h-64 border-4 border-[#C29D44]/30 rounded-full" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 border-4 border-[#90A36D]/20 rounded-full" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div className="text-center lg:text-start">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t.cta.title}
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto lg:mx-0">
                {t.cta.description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link href="#contact">
                  <button
                    className="w-full sm:w-auto px-8 py-4 bg-[#C29D44] hover:bg-[#A88535] 
                             text-white font-semibold rounded-xl shadow-lg hover:shadow-xl 
                             transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {t.cta.button}
                    <ArrowLeft className="w-5 h-5 rtl:rotate-180" />
                  </button>
                </Link>
                <a
                  href="https://wa.me/966553008282"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-[#25D366] hover:bg[#128C7E] 
                           text-white font-semibold rounded-xl shadow-lg hover:shadow-xl 
                           transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  {t.cta.whatsapp}
                </a>
              </div>
            </div>

            {/* Visual Element */}
            <div className="hidden lg:flex justify-center">
              <div className="relative w-72 h-72">
                {/* Main Circle */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#C29D44]/30 to-transparent animate-pulse-soft" />
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[#90A36D]/30 to-transparent animate-pulse-soft delay-500" />
                <div className="absolute inset-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <img
                    src="/images/logo.png"
                    alt="سوار وعي"
                    className="w-32 h-32 object-contain opacity-90"
                  />
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-white rounded-full shadow-lg">
                  <span className="text-sm font-semibold text-[#5D3C83]">24/7</span>
                </div>
                <div className="absolute bottom-8 -right-4 px-4 py-2 bg-[#25D366] rounded-full shadow-lg">
                  <span className="text-sm font-semibold text-white">{t.cta.whatsapp}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
