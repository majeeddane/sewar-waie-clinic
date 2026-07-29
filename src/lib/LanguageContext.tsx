'use client';

import React, { createContext, useContext, useState, useCallback, useEffect, useRef, ReactNode } from 'react';
import { Locale, getDirection, getTranslations, Translations, defaultLocale } from './i18n';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  direction: 'rtl' | 'ltr';
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const isHydratedRef = useRef(false);

  // Hydrate state from localStorage after mount
  useEffect(() => {
    let savedLang: string | null = null;
    try {
      savedLang = localStorage.getItem('sewar-lang');
    } catch (e) {
      // localStorage not available
    }
    
    if (savedLang && (savedLang === 'ar' || savedLang === 'en')) {
      // Use requestAnimationFrame to avoid synchronous setState in effect
      requestAnimationFrame(() => {
        setLocaleState(savedLang as Locale);
        isHydratedRef.current = true;
      });
    } else {
      isHydratedRef.current = true;
    }
  }, []);

  // Update document when locale changes
  useEffect(() => {
    if (isHydratedRef.current) {
      document.documentElement.dir = getDirection(locale);
      document.documentElement.lang = locale;
      try {
        localStorage.setItem('sewar-lang', locale);
      } catch (e) {
        // localStorage not available
      }
    }
  }, [locale]);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
  }, []);

  const direction = getDirection(locale);
  const t = getTranslations(locale);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, direction, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
