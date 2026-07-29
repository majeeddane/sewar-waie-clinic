'use client';

import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { ScrollReveal, MagneticButton, FloatingElement, GlassCard } from '@/components/animations';
import { MessageCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="container-custom">
        <div className="relative overflow-hidden rounded-3xl p-8 md:p-12 lg:p-16"
             style={{ 
               background: 'linear-gradient(135deg, #5D3C83 0%, #1F3D73 50%, #4A2F6A 100%)'
             }}>
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-full h-full pattern-dots" />
            
            {/* Floating decorative circles */}
            <FloatingElement amplitude={10} duration={7} delay={0} className="absolute -top-20 -right-20 w-64 h-64 border-2 border-[#C29D44]/30 rounded-full" />
            <FloatingElement amplitude={15} duration={9} delay={1} className="absolute -bottom-20 -left-20 w-80 h-80 border-2 border-[#90A36D]/20 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full" />
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div className="text-center lg:text-start">
              <ScrollReveal direction="up" delay={0.1}>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {t.cta.title}
                </h2>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.2}>
                <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto lg:mx-0">
                  {t.cta.description}
                </p>
              </ScrollReveal>

              {/* CTA Buttons with magnetic effect */}
              <ScrollReveal direction="up" delay={0.3}>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <MagneticButton strength={0.25}>
                    <Link href="#contact">
                      <button className="w-full sm:w-auto px-8 py-4 bg-[#C29D44] hover:bg-[#A88535] 
                                     text-white font-semibold rounded-xl shadow-lg hover:shadow-xl 
                                     transition-all duration-500 group relative overflow-hidden">
                        <span className="relative z-10 flex items-center gap-2">
                          {t.cta.button}
                          <ArrowLeft className="w-5 h-5 rtl:rotate-180 transition-transform duration-300 group-hover:-translate-x-1" />
                        </span>
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                      </button>
                    </Link>
                  </MagneticButton>

                  <MagneticButton strength={0.2}>
                    <a
                      href="https://wa.me/966553008282"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-8 py-4 bg-[#25D366] hover:bg-[#128C7E] 
                             text-white font-semibold rounded-xl shadow-lg hover:shadow-xl 
                             transition-all duration-500 flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-5 h-5 fill-white" />
                      {t.cta.whatsapp}
                    </a>
                  </MagneticButton>
                </div>
              </ScrollReveal>
            </div>

            {/* Visual Element with glassmorphism */}
            <ScrollReveal direction={t.locale === 'ar' ? 'left' : 'right'} delay={0.4} duration={1}>
              <div className="hidden lg:flex justify-center">
                <GlassCard blur="lg" className="relative w-72 h-72 p-4 rounded-full">
                  {/* Main circle with gradient */}
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-[#C29D44]/30 via-transparent to-[#90A36D]/30 animate-pulse-slow p-4">
                    <div className="w-full h-full rounded-full bg-white/90 backdrop-blur-sm shadow-inner flex items-center justify-center">
                      <img
                        src="/images/logo.png"
                        alt="سوار وعي"
                        className="w-32 h-32 object-contain opacity-90 drop-shadow-lg"
                      />
                    </div>
                  </div>

                  {/* Floating badges */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 px-4 py-2 bg-white rounded-full shadow-lg backdrop-blur-md">
                    <span className="text-sm font-bold text-[#5D3C83]">24/7</span>
                  </div>

                  <div className="absolute bottom-8 -right-4 px-4 py-2 bg-[#25D366] text-white rounded-full shadow-lg">
                    <span className="text-sm font-semibold">{t.cta.whatsapp}</span>
                  </div>

                  {/* Decorative ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/20 animate-spin-slow pointer-events-none" />
                </GlassCard>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
