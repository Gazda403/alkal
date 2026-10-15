import React from 'react';
import { Phone, MessageSquare, MapPin, Clock, Mail, ShieldCheck, ArrowUpRight, Compass } from 'lucide-react';
import { COMPANY_INFO } from '../data/alkalData';

export default function Footer({ onOpenQuoteModal }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="kontakt" className="bg-[#0F172A] text-white pt-16 pb-28 sm:pb-16 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 pb-12 sm:pb-16 border-b border-slate-800">
          {/* Brand & Identity Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 border border-slate-700 bg-white flex items-center justify-center p-0.5 overflow-hidden shadow-xs shrink-0">
                <img
                  src="/images/alkal-logo.jpg"
                  alt="ALKAL"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center space-x-1.5">
                  <span className="font-heading font-extrabold text-2xl tracking-tight text-white">
                    ALKAL
                  </span>
                  <span className="font-mono text-[10px] px-1 py-0.5 border border-white text-white uppercase tracking-widest font-semibold">
                    ®
                  </span>
                </div>
                <span className="font-mono text-[9px] uppercase tracking-widest text-slate-400">
                  ALU I PVC STOLARIJA BANJA LUKA
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Zvanično registrovana samostalna zanatska radnja za proizvodnju i ugradnju visokokvalitetne građevinske stolarije.
            </p>

            <div className="border border-slate-800 bg-slate-900/80 p-4 font-mono text-xs space-y-1.5 text-slate-300">
              <div className="text-white font-bold uppercase">{COMPANY_INFO.legalName}</div>
              <div className="flex items-center text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-red-400 mr-1.5 shrink-0" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="text-slate-400">
                Osnivanje: <strong className="text-white">{COMPANY_INFO.foundedDate}</strong> (9+ godina rada)
              </div>
              <div className="text-slate-400">
                Koordinate: <span className="text-blue-400">{COMPANY_INFO.coordinates}</span>
              </div>
            </div>
          </div>

          {/* Quick Contact & Working Hours */}
          <div className="lg:col-span-4 space-y-4">
            <div className="font-mono text-xs uppercase font-bold text-slate-400 tracking-wider">
              // DIREKTNI KONTAKTI
            </div>

            <div className="space-y-2.5 font-mono text-xs">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="flex items-center space-x-3 p-3 border border-slate-800 bg-slate-900/50 hover:border-slate-600 transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[10px] text-slate-400 uppercase">Poziv / Viber</span>
                  <span className="text-white text-sm font-bold group-hover:text-blue-400 transition-colors">
                    {COMPANY_INFO.phoneDisplay}
                  </span>
                </div>
              </a>

              <a
                href={COMPANY_INFO.viberUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-3 border border-slate-800 bg-slate-900/50 hover:border-slate-600 transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-[#7360F2]/20 text-[#A89CFA] flex items-center justify-center shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[10px] text-slate-400 uppercase">Brza poruka</span>
                  <span className="text-white text-sm font-bold group-hover:text-purple-300 transition-colors">
                    Pošaljite upit na Viber
                  </span>
                </div>
              </a>

              <div className="p-3 border border-slate-800 bg-slate-900/50 space-y-1">
                <div className="flex items-center text-slate-400 text-[11px]">
                  <Clock className="w-3.5 h-3.5 mr-1.5 text-blue-400" />
                  <span>RADNO VRIJEME:</span>
                </div>
                <div className="text-white font-bold">{COMPANY_INFO.workingHours}</div>
              </div>
            </div>
          </div>

          {/* Coverage & Services */}
          <div className="lg:col-span-3 space-y-3 sm:space-y-4">
            <div className="font-mono text-xs uppercase font-bold text-slate-400 tracking-wider">
              // POKRIVENOST TERENA
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Izlazimo na besplatno mjerenje na teritoriji Grada Banja Luka i regije:
            </p>
            <ul className="text-xs font-mono space-y-1 text-slate-300">
              <li>• Banja Luka (svi dijelovi grada)</li>
              <li>• Laktaši & Glamočani</li>
              <li>• Čelinac & Kotor Varoš</li>
              <li>• Gradiška & Prijedor</li>
              <li>• Prnjavor i okolina</li>
            </ul>

            <button
              onClick={onOpenQuoteModal}
              className="w-full mt-2 bg-white text-[#0F172A] hover:bg-slate-200 font-mono text-xs uppercase font-bold py-3 px-4 flex items-center justify-between transition-colors shadow-sm cursor-pointer"
            >
              <span>ZATRAŽITE PONUDU</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs font-mono text-slate-500 gap-2 sm:gap-4 text-center sm:text-left">
          <div>
            © {currentYear} ALKAL" Dario Kalezić s.p. Banja Luka. Sva prava zadržana.
          </div>
          <div className="flex items-center space-x-3">
            <span>Bistrica bb, Banja Luka</span>
            <span>•</span>
            <span>Tel: 066 530 113</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
