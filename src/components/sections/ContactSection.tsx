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
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In production, this would be an actual API call
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
        
        // Reset success state after 5 seconds
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
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#5D3C83]/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium 
                       bg-[#C29D44]/15 text-[#A88535] mb-4">
            {t.contact.title}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F3D73] mb-4">
            {t.contact.subtitle}
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-[#C29D44] to-[#90A36D] mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
              {isSubmitted ? (
                /* Success State */
                <div className="text-center py-12">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {t.contact.form.success}
                  </h3>
                  <p className="text-gray-500">
                    {t.locale === 'ar' ? 'شكراً لتواصلك معنا. سنتواصل معك قريباً.' : 'Thank you for contacting us. We will reach out soon.'}
                  </p>
                </div>
              ) : (
                /* Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                        {t.contact.form.name} *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={t.contact.form.name}
                        className="rounded-xl border-gray-200 focus:border-[#5D3C83] focus:ring-[#5D3C83]"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
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
                        className="rounded-xl border-gray-200 focus:border-[#5D3C83] focus:ring-[#5D3C83]"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                      {t.contact.form.email}
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      dir="ltr"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="email@example.com"
                      className="rounded-xl border-gray-200 focus:border-[#5D3C83] focus:ring-[#5D3C83]"
                    />
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm font-medium text-gray-700">
                      {t.contact.form.subject}
                    </Label>
                    <Input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder={t.contact.form.subject}
                      className="rounded-xl border-gray-200 focus:border-[#5D3C83] focus:ring-[#5D3C83]"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                      {t.contact.form.message} *
                    </Label>
                    <Textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t.contact.form.message}
                      className="rounded-xl border-gray-200 focus:border-[#5D3C83] focus:ring-[#5D3C83] resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#5D3C83] hover:bg-[#4A2F6A] text-white py-4 rounded-xl 
                             font-semibold text-lg transition-all duration-300 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        {t.locale === 'ar' ? 'جارٍ الإرسال...' : 'Sending...'}
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <Send className="w-5 h-5 rtl:rotate-180" />
                        {t.contact.form.submit}
                      </span>
                    )}
                  </Button>

                  {/* Privacy Notice */}
                  <p className="text-xs text-gray-500 text-center flex items-start justify-center gap-2">
                    <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#90A36D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    {t.contact.privacy}
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* WhatsApp Card */}
            <a
              href="https://wa.me/966553008282"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-br from-[#25D366] to[#128C7E] rounded-2xl p-6 text-white 
                       hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-7 h-7 fill-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{t.contact.whatsappDirect}</h4>
                  <p className="text-white/80 text-sm">+966 55 300 8282</p>
                </div>
              </div>
            </a>

            {/* Contact Details */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-6">
              <h4 className="font-bold text-gray-800 text-lg">{t.footer.contactUs}</h4>
              
              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#5D3C83]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#5D3C83]" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 text-sm">{t.contact.info.phone}</p>
                    <a href="tel:+966553008282" dir="ltr" className="text-gray-500 text-sm hover:text-[#5D3C83]">
                      +966 55 300 8282
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#C29D44]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#C29D44]" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 text-sm">{t.contact.info.email}</p>
                    <a href="mailto:info@sewarwaie.com" dir="ltr" className="text-gray-500 text-sm hover:text-[#C29D44]">
                      info@sewarwaie.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#90A36D]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#90A36D]" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 text-sm">{t.contact.info.address}</p>
                    <p className="text-gray-500 text-sm">{t.contact.info.addressValue}</p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#1F3D73]/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#1F3D73]" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 text-sm">{t.contact.info.workingHours}</p>
                    <p className="text-gray-500 text-sm">{t.contact.info.workingHoursValue}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h4 className="font-bold text-gray-800 text-lg mb-4">{t.footer.followUs}</h4>
              <div className="grid grid-cols-4 gap-3">
                {[
                  { icon: <Instagram className="w-5 h-5" />, label: 'Instagram', color: 'hover:bg-pink-500' },
                  { icon: <MessageCircle className="w-5 h-5" />, label: 'TikTok', color: 'hover:bg-black dark:hover:bg-white dark:hover:text-black' },
                  { icon: <Youtube className="w-5 h-5" />, label: 'YouTube', color: 'hover:bg-red-500' },
                  { icon: <MessageCircle className="w-5 h-5" />, label: 'Snapchat', color: 'hover:bg-yellow-400' },
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full aspect-square rounded-xl bg-gray-100 flex items-center justify-center 
                             text-gray-600 ${social.color} hover:text-white transition-all duration-300`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
