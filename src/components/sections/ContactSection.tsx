'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export default function ContactSection() {
  const { t, locale, direction } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // محاكاة إرسال النموذج
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitStatus('success');
    setIsSubmitting(false);
    
    // إعادة تعيين النموذج بعد 3 ثوانٍ
    setTimeout(() => {
      setSubmitStatus('idle');
      setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="section-spacing bg-white">
      <div className="container-custom">
        {/* عنوان القسم */}
        <div className="text-center mb-16">
          {/* شريط ذهبي */}
          <div 
            className="w-16 h-1 mx-auto mb-8"
            style={{ backgroundColor: '#C29D44' }}
            aria-hidden="true"
          />
          
          <h2 
            className="text-[26px] lg:text-[40px] font-extrabold mb-4"
            style={{ 
              fontFamily: 'var(--font-display-arabic)',
              color: '#5D3C83',
            }}
          >
            {t.contact.title}
          </h2>
          
          <p 
            className="text-[16px] lg:text-[17px] max-w-xl mx-auto leading-[1.7]"
            style={{ 
              fontFamily: 'var(--font-body-arabic)',
              color: '#6b7280',
            }}
          >
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* نموذج التواصل (8 أعمدة) */}
          <div className={direction === 'rtl' ? 'lg:col-span-7' : 'lg:col-span-7'}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* الاسم */}
                <div>
                  <label 
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                    style={{ fontFamily: 'var(--font-body-arabic)', color: '#4a4a5a' }}
                  >
                    {t.contact.form.name} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#5D3C83] focus:ring-1 focus:ring-[#5D3C83]/20 outline-none transition-all duration-200 text-[15px]"
                    style={{ fontFamily: 'var(--font-body-arabic)' }}
                    placeholder={locale === 'ar' ? 'أدخل اسمك الكامل' : 'Enter your full name'}
                  />
                </div>

                {/* الجوال */}
                <div>
                  <label 
                    htmlFor="phone"
                    className="block text-sm font-medium mb-2"
                    style={{ fontFamily: 'var(--font-body-arabic)', color: '#4a4a5a' }}
                  >
                    {t.contact.form.phone} *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    dir="ltr"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#5D3C83] focus:ring-1 focus:ring-[#5D3C83]/20 outline-none transition-all duration-200 text-[15px]"
                    placeholder="+966 5XX XXX XXXX"
                  />
                </div>

                {/* البريد الإلكتروني */}
                <div>
                  <label 
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                    style={{ fontFamily: 'var(--font-body-arabic)', color: '#4a4a5a' }}
                  >
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    dir="ltr"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#5D3C83] focus:ring-1 focus:ring-[#5D3C83]/20 outline-none transition-all duration-200 text-[15px]"
                    placeholder="email@example.com"
                  />
                </div>

                {/* الموضوع */}
                <div>
                  <label 
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                    style={{ fontFamily: 'var(--font-body-arabic)', color: '#4a4a5a' }}
                  >
                    {t.contact.form.subject}
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#5D3C83] focus:ring-1 focus:ring-[#5D3C83]/20 outline-none transition-all duration-200 text-[15px]"
                    style={{ fontFamily: 'var(--font-body-arabic)' }}
                  >
                    <option value="">{locale === 'ar' ? 'اختر الموضوع' : 'Select subject'}</option>
                    <option value="therapy">{locale === 'ar' ? 'علاج نفسي' : 'Psychotherapy'}</option>
                    <option value="addiction">{locale === 'ar' ? 'علاج إدمان' : 'Addiction Treatment'}</option>
                    <option value="family">{locale === 'ar' ? 'استشارات أسرية' : 'Family Counseling'}</option>
                    <option value="other">{locale === 'ar' ? 'أخرى' : 'Other'}</option>
                  </select>
                </div>
              </div>

              {/* الرسالة */}
              <div>
                <label 
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                  style={{ fontFamily: 'var(--font-body-arabic)', color: '#4a4a5a' }}
                >
                  {t.contact.form.message} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#5D3C83] focus:ring-1 focus:ring-[#5D3C83]/20 outline-none transition-all duration-200 resize-none text-[15px]"
                  style={{ fontFamily: 'var(--font-body-arabic)' }}
                  placeholder={locale === 'ar' ? 'اكتب رسالتك هنا...' : 'Write your message here...'}
                />
              </div>

              {/* ملاحظة الخصوصية */}
              <p 
                className="text-xs flex items-start gap-2"
                style={{ fontFamily: 'var(--font-body-arabic)', color: '#9ca3af' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                {t.contact.privacy}
              </p>

              {/* زر الإرسال */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary inline-flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ fontFamily: 'var(--font-body-arabic)' }}
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin w-4 h-4 border-2 border-white/30 border-t-white rounded-full" />
                    {locale === 'ar' ? 'جاري الإرسال...' : 'Sending...'}
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {t.contact.form.success.split('!')[0]}!
                  </>
                ) : (
                  <>
                    <Send width="16" height="16" />
                    {t.contact.form.submit}
                  </>
                )}
              </button>
            </form>
          </div>

          {/* معلومات التواصل (4 أعمدة) */}
          <div className={`${direction === 'rtl' ? 'lg:col-span-5' : 'lg:col-span-5'} space-y-8`}>
            
            {/* بطاقة معلومات */}
            <div className="bg-[#FAFAF8] rounded-lg p-6 space-y-6">
              
              {/* العنوان */}
              <div className="flex items-start gap-4">
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgba(93, 60, 131, 0.08)' }}
                >
                  <MapPin width="20" height="20" style={{ color: '#5D3C83' }} />
                </div>
                <div>
                  <h4 
                    className="text-sm font-semibold mb-1"
                    style={{ fontFamily: 'var(--font-body-arabic)', color: '#1a1a2e' }}
                  >
                    {t.contact.info.address}
                  </h4>
                  <p 
                    className="text-sm"
                    style={{ fontFamily: 'var(--font-body-arabic)', color: '#6b7280' }}
                  >
                    {t.contact.info.addressValue}
                  </p>
                </div>
              </div>

              {/* الهاتف */}
              <div className="flex items-start gap-4">
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgba(93, 60, 131, 0.08)' }}
                >
                  <Phone width="20" height="20" style={{ color: '#5D3C83' }} />
                </div>
                <div>
                  <h4 
                    className="text-sm font-semibold mb-1"
                    style={{ fontFamily: 'var(--font-body-arabic)', color: '#1a1a2e' }}
                  >
                    {t.contact.info.phone}
                  </h4>
                  <a 
                    href="tel:+966553008282"
                    dir="ltr"
                    className="text-sm block hover:text-[#5D3C83] transition-colors"
                    style={{ fontFamily: 'var(--font-body-arabic)', color: '#6b7280' }}
                  >
                    +966 55 300 8282
                  </a>
                </div>
              </div>

              {/* البريد */}
              <div className="flex items-start gap-4">
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgba(93, 60, 131, 0.08)' }}
                >
                  <Mail width="20" height="20" style={{ color: '#5D3C83' }} />
                </div>
                <div>
                  <h4 
                    className="text-sm font-semibold mb-1"
                    style={{ fontFamily: 'var(--font-body-arabic)', color: '#1a1a2e' }}
                  >
                    {t.contact.info.email}
                  </h4>
                  <a 
                    href="mailto:info@sewarwaie.com"
                    className="text-sm block hover:text-[#5D3C83] transition-colors"
                    style={{ fontFamily: 'var(--font-body-arabic)', color: '#6b7280' }}
                  >
                    info@sewarwaie.com
                  </a>
                </div>
              </div>

              {/* ساعات العمل */}
              <div className="flex items-start gap-4">
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgba(93, 60, 131, 0.08)' }}
                >
                  <Clock width="20" height="20" style={{ color: '#5D3C83' }} />
                </div>
                <div>
                  <h4 
                    className="text-sm font-semibold mb-1"
                    style={{ fontFamily: 'var(--font-body-arabic)', color: '#1a1a2e' }}
                  >
                    {t.contact.info.workingHours}
                  </h4>
                  <p 
                    className="text-sm"
                    style={{ fontFamily: 'var(--font-body-arabic)', color: '#6b7280' }}
                  >
                    {t.contact.info.workingHoursValue}
                  </p>
                </div>
              </div>
            </div>

            {/* زر واتساب مباشر */}
            <a 
              href="https://wa.me/966553008282" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 rounded-lg transition-all duration-200 hover:opacity-90"
              style={{ backgroundColor: '#25D366', color: 'white', fontFamily: 'var(--font-body-arabic)', fontWeight: 500 }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403c-4.073 0-7.41-3.366-7.41-7.503s3.337-7.503 7.41-7.503c4.074 0 7.41 3.366 7.41 7.503s-3.336 7.503-7.41 7.503M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.435 5.173L2 22l4.883-1.435C8.328 21.47 10.107 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2"/>
              </svg>
              {t.contact.whatsappDirect}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
