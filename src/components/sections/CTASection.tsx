'use client';

import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { ScrollReveal, MagneticButton, FloatingElement } from '@/components/animations';
import { MessageCircle, Phone, Sparkles, Heart } from 'lucide-react';
import Link from 'next/link';

// Floating Leaf/Particle Component
function FloatingParticle({ delay, duration, left, top, size }: {
  delay: number;
  duration: number;
  left: string;
  top: string;
  size: number;
}) {
  return (
    <div 
      className="absolute pointer-events-none"
      style={{ left, top }}
    >
      <FloatingElement 
        amplitude={15 + Math.random() * 20} 
        duration={duration} 
        delay={delay}
        className="pointer-events-none"
      >
        <div 
          className="rounded-full opacity-20"
          style={{
            width: size,
            height: size,
            background: `radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.2) 70%, transparent 100%)`,
            filter: 'blur(1px)',
          }}
        />
      </FloatingElement>
    </div>
  );
}

// Star/Sparkle Component
function SparkleParticle({ delay, duration, left, top }: {
  delay: number;
  duration: number;
  left: string;
  top: string;
}) {
  return (
    <div 
      className="absolute pointer-events-none"
      style={{ left, top }}
    >
      <FloatingElement 
        amplitude={8} 
        duration={duration} 
        delay={delay}
        className="pointer-events-none"
      >
        <Sparkles className="w-4 h-4 text-white/30" />
      </FloatingElement>
    </div>
  );
}

export default function CTASection() {
  const { t, locale } = useLanguage();

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Warm Gradient Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #5D3C83 0%, #7A52A3 50%, #C29D44 100%)'
        }}
      />

      {/* Animated gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-black/10" />
      
      {/* Radial gradient accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C29D44]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#5D3C83]/30 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

      {/* Floating Particles - Leaves/Stars effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large soft particles */}
        <FloatingParticle delay={0} duration={18} left="10%" top="20%" size={12} />
        <FloatingParticle delay={2} duration={22} left="85%" top="15%" size={8} />
        <FloatingParticle delay={4} duration={20} left="25%" top="75%" size={10} />
        <FloatingParticle delay={1.5} duration={25} left="70%" top="80%" size={14} />
        <FloatingParticle delay={3} duration={16} left="50%" top="10%" size={6} />
        <FloatingParticle delay={5} duration={21} left="90%" top="60%" size={9} />
        
        {/* Sparkle particles */}
        <SparkleParticle delay={0.5} duration={8} left="15%" top="40%" />
        <SparkleParticle delay={1.5} duration={10} left="80%" top="35%" />
        <SparkleParticle delay={2.5} duration={9} left="45%" top="85%" />
        <SparkleParticle delay={3.5} duration={11} left="65%" top="20%" />
        <SparkleParticle delay={4.5} duration={7} left="30%" top="60%" />

        {/* Decorative circles */}
        <div className="absolute -top-16 -right-16 w-48 h-48 border-2 border-white/10 rounded-full" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 border border-white/5 rounded-full" />
        <div className="absolute top-1/3 left-[5%] w-24 h-24 border border-white/10 rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        <div className="relative rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden"
             style={{ 
               background: 'linear-gradient(135deg, rgba(93,60,131,0.6) 0%, rgba(122,82,163,0.4) 50%, rgba(194,157,68,0.5) 100%)',
               backdropFilter: 'blur(10px)',
             }}>
          
          {/* Inner glassmorphism overlay */}
          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
          
          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            {/* Icon decoration */}
            <ScrollReveal direction="up" delay={0.1}>
              <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-md mb-8 border border-white/20">
                <Heart className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
            </ScrollReveal>

            {/* Main Heading */}
            <ScrollReveal direction="up" delay={0.2}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                {t.cta.title}
              </h2>
            </ScrollReveal>

            {/* Subtitle */}
            <ScrollReveal direction="up" delay={0.3}>
              <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
                {t.cta.description}
              </p>
            </ScrollReveal>

            {/* CTA Buttons */}
            <ScrollReveal direction="up" delay={0.4}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
                
                {/* Contact Button */}
                <MagneticButton strength={0.25}>
                  <Link href="#contact">
                    <button className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-[#FAFAF8] 
                                   text-[#5D3C83] font-bold rounded-xl shadow-xl hover:shadow-2xl 
                                   transition-all duration-500 group relative overflow-hidden min-w-[180px]">
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        <Phone className="w-5 h-5 transition-transform group-hover:rotate-12" />
                        {t.cta.button}
                      </span>
                      
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C29D44]/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    </button>
                  </Link>
                </MagneticButton>

                {/* WhatsApp Button */}
                <MagneticButton strength={0.2}>
                  <a
                    href="https://wa.me/966553008282"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-8 py-4 bg-[#25D366] hover:bg-[#128C7E] 
                           text-white font-bold rounded-xl shadow-xl hover:shadow-2xl 
                           transition-all duration-500 flex items-center justify-center gap-3 min-w-[180px]
                           group"
                  >
                    <MessageCircle className="w-5 h-5 fill-white transition-transform group-hover:scale-110" />
                    {t.cta.whatsapp}
                    
                    {/* Pulse dot */}
                    <span className="relative flex h-3 w-3 ml-1">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                    </span>
                  </a>
                </MagneticButton>
              </div>
            </ScrollReveal>

            {/* Trust indicator */}
            <ScrollReveal direction="up" delay={0.6}>
              <div className="mt-10 pt-8 border-t border-white/20">
                <p className="text-white/50 text-sm flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  {locale === 'ar' ? 'معلوماتك آمنة وسرية تماماً' : 'Your information is safe and completely confidential'}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
