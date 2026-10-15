import React, { useState } from 'react';
import { ArrowUpRight, Phone, ShieldCheck, Sparkles, CheckCircle2, ChevronRight, Info, Eye } from 'lucide-react';
import { COMPANY_INFO, VALUE_PROPS } from '../data/alkalData';

export default function Hero({ onOpenQuoteModal }) {
  const [activeHotspot, setActiveHotspot] = useState(1);

  const hotspots = [
    {
      id: 1,
      x: '30%',
      y: '38%',
      short: 'Troslojno Staklo',
      title: 'Troslojno Niskoemisiono Staklo (Low-E)',
      desc: 'Troslojni paket sa 90% punjenjem argona pruža vrhunsku zaštitu (Ug = 0.5 W/m²K) zadržavajući unutrašnju toplotu zimi i sprečavajući pregrijavanje ljeti.'
    },
    {
      id: 2,
      x: '62%',
      y: '65%',
      short: 'Termo Prekid',
      title: 'Termo Prekid i EPDM Zaptivanje',
      desc: 'Poliamidne trake prekidaju toplotni most u profilu, dok višestruke EPDM zaptivne gume obezbjeđuju 100% zaptivenost protiv vjetra i udara kiše.'
    },
    {
      id: 3,
      x: '48%',
      y: '88%',
      short: 'Ravan Prag',
      title: 'Ugradbeni Nulti Prag (Zero Threshold)',
      desc: 'Potpuno poravnat sa nivoom gotovog poda za nesmetan, elegantan prelaz iz unutrašnjosti na vanjsku terasu bez ikakvog zapinjanja.'
    }
  ];

  return (
    <section className="relative border-b border-[#D8D6CE] overflow-hidden pt-4 sm:pt-8 lg:pt-12 pb-12 sm:pb-16 bg-[#F4F3EF]">
      {/* Decorative corner crosshair markers */}
      <div className="hidden sm:block absolute top-4 left-4 font-mono text-xs text-[#94A3B8] select-none">✦</div>
      <div className="hidden sm:block absolute top-4 right-4 font-mono text-xs text-[#94A3B8] select-none">✦</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Editorial Eyebrow Ribbon - Mobile Optimized */}
        <div className="grid grid-cols-1 sm:grid-cols-3 border border-[#D8D6CE] divide-y sm:divide-y-0 sm:divide-x divide-[#D8D6CE] mb-6 sm:mb-8 bg-[#F0EFEA]/80 text-[11px] sm:text-xs font-mono">
          <div className="p-2.5 sm:px-4 flex items-center space-x-2">
            <span className="w-2 h-2 bg-[#0F172A] shrink-0"></span>
            <span className="font-bold text-[#0F172A] truncate">ALKAL BANJA LUKA</span>
            <span className="text-[#64748B] text-[10px] sm:text-xs">— BISTRICA BB</span>
          </div>
          <div className="p-2.5 sm:px-4 flex items-center justify-between">
            <span className="text-[#64748B]">POUZDANOST:</span>
            <span className="font-semibold text-[#0F172A]">OD 2017. GODINE</span>
          </div>
          <div className="p-2.5 sm:px-4 flex items-center justify-between">
            <span className="text-[#64748B]">USLUGA:</span>
            <span className="text-emerald-700 font-bold flex items-center">
              <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-1.5 animate-pulse"></span>
              BESPLATNO MJERENJE
            </span>
          </div>
        </div>

        {/* Main Hero Header - Mobile Responsive Typography */}
        <div className="mb-8 sm:mb-12">
          <div className="max-w-5xl">
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase text-[#0F172A] tracking-[-0.03em] leading-[1.02] sm:leading-[0.94] mb-4 sm:mb-6">
              BEZ KOMPROMISA. <br />
              <span className="text-slate-500 font-light italic">ALU &amp; PVC STOLARIJA</span> <br />
              ZA CIJELI ŽIVOT.
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-end pt-4 border-t border-[#D8D6CE]">
              <div className="lg:col-span-8">
                <p className="text-sm sm:text-base lg:text-lg text-[#334155] leading-relaxed font-normal">
                  Proizvodnja i ugradnja njemačkih PVC profila i energetski efikasnih aluminijskih sistema po mjeri. 
                  Od besplatnog uzimanja mjera na vašem objektu u Banjoj Luci i regiji do vrhunske termoizolacije koja štedi vaš novac.
                </p>
              </div>

              {/* CTAs - Mobile Full Width Stack */}
              <div className="lg:col-span-4 flex flex-col gap-2.5 sm:gap-3 w-full">
                <button
                  onClick={onOpenQuoteModal}
                  className="w-full bg-[#0F172A] hover:bg-slate-800 text-white font-mono text-xs uppercase font-bold tracking-wider py-3.5 sm:py-4 px-5 flex items-center justify-between transition-all group shadow-md cursor-pointer"
                >
                  <span>ZATRAŽITE BESPLATNU PONUDU</span>
                  <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>

                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="w-full border border-[#0F172A] hover:bg-[#0F172A] hover:text-white text-[#0F172A] font-mono text-xs uppercase font-bold tracking-wider py-3 px-5 flex items-center justify-between transition-all bg-white"
                >
                  <span className="flex items-center">
                    <Phone className="w-3.5 h-3.5 mr-2" />
                    POZIV ZA MJERENJE
                  </span>
                  <span className="font-extrabold">{COMPANY_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Visual Container: Modern Anthracite Sliding Profile */}
        <div className="relative border border-[#D8D6CE] bg-[#0F172A] overflow-hidden shadow-xl mb-12 sm:mb-16">
          {/* Top Frame Bar - CAREFUL SPECIFICATIONS (No fake project claims) */}
          <div className="bg-[#0F172A] text-slate-300 font-mono text-[10px] sm:text-[11px] px-3 sm:px-4 py-2.5 flex flex-wrap items-center justify-between gap-2 border-b border-slate-800">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <span className="text-white font-bold flex items-center">
                <span className="w-2 h-2 bg-blue-400 mr-1.5 sm:mr-2"></span>
                ARHITEKTONSKI 3D PRIKAZ // PANORAMSKI KLIZNI SISTEM
              </span>
              <span className="hidden md:inline text-slate-500">|</span>
              <span className="hidden md:inline text-slate-400">PROFIL: ANTRACIT MAT RAL 7016</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-emerald-400 font-bold">A+++ RAZRED (Uw ≤ 0.76 W/m²K)</span>
              <span className="text-slate-400 hidden sm:inline">• MOGUĆNOST IZRADE PO MJERI</span>
            </div>
          </div>

          {/* Main Visual Image with hotspots */}
          <div className="relative aspect-[4/3] sm:aspect-[16/9] w-full overflow-hidden bg-slate-900 group">
            <img
              src="/images/hero-sliding-door.jpg"
              alt="ALKAL ALU i PVC stolarija Banja Luka - Panoramski klizni sistem"
              className="w-full h-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none" />

            {/* Interactive Hotspots on Image */}
            {hotspots.map((spot) => (
              <div
                key={spot.id}
                style={{ left: spot.x, top: spot.y }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
              >
                <button
                  type="button"
                  onClick={() => setActiveHotspot(activeHotspot === spot.id ? null : spot.id)}
                  className={`relative cursor-pointer focus:outline-none p-1`}
                  aria-label={spot.title}
                >
                  <span className={`absolute -inset-1 rounded-full ${activeHotspot === spot.id ? 'bg-blue-400/50' : 'bg-white/30'} animate-ping opacity-75`}></span>
                  <div className={`relative w-8 h-8 rounded-full ${
                    activeHotspot === spot.id ? 'bg-blue-600 text-white ring-2 ring-white' : 'bg-[#0F172A] text-white border-2 border-white'
                  } flex items-center justify-center font-mono text-xs font-bold shadow-lg transition-transform`}>
                    0{spot.id}
                  </div>
                </button>
              </div>
            ))}

            {/* Bottom Overlay Info Box - Editorial & Transparent */}
            <div className="hidden sm:block absolute bottom-4 left-4 sm:left-6 max-w-md bg-white/95 backdrop-blur-md border border-[#D8D6CE] p-3.5 text-[#0F172A] shadow-lg">
              <div className="flex items-center justify-between mb-1">
                <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500 font-bold">
                  MODEL ZA PROJEKTOVANJE I IZRADU
                </span>
                <span className="font-mono text-[9px] bg-slate-900 text-white px-1.5 py-0.5 uppercase font-semibold">
                  ALKAL SISTEMI
                </span>
              </div>
              <p className="text-xs text-slate-700 leading-normal">
                Izrađujemo podizno-klizne stijene i panoramske portale po vašim tačnim dimenzijama i projektu arhitekte.
              </p>
            </div>
          </div>

          {/* Mobile Hotspot Detail Switcher (Visible on mobile for seamless touch UX) */}
          <div className="bg-[#0F172A] text-white p-4 border-t border-slate-800 sm:hidden">
            <div className="text-[10px] font-mono uppercase text-slate-400 mb-2 flex items-center">
              <Eye className="w-3 h-3 mr-1 text-blue-400" />
              DODIRNITE DETALJ ZA PREGLED:
            </div>
            <div className="grid grid-cols-3 gap-1.5 mb-3">
              {hotspots.map((spot) => (
                <button
                  key={spot.id}
                  onClick={() => setActiveHotspot(spot.id)}
                  className={`py-2 px-1 text-[11px] font-mono uppercase font-bold text-center border transition-all ${
                    activeHotspot === spot.id
                      ? 'bg-blue-600 text-white border-blue-400'
                      : 'bg-slate-800 text-slate-300 border-slate-700'
                  }`}
                >
                  0{spot.id}. {spot.short}
                </button>
              ))}
            </div>

            {activeHotspot && (
              <div className="bg-slate-900 p-3 border border-slate-700 animate-in fade-in duration-200">
                <div className="font-bold text-xs uppercase text-white mb-1">
                  {hotspots.find(s => s.id === activeHotspot)?.title}
                </div>
                <div className="text-[11px] text-slate-300 leading-normal">
                  {hotspots.find(s => s.id === activeHotspot)?.desc}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 3-Step Value Proposition Ribbon (matching Reference Image 1) */}
        <div>
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <span className="font-mono text-[11px] sm:text-xs uppercase font-bold tracking-widest text-[#64748B]">
              // KAKO RADIMO & STANDARDI KVALITETA
            </span>
            <span className="font-mono text-[10px] sm:text-xs text-slate-400">01 — 03 KORACI</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border border-[#D8D6CE] divide-y md:divide-y-0 md:divide-x divide-[#D8D6CE] bg-white shadow-sm">
            {VALUE_PROPS.map((prop, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-7 flex flex-col justify-between hover:bg-[#FAF9F6] transition-colors group relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span className="font-mono text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tighter">
                      {prop.step}
                    </span>
                    <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider px-2 py-0.5 sm:py-1 bg-[#F4F3EF] border border-[#D8D6CE] text-[#0F172A] font-semibold">
                      {prop.subtitle}
                    </span>
                  </div>

                  <h3 className="font-heading font-black text-lg sm:text-xl uppercase tracking-tight text-[#0F172A] mb-2 sm:mb-3">
                    {prop.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {prop.desc}
                  </p>
                </div>

                <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-[#E7E5DD] flex items-center justify-between text-xs font-mono text-[#0F172A]">
                  <span className="font-semibold uppercase tracking-wider text-[11px]">STANDARDIZOVANA USLUGA</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
