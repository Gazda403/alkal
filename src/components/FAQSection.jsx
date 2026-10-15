import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, ArrowUpRight } from 'lucide-react';
import { FAQ_ITEMS, COMPANY_INFO } from '../data/alkalData';

export default function FAQSection({ onOpenQuoteModal }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 border-b border-[#D8D6CE] bg-[#F0EFEA] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold tracking-widest text-[#64748B] uppercase mb-2">
            <span className="w-2 h-2 bg-[#0F172A]"></span>
            <span>ČESTA PITANJA & ODGOVORI</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black uppercase text-[#0F172A] tracking-tight">
            SVE ŠTO TREBATE ZNATI PRIJE KUPOVINE
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#475569]">
            Transparentni odgovori bez skrivenih sitnih slova. Ukoliko imate specifično pitanje, pozovite nas direktno.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="border border-[#D8D6CE] bg-white divide-y divide-[#D8D6CE] shadow-md">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="transition-colors">
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between cursor-pointer focus:outline-none hover:bg-[#FAF9F6] transition-colors"
                >
                  <div className="flex items-center space-x-3 pr-4">
                    <span className="font-mono text-xs font-bold text-slate-400">
                      0{idx + 1}.
                    </span>
                    <h3 className="font-heading font-black text-sm sm:text-base uppercase tracking-tight text-[#0F172A]">
                      {item.q}
                    </h3>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-[#0F172A]' : ''
                  }`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-[#FAF9F6] pt-4 animate-in fade-in duration-200">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct contact hint */}
        <div className="mt-10 border border-[#D8D6CE] bg-white p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-heading font-bold text-base uppercase text-[#0F172A]">
              Imate specifičan projekat ili građevinske nacrte?
            </h4>
            <p className="text-xs text-slate-600 font-mono mt-0.5">
              Pošaljite nam skice ili dimenzije na Viber za instant proračun.
            </p>
          </div>
          <a
            href={COMPANY_INFO.viberUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#7360F2] hover:bg-[#6350E2] text-white font-mono text-xs uppercase font-bold py-3 px-6 shrink-0 transition-colors shadow-sm"
          >
            POŠALJI NA VIBER (066 530 113)
          </a>
        </div>
      </div>
    </section>
  );
}
