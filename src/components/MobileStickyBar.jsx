import React from 'react';
import { Phone, MessageSquare, Calculator } from 'lucide-react';
import { COMPANY_INFO } from '../data/alkalData';

export default function MobileStickyBar({ onOpenQuoteModal }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#0F172A]/95 backdrop-blur-md border-t border-slate-700 p-2 sm:hidden flex items-center justify-between gap-2 shadow-2xl">
      <a
        href={`tel:${COMPANY_INFO.phoneRaw}`}
        className="flex-1 bg-white text-[#0F172A] py-3 px-2 flex items-center justify-center space-x-1.5 font-mono text-[11px] font-bold tracking-tight uppercase"
      >
        <Phone className="w-3.5 h-3.5 text-[#0F172A]" />
        <span>POZOVI ODMAH</span>
      </a>

      <a
        href={COMPANY_INFO.viberUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 bg-[#7360F2] text-white py-3 px-2 flex items-center justify-center space-x-1.5 font-mono text-[11px] font-bold tracking-tight uppercase"
      >
        <MessageSquare className="w-3.5 h-3.5" />
        <span>VIBER CHAT</span>
      </a>

      <button
        onClick={onOpenQuoteModal}
        className="flex-1 bg-blue-600 text-white py-3 px-2 flex items-center justify-center space-x-1.5 font-mono text-[11px] font-bold tracking-tight uppercase"
      >
        <Calculator className="w-3.5 h-3.5" />
        <span>PONUDA</span>
      </button>
    </div>
  );
}
