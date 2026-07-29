'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { Phone, Mail, MapPin, Clock, Send, Shield, MessageCircle, CheckCircle2, Heart } from 'lucide-react';
import { FadeInUp, StaggerContainer } from '@/components/effects/TextReveal';

// ============================================
// Input Field Component (defined outside to avoid render-time creation)
// ============================================
interface InputFieldProps {
  id: string;
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  dir?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: () => void;
  onBlur: () => void;
  isFocused: boolean;
}

function InputField({
  id,
  name,
  label,
  type = 'text',
  required = false,
  placeholder,
  dir,
  value,
  onChange,
  onFocus,
  onBlur,
  isFocused,
}: InputFieldProps) {
  return (
    <div className="relative">
      <label 
        htmlFor={id}
        className="block text-[11px] font-semibold uppercase tracking-wider mb-2.5 transition-colors duration-300"
        style={{ 
          fontFamily: 'var(--font-body-arabic)', 
          color: isFocused ? '#5D3C83' : '#6b7280',
          letterSpacing: '0.08em',
        }}
      >
        {label} {required && <span style={{ color: '#5D3C83' }}>*</span>}
      </label>
      
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        required={required}
        dir={dir}
        className="w-full px-4 py-3.5 rounded-xl bg-white border-2 text-[15px] outline-none transition-all duration-300"
        style={{
          fontFamily: 'var(--font-body-arabic)',
          borderColor: isFocused ? '#5D3C83' : '#e5e7eb',
          boxShadow: isFocused ? '0 0 0 4px rgba(93, 60, 131, 0.1)' : 'none',
          color: '#1a1a2e',
        }}
        placeholder={placeholder}
      />
    </div>
  );
}

// ============================================
// Contact Section Main Component
// ============================================
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
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitStatus('success');
    setIsSubmitting(false);
    
    // Reset form after 4 seconds
    setTimeout(() => {
      setSubmitStatus('idle');
      setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="section-spacing bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div 
          className="absolute w-[500px] h-[500px] rounded-full opacity-[0.03]"
          style={{
            background: 'radial-gradient(circle, #5D3C83 0%, transparent 70%)',
            bottom: '-25%',
            right: '-10%',
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <FadeInUp>
          <div className="text-center mb-14 lg:mb-18 max-w-2xl mx-auto">
            {/* Gold accent line - 40px wide, 3px height */}
            <div 
              className="w-10 h-[3px] mx-auto mb-8"
              style={{ backgroundColor: '#C29D44' }}
              aria-hidden="true"
            />
            
            <h2 
              className="text-[28px] md:text-[36px] lg:text-[44px] font-extrabold mb-5 leading-[1.15]"
              style={{ 
                fontFamily: 'var(--font-display-arabic)',
                color: '#5D3C83',
              }}
            >
              {t.contact.title}
            </h2>
            
            <p 
              className="text-[16px] lg:text-[17px] leading-[1.75]"
              style={{ 
                fontFamily: 'var(--font-body-arabic)',
                color: '#6b7280',
              }}
            >
              {t.contact.subtitle}
            </p>
          </div>
        </FadeInUp>

        {/* Reassuring Message Banner */}
        <FadeInUp delay={100}>
          <div 
            className="max-w-3xl mx-auto mb-12 p-5 rounded-2xl flex items-center gap-4"
            style={{
              background: 'linear-gradient(135deg, rgba(144, 163, 109, 0.08) 0%, rgba(93, 60, 131, 0.05) 100%)',
              border: '1px solid rgba(144, 163, 109, 0.15)',
            }}
          >
            <div 
              className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'rgba(144, 163, 109, 0.15)' }}
            >
              <Heart width="22" height="22" style={{ color: '#90A36D' }} />
            </div>
            <div>
              <p 
                className="text-[14px] md:text-[15px] font-medium leading-relaxed"
                style={{ 
                  fontFamily: 'var(--font-body-arabic)',
                  color: '#4a5568',
                }}
              >
                {locale === 'ar' 
                  ? 'نحن هنا لمساعدتك. كل معلوماتك تُعامل بسرية تامة واحترام كامل. لا تتردد في التواصل معنا.'
                  : "We're here to help you. All your information is treated with complete confidentiality and full respect. Don't hesitate to reach out."
                }
              </p>
            </div>
          </div>
        </FadeInUp>

        <StaggerContainer staggerDelay={100}>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Contact Form - 7 columns */}
            <FadeInUp delay={100}>
              <div className={direction === 'rtl' ? 'lg:col-span-7' : 'lg:col-span-7'}>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <InputField
                      id="name"
                      name="name"
                      label={t.contact.form.name}
                      required
                      placeholder={locale === 'ar' ? 'أدخل اسمك الكامل' : 'Enter your full name'}
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      isFocused={focusedField === 'name'}
                    />

                    {/* Phone Field */}
                    <InputField
                      id="phone"
                      name="phone"
                      label={t.contact.form.phone}
                      required
                      dir="ltr"
                      placeholder="+966 5XX XXX XXXX"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      isFocused={focusedField === 'phone'}
                    />

                    {/* Email Field */}
                    <InputField
                      id="email"
                      name="email"
                      label={t.contact.form.email}
                      type="email"
                      dir="ltr"
                      placeholder="email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      isFocused={focusedField === 'email'}
                    />

                    {/* Subject Select */}
                    <div className="relative">
                      <label 
                        htmlFor="subject"
                        className="block text-[11px] font-semibold uppercase tracking-wider mb-2.5 transition-colors duration-300"
                        style={{ 
                          fontFamily: 'var(--font-body-arabic)', 
                          color: focusedField === 'subject' ? '#5D3C83' : '#6b7280',
                          letterSpacing: '0.08em',
                        }}
                      >
                        {t.contact.form.subject}
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('subject')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-3.5 rounded-xl bg-white border-2 text-[15px] outline-none transition-all duration-300 appearance-none cursor-pointer"
                        style={{
                          fontFamily: 'var(--font-body-arabic)',
                          borderColor: focusedField === 'subject' ? '#5D3C83' : '#e5e7eb',
                          boxShadow: focusedField === 'subject' ? '0 0 0 4px rgba(93, 60, 131, 0.1)' : 'none',
                          color: formData.subject ? '#1a1a2e' : '#9ca3af',
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: `left ${direction === 'rtl' ? '16px' : 'auto'} ${direction !== 'rtl' ? '16px' : 'auto'} center`,
                        }}
                      >
                        <option value="">{locale === 'ar' ? 'اختر الموضوع' : 'Select subject'}</option>
                        <option value="therapy">{locale === 'ar' ? 'علاج نفسي' : 'Psychotherapy'}</option>
                        <option value="addiction">{locale === 'ar' ? 'علاج إدمان' : 'Addiction Treatment'}</option>
                        <option value="family">{locale === 'ar' ? 'استشارات أسرية' : 'Family Counseling'}</option>
                        <option value="other">{locale === 'ar' ? 'أخرى' : 'Other'}</option>
                      </select>
                    </div>
                  </div>

                  {/* Message Textarea */}
                  <div className="relative">
                    <label 
                      htmlFor="message"
                      className="block text-[11px] font-semibold uppercase tracking-wider mb-2.5 transition-colors duration-300"
                      style={{ 
                        fontFamily: 'var(--font-body-arabic)', 
                        color: focusedField === 'message' ? '#5D3C83' : '#6b7280',
                        letterSpacing: '0.08em',
                      }}
                    >
                      {t.contact.form.message} <span style={{ color: '#5D3C83' }}>*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows={5}
                      className="w-full px-4 py-3.5 rounded-xl bg-white border-2 resize-none text-[15px] outline-none transition-all duration-300"
                      style={{
                        fontFamily: 'var(--font-body-arabic)',
                        borderColor: focusedField === 'message' ? '#5D3C83' : '#e5e7eb',
                        boxShadow: focusedField === 'message' ? '0 0 0 4px rgba(93, 60, 131, 0.1)' : 'none',
                        color: '#1a1a2e',
                      }}
                      placeholder={locale === 'ar' ? 'اكتب رسالتك هنا...' : 'Write your message here...'}
                    />
                  </div>

                  {/* Privacy Note - Better Styled */}
                  <div 
                    className="flex items-start gap-3 p-4 rounded-xl"
                    style={{
                      backgroundColor: 'rgba(93, 60, 131, 0.04)',
                      border: '1px dashed rgba(93, 60, 131, 0.15)',
                    }}
                  >
                    <Shield 
                      width="18" 
                      height="18" 
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: '#5D3C83', opacity: 0.6 }} 
                    />
                    <p 
                      className="text-[13px] leading-relaxed"
                      style={{ 
                        fontFamily: 'var(--font-body-arabic)', 
                        color: '#6b7280',
                      }}
                    >
                      {t.contact.privacy}
                    </p>
                  </div>

                  {/* Submit Button - Larger with icon animation */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-white font-semibold text-[16px] transition-all duration-300 ${
                      submitStatus === 'success' 
                        ? 'bg-green-500' 
                        : isSubmitting 
                          ? 'opacity-80 cursor-wait' 
                          : 'hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0'
                    }`}
                    style={{ 
                      fontFamily: 'var(--font-body-arabic)',
                      backgroundColor: submitStatus === 'success' ? undefined : '#5D3C83',
                      boxShadow: isSubmitting ? 'none' : '0 4px 20px rgba(93, 60, 131, 0.3)',
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin w-5 h-5 border-2 border-white/30 border-t-white rounded-full" />
                        <span>{locale === 'ar' ? 'جاري الإرسال...' : 'Sending...'}</span>
                      </>
                    ) : submitStatus === 'success' ? (
                      <>
                        <CheckCircle2 
                          width="20" 
                          height="20" 
                          className="animate-bounce" 
                        />
                        <span>{t.contact.form.success.split('!')[0]}!</span>
                      </>
                    ) : (
                      <>
                        <Send 
                          width="18" 
                          height="18" 
                          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                        />
                        <span>{t.contact.form.submit}</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </FadeInUp>

            {/* Contact Info - 5 columns */}
            <FadeInUp delay={200}>
              <div className={`${direction === 'rtl' ? 'lg:col-span-5' : 'lg:col-span-5'} space-y-6`}>
                
                {/* Info Cards Container */}
                <div 
                  className="rounded-2xl p-6 lg:p-8 space-y-6"
                  style={{
                    backgroundColor: '#FAFAF8',
                    border: '1px solid rgba(0,0,0,0.04)',
                  }}
                >
                  
                  {/* Address Card */}
                  <div className="group flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-sm">
                    <div 
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-105"
                      style={{ backgroundColor: 'rgba(93, 60, 131, 0.1)' }}
                    >
                      <MapPin width="20" height="20" style={{ color: '#5D3C83' }} />
                    </div>
                    <div>
                      <h4 
                        className="text-sm font-bold mb-1"
                        style={{ fontFamily: 'var(--font-body-arabic)', color: '#1a1a2e' }}
                      >
                        {t.contact.info.address}
                      </h4>
                      <p 
                        className="text-sm leading-relaxed"
                        style={{ fontFamily: 'var(--font-body-arabic)', color: '#6b7280' }}
                      >
                        {t.contact.info.addressValue}
                      </p>
                    </div>
                  </div>

                  {/* Phone Card */}
                  <div className="group flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-sm">
                    <div 
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-105"
                      style={{ backgroundColor: 'rgba(93, 60, 131, 0.1)' }}
                    >
                      <Phone width="20" height="20" style={{ color: '#5D3C83' }} />
                    </div>
                    <div>
                      <h4 
                        className="text-sm font-bold mb-1"
                        style={{ fontFamily: 'var(--font-body-arabic)', color: '#1a1a2e' }}
                      >
                        {t.contact.info.phone}
                      </h4>
                      <a 
                        href="tel:+966553008282"
                        dir="ltr"
                        className="text-sm block hover:text-[#5D3C83] transition-colors font-medium"
                        style={{ fontFamily: 'var(--font-body-arabic)', color: '#6b7280' }}
                      >
                        +966 55 300 8282
                      </a>
                    </div>
                  </div>

                  {/* Email Card */}
                  <div className="group flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-sm">
                    <div 
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-105"
                      style={{ backgroundColor: 'rgba(93, 60, 131, 0.1)' }}
                    >
                      <Mail width="20" height="20" style={{ color: '#5D3C83' }} />
                    </div>
                    <div>
                      <h4 
                        className="text-sm font-bold mb-1"
                        style={{ fontFamily: 'var(--font-body-arabic)', color: '#1a1a2e' }}
                      >
                        {t.contact.info.email}
                      </h4>
                      <a 
                        href="mailto:info@sewarwaie.com"
                        className="text-sm block hover:text-[#5D3C83] transition-colors font-medium"
                        style={{ fontFamily: 'var(--font-body-arabic)', color: '#6b7280' }}
                      >
                        info@sewarwaie.com
                      </a>
                    </div>
                  </div>

                  {/* Working Hours Card */}
                  <div className="group flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-sm">
                    <div 
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-105"
                      style={{ backgroundColor: 'rgba(93, 60, 131, 0.1)' }}
                    >
                      <Clock width="20" height="20" style={{ color: '#5D3C83' }} />
                    </div>
                    <div>
                      <h4 
                        className="text-sm font-bold mb-1"
                        style={{ fontFamily: 'var(--font-body-arabic)', color: '#1a1a2e' }}
                      >
                        {t.contact.info.workingHours}
                      </h4>
                      <p 
                        className="text-sm leading-relaxed"
                        style={{ fontFamily: 'var(--font-body-arabic)', color: '#6b7280' }}
                      >
                        {t.contact.info.workingHoursValue}
                      </p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Button - Prominent with pulse animation */}
                <a 
                  href="https://wa.me/966553008282" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center gap-3 w-full py-4.5 rounded-xl text-white font-semibold text-[16px] overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-green-500/25 hover:-translate-y-0.5 active:translate-y-0"
                  style={{ 
                    backgroundColor: '#25D366',
                    fontFamily: 'var(--font-body-arabic)',
                  }}
                >
                  {/* Pulse effect on hover container */}
                  <span 
                    className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                    aria-hidden="true"
                  />
              
                  {/* Pulse ring animation */}
                  <span 
                    className="absolute inset-0 rounded-xl animate-ping opacity-20"
                    style={{ backgroundColor: '#25D366' }}
                    aria-hidden="true"
                  />
                  
                  <MessageCircle 
                    width="22" 
                    height="22" 
                    className="relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" 
                  />
                  <span className="relative z-10">{t.contact.whatsappDirect}</span>
                  
                  {/* Arrow indicator */}
                  <svg 
                    width="18" 
                    height="18" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                    style={{ transform: direction === 'rtl' ? 'scaleX(-1)' : undefined }}
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>

                {/* Quick response note */}
                <p 
                  className="text-center text-xs"
                  style={{ 
                    fontFamily: 'var(--font-body-arabic)', 
                    color: '#9ca3af',
                  }}
                >
                  {locale === 'ar' 
                    ? '✓ نرد عادةً خلال ساعة واحدة خلال أوقات العمل'
                    : '✓ We typically respond within one hour during business hours'
                  }
                </p>
              </div>
            </FadeInUp>
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
