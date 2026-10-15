import React from 'react';
import { Star, MapPin, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/alkalData';

export default function Testimonials() {
  return (
    <section className="py-20 border-b border-[#D8D6CE] bg-[#F4F3EF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#D8D6CE] pb-6">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono font-bold tracking-widest text-[#64748B] uppercase mb-2">
              <span className="w-2 h-2 bg-[#0F172A]"></span>
              <span>POVRATNE INFORMACIJE KORISNIKA</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-black uppercase text-[#0F172A] tracking-tight">
              ŠTA KAŽU NAŠI KLIJENTI
            </h2>
          </div>
          <div className="mt-4 md:mt-0 font-mono text-xs text-slate-500">
            [OCJENA 5.0 / 5.0 NA BAZI PREKO 300+ MONTAŽA]
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="border border-[#D8D6CE] bg-white p-6 sm:p-8 flex flex-col justify-between hover:shadow-lg transition-shadow relative"
            >
              <div>
                {/* Star rating */}
                <div className="flex items-center space-x-1 mb-4 text-amber-500">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{t.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#E7E5DD]">
                <div className="font-heading font-black text-sm uppercase text-[#0F172A]">
                  {t.author}
                </div>
                <div className="flex items-center text-xs font-mono text-slate-500 mt-0.5">
                  <MapPin className="w-3 h-3 text-red-500 mr-1" />
                  <span>{t.location}</span>
                </div>
                <div className="text-[10px] font-mono text-slate-400 mt-1 uppercase">
                  Projekat: {t.project}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
