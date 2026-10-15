import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, ArrowUpRight, Menu, X, ShieldCheck, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/alkalData';

export default function Navbar({ onOpenQuoteModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top micro ticker with coordinates and status */}
      <div className="bg-[#0F172A] text-[#94A3B8] text-[10px] sm:text-[11px] font-mono py-1.5 px-3 sm:px-8 border-b border-slate-800 flex justify-between items-center tracking-wider">
        <div className="flex items-center space-x-2 sm:space-x-3 truncate">
          <span className="flex items-center text-[#E2E8F0] shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse"></span>
            BANJA LUKA
          </span>
          <span className="hidden sm:inline text-slate-500">|</span>
          <span className="hidden sm:inline text-slate-400">
            {COMPANY_INFO.coordinates}
          </span>
          <span className="text-slate-500">•</span>
          <span className="text-slate-300 truncate">
            Dario Kalezić s.p. (Od 2017)
          </span>
        </div>
        <div className="flex items-center space-x-3 shrink-0">
          <span className="hidden md:inline text-slate-300">
            Radno vrijeme: <span className="text-white">08:00 - 18:00</span>
          </span>
          <a
            href={COMPANY_INFO.viberUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-purple-300 hover:text-purple-200 transition-colors"
          >
            <MessageSquare className="w-3 h-3 mr-1" />
            <span className="hidden sm:inline">Viber</span>
          </a>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 border-b ${
          scrolled
            ? 'bg-[#F4F3EF]/95 backdrop-blur-md border-[#D8D6CE] shadow-sm py-2.5 sm:py-3'
            : 'bg-[#F4F3EF] border-[#D8D6CE] py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Editorial Wordmark */}
            <a href="#" className="flex items-center space-x-2.5 sm:space-x-3 group">
              <div className="w-10 h-10 sm:w-11 sm:h-11 border border-[#D8D6CE] bg-white flex items-center justify-center p-0.5 overflow-hidden shadow-xs shrink-0 group-hover:border-[#0F172A] transition-colors">
                <img
                  src="/images/alkal-logo.jpg"
                  alt="ALKAL"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center space-x-1">
                  <span className="font-heading font-extrabold text-xl sm:text-2xl tracking-tight text-[#0F172A]">
                    ALKAL
                  </span>
                  <span className="font-mono text-[9px] px-1 py-0.5 border border-[#0F172A] text-[#0F172A] uppercase tracking-widest font-semibold">
                    ®
                  </span>
                </div>
                <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-widest text-[#64748B] -mt-0.5">
                  ALU & PVC STOLARIJA
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 border-x border-[#D8D6CE] px-6">
              <a
                href="#proizvodi"
                className="px-3 py-1.5 text-xs font-mono font-semibold tracking-wider uppercase text-[#0F172A] hover:text-slate-600 transition-colors"
              >
                PROIZVODI
              </a>
              <a
                href="#preciznost"
                className="px-3 py-1.5 text-xs font-mono font-semibold tracking-wider uppercase text-[#0F172A] hover:text-slate-600 transition-colors"
              >
                PROFILI
              </a>
              <a
                href="#kalkulator"
                className="px-3 py-1.5 text-xs font-mono font-semibold tracking-wider uppercase text-[#0F172A] hover:text-slate-600 transition-colors"
              >
                KALKULATOR
              </a>
              <a
                href="#projekti"
                className="px-3 py-1.5 text-xs font-mono font-semibold tracking-wider uppercase text-[#0F172A] hover:text-slate-600 transition-colors"
              >
                RADOVI
              </a>
              <a
                href="#kontakt"
                className="px-3 py-1.5 text-xs font-mono font-semibold tracking-wider uppercase text-[#0F172A] hover:text-slate-600 transition-colors"
              >
                KONTAKT
              </a>
            </nav>

            {/* Desktop Phone & Direct CTA */}
            <div className="hidden sm:flex items-center space-x-3">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="flex items-center space-x-2 text-xs font-mono font-medium text-[#0F172A] hover:text-slate-600 py-1.5 px-3 border border-transparent hover:border-[#D8D6CE] transition-all"
              >
                <div className="w-7 h-7 rounded-full bg-slate-200 flex items-center justify-center text-[#0F172A]">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="block text-[9px] text-slate-500 uppercase leading-none">Poziv / Viber</span>
                  <span className="font-bold tracking-tight text-xs sm:text-sm">{COMPANY_INFO.phoneDisplay}</span>
                </div>
              </a>

              <button
                onClick={onOpenQuoteModal}
                className="bg-[#0F172A] text-white hover:bg-slate-800 text-xs font-mono uppercase font-semibold px-4 py-2.5 tracking-wider transition-all shadow-sm flex items-center group cursor-pointer"
              >
                <span>ZATRAŽITE PONUDU</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

            {/* Mobile Actions Button Group */}
            <div className="flex items-center space-x-2 sm:hidden">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="p-2 border border-[#0F172A] text-[#0F172A] bg-white flex items-center justify-center"
                aria-label="Pozovite"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 border border-[#0F172A] text-[#0F172A] bg-white focus:outline-none flex items-center justify-center"
                aria-label="Meni"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#D8D6CE] bg-[#F4F3EF] px-4 pt-4 pb-6 space-y-3 animate-in fade-in duration-200">
            <div className="space-y-1 font-mono text-xs uppercase tracking-wider font-semibold">
              <a
                href="#proizvodi"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 px-3 border-b border-[#E7E5DD] text-[#0F172A]"
              >
                01. Proizvodi & Ponuda
              </a>
              <a
                href="#preciznost"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 px-3 border-b border-[#E7E5DD] text-[#0F172A]"
              >
                02. Anatomija Profila
              </a>
              <a
                href="#kalkulator"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 px-3 border-b border-[#E7E5DD] text-[#0F172A]"
              >
                03. Online Kalkulator Ponude
              </a>
              <a
                href="#projekti"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 px-3 border-b border-[#E7E5DD] text-[#0F172A]"
              >
                04. Stvarni Radovi & Radionica
              </a>
              <a
                href="#kontakt"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 px-3 border-b border-[#E7E5DD] text-[#0F172A]"
              >
                05. Kontakt & Lokacija
              </a>
            </div>

            <div className="pt-2 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full bg-[#0F172A] text-white py-3.5 font-mono text-xs uppercase font-bold tracking-wider flex items-center justify-center space-x-2"
              >
                <span>ZATRAŽITE BESPLATNU PONUDU</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="border border-[#0F172A] bg-white text-[#0F172A] py-2.5 font-mono text-xs uppercase font-bold text-center flex items-center justify-center space-x-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>066 530 113</span>
                </a>
                <a
                  href={COMPANY_INFO.viberUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#7360F2] text-white py-2.5 font-mono text-xs uppercase font-bold text-center flex items-center justify-center space-x-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>VIBER CHAT</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
