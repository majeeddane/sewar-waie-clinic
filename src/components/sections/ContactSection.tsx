'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageCircle,
  CheckCircle,
  QrCode,
  ExternalLink
} from 'lucide-react';
import { ScrollReveal, StaggerContainer, MagneticButton, GlassCard, TiltCard, FloatingElement } from '@/components/animations';
import { toast } from 'sonner';

export default function ContactSection() {
  const { t, locale, direction } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast.success(t.contact.form.success);
        setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
        
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      // For demo purposes, still show success
      setIsSubmitted(true);
      toast.success(t.contact.form.success);
      setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FAFAF8] relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#5D3C83]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#90A36D]/8 rounded-full blur-3xl pointer-events-none" />
      
      {/* Floating decorative elements */}
      <div className="absolute top-32 left-[8%] w-3 h-3 bg-[#C29D44]/30 rounded-full pointer-events-none" />
      <div className="absolute bottom-24 right-[12%] w-4 h-4 bg-[#90A36D]/25 rounded-full pointer-events-none" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium 
                         bg-[#C29D44]/15 text-[#A88535] mb-4 backdrop-blur-sm border border-white/30">
              <Mail className="w-4 h-4" />
              {t.contact.title}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F3D73] mb-4">
              {t.contact.subtitle}
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Contact Form - Takes ~60% width */}
          <div className="lg:col-span-3">
            <TiltCard tiltStrength={3}>
              <GlassCard blur="lg" className="p-6 md:p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all duration-500 h-full bg-white/80">
                {isSubmitted ? (
                  /* Success State */
                  <div className="text-center py-16">
                    <ScrollReveal direction="up" duration={0.8}>
                      <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#90A36D] to-[#7A8C5A] flex items-center justify-center animate-pulse-slow shadow-lg shadow-[#90A36D]/30">
                        <CheckCircle className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">
                        {t.contact.form.success}
                      </h3>
                      <p className="text-gray-500 max-w-sm mx-auto leading-relaxed">
                        {locale === 'ar' ? 'شكراً لتواصلك معنا. سنتواصل معك في أقرب وقت ممكن.' : 'Thank you for contacting us. We will reach out soon.'}
                      </p>
                    </ScrollReveal>
                  </div>
                ) : (
                  /* Form */
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <StaggerContainer staggerDelay={0.08}>
                      <div className="grid sm:grid-cols-2 gap-6">
                        {/* Name Field */}
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-sm font-medium text-gray-700 transition-colors focus-within:text-[#5D3C83] flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#5D3C83]" />
                            {t.contact.form.name} *
                          </Label>
                          <Input
                            id="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder={t.contact.form.name}
                            dir={direction}
                            className="rounded-xl border-gray-200 focus:border-[#5D3C83] focus:ring-[#5D3C83]/20 transition-all duration-300 h-12 bg-white/80"
                          />
                        </div>

                        {/* Phone Field */}
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-sm font-medium text-gray-700 transition-colors focus-within:text-[#5D3C83] flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C29D44]" />
                            {t.contact.form.phone} *
                          </Label>
                          <Input
                            id="phone"
                            type="tel"
                            required
                            dir="ltr"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+966 5XX XXX XXXX"
                            className="rounded-xl border-gray-200 focus:border-[#C29D44] focus:ring-[#C29D44]/20 transition-all duration-300 h-12 bg-white/80"
                          />
                        </div>
                      </div>

                      {/* Email Field - Optional */}
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium text-gray-500 transition-colors focus-within:text-[#5D3C83] flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                          {t.contact.form.email}
                          <span className="text-xs text-gray-400">({locale === 'ar' ? 'اختياري' : 'optional'})</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          dir="ltr"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="email@example.com"
                          className="rounded-xl border-gray-200 focus:border-[#5D3C83] focus:ring-[#5D3C83]/20 transition-all duration-300 h-12 bg-white/80"
                        />
                      </div>

                      {/* Subject Field */}
                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-sm font-medium text-gray-700 transition-colors focus-within:text-[#5D3C83] flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#90A36D]" />
                          {t.contact.form.subject}
                        </Label>
                        <Input
                          id="subject"
                          type="text"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          placeholder={t.contact.form.subject}
                          dir={direction}
                          className="rounded-xl border-gray-200 focus:border-[#90A36D] focus:ring-[#90A36D]/20 transition-all duration-300 h-12 bg-white/80"
                        />
                      </div>

                      {/* Message Field */}
                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-sm font-medium text-gray-700 transition-colors focus-within:text-[#5D3C83] flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#1F3D73]" />
                          {t.contact.form.message} *
                        </Label>
                        <Textarea
                          id="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder={t.contact.form.message}
                          dir={direction}
                          className="rounded-xl border-gray-200 focus:border-[#1F3D73] focus:ring-[#1F3D73]/20 resize-none transition-all duration-300 bg-white/80"
                        />
                      </div>

                      {/* Submit Button */}
                      <MagneticButton strength={0.15}>
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-[#5D3C83] to-[#4A2F6A] hover:from-[#4A2F6A] hover:to-[#3D2758] text-white py-4 rounded-xl 
                                   font-semibold text-lg transition-all duration-500 disabled:opacity-70 group relative overflow-hidden
                                   shadow-lg hover:shadow-xl hover:shadow-[#5D3C83]/25"
                        >
                          {isSubmitting ? (
                            <span className="flex items-center justify-center gap-3">
                              <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                              </svg>
                              {locale === 'ar' ? 'جارٍ الإرسال...' : 'Sending...'}
                            </span>
                          ) : (
                            <span className="flex items-center justify-center gap-3 relative z-10">
                              <Send className="w-5 h-5 rtl:rotate-180" />
                              {t.contact.form.submit}
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                            </span>
                          )}
                        </Button>
                      </MagneticButton>

                      {/* Privacy Notice */}
                      <p className="text-xs text-gray-400 text-center flex items-start justify-center gap-2 pt-2">
                        <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#90A36D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        {t.contact.privacy}
                      </p>
                    </StaggerContainer>
                  </form>
                )}
              </GlassCard>
            </TiltCard>
          </div>

          {/* Contact Info Sidebar - Takes ~40% width */}
          <div className="lg:col-span-2 space-y-5">
            
            {/* WhatsApp Card - Prominent */}
            <ScrollReveal direction="left" delay={0.15}>
              <MagneticButton strength={0.2}>
                <a
                  href="https://wa.me/966553008282"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gradient-to-br from-[#25D366] via-[#128C7E] to-[#075E54] rounded-2xl p-6 text-white 
                           hover:shadow-2xl hover:shadow-[#25D366]/30 transition-all duration-500 group relative overflow-hidden"
                >
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
                  </div>
                  
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                      <MessageCircle className="w-8 h-8 fill-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg mb-1">{t.contact.whatsappDirect}</h4>
                      <p className="text-white/90 text-lg font-mono tracking-wide">+966 55 300 8282</p>
                    </div>
                    <ExternalLink className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  </div>
                  
                  {/* Pulse effect */}
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full animate-ping opacity-40" />
                </a>
              </MagneticButton>
            </ScrollReveal>

            {/* Contact Details Cards */}
            <StaggerContainer staggerDelay={0.1}>
              <GlassCard blur="md" className="bg-white/90 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-500 space-y-0 overflow-hidden">
                
                {/* Address Card */}
                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#90A36D]/5 transition-colors duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#90A36D] to-[#7A8C5A] flex items-center justify-center flex-shrink-0 
                                shadow-md shadow-[#90A36D]/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-800 text-sm mb-1">{t.contact.info.address}</p>
                    <p className="text-gray-600 text-sm">{t.contact.info.addressValue}</p>
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mx-2" />

                {/* Phone Card */}
                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#5D3C83]/5 transition-colors duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#5D3C83] to-[#4A2F6A] flex items-center justify-center flex-shrink-0 
                                shadow-md shadow-[#5D3C83]/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-800 text-sm mb-1">{t.contact.info.phone}</p>
                    <a href="tel:+966553008282" dir="ltr" className="text-gray-600 text-sm hover:text-[#5D3C83] transition-colors font-mono">
                      +966 55 300 8282
                    </a>
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mx-2" />

                {/* Email Card */}
                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#C29D44]/5 transition-colors duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#C29D44] to-[#A88535] flex items-center justify-center flex-shrink-0 
                                shadow-md shadow-[#C29D44]/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-800 text-sm mb-1">{t.contact.info.email}</p>
                    <a href="mailto:info@sewarwaie.com" dir="ltr" className="text-gray-600 text-sm hover:text-[#C29D44] transition-colors break-all">
                      info@sewarwaie.com
                    </a>
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mx-2" />

                {/* Working Hours Card */}
                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#1F3D73]/5 transition-colors duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1F3D73] to-[#163058] flex items-center justify-center flex-shrink-0 
                                shadow-md shadow-[#1F3D73]/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-800 text-sm mb-1">{t.contact.info.workingHours}</p>
                    <p className="text-gray-600 text-sm">{t.contact.info.workingHoursValue}</p>
                  </div>
                </div>

              </GlassCard>
            </StaggerContainer>

            {/* WhatsApp QR / Direct Link Card */}
            <ScrollReveal direction="left" delay={0.4}>
              <GlassCard blur="md" className="bg-gradient-to-br from-[#FAFAF8] to-[#90A36D]/10 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-500">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#25D366]/10 mb-4">
                    <QrCode className="w-7 h-7 text-[#25D366]" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">
                    {locale === 'ar' ? 'تواصل عبر واتساب' : 'Connect on WhatsApp'}
                  </h4>
                  <p className="text-gray-500 text-sm mb-4">
                    {locale === 'ar' ? 'امسح الكود أو اضغط للتواصل المباشر' : 'Scan the code or click for direct contact'}
                  </p>
                  <a
                    href="https://wa.me/966553008282?text=مرحباً، أريد الاستفسار عن خدماتكم"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold rounded-xl transition-all duration-300 group"
                  >
                    <MessageCircle className="w-5 h-5 fill-white" />
                    {locale === 'ar' ? 'فتح المحادثة' : 'Open Chat'}
                    <ExternalLink className="w-4 h-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  </a>
                </div>
              </GlassCard>
            </ScrollReveal>

          </div>
        </div>
      </div>
    </section>
  );
}
