'use client';

import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export default function TeamSection() {
  const { t } = useLanguage();

  // Generate initials for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .slice(0, 2);
  };

  const avatarColors = [
    'bg-[#5D3C83]',
    'bg-[#90A36D]',
    'bg-[#1F3D73]',
    'bg-[#C29D44]',
  ];

  return (
    <section id="team" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#FAFAF8] to-transparent pointer-events-none" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium 
                       bg-[#5D3C83]/10 text-[#5D3C83] mb-4">
            {t.team.sectionTitle}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#5D3C83] mb-4">
            {t.team.sectionSubtitle}
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-[#5D3C83] to-[#C29D44] mx-auto rounded-full" />
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {t.team.members.map((member, index) => (
            <div
              key={index}
              className="group text-center bg-[#FAFAF8] rounded-2xl p-6 hover:shadow-xl 
                       transition-all duration-500 card-hover border border-transparent hover:border-[#5D3C83]/10"
            >
              {/* Avatar */}
              <div className="relative inline-block mb-5">
                <Avatar className="w-28 h-28 mx-auto ring-4 ring-white shadow-lg group-hover:ring-[#C29D44] transition-all duration-300">
                  <AvatarFallback className={`${avatarColors[index]} text-white text-2xl font-bold`}>
                    {getInitials(member.name)}
                  </AvatarFallback>
                </Avatar>
                {/* Status Indicator */}
                <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-400 rounded-full border-2 border-white" />
              </div>

              {/* Info */}
              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-1">
                {member.name}
              </h3>
              <p className="text-[#5D3C83] font-medium text-sm mb-3">{member.specialty}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>

              {/* Social Links Placeholder */}
              <div className="flex justify-center gap-2 mt-4 pt-4 border-t border-gray-200/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href="#contact" className="w-8 h-8 rounded-full bg-[#5D3C83]/10 flex items-center justify-center hover:bg-[#5D3C83] hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#5D3C83] text-[#5D3C83] 
                     hover:bg-[#5D3C83] hover:text-white font-semibold rounded-xl transition-all duration-300"
          >
            {t.team.viewAll}
          </a>
        </div>
      </div>
    </section>
  );
}
