'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/966553008282"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center 
               shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300
               animate-pulse-soft"
      aria-label="تواصل عبر واتساب"
    >
      <MessageCircle className="w-7 h-7 text-white fill-white" />
    </a>
  );
}
