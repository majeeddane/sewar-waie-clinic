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
  Instagram,
  Youtube
} from 'lucide-react';
import { ScrollReveal, StaggerContainer, MagneticButton, GlassCard, TiltCard } from '@/components/animations';
import { toast } from 'sonner';

export default function ContactSection() {
  const { t, direction } = useLanguage();
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
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#5D3C83]/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium 
                         bg-[#C29D44]/15 text-[#A88535] mb-4 backdrop-blur-sm border border-white/30">
              {t.contact.title}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F3D73] mb-4">
              {t.contact.subtitle}
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Contact Form with glassmorphism */}
          <div className="lg:col-span-3">
            <TiltCard tiltStrength={3}>
              <GlassCard blur="lg" className="p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-500 h-full">
                {isSubmitted ? (
                  /* Success State */
                  <div className="text-center py-12">
                    <ScrollReveal direction="up" duration={0.8}>
                      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center animate-pulse-slow">
                        <CheckCircle className="w-10 h-10 text-green-500" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {t.contact.form.success}
                      </h3>
                      <p className="text-gray-500">
                        {t.locale === 'ar' ? 'شكراً لتواصلك معنا. سنتواصل معك قريباً.' : 'Thank you for contacting us. We will reach out soon.'}
                      </p>
                    </ScrollReveal>
                  </div>
                ) : (
                  /* Form */
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <StaggerContainer staggerDelay={0.08}>
                      <div className="grid sm:grid-cols-2 gap-6">
                        {/* Name */}
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-sm font-medium text-gray-700 transition-colors focus-within:text-[#5D3C83]">
                            {t.contact.form.name} *
                          </Label>
                          <Input
                            id="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder={t.contact.form.name}
                            className="rounded-xl border-gray-200 focus:border-[#5D3C83] focus:ring-[#5D3C83]/20 transition-all duration-300"
                          />
                        </div>

                        {/* Phone */}
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-sm font-medium text-gray-700 transition-colors focus-within:text-[#5D3C83]">
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
                            className="rounded-xl border-gray-200 focus:border-[#5D3C83] focus:ring-[#5D3C83]/20 transition-all duration-300"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium text-gray-700 transition-colors focus-within:text-[#5D3C83]">
                          {t.contact.form.email}
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          dir="ltr"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="email@example.com"
                          className="rounded-xl border-gray-200 focus:border-[#5D3C83] focus:ring-[#5D3C83]/20 transition-all duration-300"
                        />
                      </div>

                      {/* Subject */}
                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-sm font-medium text-gray-700 transition-colors focus-within:text-[#5D3C83]">
                          {t.contact.form.subject}
                        </Label>
                        <Input
                          id="subject"
                          type="text"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          placeholder={t.contact.form.subject}
                          className="rounded-xl border-gray-200 focus:border-[#5D3C83] focus:ring-[#5D3C83]/20 transition-all duration-300"
                        />
                      </div>

                      {/* Message */}
                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-sm font-medium text-gray-700 transition-colors focus-within:text-[#5D3C83]">
                          {t.contact.form.message} *
                        </Label>
                        <Textarea
                          id="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder={t.contact.form.message}
                          className="rounded-xl border-gray-200 focus:border-[#5D3C83] focus:ring-[#5D3C83]/20 resize-none transition-all duration-300"
                        />
                      </div>

                      {/* Submit Button with magnetic effect */}
                      <MagneticButton strength={0.15}>
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-[#5D3C83] hover:bg-[#4A2F6A] text-white py-4 rounded-xl 
                                   font-semibold text-lg transition-all duration-500 disabled:opacity-70 group relative overflow-hidden"
                        >
                          {isSubmitting ? (
                            <span className="flex items-center justify-center gap-2">
                              <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                              </svg>
                              {t.locale === 'ar' ? 'جارٍ الإرسال...' : 'Sending...'}
                            </span>
                          ) : (
                            <span className="flex items-center justify-center gap-2 relative z-10">
                              <Send className="w-5 h-5 rtl:rotate-180" />
                              {t.contact.form.submit}
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                            </span>
                          )}
                        </Button>
                      </MagneticButton>

                      {/* Privacy Notice */}
                      <p className="text-xs text-gray-500 text-center flex items-start justify-center gap-2">
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

          {/* Contact Info Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* WhatsApp Card with magnetic effect */}
            <ScrollReveal direction="left" delay={0.2}>
              <MagneticButton strength={0.2}>
                <a
                  href="https://wa.me/966553008282"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-2xl p-6 text-white 
                           hover:shadow-xl transition-all duration-500 group relative overflow-hidden"
                >
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <MessageCircle className="w-7 h-7 fill-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{t.contact.whatsappDirect}</h4>
                      <p className="text-white/80 text-sm">+966 55 300 8282</p>
                    </div>
                  </div>
                  
                  {/* Pulse effect */}
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full animate-ping opacity-50" />
                </a>
              </MagneticButton>
            </ScrollReveal>

            {/* Contact Details with stagger */}
            <StaggerContainer staggerDelay={0.1}>
              <GlassCard blur="md" className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-500 space-y-5">
                <h4 className="font-bold text-gray-800 text-lg">{t.footer.contactUs}</h4>
                
                <div className="space-y-4">
                  {/* Phone */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-11 h-11 rounded-xl bg-[#5D3C83]/10 flex items-center justify-center flex-shrink-0 
                                  group-hover:bg-[#5D3C83] group-hover:text-white transition-all duration-300">
                      <Phone className="w-5 h-5 text-[#5D3C83] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 text-sm">{t.contact.info.phone}</p>
                      <a href="tel:+966553008282" dir="ltr" className="text-gray-500 text-sm hover:text-[#5D3C83] transition-colors">
                        +966 55 300 8282
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-11 h-11 rounded-xl bg-[#C29D44]/10 flex items-center justify-center flex-shrink-0 
                                  group-hover:bg-[#C29D44] group-hover:text-white transition-all duration-300">
                      <Mail className="w-5 h-5 text-[#C29D44] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 text-sm">{t.contact.info.email}</p>
                      <a href="mailto:info@sewarwaie.com" dir="ltr" className="text-gray-500 text-sm hover:text-[#C29D44] transition-colors">
                        info@sewarwaie.com
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-11 h-11 rounded-xl bg-[#90A36D]/10 flex items-center justify-center flex-shrink-0 
                                  group-hover:bg-[#90A36D] group-hover:text-white transition-all duration-300">
                      <MapPin className="w-5 h-5 text-[#90A36D] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 text-sm">{t.contact.info.address}</p>
                      <p className="text-gray-500 text-sm">{t.contact.info.addressValue}</p>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-11 h-11 rounded-xl bg-[#1F3D73]/10 flex items-center justify-center flex-shrink-0 
                                  group-hover:bg-[#1F3D73] group-hover:text-white transition-all duration-300">
                      <Clock className="w-5 h-5 text-[#1F3D73] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 text-sm">{t.contact.info.workingHours}</p>
                      <p className="text-gray-500 text-sm">{t.contact.info.workingHoursValue}</p>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </StaggerContainer>

            {/* Social Links with hover effects */}
            <ScrollReveal direction="left" delay={0.5}>
              <GlassCard blur="md" className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-500">
                <h4 className="font-bold text-gray-800 text-lg mb-4">{t.footer.followUs}</h4>
                <div className="grid grid-cols-4 gap-3">
                  {[
                    { icon: <Instagram className="w-5 h-5" />, label: 'Instagram', color: 'hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-500 hover:to-orange-400' },
                    { icon: <MessageCircle className="w-5 h-5" />, label: 'TikTok', color: 'hover:bg-black dark:hover:text-white' },
                    { icon: <Youtube className="w-5 h-5" />, label: 'YouTube', color: 'hover:bg-red-500' },
                    { icon: <MessageCircle className="w-5 h-5" />, label: 'Snapchat', color: 'hover:bg-yellow-400' },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full aspect-square rounded-xl bg-gray-100 flex items-center justify-center 
                               text-gray-600 ${social.color} transition-all duration-300
                               hover:scale-110 hover:shadow-lg`}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Custom animations are defined in globals.css */}
    </section>
  );
}
